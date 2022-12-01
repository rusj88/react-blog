import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../index";
import {
  IArticle,
  IEditUser,
  ILoginUser,
  IRegisterUser,
  IServerResponse,
  IUser,
} from "../../models/models";

export const blogApi = createApi({
  reducerPath: "blog/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog.kata.academy/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).blog.userToken;
      headers.set("Authorization", token ? `Token ${token}` : "");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getArticles: build.query<IServerResponse, number>({
      query: (page) => ({
        url: "articles",
        params: {
          limit: 5,
          offset: (page - 1) * 5,
        },
      }),
    }),
    getArticle: build.query<IArticle, string | undefined>({
      query: (slug) => ({
        url: `articles/${slug}`,
      }),
      transformResponse: (response: { article: IArticle }) => response.article,
    }),
    registerUser: build.mutation<void, IRegisterUser>({
      query: (userData) => ({
        url: `users`,
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: build.mutation<IUser, ILoginUser>({
      query: (userData) => ({
        url: `users/login`,
        method: "POST",
        body: userData,
      }),
      transformResponse: (response: { user: IUser }) => response.user,
    }),
    getUser: build.query<IUser, void>({
      query: () => ({
        url: `user`,
      }),
      transformResponse: (response: { user: IUser }) => response.user,
    }),
    updateUser: build.mutation<IUser, IEditUser>({
      query: (userData) => ({
        url: `user`,
        method: "PUT",
        body: userData,
      }),
      transformResponse: (response: { user: IUser }) => response.user,
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = blogApi;
