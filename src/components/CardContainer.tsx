"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Card from "./Card";

const CardContainer: React.FC = () => {
  const { filteredQuestions, currentIndex } = useSelector(
    (state: RootState) => state.questions
  );

  if (!filteredQuestions || filteredQuestions.length === 0) {
    return (
      <p className="flex flex-col text-center h-full text-lg  font-semibold text-gray-600">
        No questions available. Please restart the quiz.
      </p>
    );
  }

  const currentQuestion = filteredQuestions[currentIndex];

  return (
    <div className="flex h-[calc(100%-5rem)] mt-4 p-4 bg-orange-400 rounded-lg shadow-lg overflow-hidden">
      <Card key={currentQuestion.id} question={currentQuestion} />
    </div>
  );
};

export default CardContainer;
