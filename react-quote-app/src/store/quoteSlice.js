import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
    report: [],
}

export const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    reducers: {
        setFavourites(state, actions) {
            const quote = actions.payload;
            const idArr = state.favourites.map((item, index) => item._id);
            if (!idArr.includes(quote._id)) {
                state.favourites.push(quote);
            }
            return state;
        }, 
        clearFavourites(state, actions) {
            return initialState;
        },
        addReport(state, actions) {
            const report = actions.payload;
            state.report.push(report);
            return state;
        }
    }
})