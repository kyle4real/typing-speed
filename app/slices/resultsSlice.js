import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name: "results",
    initialState: {
        results: [],
    },
    reducers: {},
});

export const resultsActions = resultsSlice.actions;
export default resultsSlice;
