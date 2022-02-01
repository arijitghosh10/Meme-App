import React, { useEffect, useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import NewMeme from "./NewMeme";
import './SearchMeme.css'
const SearchMeme = ()=>{
    const [memes,setMemes] = useState([]);
    const [template,setTemplate] = useState(null);
    const [meme,setMeme] = useState(null);
    const [captions,setCaptions] = useState([])
    const [copied,setCopied] = useState(false)

    const updateCaption = (e,index)=>{
        const inputText = e.target.value || '';
        setCaptions(
            captions.map((val,i)=>{
                if(index===i){
                    return inputText
                }else{
                    return val
                }
            })
        )
    }
    const backHandler = ()=>{
        setTemplate(null)
        setMeme(null)
        setCaptions([])
        setCopied(false)
    }
    const createMeme = (e)=>{
        e.preventDefault()
        const currentMeme = template;
        const formData = new FormData();
        formData.append('username','arijitg10');
        formData.append('password','@rijitGHOSH10');
        formData.append('template_id',currentMeme.id)
        captions.forEach((caps,ind)=>formData.append(`boxes[${ind}][text]`,caps)) 

        fetch("https://api.imgflip.com/caption_image",{
            method:'POST',
            body:formData
        }).then(res=>{
            res.json().then(response=>{
                setMeme(response.data.url)
                setCopied(false)
            })
        })
    }
    const clipboard = useClipboard()
    const addToClipboard = ()=>{
        clipboard.copy(meme);
        setCopied(true)
    }
    const addToFavourites = ()=>{
        fetch('https://meme-generator-4ac47-default-rtdb.firebaseio.com/favourites.json', {
            method: 'POST',
            body: JSON.stringify(meme),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res =>{
            res.json().then(res =>{
                setMemes(res.data.memes)
            })
        })
    } , [])
    useEffect(()=>{
        if(template) setCaptions(Array(template.box_count).fill(''))
    },[template])
    return ( 
        <div className="wrapper">
            {template && ( 
                <div className="makeNew">
                <img src={template.url} key={template.id} alt={template.name} />
                <form 
                    className="newForm"
                    onSubmit={(e)=>createMeme(e)}
                >
                    {captions && captions.map((val,ind)=>{
                        return <input 
                            key={ind}
                            typeof="text" 
                            placeholder="Enter text"  
                            onChange={(e)=>updateCaption(e,ind)} 
                    />
                    })}
                    
                    <button className="btn" typeof="submit">Create</button>
                    <button
                        typeof="buttom"
                        className="btn cancel" onClick={backHandler}>Back
                    </button>
                </form>
                </div>
            )}
            {meme && 
                <div className="savememDiv"> 
                    <img src={meme} alt="meme" />
                    <div className="savememe">
                        <button className="btn" onClick={addToClipboard}>{copied ? 'Link Copied' : 'Copy Link'}</button>
                        <button className="btn" onClick={addToFavourites}>Add to favourites</button>
                        <button className="btn cancel" onClick={()=>{setMeme(null);setCopied(false)}}>Cancel</button>
                    </div>
                </div>
            }
            {!template && memes.map(temp =>{
                return (
                    <NewMeme 
                        temp={temp}
                        clickHandler={()=>{setTemplate(temp)}} 
                    />
                )
            })}
        </div>
    )
}
export default SearchMeme;