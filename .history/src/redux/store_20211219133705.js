import { configureStore } from '@reduxjs/toolkit'
import bookReducer from "./slices/ServicesSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});