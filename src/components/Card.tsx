"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, nextQuestion } from "@/store/questionSlice";
import { questionProps } from "@/types/types";
import { RootState } from "@/store/store"; // Ensure this is the correct path to your root state type
import Button from "./Button";

const Card: React.FC<{ question: questionProps }> = ({ question }) => {
  const dispatch = useDispatch();
  const quizTaker = useSelector(
    (state: RootState) => state.questions.quizTaker
  );

  // Set initial states based on quizTaker
  const [showAnswer, setShowAnswer] = useState(quizTaker === "friend");
  const [showHint, setShowHint] = useState(quizTaker === "friend");

  const handleAnswer = (status: "correct" | "incorrect" | "passed") => {
    dispatch(
      answerQuestion({ id: question.id, category: question.category, status })
    );
    dispatch(nextQuestion());
  };

  return (
    <div className=" flex flex-col mx-auto w-[100%] justify-between">
      <div className="flex  flex-col h-[90%] overflow-auto">
        <h2 className="text-xl font-bold p-2 mb-2 bg-gray-50 rounded-md">
          {question.question}
        </h2>

        {question.qCode && (
          <pre className="bg-gray-100 text-left rounded-md mb-4">
            <code>{question.qCode}</code>
          </pre>
        )}

        <div className="flex justify-center gap-4 mb-4">
          {quizTaker === "user" && (
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          )}

          {quizTaker === "user" && question.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg"
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
          )}
        </div>

        {showAnswer && (
          <div className="p-4 bg-gray-50 rounded-md">
            {question.answer && <p className="mb-2">{question.answer}</p>}
            {question.answerLi && (
              <ul className="list-disc pl-6 mb-2">
                {question.answerLi.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {question.answerCode && (
              <pre className="bg-gray-200 text-sm text-left rounded-md overflow-auto">
                <code>{question.answerCode}</code>
              </pre>
            )}
          </div>
        )}

        {showHint && question.hint && (
          <div className="p-4 bg-gray-50 rounded-md mt-2 mb-8">
            <h3 className="text-sm text-gray-500 italic font-semibold mb-1">
              💡 Hint:
            </h3>
            {Array.isArray(question.hint) ? (
              <ul className="list-disc pl-6">
                {question.hint.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            ) : (
              <p>{question.hint}</p>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button role="true" onClick={() => handleAnswer("correct")} />
        <Button role="false" onClick={() => handleAnswer("incorrect")} />
        <Button role="pass" onClick={() => handleAnswer("passed")} />
      </div>
    </div>
  );
};

export default Card;
