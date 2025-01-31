"use client";
/* 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setFilterMode, resetGame } from "@/store/questionSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const filterMode = useSelector(
    (state: RootState) => state.questions.filterMode
  );
  const correctAnswers = useSelector(
    (state: RootState) => state.questions.correctAnswers.length
  );
  const wrongAnswers = useSelector(
    (state: RootState) => state.questions.wrongAnswers.length
  );
  const score = correctAnswers - wrongAnswers;

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-6">
      <h1 className="text-xl font-bold">Interview Questions App</h1>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            filterMode === "all" ? "bg-green-500 text-white" : "bg-gray-400"
          }`}
          onClick={() => dispatch(setFilterMode("all"))}
        >
          All Questions
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filterMode === "correct" ? "bg-green-500 text-white" : "bg-gray-400"
          }`}
          onClick={() => dispatch(setFilterMode("correct"))}
        >
          ✅ Correct
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filterMode === "incorrect" ? "bg-red-500 text-white" : "bg-gray-400"
          }`}
          onClick={() => dispatch(setFilterMode("incorrect"))}
        >
          ❌ Incorrect
        </button>
      </div>

      <div className="flex space-x-6">
        <p className="text-lg font-semibold text-green-600">
          ✅ {correctAnswers}
        </p>
        <p className="text-lg font-semibold text-red-600">❌ {wrongAnswers}</p>
        <p className="text-lg font-semibold">Score: {score}</p>
      </div>

      <button
        onClick={() => dispatch(resetGame())}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default Navbar;
*/
"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setDisplayMode,
  setFilterMode,
  resetGame,
} from "@/store/questionSlice";
import { questions } from "@/data/questions";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
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
  const score = correctAnswers - wrongAnswers;

  // Extract unique categories dynamically
  const categories = Array.from(new Set(questions.map((q) => q.category)));

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md rounded-md mb-6">
      <h1 className="text-xl font-bold">Interview Questions App</h1>

      {/* Mode Selection: All, Ordered, Random */}
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedMode === "all" ? "bg-blue-600 text-white" : "bg-gray-400"
          }`}
          onClick={() => dispatch(setDisplayMode("all"))}
        >
          All Questions
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedMode === "ordered"
              ? "bg-blue-600 text-white"
              : "bg-gray-400"
          }`}
          onClick={() => dispatch(setDisplayMode("ordered"))}
        >
          Show Ordered
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedMode === "random" ? "bg-blue-600 text-white" : "bg-gray-400"
          }`}
          onClick={() => dispatch(setDisplayMode("random"))}
        >
          Show Random
        </button>
      </div>

      {/* Category Selector */}
      <select
        className="px-4 py-2 rounded-md border border-gray-400 bg-white"
        value={filterMode}
        onChange={(e) => dispatch(setFilterMode(e.target.value))}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Score & Reset */}
      <div className="flex space-x-4">
        <p className="text-lg font-semibold text-green-600">
          ✅ {correctAnswers}
        </p>
        <p className="text-lg font-semibold text-red-600">❌ {wrongAnswers}</p>
        <p className="text-lg font-semibold">Score: {score}</p>
      </div>
      <button
        className={`px-4 py-2 rounded-md ${
          filterMode === "all" ? "bg-green-500 text-white" : "bg-gray-400"
        }`}
        onClick={() => dispatch(setFilterMode("all"))}
      >
        ALL
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filterMode === "correct" ? "bg-green-500 text-white" : "bg-gray-400"
        }`}
        onClick={() => dispatch(setFilterMode("correct"))}
      >
        ✅ Correct
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filterMode === "incorrect" ? "bg-red-500 text-white" : "bg-gray-400"
        }`}
        onClick={() => dispatch(setFilterMode("incorrect"))}
      >
        ❌ Incorrect
      </button>
      <button
        onClick={() => dispatch(resetGame())}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default Navbar;
