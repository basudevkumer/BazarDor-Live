import React, { useRef, useState } from "react";
import allIcons from "../../helper/iconProvider";
import CategoryUIOne from "../common/CategroyUIOne";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

import { categoriesItems } from "../../helper/projectArryObj";

const CategoryHighPrices = () => {
  // for icons
  const { arrowIcon } = allIcons;

  return (
    <div className="relative ">
      {/* data comes from useCategory destructure */}
      <div className="hidden lg:block">
        <button className="highprice-swiper-button-prev absolute left-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] rounded-full flex justify-center items-center  z-10 cursor-pointer text-white bg-[#3bb77e]">
          <span className="text-xl text-gray_00">{arrowIcon[0].icon}</span>
        </button>
      </div>
      <div className="hidden lg:block">
        <button className="highprice-swiper-button-next absolute right-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px]  rounded-full flex justify-center items-center  z-10 cursor-pointer text-white bg-[#3bb77e]">
          <span className="text-xl text-gray_00">{arrowIcon[1].icon}</span>
        </button>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        navigation={{
          prevEl: ".highprice-swiper-button-prev",
          nextEl: ".highprice-swiper-button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {categoriesItems.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <CategoryUIOne
                imgAlt={items.slug}
                description={items.price}
                name={items.name}
                imgSrc={items.image}
                bgColor={`${items.bgColor}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryHighPrices;
