import React from "react";
import Card from "./Card";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { questions } from "@/data/questions";

interface QuestionType {
  id: string;
  category: string;
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
}

interface CardContainerProps {
  questions: QuestionType[];
}

const CardContainer: React.FC = () => {
  const selectedMode = useSelector(
    (state: RootState) => state.questions.displayMode
  );
  const filterMode = useSelector(
    (state: RootState) => state.questions.filterMode
  );
  const correctAnswers = useSelector(
    (state: RootState) => state.questions.correctAnswers
  );
  const wrongAnswers = useSelector(
    (state: RootState) => state.questions.wrongAnswers
  );
  const currentIndex = useSelector(
    (state: RootState) => state.questions.currentIndex
  );

  let filteredQuestions = questions;

  // **Filtering Logic**
  if (filterMode === "correct") {
    filteredQuestions = questions.filter((q) => correctAnswers.includes(q.id));
  } else if (filterMode === "incorrect") {
    filteredQuestions = questions.filter((q) => wrongAnswers.includes(q.id));
  } else if (filterMode !== "all") {
    filteredQuestions = questions.filter((q) => q.category === filterMode);
  }

  return (
    <div className="grid gap-6 max-w-3xl mx-auto">
      <div className="flex flex-row gap-3">
        <div className="border-2 border-blue-400">
          Selected Mode : {selectedMode}
        </div>
        <div className="border-2 border-blue-400">
          Filter Mode : {filterMode}
        </div>
        <div className="border-2 border-blue-400">
          Correct Answers : {correctAnswers}
        </div>
        <div className="border-2 border-blue-400">
          Wrong Answers : {wrongAnswers}
        </div>
        <div className="border-2 border-blue-400">
          Current Index : {currentIndex}
        </div>
      </div>
      {questions.length > 0 ? (
        questions.map((q) => <Card key={q.id} {...q} />)
      ) : (
        <p className="text-center text-lg font-semibold text-gray-600">
          No questions available.
        </p>
      )}
    </div>
  );
};

export default CardContainer;
