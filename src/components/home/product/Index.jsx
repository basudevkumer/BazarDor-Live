import React, { useState, useLayoutEffect, useEffect } from "react";
import Container from "../../common/Container";
import { productPriceItems } from "../../../helper/projectArryObj";
import PricePorductCart from "../../common/PricePorductCart";
import { useVirtualizer } from "@tanstack/react-virtual";

const getCols = () => {
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};
console.log(window.innerWidth);

const getEstimateSize = (cols) => {
  if (cols === 1) return 460;
  if (cols === 2) return 360;
  return 300;
};

const HomeProducts = () => {
  const parentRef = React.useRef(null);
  const [colsPerRow, setColsPerRow] = useState(getCols);

  useEffect(() => {
    const handleResize = () => {
      setColsPerRow(getCols());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(productPriceItems.length / colsPerRow),
    getScrollElement: () => parentRef.current,
    estimateSize: () => getEstimateSize(colsPerRow),
    gap: 16,
    overscan: 3,
    key: colsPerRow,
  });

  return (
    <section className="pb-[60px] sm:pb-[120px]">
      <Container>
        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="heading-three text-primary">আজকের ঢাকার বাজারদর</h3>
            <button className="text-primary para-medium cursor-pointer border px-3 py-2 sm:px-5 sm:py-[11px] rounded-[4px] text-sm sm:text-base">
              বিস্তারিত দেখুন
            </button>
          </div>

          {/* Virtualizer scroll container */}
          <div
            ref={parentRef}
            className="mt-6 sm:mt-10 lg:mt-16 overflow-y-auto overflow-x-hidden"
            style={{
              height: "min(70vh, 800px)",
              scrollbarWidth: "thin",
              scrollbarColor: "#3bb77e #f0f0f0",
            }}
          >
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                const startIndex = virtualItem.index * colsPerRow;
                const rowItems = productPriceItems.slice(
                  startIndex,
                  startIndex + colsPerRow,
                );

                return (
                  <div
                    key={virtualItem.key}
                    data-index={virtualItem.index}
                    ref={rowVirtualizer.measureElement}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualItem.start}px)`,
                      display: "grid",

                      gridTemplateColumns:
                        colsPerRow === 1
                          ? "1fr"
                          : `repeat(${colsPerRow}, minmax(0, 1fr))`,
                      gap:
                        colsPerRow === 1
                          ? "12px"
                          : colsPerRow === 2
                            ? "16px"
                            : "20px",
                      paddingBottom: "4px",
                    }}
                  >
                    {rowItems.map((item) => (
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
