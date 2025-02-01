import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "@/data/questions";

interface QuestionState {
  askedQuestions: number[];
  correctAnswers: string[];
  wrongAnswers: string[];
  passedQuestions: string[];
  currentIndex: number;
  displayMode: string;
  filterMode: string;
  filteredQuestions: typeof questions;
  showWelcome: boolean;
  showResults: boolean;
  categoryStats: Record<
    string,
    { correct: number; incorrect: number; passed: number }
  >;
}

const initialState: QuestionState = {
  askedQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
  passedQuestions: [],
  currentIndex: 0,
  displayMode: "ordered",
  filterMode: "all",
  filteredQuestions: questions,
  showWelcome: true,
  showResults: false,
  categoryStats: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startQuiz: (
      state,
      action: PayloadAction<{ category: string; mode: string }>
    ) => {
      state.displayMode = action.payload.mode;
      state.filterMode = action.payload.category;

      state.filteredQuestions =
        action.payload.category === "all"
          ? questions
          : questions.filter((q) => q.category === action.payload.category);

      state.currentIndex =
        state.displayMode === "random"
          ? Math.floor(Math.random() * state.filteredQuestions.length)
          : 0;

      state.askedQuestions = [state.currentIndex];
      state.showWelcome = false;
      state.categoryStats = {};
    },

    answerQuestion: (
      state,
      action: PayloadAction<{
        id: string;
        status: "correct" | "incorrect" | "passed";
      }>
    ) => {
      const { id, status } = action.payload;
      const question = questions.find((q) => q.id === id);
      if (!question) return;

      const category = question.category;

      const nextIndex = state.currentIndex + 1;

      if (nextIndex < state.filteredQuestions.length) {
        state.currentIndex = nextIndex;
      } else {
        state.showResults = true;
      }

      if (!state.categoryStats[category]) {
        state.categoryStats[category] = { correct: 0, incorrect: 0, passed: 0 };
      }
      state.categoryStats[category][status]++;

      if (status === "correct" && !state.correctAnswers.includes(id)) {
        state.correctAnswers.push(id);
        state.wrongAnswers = state.wrongAnswers.filter((qid) => qid !== id);
        state.passedQuestions = state.passedQuestions.filter(
          (qid) => qid !== id
        );
      }

      if (status === "incorrect" && !state.wrongAnswers.includes(id)) {
        state.wrongAnswers.push(id);
        state.correctAnswers = state.correctAnswers.filter((qid) => qid !== id);
        state.passedQuestions = state.passedQuestions.filter(
          (qid) => qid !== id
        );
      }

      if (status === "passed" && !state.passedQuestions.includes(id)) {
        state.passedQuestions.push(id);
        state.correctAnswers = state.correctAnswers.filter((qid) => qid !== id);
        state.wrongAnswers = state.wrongAnswers.filter((qid) => qid !== id);
      }
    },
    finishQuiz: (state) => {
      state.showResults = true;
    },

    resetGame: (state) => {
      state.askedQuestions = [];
      state.correctAnswers = [];
      state.wrongAnswers = [];
      state.passedQuestions = [];
      state.currentIndex = 0;
      state.filterMode = "all";
      state.filteredQuestions = questions;
      state.showWelcome = true;
      state.showResults = false;
      state.categoryStats = {};
    },
  },
});

export const { startQuiz, answerQuestion, resetGame, finishQuiz } =
  questionSlice.actions;

export default questionSlice.reducer;
