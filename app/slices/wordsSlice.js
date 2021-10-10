import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: "words",
    initialState: {
        words: [],
        currentWord: "",
        correctWords: [],
        incorrectWords: [],
    },
    reducers: {
        replaceState(state, action) {
            const { currentWord, wordsArr } = action.payload;
            state.words = wordsArr;
            state.currentWord = currentWord;
        },
        nextWord(state) {
            state.currentWord = state.words[state.currentWord.id + 1];
        },
        pushNewWord(state, action) {
            const { wordsArr } = action.payload;
            const newId = state.words[state.words.length - 1].id + 1;
            const randomWord = wordsArr[Math.ceil(Math.random() * wordsArr.length - 1)].word;
            const word = { word: randomWord, id: newId };
            state.words.push(word);
        },
        addCorrectWord(state, action) {
            state.correctWords.push(action.payload);
        },
        addIncorrectWord(state, action) {
            state.incorrectWords.push(action.payload);
        },
    },
});

export const wordsActions = wordsSlice.actions;
export default wordsSlice;
