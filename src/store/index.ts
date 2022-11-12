import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blog/blog.api";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});
