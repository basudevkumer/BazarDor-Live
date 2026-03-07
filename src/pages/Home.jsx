import React from "react";
import Sliders from "../components/home/slider/Index";
import SliderCard from "../components/common/SliderCard";
import Category from "../components/home/category/Index";
import CategoryCarocell from "../components/common/CategoryCarocell";
import CategroyUITwo from "../components/common/CategroyUITwo";
import HighPriceSlider from "../components/home/highPriceSlider/Index";
import LowPriceSlider from "../components/home/lowPriceSlider/Index";

const Home = () => {
  return (
    <>
      <Sliders />
      <Category />
      <HighPriceSlider/>
      <LowPriceSlider/>
      
    </>
  );
};

export default Home;
