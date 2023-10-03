import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {},
  reducers: {
    addFormData: (state, action) => {
      // Add the form data to the Redux state
      return { ...state, ...action.payload };
    },
  },
});

export const { addFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
