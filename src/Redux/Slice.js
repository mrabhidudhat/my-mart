import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {},
  reducers: {
    addFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
