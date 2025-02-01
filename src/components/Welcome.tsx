"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "@/store/questionSlice";
import { questions } from "@/data/questions";

const Welcome: React.FC = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState("ordered");

  const categories = Array.from(new Set(questions.map((q) => q.category)));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz</h1>
        <p className="mb-4 text-gray-600">
          Choose your quiz settings before starting.
        </p>

        <label className="block font-semibold">Select Category:</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Topics</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label className="block font-semibold">Question Order:</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          <option value="ordered">Ordered</option>
          <option value="random">Random</option>
        </select>

        <button
          onClick={() =>
            dispatch(
              startQuiz({ category: selectedCategory, mode: selectedMode })
            )
          }
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Welcome;
