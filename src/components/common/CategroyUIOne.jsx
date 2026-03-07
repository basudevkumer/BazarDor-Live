import React from "react";

const CategroyUIOne = ({  description, name, imgSrc, imgAlt ,bgColor}) => {
  return (
    <div
      className={`    p-5 min-h-[290px]  rounded-[4px]   `}
      style={{ backgroundColor: bgColor }}
    >
      <figure>
        <img
          src={imgSrc}
          alt={imgAlt}
          className=" object-cover  w-full"
          style={{height:"150px"}}
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
