import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "@/data/questions";

interface QuestionState {
  askedQuestions: number[];
  correctAnswers: string[];
  wrongAnswers: string[];
  currentIndex: number;
  displayMode: string;
  filterMode: string;
}

const initialState: QuestionState = {
  askedQuestions: [],
  correctAnswers: [],
  wrongAnswers: [],
  currentIndex: 0,
  displayMode: "all",
  filterMode: "all", // Default filter mode
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setDisplayMode: (state, action: PayloadAction<string>) => {
      state.displayMode = action.payload;
      state.currentIndex = 0;
    },
    setFilterMode: (state, action: PayloadAction<string>) => {
      state.filterMode = action.payload;
    },
    nextQuestion: (state) => {
      if (state.displayMode === "ordered") {
        if (state.currentIndex < questions.length - 1) {
          state.currentIndex += 1;
        }
      } else if (state.displayMode === "random") {
        let newIndex;
        const availableQuestions = questions
          .map((_, idx) => idx)
          .filter((idx) => !state.askedQuestions.includes(idx));

        if (availableQuestions.length === 0) {
          state.askedQuestions = [];
          newIndex = Math.floor(Math.random() * questions.length);
        } else {
          newIndex =
            availableQuestions[
              Math.floor(Math.random() * availableQuestions.length)
            ];
        }

        state.askedQuestions.push(newIndex);
        state.currentIndex = newIndex;
      }
    },
    previousQuestion: (state) => {
      if (state.displayMode === "ordered") {
        if (state.currentIndex > 0) {
          state.currentIndex -= 1;
        }
      } else if (
        state.displayMode === "random" &&
        state.askedQuestions.length > 1
      ) {
        state.askedQuestions.pop();
        state.currentIndex =
          state.askedQuestions[state.askedQuestions.length - 1];
      }
    },
    answerQuestion: (
      state,
      action: PayloadAction<{ id: string; isCorrect: boolean }>
    ) => {
      const { id, isCorrect } = action.payload;

      if (isCorrect) {
        if (!state.correctAnswers.includes(id)) {
          state.correctAnswers.push(id);
          state.wrongAnswers = state.wrongAnswers.filter((qid) => qid !== id);
        }
      } else {
        if (!state.wrongAnswers.includes(id)) {
          state.wrongAnswers.push(id);
          state.correctAnswers = state.correctAnswers.filter(
            (qid) => qid !== id
          );
        }
      }
    },
    resetGame: (state) => {
      state.askedQuestions = [];
      state.correctAnswers = [];
      state.wrongAnswers = [];
      state.currentIndex = 0;
      state.filterMode = "all";
    },
  },
});

export const {
  setDisplayMode,
  setFilterMode,
  nextQuestion,
  previousQuestion,
  answerQuestion,
  resetGame,
} = questionSlice.actions;

export default questionSlice.reducer;
