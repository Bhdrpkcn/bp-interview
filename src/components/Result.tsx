"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { resetGame } from "@/store/questionSlice";
import AnalyzeContainer from "@/components/AnalyzeContainer";
import { analyzeResults } from "@/utils/analyzeResults";

const Result: React.FC = () => {
  const dispatch = useDispatch();
  const { correctAnswers, wrongAnswers, passedQuestions } = useSelector(
    (state: RootState) => state.questions
  );

  const { correctCount, wrongGrouped, passedGrouped } = analyzeResults(
    correctAnswers,
    wrongAnswers,
    passedQuestions
  );

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">📊 Quiz Results</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          ✅ Correct Answers: {correctCount}
        </h2>
      </div>

      <AnalyzeContainer
        title="❌ Incorrect Answers"
        groupedQuestions={wrongGrouped}
      />

      <AnalyzeContainer
        title="🚩 Passed Questions"
        groupedQuestions={passedGrouped}
      />

      <button
        onClick={() => dispatch(resetGame())}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        🔄 Restart Quiz
      </button>
    </div>
  );
};

export default Result;
