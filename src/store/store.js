import { configureStore } from "@reduxjs/toolkit";
import mobVeriSlice from "./mobVeriSlice";
import newUserSlice from "./newUserSlice";

export const store = configureStore({
  reducer: {
    mobileVerification: mobVeriSlice,
    newUser: newUserSlice,
  },
});
