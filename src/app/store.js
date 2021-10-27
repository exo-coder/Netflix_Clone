import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../app/userSlice"

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });