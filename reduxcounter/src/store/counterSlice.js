import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    savedValues: [],
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increase(state, actions) {
            state.counter = state.counter + 1;
            return state;
        },
        reset() {
            return initialState;
        },
        saveValues(state, actions) {
            const val = actions.payload;
       state.savedValues.push(val)
            return state
        }
    
    }
})