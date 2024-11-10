import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userDetails: builder.query({
        query: () => '/user-info'
      
    }),
   
  
   
  }),
});

export const { useUserDetailsQuery } = userApiSlice;
