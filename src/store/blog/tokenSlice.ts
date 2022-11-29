import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: localStorage.getItem("userToken") ?? "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem("userToken", state.userToken);
    },
    signOut: (state) => {
      state.userToken = "";
      localStorage.removeItem("userToken");
    },
  },
});

export const { signIn, signOut } = tokenSlice.actions;
export const blogReducer = tokenSlice.reducer;
