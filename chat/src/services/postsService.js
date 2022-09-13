import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: (limit = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
