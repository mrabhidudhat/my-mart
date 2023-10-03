import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./Slice";

const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default store;
