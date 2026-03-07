import React from "react";
import Container from "../../common/Container";
import { productPriceItems } from "../../../helper/projectArryObj";
import PricePorductCart from "../../common/PricePorductCart";
import { useVirtualizer } from "@tanstack/react-virtual";

const HomeProducts = () => {
  // The scrollable element for your list
  const parentRef = React.useRef(null);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(productPriceItems.length / 3),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 250,
  });

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
          {/* The scrollable element for your list */}
          <div
            ref={parentRef}
            style={{
              height: `800px`,
              overflow: "auto", // Make it scroll!
            }}
            className="mt-[100px]"
          >
            {/* The large inner element to hold all of the items */}
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {/* Only the visible items in the virtualizer, manually positioned to be in view */}
              {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                const startIndex = virtualItem.index * 3;

                const sliderPerViewRow = productPriceItems.slice(
                  startIndex,
                  startIndex + 3,
                );
                console.log(sliderPerViewRow);

                return (
                  <div
                    key={virtualItem.key}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: `${virtualItem.size}px`,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                    className=" grid grid-cols-3 gap-[35px] "
                  >
                    {sliderPerViewRow.map((item) => (
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
                );
              })}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;
