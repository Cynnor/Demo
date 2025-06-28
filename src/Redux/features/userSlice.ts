import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../models/user";

const initialState: null | User = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => action.payload,
    logout: () => initialState,
  },
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;