import React from "react";

import shofify from "../../asent/image/Shopify.png"
import fiver from "../../asent/image/fiverr.png"
import amazoni from "../../asent/image/amazon.png"
import Upwork from "../../asent/image/Upwork.png"


function Work(){
    return <div className=" work-section ">
        {/*left side work-section */}

            <div className="left-side">
                <span>Works for All these</span>
                <span>Brands & client</span>
                <span>
                We will also write two web service requestors: 
                <br/>
                one web-based consumer (Mern application) 
                <br/>
                and another Windows application-based consumer.
                
                <br/>
                and another Windows application-based consumer.
                </span>

                
                    <button className="leftButton s-button">Hire me</button>
                
                
                <div className="blur-section"></div>
            </div>

 {/*right side work-section */}

        <div className="main-wrapright">
            <div className="main-circel">
                <div className="facebook-image">
                    <img src={shofify} alt=""/>
                </div>

                <div className="amazon-image">
                    <img src={amazoni} alt=""/>
                </div>

                <div className="instagram-image">
                    <img src={fiver} alt=""/>
                </div>

                <div className="ecomarce-image">
                    <img src={Upwork} alt=""/>
                </div>

                <div className="blue-cirkel"></div>
                <div className="red-cirkel"></div>

            </div>




        </div>

    </div>
}
export default Work