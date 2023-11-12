import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersSlice } from "./features/userSlice/usersSlice";

export const store = configureStore({
  reducer: { usersState: usersSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
