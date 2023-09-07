import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "../features/personalDetails/personalDetailSlice";
import educationDetailsReducer from "../features/educationDetails/educationDetailSlice";
import workDetailReducer from "../features/workDetailSlice/workDetailSlice";
import hobbyReducer from "../features/hobbySlice/hobbySlice";

const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    educationDetails: educationDetailsReducer,
    workDetails: workDetailReducer,
    hobbyDetails: hobbyReducer,
  },
});

export default store;
