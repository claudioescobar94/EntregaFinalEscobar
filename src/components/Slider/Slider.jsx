import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Slider = () => {
    return (
        <>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <img src="../assets/img/carrusel-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/img/carrusel-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/img/carrusel-3.jpg" alt="" />
            </SwiperSlide>
            
          </Swiper>
        </>
      );
}
