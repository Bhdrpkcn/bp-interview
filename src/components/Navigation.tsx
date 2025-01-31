"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { nextQuestion, previousQuestion } from "@/store/questionSlice";
import React from "react";
import { questions } from "@/data/questions";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(
    (state: RootState) => state.questions.currentIndex
  );
  const totalQuestions = questions.length;

  return (
    <div className="flex items-center justify-center my-4">
      <button
        onClick={() => dispatch(previousQuestion())}
        disabled={currentIndex === 0}
        className="mr-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        Prev
      </button>

      <span className="text-lg font-semibold">
        Question {currentIndex + 1} / {totalQuestions}
      </span>

      <button
        onClick={() => dispatch(nextQuestion())}
        className="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
