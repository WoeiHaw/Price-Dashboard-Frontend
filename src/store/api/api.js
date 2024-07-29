
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coffeApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getCoffePrice: builder.query({
      query: () => ({ url: "/coffe" }),
      merge :(existing,incoming)=>({
        ...existing,
        ...incoming
      })
    }),
    overrideExisting: true,
  }),
});
export const { useGetCoffePriceQuery } = coffeApi;
