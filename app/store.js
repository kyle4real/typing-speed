import { configureStore } from "@reduxjs/toolkit";
import resultsSlice from "./slices/resultsSlice";
import uiSlice from "./slices/uiSlice";
import wordsSlice from "./slices/wordsSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        words: wordsSlice.reducer,
        results: resultsSlice.reducer,
    },
});

export default store;
