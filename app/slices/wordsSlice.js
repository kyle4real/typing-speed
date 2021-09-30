import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: "words",
    initialState: {
        words: [],
        currentWord: "",
        upcomingWords: [],
        finishedWords: [],
        correctWords: [],
    },
    reducers: {
        replaceState(state, action) {
            const { currentWord, upcomingWords, wordsArr } = action.payload;
            state.words = wordsArr;
            state.currentWord = currentWord;
            state.upcomingWords = upcomingWords;
        },
        nextWord(state) {
            state.finishedWords.push(state.currentWord);
            state.currentWord = state.upcomingWords[0];
            state.upcomingWords = state.upcomingWords.slice(1);
            // Push new word
            const newId = state.words[state.words.length - 1].id + 1;
            const randomWord = state.words[Math.ceil(Math.random() * state.words.length - 1)].word;
            state.words.push({ word: randomWord, id: newId });
            state.upcomingWords.push(newId);
        },
        addWordToUpcoming(state) {},
        addCorrectWord(state, action) {
            state.correctWords.push(action.payload);
        },
    },
});

export const wordsActions = wordsSlice.actions;
export default wordsSlice;
