import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import wordsSlice from "./slices/wordsSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        words: wordsSlice.reducer,
    },
});

export default store;
