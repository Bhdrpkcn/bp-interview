"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Analyze: React.FC = () => {
  const {
    categoryStats,
    correctAnswers,
    wrongAnswers,
    passedQuestions,
    filteredQuestions,
  } = useSelector((state: RootState) => state.questions);

  const totalQuestions = filteredQuestions.length;
  const successRate = ((correctAnswers.length / totalQuestions) * 100).toFixed(
    2
  );

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">📊 Performance Analysis</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Overall Stats:</h2>
        <p>✅ Correct: {correctAnswers.length}</p>
        <p>❌ Incorrect: {wrongAnswers.length}</p>
        <p>🚩 Passed: {passedQuestions.length}</p>
        <p>🎯 Success Rate: {successRate}%</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Category Breakdown:</h2>
        {Object.entries(categoryStats).map(([category, stats]) => (
          <div key={category} className="p-3 border-b">
            <h3 className="font-bold">{category}</h3>
            <p>✅ Correct: {stats.correct}</p>
            <p>❌ Incorrect: {stats.incorrect}</p>
            <p>🚩 Passed: {stats.passed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analyze;
