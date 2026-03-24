import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./rootlayout/Rootlayout";
import Home from "./pages/Home";
import MarketPrice from "./pages/MarketPrice";
import MarketUpdates from "./pages/MarketUpdates";
import SubmitPrice from "./pages/SubmitPrice";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />}></Route>
          <Route path={`/market-prices`} element={<MarketPrice />}></Route>
          <Route path={`/market-news`} element={<MarketUpdates />}></Route>
          <Route path={`/submit-price`} element={<SubmitPrice />}></Route>
          <Route path={`/about`} element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
