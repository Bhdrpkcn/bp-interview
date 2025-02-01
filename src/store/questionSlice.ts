import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "@/data/questions";

interface QuestionState {
  askedQuestions: number[];
  correctAnswers: string[];
  wrongAnswers: string[];
  passedQuestions: string[]; // ✅ New: Track passed questions
  currentIndex: number;
  displayMode: string;
  filterMode: string;
  filteredQuestions: typeof questions;
  showWelcome: boolean;
  showResults: boolean; // ✅ New: Flag to trigger result page
}

const initialState: QuestionState = {
  askedQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
  passedQuestions: [], // ✅ Initial State
  currentIndex: 0,
  displayMode: "ordered",
  filterMode: "all",
  filteredQuestions: questions,
  showWelcome: true,
  showResults: false, // ✅ Initial Result State
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
    },

    answerQuestion: (
      state,
      action: PayloadAction<{
        id: string;
        status: "correct" | "incorrect" | "passed";
      }>
    ) => {
      const { id, status } = action.payload;

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

    nextQuestion: (state) => {
      const nextIndex = state.currentIndex + 1;

      if (nextIndex < state.filteredQuestions.length) {
        state.currentIndex = nextIndex;
      } else {
        state.showResults = true; // ✅ Redirect to result page when done
      }
    },

    finishQuiz: (state) => {
      state.showResults = true; // ✅ Trigger result page manually
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
      state.showResults = false; // ✅ Reset results
    },
  },
});

export const {
  startQuiz,
  answerQuestion,
  nextQuestion,
  finishQuiz,
  resetGame,
} = questionSlice.actions;

export default questionSlice.reducer;
