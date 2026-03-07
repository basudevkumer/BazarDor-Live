import React from "react";
import Container from "../../common/Container";
import { categoriesItemsHeadings     } from "../../../helper/projectArryObj";
import CategroyUIOne from "../../common/CategroyUIOne";
import CategoryCarocell from "../../common/CategoryCarocell";

const Category = () => {
  return (
    <section className="py-[120px]">
      <Container>
        <div>
          <div className="flex items-center  justify-between">
            <h3 className="heading-three text-primary">
              বিভাগ অনুযায়ী পণ্য দেখুন
            </h3>
            <ul className="flex  gap-x-6">
              {categoriesItemsHeadings.map((items) => {
                return (
                  <li key={items.id}>
                    <a
                      href="#"
                      className="navitems text-primary hover:text-success"
                    >
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-10">
            <CategoryCarocell/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
