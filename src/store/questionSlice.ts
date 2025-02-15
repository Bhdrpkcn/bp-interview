import { questions } from "@/data/questions";
import { QuestionState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: QuestionState = {
  showWelcome: true,
  showResults: false,
  quizTaker: "user",
  selectedQuestions: [],
  filteredQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
  passedQuestions: [],
  categoryStats: {},
  currentIndex: 0,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startQuiz: (
      state,
      action: PayloadAction<{
        quizTaker: "user" | "friend";
        selectedMode: string;
        questionCount: number;
        continueFrom: number;
      }>
    ) => {
      const filtered = [...questions];

      if (action.payload.selectedMode === "random") {
        filtered.sort(() => Math.random() - 0.5);
      }

      const startIndex = Math.max(0, action.payload.continueFrom);
      const endIndex = Math.min(
        filtered.length,
        startIndex + action.payload.questionCount
      );

      state.filteredQuestions = filtered.slice(startIndex, endIndex);
      state.showWelcome = false;
      state.currentIndex = 0;
      state.quizTaker = action.payload.quizTaker;
      state.correctAnswers = [];
      state.wrongAnswers = [];
      state.passedQuestions = [];
      state.categoryStats = {};
      state.showResults = false;
    },

    nextQuestion: (state) => {
      if (state.currentIndex < state.filteredQuestions.length - 1) {
        state.currentIndex += 1;
      } else {
        state.showResults = true;
      }
    },

    answerQuestion: (
      state,
      action: PayloadAction<{
        id: string;
        category: string;
        status: "correct" | "incorrect" | "passed";
      }>
    ) => {
      const { id, category, status } = action.payload;

      state.correctAnswers = state.correctAnswers.filter((qId) => qId !== id);
      state.wrongAnswers = state.wrongAnswers.filter((qId) => qId !== id);
      state.passedQuestions = state.passedQuestions.filter((qId) => qId !== id);

      if (status === "correct") state.correctAnswers.push(id);
      if (status === "incorrect") state.wrongAnswers.push(id);
      if (status === "passed") state.passedQuestions.push(id);

      if (!state.categoryStats[category]) {
        state.categoryStats[category] = { correct: 0, incorrect: 0, passed: 0 };
      }
      state.categoryStats[category][status]++;
    },

    finishQuiz: (state) => {
      state.showResults = true;
    },

    resetGame: (state) => {
      state.filteredQuestions = [];
      state.correctAnswers = [];
      state.wrongAnswers = [];
      state.passedQuestions = [];
      state.categoryStats = {};
      state.currentIndex = 0;
      state.showWelcome = true;
      state.showResults = false;
    },
  },
});

export const {
  startQuiz,
  nextQuestion,
  answerQuestion,
  finishQuiz,
  resetGame,
} = questionSlice.actions;

export default questionSlice.reducer;
