import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ecomarces from "../../asent/image/ecommerce.png"
import tuito from "../../asent/image/Screenshot (54).png"
import mainproj from "../../asent/image/Screenshot (99).png"
import music from "../../asent/image/musicapp.png"

function Protfolio (){
    return <div className="main-protpolio">
                <span>Recent Projects</span>
                <span>Protfolio</span>

                {/*slider option */}

                <Swiper spaceBetween={30}
                         slidesPerView={3}
                        grabCursor={true} 
                         className="portfolio-slider" >
       
                    <SwiperSlide>
                        <img src={ecomarces} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={tuito} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={mainproj} alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={music} alt=""/>
                    </SwiperSlide>

                </Swiper>

        

    </div>
}
export default Protfolio