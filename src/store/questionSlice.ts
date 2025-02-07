import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
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
  showWelcome: boolean;
  showResults: boolean;
}

const initialState: QuestionState = {
  quizTaker: "user",
  selectedQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
  passedQuestions: [],
  categoryStats: {},
  currentIndex: 0,
  showWelcome: true,
  showResults: false,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startQuiz: (
      state,
      action: PayloadAction<{
        quizTaker: "user" | "friend";
        selectedQuestions: string[];
      }>
    ) => {
      state.quizTaker = action.payload.quizTaker;
      state.selectedQuestions = action.payload.selectedQuestions;
      state.correctAnswers = [];
      state.wrongAnswers = [];
      state.passedQuestions = [];
      state.categoryStats = {};
      state.currentIndex = 0;
      state.showWelcome = false;
      state.showResults = false;
    },

    nextQuestion: (state) => {
      if (state.currentIndex < state.selectedQuestions.length - 1) {
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

      // Remove the question from other categories to prevent duplication
      state.correctAnswers = state.correctAnswers.filter((qId) => qId !== id);
      state.wrongAnswers = state.wrongAnswers.filter((qId) => qId !== id);
      state.passedQuestions = state.passedQuestions.filter((qId) => qId !== id);

      // Add the question to the correct category
      if (status === "correct") state.correctAnswers.push(id);
      if (status === "incorrect") state.wrongAnswers.push(id);
      if (status === "passed") state.passedQuestions.push(id);

      // Update category statistics
      if (!state.categoryStats[category]) {
        state.categoryStats[category] = { correct: 0, incorrect: 0, passed: 0 };
      }
      state.categoryStats[category][status]++;
    },

    finishQuiz: (state) => {
      state.showResults = true;
    },

    resetGame: (state) => {
      state.selectedQuestions = [];
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
