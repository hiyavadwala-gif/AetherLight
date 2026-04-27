import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Project/Slice/AuthSlice";

export const User_store = configureStore({
  reducer: {
    auth: authReducer,
  },
});