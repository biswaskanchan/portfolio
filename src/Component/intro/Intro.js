import React from "react";
import Floting from "../flotingdiv/Floting";
import linkedin from "../../asent/image/linkedin.png"
import github from "../../asent/image/github.png"
import istaram from "../../asent/image/instagram.png"
import mainpic from "../../asent/image/kanchan.png"
import victor1 from "../../asent/image/Vector1.png"
import victor2 from "../../asent/image/Vector2.png"
import thumbup from "../../asent/image/thumbup.png"
import glasses from "../../asent/image/glassesimoji.png"
import crown from "../../asent/image/crown.png"
function Intro (){
    return <div className="main-intro">
        <div className="left-intro">
            <div className="name-sideleft">
                    <span> Hi! I Am </span>
                    <span> Kanchan Biswas </span>
                    <span> Frontend Developer with high level of exprience in web designer and development.
                       Producting the Quality work  </span>              
            </div>
            <button className="leftButton"> Hire me </button>
            <div className="socal-icon">
                <img src={linkedin} alt="linkedin"/>
                <img src={github} alt="instragram"/>
                <img src={istaram} alt="github"/>
            </div>
        </div>

        <div className="right-intro">
                <img src={victor1} alt=""/>
                <img src={victor2} alt=""/>
                <img src={mainpic} alt=""/>
                <img src={glasses} alt=""/>

                <div className="main-floting">
                    <Floting image={crown} text1="Web" text2="Developer"/>
                </div>
                <div className="bottom-floting">
                    <Floting image={ thumbup} text1="Best Design" text2="Award"/>
                </div>

                <div className="blur-section"></div>
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
}export default Intro