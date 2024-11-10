import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchItems: builder.mutation({
        query: (item) => ({
            url: '/allMedicines',
            method: 'POST',
            body: item,
          }),
      
    }),
   
  
   
  }),
});

export const { useSearchItemsMutation } = productsApiSlice;
