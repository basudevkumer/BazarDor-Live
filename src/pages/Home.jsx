import Sliders from "../components/home/slider/Index";
import Category from "../components/home/category/Index";
import HighPriceSlider from "../components/home/highPriceSlider/Index";
import LowPriceSlider from "../components/home/lowPriceSlider/Index";
import HomeProducts from "../components/home/product/Index";
import PastWeekMarket from "../components/home/pastWeekMarket/Index";
import GetTheApp from "../components/home/getTheApp/Index";

const Home = () => {
  return (
    <>
      <Sliders />
      <Category />
      <HomeProducts />
      <HighPriceSlider />
      <LowPriceSlider />
      <PastWeekMarket />
      <GetTheApp />
    </>
  );
};

export default Home;
