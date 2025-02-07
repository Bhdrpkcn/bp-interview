"use client";

import React from "react";

interface AnalyzeContainerProps {
  title: string;
  groupedQuestions: Record<string, { id: string; question: string }[]>;
}

const AnalyzeContainer: React.FC<AnalyzeContainerProps> = ({
  title,
  groupedQuestions,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {Object.entries(groupedQuestions).length === 0 ? (
        <p className="text-gray-500 italic">No questions in this category.</p>
      ) : (
        Object.entries(groupedQuestions).map(([category, questions]) => (
          <div key={category} className="p-4 border-b mb-4">
            <h3 className="font-bold text-lg">{category}</h3>
            {questions.map((q) => (
              <p key={q.id} className="text-gray-700">
                {q.question}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default AnalyzeContainer;
