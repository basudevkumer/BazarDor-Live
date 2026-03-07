import React from "react";
import allIcons from "../../helper/iconProvider";

const PricePorductCart = ({
  productName,
  todayPrice,
  yesterdayPrice,
  dateTimes,
  srcImage,
  imgAlt,
  className,
}) => {
  // for icons
  const { arrowIconPriceIndicator } = allIcons;

  return (
    <div
      className={`p-[18px] flex gap-x-5 items-center bg-white shadow-lg hover:translate-y-[-5px] transition duration-300 ease-in-out rounded-lg ${className}`}
    >
      <div className="">
        <figure>
          <img
            src={srcImage}
            alt={imgAlt}
            className=" h-[150px] max-w-[155px]  rounded-lg  object-cover"
          />
        </figure>
      </div>
      <div className="space-y-3">
        <h6 className="heading-five text-secondary">{productName}</h6>
        <div className="flex   gap-x-5">
          <div>
            <p className="para-semibold text-secondary">গতকালের মূল্য </p>
            <p className="para-normal text-secondary  justify-center flex gap-x-2">
              {yesterdayPrice}
              <span className="text-xl text-red-500">
                {arrowIconPriceIndicator[0].icon}
              </span>
            </p>
          </div>
          <div>
            <p className="para-semibold text-secondary">আজকের মূল্য </p>
            <p className="para-normal text-secondary  justify-center flex gap-x-2">
              {todayPrice}
              <span className="text-xl text-green-500">
                {arrowIconPriceIndicator[1].icon}
              </span>{" "}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400">শেষ আপডেট : {dateTimes}</p>
      </div>
    </div>
  );
};

export default PricePorductCart;
