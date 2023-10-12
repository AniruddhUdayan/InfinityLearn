import { configureStore } from "@reduxjs/toolkit";
import mobVeriSlice from "./mobVeriSlice";
import newUserSlice from "./newUserSlice";
import modalToShow from './modalToShow';

export const store = configureStore({
  reducer: {
    mobileVerification: mobVeriSlice,
    newUser: newUserSlice,
    componentToShow: modalToShow
  },
});
