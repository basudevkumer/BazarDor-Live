import React from "react";

const CategroyUIOne = ({ className, description, name, imgSrc, imgAlt }) => {
  return (
    <div
      className={` w-[200px]  p-5 bg-gray-300 rounded-[4px]   ${className} `}
    >
      <figure>
        <img
          src={imgSrc}
          alt={imgAlt}
          className=" w-full h-[150px] object-cover "
        />
      </figure>
      <div className="pt-[18px] space-y-1">
        <p className="navitems text-center text-primary">{name}</p>
        <p className="para-normal text-center text-primary">{description}</p>
      </div>
    </div>
  );
};

export default CategroyUIOne;
