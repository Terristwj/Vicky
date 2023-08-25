import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";

// Add reducers here
export const store = configureStore({
    reducer: { nav: navReducer },
});
