import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IArticle,
  ILoginUser,
  IRegisterUser,
  IServerResponse,
  IUser,
} from "../../models/models";

export const blogApi = createApi({
  reducerPath: "blog/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog.kata.academy/api/",
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
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = blogApi;
