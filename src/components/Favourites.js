import React from "react";
import './Favourites.css'
import { useEffect, useState } from "react/cjs/react.development";
const Favourites = (props)=>{
    const memes = []
    const [memeArray,setMemeArray] = useState([]);
    const [Loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch("https://meme-generator-4ac47-default-rtdb.firebaseio.com/favourites.json").then(res =>{
            res.json().then(data =>{
                for(const key in data) {
                    memes.push(String(data[key]))
                }
                setMemeArray(memes)
                setLoading(false)
            })
        })
    },[])
    return (
        <>
            {props.showloginButton && <p className="signIn">Sign in to save your memes</p>}
            {!memeArray.length && !Loading && !props.showloginButton &&
                <div className="noMeme">
                    <h2>You do not have any saved memes</h2>
                    <a href="/">Create One!</a>
                </div>
            }
            {Loading &&  <h3 className="loadingText">Loading...</h3>}
                {!Loading && props.showlogoutButton && memeArray.length && <div className="myMemes"> {memeArray.map((val,ind)=>{
                    return (
                        <img
                            className="mymemeimages"
                            src={val}
                            key={ind}
                            alt="meme"
                        />
                    )
            })}<a href="/">Create More!</a> </div>} 
        </>    
    )
}
export default Favourites;