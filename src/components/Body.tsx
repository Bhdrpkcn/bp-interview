"use client";

import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import Navbar from "./Navbar";
import CardContainer from "./CardContainer";
import Welcome from "./Welcome";
import Result from "./Result";

const Body: React.FC = () => {
  const showWelcome = useSelector(
    (state: RootState) => state.questions.showWelcome
  );
  const showResults = useSelector(
    (state: RootState) => state.questions.showResults
  );

  if (showWelcome) return <Welcome />;
  if (showResults) return <Result />;

  return (
    <div>
      <Navbar />
      <CardContainer />
    </div>
  );
};

export default Body;
