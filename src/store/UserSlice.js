import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    savedUsers: [],
  },
  reducers: {
    // save user reducer.
    userSave(state, action) {
      state.savedUsers = [...state.savedUsers, action.payload];
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
