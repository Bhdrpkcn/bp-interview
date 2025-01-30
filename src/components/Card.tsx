"use client";

import React, { useState } from "react";

interface CardProps {
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
}

const Card: React.FC<CardProps> = ({
  question,
  qCode,
  answer,
  answerLi,
  answerCode,
  hint,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">{question}</h3>

      {qCode && (
        <pre className="bg-gray-100 p-2 rounded-md my-2">
          <code>{qCode}</code>
        </pre>
      )}

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div className="mt-3 p-3 bg-gray-100 rounded-md">
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
        </div>
      )}
    </div>
  );
};

export default Card;
