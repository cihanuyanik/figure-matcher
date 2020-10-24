import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { randomInt } from "../utils";

const getInitialState = () => {
  return {
    MAX_SET_NUMBER: 10,
    exerciseSet: [],
    currentFigureSet: -1,
    currentFigureSetIndex: -1,
    currentRefFigure: -1,
    currentExpectedAnswer: -1,
    totalAnswer: 0,
    wrongAnsweredFigureSets: [],
  };
};

export const matcherSlice = createSlice({
  name: "matcher",
  initialState: getInitialState(),
  reducers: {
    restart: (state, action) => {
      return getInitialState();
    },
    initExerciseSet: (state, action) => {
      const set = [];
      for (let i = 0; i < state.MAX_SET_NUMBER; i++) {
        set.push(i);
      }

      for (let i = 0; i < state.MAX_SET_NUMBER; i++) {
        const fIndex = randomInt(0, state.MAX_SET_NUMBER);
        const sIndex = randomInt(0, state.MAX_SET_NUMBER);
        if (fIndex === sIndex) continue;
        const tmp = set[fIndex];
        set[fIndex] = set[sIndex];
        set[sIndex] = tmp;
      }

      return { ...state, exerciseSet: set };
    },
    nextFigureSet: (state, action) => {
      state.currentFigureSetIndex++;
      if (state.currentFigureSetIndex >= state.MAX_SET_NUMBER) {
        state.currentFigureSetIndex = 0;
      }
      state.currentFigureSet = state.exerciseSet[state.currentFigureSetIndex];

      if (randomInt(0, 2) === 0) {
        // One of the exists images [0,1,2,3]
        state.currentRefFigure = randomInt(0, 4);
        state.currentExpectedAnswer = 1;
      } else {
        // None exists one
        state.currentRefFigure = 4;
        state.currentExpectedAnswer = 0;
      }
    },
    answerFigureSet: {
      prepare: (response) => {
        return { payload: { response } };
      },
      reducer: (state, action) => {
        state.totalAnswer++;
        if (state.currentExpectedAnswer !== action.payload.response) {
          const wrongAnswer = {
            figureSet: state.currentFigureSet,
            refFigure: state.currentRefFigure,
            expectAnswer: state.currentExpectedAnswer,
            givenAnswer: action.payload.response,
          };
          state.wrongAnsweredFigureSets.push(wrongAnswer);
        }
      },
    },
  },
});

export const {
  restart,
  initExerciseSet,
  nextFigureSet,
  answerFigureSet,
} = matcherSlice.actions;

export const selectCurrentFigureSet = (state) => state.matcher.currentFigureSet;
export const selectCurrentRefFigure = (state) => state.matcher.currentRefFigure;
export const selectTotalAnswer = (state) => state.matcher.totalAnswer;
export const selectWrongAnsweredFigureSets = (state) =>
  state.matcher.wrongAnsweredFigureSets;
export default matcherSlice.reducer;
