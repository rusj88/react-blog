import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blog/blog.api";
import { blogReducer } from "./blog/tokenSlice";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
