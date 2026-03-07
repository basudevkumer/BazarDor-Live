import React from "react";

const CategroyUITwo = ({srcImg, name , price}) => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <figure>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
            alt="images"
            className="w-[244px] h-[144px]  object-cover"
          />
        </figure>
        <div className="pt-[18px] space-y-1 p-2">
          <p className="navitems text-center text-primary">{name}</p>
          <p className="para-normal text-center text-primary">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CategroyUITwo;
