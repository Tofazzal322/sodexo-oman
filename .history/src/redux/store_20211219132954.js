import { configureStore } from '@reduxjs/toolkit'
import services from "./slices/ServicesSlice";

export const store = configureStore({
  reducer: {
    books: services,
  },
});