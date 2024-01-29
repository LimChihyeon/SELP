import React from "react";
import { Route, Routes } from "react-router-dom";
import Item from "./pages/item";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ position: "absolute", paddingTop: "129.86px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
