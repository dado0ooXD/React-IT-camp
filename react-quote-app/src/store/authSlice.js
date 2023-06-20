import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  fullName: null,
  email: null,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setData(state, actions) {
      // console.log(state.id)
      const data = actions.payload;
      // console.log(data, "data");
      state = data;
      // console.log(state);
      return state;
    },
    logout(state, actions) {
      return initialState;
    },
  },
});