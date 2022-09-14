import React from "react";
import Card from "../card/Card";
import glas from "../../asent/image/glasses.png"
//import heart from "../../asent/image/heartemoji.png"
import humble from "../../asent/image/humble.png"
import resume from "../../asent/image/Kanchan_Biswas_parsonalCv.pdf"

function Services(){
    return <div className="main-services">
            {/*left side */}
            <div className="left-side">
                <span>My Awsome</span>
                <span>Services</span>
                <span>
                We will also write two web service requestors: one web-based consumer (Mern application) 
                <br/>
                and another Windows application-based consumer.
                </span>

                <a href={resume} download>
                    <button className="leftButton s-button">Download Cv</button>
                </a>
                
                <div className="blur-section"></div>

            </div>

            {/*right side */}
            <div className="right-side">
              <div className="card-left">
              <Card  image={humble} 
                heading="Design"
                details="Html,Css,Bootstrap,React js,Next js"
                />
              </div>

           <div className="card-right" >
           <Card  image={glas} 
                heading="Developer"
                details="Node js,Express js Mongo Db"
                />
           </div>
           <div className="blur-section"
                style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    height:'11rem',
                    width:'21rem',
                    left:'-9rem'
                }}
                ></div>
                
            </div>
    </div>
}
export default Services;