"use client";

import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
const Body: React.FC = () => {
  const selectedMode = useSelector(
    (state: RootState) => state.questions.displayMode
  );
  const filterMode = useSelector(
    (state: RootState) => state.questions.filterMode
  );
  const correctAnswers = useSelector(
    (state: RootState) => state.questions.correctAnswers.length
  );
  const wrongAnswers = useSelector(
    (state: RootState) => state.questions.wrongAnswers.length
  );
  const currentIndex = useSelector(
    (state: RootState) => state.questions.currentIndex
  );
  return (
    <div>
      <div className="flex flex-row gap-3">
        <div className="border-2 border-blue-400">
          Selected Mode : {selectedMode}
        </div>
        <div className="border-2 border-blue-400">
          Filter Mode : {filterMode}
        </div>
        <div className="border-2 border-blue-400">
          Correct Answers : {correctAnswers}
        </div>
        <div className="border-2 border-blue-400">
          Wrong Answers : {wrongAnswers}
        </div>
        <div className="border-2 border-blue-400">
          Current Index : {currentIndex}
        </div>
      </div>{" "}
      <Navbar />
      <Navigation />
      <CardContainer />
    </div>
  );
};

export default Body;
