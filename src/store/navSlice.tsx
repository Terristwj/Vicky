import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

/**
 *  Used to set the current navigation tab.
 *  E.g. 0 = Home, 1 = Landing page, 2 = 404 pages
 */
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        set: (state, action) => {
            state.count = action.payload;
        },
    },
});

export const { set } = navSlice.actions;

export default navSlice.reducer;
