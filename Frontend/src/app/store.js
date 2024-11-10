import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import searchReducer from './searchSlice'
import userSlice from './userSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['searchQuery'], // Only persist 'user' slice
};

const rootReducer = combineReducers({[apiSlice.reducerPath]: apiSlice.reducer, searchQuery: searchReducer, userDetails: userSlice })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),  // Adds middleware for caching
});

export const persistor = persistStore(store);
