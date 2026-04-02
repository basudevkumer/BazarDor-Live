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
  const { arrowIconPriceIndicator } = allIcons;

  return (
    <div
      className={`h-fit bg-white shadow-lg hover:translate-y-[-5px] transition duration-300 ease-in-out rounded-lg w-full overflow-hidden ${className}`}
    >
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-[18px]">

        {/* Image */}
        <div className="flex-shrink-0 flex justify-center">
          <figure>
            <img
              src={srcImage}
              alt={imgAlt}
              className="h-[120px] w-[120px] sm:h-[130px] sm:w-[130px] lg:h-[150px] lg:w-[150px] rounded-lg object-cover"
            />
          </figure>
        </div>

        {/* Content */}
        <div className="space-y-2 min-w-0 flex-1">
          <h6 className="heading-five text-secondary text-sm sm:text-base font-semibold">
            {productName}
          </h6>

          <div className="flex gap-x-4">
            <div>
              <p className="para-semibold text-secondary text-xs sm:text-sm font-medium">
                গতকালের মূল্য
              </p>
              <p className="para-normal text-secondary flex items-center gap-x-1 text-xs sm:text-sm">
                {yesterdayPrice}
                <span className="text-base text-red-500">
                  {arrowIconPriceIndicator[0].icon}
                </span>
              </p>
            </div>
            <div>
              <p className="para-semibold text-secondary text-xs sm:text-sm font-medium">
                আজকের মূল্য
              </p>
              <p className="para-normal text-secondary flex items-center gap-x-1 text-xs sm:text-sm">
                {todayPrice}
                <span className="text-base text-green-500">
                  {arrowIconPriceIndicator[1].icon}
                </span>
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400">শেষ আপডেট : {dateTimes}</p>
        </div>
      </div>
    </div>
  );
};

export default PricePorductCart;