import React from "react";
import Container from "../../common/Container";
import { productPriceItems } from "../../../helper/projectArryObj";
import PricePorductCart from "../../common/PricePorductCart";

const HomeProducts = () => {
  return (
    <section className="pb-[120px]">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="heading-three text-primary">আজকের ঢাকার বাজারদর</h3>
            <button className="text-primary para-medium cursor-pointer border px-5 py-[11px] rounded-[4px]">
              বিস্তারিত দেখুন
            </button>
          </div>
          <div className="mt-[60px] grid grid-cols-3 gap-[35px]">
            {productPriceItems.map((item) => (
              <PricePorductCart
                key={item.id}
                productName={item.productName}
                todayPrice={item.todayPrice}
                yesterdayPrice={item.yesterdayPrice}
                dateTimes={item.dateTimes}
                srcImage={item.srcImage}
                imgAlt={item.imgAlt}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;
