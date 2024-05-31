import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import CalculationTool from "./CalculationTool/CalculationTool.jsx";
import Resources from "./ResourcesPage/Resources.jsx";
import HeaderBar from "./HeaderBar/HeaderBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeaderBar></HeaderBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculation-tool" element={<CalculationTool />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </BrowserRouter>
);
