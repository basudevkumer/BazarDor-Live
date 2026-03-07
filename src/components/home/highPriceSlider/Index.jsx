import React from "react";
import Container from "../../common/Container";
import CategoryHighPrices from "../../common/CategoryHighPrices";

const HighPriceSlider = () => {
  return (
    <section>
      <Container>
        <div>
          <div className="flex justify-between">
            <h3 className="heading-three text-primary">আজকের সবচেয়ে দামী পণ্য</h3>
            <p className="text-primary heading-six"> ৭ মার্চ , ২০২৬</p>
          </div>
          <div className="mt-10">
            <CategoryHighPrices />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HighPriceSlider;
