import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    school: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  },
];

const educationDetailsSlice = createSlice({
  name: "educationDetails",
  initialState,
  reducers: {
    addEducationDetail: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEducationDetail } = educationDetailsSlice.actions;
export default educationDetailsSlice.reducer;
