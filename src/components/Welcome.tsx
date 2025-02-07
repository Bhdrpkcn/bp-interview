"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "@/store/questionSlice";

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const [quizTaker, setQuizTaker] = useState<"user" | "friend">("user");
  const [selectedMode, setSelectedMode] = useState<"ordered" | "random">(
    "ordered"
  );
  const [questionCount, setQuestionCount] = useState(10);

  const handleStart = () => {
    dispatch(startQuiz({ quizTaker, selectedMode, questionCount })); // ✅ Pass correct values
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz</h1>

        <label className="block font-semibold">Who is doing the quiz?</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={quizTaker}
          onChange={(e) => setQuizTaker(e.target.value as "user" | "friend")}
        >
          <option value="user">I am answering</option>
          <option value="friend">I am asking a friend</option>
        </select>

        <label className="block font-semibold">Question Order:</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={selectedMode}
          onChange={(e) =>
            setSelectedMode(e.target.value as "ordered" | "random")
          }
        >
          <option value="ordered">Ordered</option>
          <option value="random">Random</option>
        </select>

        <label className="block font-semibold">Number of Questions:</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
        >
          <option value={10}>10 Questions</option>
          <option value={20}>20 Questions</option>
          <option value={30}>30 Questions</option>
        </select>

        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Welcome;
