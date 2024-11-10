import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',                    // Key in the Redux store for the slice
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9001', credentials: 'include', }),  // Base URL for API calls
  endpoints: (builder) => ({
    
  }),          // Initial endpoints left empty
});

export default apiSlice;

