"use client";

import { answerQuestion } from "@/store/questionSlice";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface CardProps {
  id: string;
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  question,
  qCode,
  answer,
  answerLi,
  answerCode,
  hint,
}) => {
  const dispatch = useDispatch();
  const correctAnswers = useSelector(
    (state: RootState) => state.questions.correctAnswers
  );
  const wrongAnswers = useSelector(
    (state: RootState) => state.questions.wrongAnswers
  );

  return (
    <Tabs.Root
      defaultValue="question"
      className="bg-white p-4 shadow-md rounded-lg"
    >
      here
      <Tabs.List className="flex space-x-4 border-b-2">
        <Tabs.Trigger
          value="question"
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Question
        </Tabs.Trigger>
        <Tabs.Trigger
          value="answer"
          className="px-4 py-2 rounded-md bg-gray-500 text-white"
        >
          Answer
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="question" className="p-3">
        <h3 className="text-lg font-semibold">{question}</h3>
        {qCode && (
          <pre className="bg-gray-100 p-2 rounded-md my-2">
            <code>{qCode}</code>
          </pre>
        )}
      </Tabs.Content>
      <Tabs.Content value="answer" className="p-3">
        {answer && <p>{answer}</p>}
        {answerLi && (
          <ul className="list-disc list-inside">
            {answerLi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {answerCode && (
          <pre className="bg-gray-200 p-2 rounded-md my-2">
            <code>{answerCode}</code>
          </pre>
        )}
        {hint && <p className="mt-2 text-sm text-gray-500">💡 {hint}</p>}
      </Tabs.Content>
      <div className="mt-4">
        <button
          onClick={() => dispatch(answerQuestion({ id, isCorrect: true }))}
          className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2"
          disabled={correctAnswers.includes(id)}
        >
          ✅ Correct
        </button>

        <button
          onClick={() => dispatch(answerQuestion({ id, isCorrect: false }))}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          disabled={wrongAnswers.includes(id)}
        >
          ❌ Incorrect
        </button>
      </div>
    </Tabs.Root>
  );
};

export default Card;
