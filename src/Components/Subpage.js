import React from "react";
import { Routes, Route } from "react-router-dom";
import Service from "./Service";
import About from "./About";
import MainPage from "./Mainpage";

function Subpage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Subpage;
