import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import formDataReducer from "./Slice";

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    cart: cartReducer,
  },
});

export default store;

