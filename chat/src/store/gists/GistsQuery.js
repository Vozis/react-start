import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const gistsAPI = createApi({
  reducerPath: "gistsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    fetchAllGists: builder.query({
      query: (page) => ({
        url: "/gists/public",
        params: {
          _page: page,
        },
      }),
    }),
  }),
});
