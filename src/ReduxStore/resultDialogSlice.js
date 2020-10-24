import { createSlice } from "@reduxjs/toolkit";

export const resultDialogSlice = createSlice({
  name: "resultDialog",
  initialState: {
    open: false,
  },
  reducers: {
    resultDialogShow: (state, action) => {
      state.open = true;
    },
    resultDialogClose: (state, action) => {
      state.open = false;
    },
  },
});

export const {
  resultDialogShow,
  resultDialogClose,
} = resultDialogSlice.actions;

export const selectResultDialogOpen = (state) => state.resultDialog.open;

export default resultDialogSlice.reducer;
