import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            if (state.theme === "light") {
                state.theme = "dark"
            }
            else {
                state.theme = "light"
            }
   }
    }
});