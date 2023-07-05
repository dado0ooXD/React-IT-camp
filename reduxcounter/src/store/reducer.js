import { combineReducers } from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice'
import { authSlice } from "./authSlice";
import { themeSlice } from "./themeSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
  theme: themeSlice.reducer
});