import React from "react";

const Floting =({image,text1,text2})=>{
    return (
            <div className="img-floting">
                <img src={image} alt=""/>
                <span>
                    {text1} 
                    <br/>
                    {text2}
                </span>
            </div>
    )
} 

export default Floting ;