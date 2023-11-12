import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersStructure } from "../../types";
import { User } from "../../types";

const initialUsersState: UsersStructure = {
  user: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      currentState,
      action: PayloadAction<User[]>,
    ): UsersStructure => ({ ...currentState, user: action.payload }),
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
