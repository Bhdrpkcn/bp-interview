"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { questions } from "@/data/questions";

import Card from "./Card";

const CardContainer: React.FC = () => {
  const { selectedQuestions } = useSelector(
    (state: RootState) => state.questions
  );

  console.log(selectedQuestions);

  if (!selectedQuestions || selectedQuestions.length === 0) {
    return (
      <p className="text-center text-lg font-semibold text-gray-600">
        No questions available. Please restart the quiz.
      </p>
    );
  }

  const questionsToDisplay = selectedQuestions
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is NonNullable<typeof q> => q !== undefined); // Remove undefined values

  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      {questionsToDisplay.map((question) => (
        <Card key={question.id} {...question} />
      ))}
    </div>
  );
};

export default CardContainer;
