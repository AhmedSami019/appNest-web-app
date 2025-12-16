import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import tenMsImg from "../../assets/tranding-app-image/10ms-homepage-cover.jpeg";
import angryBird from "../../assets/tranding-app-image/angry-birds.jpeg";
import dropBox from "../../assets/tranding-app-image/Banner_design_151b.png";
import phIcon from "../../assets/tranding-app-image/programming-her.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [phIcon, tenMsImg, dropBox, angryBird];

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        // navigation
        pagination={{ clickable: true }}
        className="lg:h-150 rounded-box"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-box"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
