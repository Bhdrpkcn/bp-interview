"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { finishQuiz } from "@/store/questionSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const totalQuestions = useSelector(
    (state: RootState) => state.questions.filteredQuestions.length
  );
  const currentIndex = useSelector(
    (state: RootState) => state.questions.currentIndex
  );

  return (
    <div className="flex justify-between h-[10%] items-center p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <div className="text-xl font-bold">
        {currentIndex}/{totalQuestions} Answered
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(finishQuiz())}
          className="px-4 py-2 bg-red-500 rounded"
        >
          Finish 🏁
        </button>
      </div>
    </div>
  );
};

export default Navbar;
