"use client";

import React, { useState } from "react";

type QuestionProps = {
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  qCode,
  answer,
  answerLi,
  answerCode,
  hint,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{question}</h3>

      {/* If there's a code block in the question */}
      {qCode && (
        <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-auto">
          <code>{qCode}</code>
        </pre>
      )}

      {/* Show Answer Button */}
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {/* Answer Section */}
      {showAnswer && (
        <div className="mt-3">
          {answer && <p className="text-gray-700">{answer}</p>}

          {answerLi && answerLi.length > 0 && (
            <ul className="list-disc list-inside text-gray-700">
              {answerLi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {answerCode && (
            <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-auto">
              <code>{answerCode}</code>
            </pre>
          )}

          {hint && (
            <small className="block mt-2 text-gray-500">💡 {hint}</small>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
