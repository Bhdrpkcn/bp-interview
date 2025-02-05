"use client";

import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import Card from "./Card";

const CardContainer: React.FC = () => {
  const filteredQuestions = useSelector(
    (state: RootState) => state.questions.filteredQuestions
  );
  const selectedMode = useSelector(
    (state: RootState) => state.questions.displayMode
  );
  const currentIndex = useSelector(
    (state: RootState) => state.questions.currentIndex
  );

  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      {selectedMode === "all" ? (
        filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => <Card key={q.id} {...q} />)
        ) : (
          <p className="text-center text-lg font-semibold text-gray-600">
            No questions available.
          </p>
        )
      ) : (
        <Card {...filteredQuestions[currentIndex]} />
      )}
    </div>
  );
};

export default CardContainer;
