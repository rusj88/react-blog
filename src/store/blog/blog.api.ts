import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle, ServerResponse } from "../../models/models";

export const blogApi = createApi({
  reducerPath: "blog/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog.kata.academy/api/",
  }),
  endpoints: (build) => ({
    getArticles: build.query<ServerResponse, number>({
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
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery } = blogApi;
