import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
  },
];

const workDetailSlice = createSlice({
  name: "workDetails",
  initialState,
  reducers: {
    addWorkDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addWorkDetails } = workDetailSlice.actions;
export default workDetailSlice.reducer;