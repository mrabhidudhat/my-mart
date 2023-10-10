import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    accessToken: "",
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.fullname = action.payload.fullname;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = "";
      state.fullname = "";
      state.email = "";
      state.mobile = "";
      state.password = "";
      state.address = "";
      state.city = "";
      state.country = "";
      state.zipcode = "";
    },
    updateUserProfile: (state, action) => {
      const {
        fullname,
        email,
        mobile,
        password,
        address,
        city,
        country,
        zipcode,
      } = action.payload;
      state.fullname = fullname;
      state.email = email;
      state.mobile = mobile;
      state.password = password;
      state.address = address;
      state.city = city;
      state.country = country;
      state.zipcode = zipcode;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export default userSlice.reducer;
