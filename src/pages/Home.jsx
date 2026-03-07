import React from "react";
import Sliders from "../components/home/slider/Index";
import SliderCard from "../components/common/SliderCard";
import Category from "../components/home/category/Index";
import CategoryCarocell from "../components/common/CategoryCarocell";
import CategroyUITwo from "../components/common/CategroyUITwo";
import HighPriceSlider from "../components/home/highPriceSlider/Index";
import LowPriceSlider from "../components/home/lowPriceSlider/Index";
import PricePorductCart from "../components/common/PricePorductCart";
import HomeProducts from "../components/home/product/Index";
import PastWeekMarket from "../components/home/pastWeekMarket/Index";

const Home = () => {
  return (
    <>
      <Sliders />
      <Category />
      <HomeProducts/>
      <HighPriceSlider/>
      <LowPriceSlider/>
      <PastWeekMarket/>
    </>
  );
};

export default Home;
