import { questions } from "@/data/questions";

export interface questionProps {
  id: string;
  category: string;
  subCategory: string;
  question: string;
  qCode?: string;
  answer?: string;
  answerLi?: string[];
  answerCode?: string;
  hint?: string;
}

//questionSlice.ts
export interface QuestionState {
  quizTaker: "user" | "friend";
  selectedQuestions: string[];
  correctAnswers: string[];
  wrongAnswers: string[];
  passedQuestions: string[];
  categoryStats: Record<
    string,
    { correct: number; incorrect: number; passed: number }
  >;
  currentIndex: number;
  filteredQuestions: questionProps[];
  showWelcome: boolean;
  showResults: boolean;
}

//AnalyzeContainer.tsx
export interface AnalyzeContainerProps {
  title: string;
  groupedQuestions: Record<string, { id: string; question: string }[]>;
}

//analyzeResult
export interface AnalyzedResults {
  correctCount: number;
  wrongGrouped: Record<string, typeof questions>;
  passedGrouped: Record<string, typeof questions>;
}
