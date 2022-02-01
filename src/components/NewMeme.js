import React from "react";
import './NewMeme.css'
 const NewMeme = ({temp,clickHandler}) =>{
    return (
        <div className="newImage">
            <img 
                src={temp.url}
                key={temp.id}
                alt={temp.name}
                onClick={clickHandler}
            />
            <div>{temp.name}</div>
        </div>
    )
}
export default NewMeme;
