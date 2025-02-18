"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { startQuiz } from "@/store/questionSlice";
import Button from "./Button";
import { questions } from "@/data/questions";

const Welcome: React.FC = () => {
  const dispatch = useDispatch();

  const totalQuestions = questions.length;
  const [quizTaker, setQuizTaker] = useState<"user" | "friend">("user");
  const [selectedMode, setSelectedMode] = useState<"ordered" | "random">(
    "ordered"
  );
  const [questionCount, setQuestionCount] = useState(10);
  const [continueFrom, setContinueFrom] = useState(0);

  const handleStart = () => {
    dispatch(
      startQuiz({ quizTaker, selectedMode, questionCount, continueFrom })
    );
  };

  useEffect(() => {
    if (continueFrom + questionCount > totalQuestions) {
      setContinueFrom(Math.max(0, totalQuestions - questionCount));
    }
  }, [questionCount, totalQuestions, continueFrom]);

  const handleSliderChange = (value: number) => {
    let newValue = value;

    if (newValue < 0) newValue = 0;
    if (newValue > totalQuestions - 1) newValue = totalQuestions - 1;
    if (newValue + questionCount > totalQuestions) {
      newValue = totalQuestions - questionCount;
    }

    setContinueFrom(newValue);
  };

  return (
    <div className="flex flex-col p-4 bg-orange-400 rounded-lg shadow-lg pt-20 h-[100%] text-gray-700">
      <div className="flex  flex-col w-[90%] sm:w-[70%] max-w-[500px] mx-auto items-center px-12 gap-6">
        <h1 className="text-xl font-bold mb-6 mx-auto w-[100%]">Welcome</h1>

        <div className="flex flew-row justify-between w-[100%]">
          <Button
            focus={quizTaker === "user"}
            role="user"
            onClick={() => setQuizTaker("user")}
          />
          <Button
            focus={quizTaker === "friend"}
            role="friend"
            onClick={() => setQuizTaker("friend")}
          />
        </div>

        <div className="flex justify-between w-[100%]">
          <Button
            focus={selectedMode === "ordered"}
            role="ordered"
            onClick={() => setSelectedMode("ordered")}
          />
          <Button
            focus={selectedMode === "random"}
            role="random"
            onClick={() => setSelectedMode("random")}
          />
        </div>

        <div className="flex justify-between w-[100%]">
          {[10, 20, 30].map((size) => (
            <Button
              key={size}
              focus={size === questionCount}
              role="number"
              onClick={() => setQuestionCount(size)}
            >
              {size}
            </Button>
          ))}
        </div>

        {selectedMode === "ordered" && (
          <div className="flex flex-col justify-between w-[140%] my-6 gap-2">
            <span className="text-sm font-semibold">Continue From</span>
            <input
              type="range"
              min="0"
              max={Math.max(0, totalQuestions - questionCount)}
              value={continueFrom}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm font-semibold">{continueFrom + 1}</span>
          </div>
        )}

        <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex gap-4">
          <Button role="start" onClick={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
