import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./rootlayout/Rootlayout";
import Home from "./pages/Home";
import MarketPrice from "./pages/MarketPrice";
import MarketUpdates from "./pages/MarketUpdates";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />}></Route>
          <Route path={`/market-prices`} element={<MarketPrice />}></Route>
          <Route path={`/market-news`} element={<MarketUpdates />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
