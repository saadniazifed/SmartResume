import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  smallDescription: "",
};

const personalDetails = createSlice({
  name: "Personal Details",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setSmallDescription: (state, action) => {
      state.smallDescription = action.payload;
    },
  },
});

// Export the action functions
export const {
  setFullName,
  setEmail,
  setPhoneNumber,
  setAddress,
  setSmallDescription,
} = personalDetails.actions;

// Export the reducer.
export default personalDetails.reducer;
