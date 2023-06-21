import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
}

export const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    reducers: {
        setFavourites(state, actions) {
            const quote = actions.payload;
            state.favourites.push(quote);
            return state;
        }, 
        clearFavourites(state, actions) {
            return initialState;
        }
    }
})