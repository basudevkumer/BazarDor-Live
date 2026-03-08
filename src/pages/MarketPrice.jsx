import React from "react";
import CommonLogo from "../components/common/CommonLogo";
import Bredcrumb from "../components/common/Bredcrumb";
import MarketLocationForm from "../components/marketPrice/marketLocationForm/Index";
import FilterPanel from "../components/marketPrice/filterPanel/Index";

const MarketPrice = () => {
  return (
    <>
      <Bredcrumb />
      <MarketLocationForm />
      <FilterPanel/>
    </>
  );
};

export default MarketPrice;
