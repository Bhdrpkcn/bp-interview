"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { resetGame } from "@/store/questionSlice";

const Result: React.FC = () => {
  const dispatch = useDispatch();
  const { correctAnswers, wrongAnswers, passedQuestions, filteredQuestions } =
    useSelector((state: RootState) => state.questions);

  const totalQuestions = filteredQuestions.length;
  const successRate = (correctAnswers.length / totalQuestions) * 100;
  const message =
    successRate >= 75
      ? "🎉 Congrats! Great performance!"
      : successRate < 50
      ? "⚠️ You need more practice!"
      : "👍 Good effort!";

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{message}</h1>

      <p>✅ Correct: {correctAnswers.length}</p>
      <p>❌ Incorrect: {wrongAnswers.length}</p>
      <p>🚩 Passed: {passedQuestions.length}</p>

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
