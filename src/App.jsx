import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./rootlayout/Rootlayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
