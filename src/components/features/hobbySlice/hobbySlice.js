import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    hobbies: "",
  },
];

const hobbyDetailSlice = createSlice({
  name: "hobbyDetails",
  initialState,
  reducers: {
    addHobbyDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addHobbyDetails } = hobbyDetailSlice.actions;
export default hobbyDetailSlice.reducer;
