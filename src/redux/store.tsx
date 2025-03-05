import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice"; // 🔥 To‘g‘ri import qilish
import verifyReducer from './verify-slice'

export const store = configureStore({
  reducer: { modalReducer ,  verifyReducer },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
