import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: "words",
    initialState: {
        currentWord: "",
        upcomingWords: [],
        finishedWords: [],
    },
    reducers: {
        replaceState(state, action) {
            const { currentWord, upcomingWords } = action.payload;
            state.currentWord = currentWord;
            state.upcomingWords = upcomingWords;
        },
        nextWord(state) {
            state.finishedWords.push(state.currentWord);
            state.currentWord = state.upcomingWords[0];
            state.upcomingWords = state.upcomingWords.slice(1);
        },
    },
});

export const wordsActions = wordsSlice.actions;
export default wordsSlice;
