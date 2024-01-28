import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Head/Header";
import Footer from "./components/Foot/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
