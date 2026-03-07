import React, { useRef, useState } from "react";
import allIcons from "../../helper/iconProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode ,Navigation} from "swiper/modules";

const CategoryCarocell = () => {
  // for icons
  const { arrowIcon } = allIcons;

  return (
    <div className="relative ">
      {/* data comes from useCategory destructure */}
      <button className="custom-swiper-button-prev absolute left-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-green-500 z-10 cursor-pointer">
        <span className="text-xl text-gray_00">{arrowIcon[0].icon}</span>
      </button>
      <button className="custom-swiper-button-next absolute right-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-green-400 z-10 cursor-pointer">
        <span className="text-xl text-gray_00">{arrowIcon[1].icon}</span>
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode,Navigation]}
        className="mySwiper"
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default CategoryCarocell;
