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

const CategoryLowPrices = () => {
  // for icons
  const { arrowIcon } = allIcons;

  return (
    <div className="relative ">
      {/* data comes from useCategory destructure */}
      <button className="lowprice-swiper-button-prev absolute left-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-green-500 z-10 cursor-pointer">
        <span className="text-xl text-gray_00">{arrowIcon[0].icon}</span>
      </button>
      <button className="lowprice-swiper-button-next absolute right-[-25px]  top-1/2 -translate-y-1/2  h-[48px] w-[48px] border border-primary_500 rounded-full flex justify-center items-center bg-green-400 z-10 cursor-pointer">
        <span className="text-xl text-gray_00">{arrowIcon[1].icon}</span>
      </button>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        navigation={{
          prevEl: ".lowprice-swiper-button-prev",
          nextEl: ".lowprice-swiper-button-next",
        }}
      >
        {categoriesItems.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <CategoryUIOne
                imgAlt={items.slug}
                description={items.price}
                name={items.name}
                imgSrc={items.image}
                bgColor={`${items.bgColor}`}
              />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryLowPrices;
