import React from "react";
import Container from "../../common/Container";
import { categoriesItems } from "../../../helper/projectArryObj";
import PastMarketCard from "../../common/PastMarketCard";

const PastWeekMarket = () => {
  return (
    <section className="py-[105px] ">
      <Container>
        <div>
          <h3 className="heading-two text-center text-primary  ">
            ঢাকার বাজারদর (গত সপ্তাহ)
          </h3>
          <div className="grid grid-cols-4 gap-10 mt-[60px]">
            <div className="">
              <h3 className="heading-four text-center text-primary relative after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%] after:content-[''] after:w-[75%]  z after:h-[2px] after:bg-success">
                সপ্তাহের সেরা পণ্য
              </h3>
              <div className="space-y-7 mt-10">
                {categoriesItems.slice(0, 3).map((items) => {
                  return (
                    <PastMarketCard
                      key={items.id}
                      imgAlt={items.image}
                      srcImage={items.image}
                      productName={items.name}
                      productPrices={items.price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="">
              <h3 className="heading-four text-center text-primary relative after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%] after:content-[''] after:w-[75%]  z after:h-[2px] after:bg-success">
                সর্বোচ্চ রেটেড পণ্য
              </h3>
              <div className="space-y-7 mt-10">
                {categoriesItems.slice(3, 6).map((items) => {
                  return (
                    <PastMarketCard
                      key={items.id}
                      imgAlt={items.image}
                      srcImage={items.image}
                      productName={items.name}
                      productPrices={items.price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="">
              <h3 className="heading-four text-center text-primary relative after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%] after:content-[''] after:w-[75%]  z after:h-[2px] after:bg-success">
                সাম্প্রতিক দাম পরিবর্তন
              </h3>
              <div className="space-y-7 mt-10">
                {categoriesItems.slice(6, 9).map((items) => {
                  return (
                    <PastMarketCard
                      key={items.id}
                      imgAlt={items.image}
                      srcImage={items.image}
                      productName={items.name}
                      productPrices={items.price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="">
              <h3 className="heading-four text-center text-primary relative after:absolute after:bottom-[-6px] after:left-1/2 after:translate-x-[-50%] after:content-[''] after:w-[75%]  z after:h-[2px] after:bg-success">
                জনপ্রিয় ট্রেডিং পণ্য
              </h3>
              <div className="space-y-7 mt-10">
                {categoriesItems.slice(9, 12).map((items) => {
                  return (
                    <PastMarketCard
                      key={items.id}
                      imgAlt={items.image}
                      srcImage={items.image}
                      productName={items.name}
                      productPrices={items.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PastWeekMarket;
