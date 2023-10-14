import { configureStore } from "@reduxjs/toolkit";
import mobVeriSlice from "./mobVeriSlice";
import newUserSlice from "./newUserSlice";
import modalToShow from './modalToShow';
import examGradeSelection from './HomePage/examGradeSelection';
export const store = configureStore({
  reducer: {
    mobileVerification: mobVeriSlice,
    newUser: newUserSlice,
    componentToShow: modalToShow,
    examGradeSelection: examGradeSelection
  },
});
