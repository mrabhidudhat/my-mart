import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import formDataReducer from "./Slice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
