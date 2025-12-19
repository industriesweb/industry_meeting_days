import { configureStore } from "@reduxjs/toolkit";
import speakerReducer from "../slices/speakerSlice";
import mobileMenuReducer from "../slices/mobileMenu";

export const store = configureStore({
  reducer: {
    speaker: speakerReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
