import React from "react";

const Card =({image,heading,details})=>{

    return( <div className="card-option">
       
            <img src={image} alt=""/>
            <span>{heading}</span>
            <span>{details}</span>
            <button className="c-type">LEARN MORE</button>
        </div>
    )
}
export default Card;