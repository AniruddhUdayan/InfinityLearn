import { createSlice } from "@reduxjs/toolkit";

export const mobVeriSlice = createSlice({
  name: "mobile verification",
  initialState: {
    showOverlay: false,
    phoneNumber: "",
    isExitingUser: true,
    isOtpSent: false,
    isOtpVerified:false,
    isPhoneVerified:false
  },
  reducers: {
    // Note this change
    showOverlayMode(state, action) {
      state.showOverlay = action.payload;
    },
    storePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setIsExitingUser(state, action) {
      state.isExitingUser = action.payload;
    },
    setIsOtpSent(state, action) {
      state.isOtpSent = action.payload;
    },
    setIsOtpVerified(state, action) {
      state.isOtpVerified = action.payload;
    },
    setIsPhoneVerified(state, action) {
      state.isPhoneVerified = action.payload;
    },
  },
});

export const { showOverlayMode, storePhoneNumber, setIsExitingUser, setIsOtpSent, setIsOtpVerified, setIsPhoneVerified } = mobVeriSlice.actions;
export default mobVeriSlice.reducer;
