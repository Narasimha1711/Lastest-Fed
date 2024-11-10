import { apiSlice } from './apiSlice';

export const addCartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
        query: (item) => ({
            method: 'POST',
            body: item,
            url: '/addToCart'
        })
      
    }),
    checkoutCart: builder.mutation({
        query: (item) => ({
            method: 'POST',
            url: '/bookAllCart',
            body: item
        })
      
    }),
    getCartItems: builder.query({
        query: () => '/addToCart'
    })
   
  
  }),
});

export const { useAddToCartMutation, useCheckoutCartMutation, useGetCartItemsQuery} = addCartApiSlice;
