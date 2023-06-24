import { combineReducers } from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice'
import { authSlice } from "./authSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer
});