import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    fullname: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.fullname = action.payload.fullname;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.fullname = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
