import React from "react";

const PastMarketCard = ({ className, productName, productPrices ,srcImage,imgAlt}) => {
  return (
    <div
      className={`p-[18px] h-fit flex gap-x-5 items-center bg-white shadow-lg hover:translate-y-[-5px] transition duration-300 ease-in-out rounded-lg ${className}`}
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
      <div>
        <h6 className="heading-five text-secondary">{productName}</h6>
        <p className="text-para-semibold text-semibold">{productPrices}</p>
      </div>
    </div>
  );
};

export default PastMarketCard;
