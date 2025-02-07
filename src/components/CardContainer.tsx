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
      <p className="text-center text-lg font-semibold text-gray-600">
        No questions available. Please restart the quiz.
      </p>
    );
  }

  const currentQuestion = filteredQuestions[currentIndex];

  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      <Card key={currentQuestion.id} question={currentQuestion} />
    </div>
  );
};

export default CardContainer;
