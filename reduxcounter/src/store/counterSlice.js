import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    savedValues: [],
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increase() {

        }
    }
})