import { configureStore } from "@reduxjs/toolkit";
import matcherReducer from "./matchSlice";
import resultDialogReducer from "./resultDialogSlice";

export default configureStore({
  reducer: {
    matcher: matcherReducer,
    resultDialog: resultDialogReducer,
  },
});
