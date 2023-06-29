import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import chatacterReducer from "./characterReducer";
export const store = configureStore({
  reducer: { chatacterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
