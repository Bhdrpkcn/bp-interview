"use client";

import React from "react";

import CardContainer from "./CardContainer";
import Navigation from "./Navigation";
import Navbar from "./Navbar";

const Body: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <CardContainer />
    </div>
  );
};

export default Body;
