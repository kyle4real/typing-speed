import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        menuOpen: false,
    },
    reducers: {
        menuToggle(state) {
            state.menuOpen = !state.menuOpen;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
