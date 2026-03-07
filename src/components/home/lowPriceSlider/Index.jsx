import React from "react";
import Container from "../../common/Container";

import CategoryLowPrices from "../../common/CategoryLowPrices";

const LowPriceSlider = () => {
  return (
    <section className="py-[120px]">
      <Container>
        <div>
          <div className="flex justify-between">
            <h3 className="heading-three text-primary">আজকের সাশ্রয়ী পণ্য</h3>
            <p className="text-primary heading-six"> ৭ মার্চ , ২০২৬</p>
          </div>
          <div className="mt-10">
            <CategoryLowPrices />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LowPriceSlider;