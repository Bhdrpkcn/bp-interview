"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { answerQuestion, nextQuestion } from "@/store/questionSlice";
import { questionProps } from "@/types/types";

const Card: React.FC<questionProps> = ({
  id,
  question,
  category,
  qCode,
  answer,
  answerLi,
  answerCode,
  hint,
}) => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (status: "correct" | "incorrect" | "passed") => {
    dispatch(answerQuestion({ id, category, status }));
    setTimeout(() => {
      dispatch(nextQuestion());
    }, 3000);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-2xl mx-auto mt-6">
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => handleAnswer("correct")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          ✅ Correct
        </button>

        <button
          onClick={() => handleAnswer("incorrect")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ❌ Incorrect
        </button>

        <button
          onClick={() => handleAnswer("passed")}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          🚩 Pass
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">{question}</h2>

      {qCode && (
        <pre className="bg-gray-100 p-2 rounded-md mb-4">
          <code>{qCode}</code>
        </pre>
      )}

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <button
          onClick={() => setShowHint(!showHint)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
      </div>

      {showAnswer && (
        <div className="p-4 bg-gray-50 rounded-md">
          {answer && <p className="mb-2">{answer}</p>}
          {answerLi && (
            <ul className="list-disc pl-6 mb-2">
              {answerLi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {answerCode && (
            <pre className="bg-gray-200 p-2 rounded-md">
              <code>{answerCode}</code>
            </pre>
          )}
        </div>
      )}

      {showHint && hint && (
        <p className="text-sm text-gray-500 italic mt-2">💡 {hint}</p>
      )}

      {/* Answer Buttons */}
      {/* <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => handleAnswer("correct")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          ✅ Correct
        </button>

        <button
          onClick={() => handleAnswer("incorrect")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ❌ Incorrect
        </button>

        <button
          onClick={() => handleAnswer("passed")}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          🚩 Pass
        </button>
      </div> */}
    </div>
  );
};

export default Card;
