import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name: "results",
    initialState: {
        results: [],
        latestResult: [],
    },
    reducers: {
        replaceLatestResult(state, action) {
            const { resultObj } = action.payload;
            state.latestResult = [resultObj];
        },
    },
});

export const resultsActions = resultsSlice.actions;
export default resultsSlice;
