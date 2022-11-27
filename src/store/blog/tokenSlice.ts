import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: localStorage.getItem("userToken") ?? "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload; // eslint-disable-line no-param-reassign
      localStorage.setItem("userToken", state.userToken);
    },
    signOut: (state) => {
      state.userToken = "";
      localStorage.removeItem("userToken");
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = tokenSlice.actions;

export const blogActions = tokenSlice.actions;
export const blogReducer = tokenSlice.reducer;
