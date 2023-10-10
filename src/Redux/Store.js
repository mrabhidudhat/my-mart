import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import formDataReducer from "./Slice";
import userReducer from "./UserSlice";
import profileReducer from "./ProfileSlice";

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    cart: cartReducer,
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
