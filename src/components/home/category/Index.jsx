import React, { useState } from "react";
import Container from "../../common/Container";
import { categoriesItemsHeadings } from "../../../helper/projectArryObj";
import CategoryCarocell from "../../common/CategoryCarocell";
import allIcons from "../../../helper/iconProvider";

const Category = () => {
  const { bar } = allIcons;
  const [show, setShow] = useState(false);

  const handleClicked = () => {
    setShow(!show);
  };

  return (
    <section className="py-[60px] sm:py-[80px] lg:py-[120px] relative">
      <Container>
        <div>
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between">
            <h3 className="heading-three text-primary">
              বিভাগ অনুযায়ী পণ্য দেখুন
            </h3>
            <ul className="flex gap-x-6">
              {categoriesItemsHeadings.map((items) => (
                <li key={items.id}>
                  <a
                    href="#"
                    className="navitems text-primary hover:text-success"
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between">
            <h3 className="heading-three text-primary">
              বিভাগ অনুযায়ী পণ্য দেখুন
            </h3>
            <button
              className="text-2xl cursor-pointer p-2"
              onClick={handleClicked}
            >
              {bar}
            </button>
          </div>

      
          {show && (
            <div
              className="absolute top-[123px] right-0 z-30 w-full h-full bg-black/50"
              onClick={handleClicked}
            >
              <div
                className="absolute top-0 right-0  w-[200px] bg-white  shadow-xl p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col gap-6  ">
                  {categoriesItemsHeadings.map((items) => (
                    <li key={items.id}>
                      <a
                        href="#"
                        className="navitems text-primary hover:text-success block"
                      >
                        {items.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <CategoryCarocell />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
