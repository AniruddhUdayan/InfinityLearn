import { createSlice } from "@reduxjs/toolkit";

export const mobVeriSlice = createSlice({
  name: "mobile verification",
  initialState: {
    showOverlay: false,
    phoneNumber: "",
    isExitingUser: true
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
      console.log(state)
    },
  },
});

export const { showOverlayMode, storePhoneNumber, setIsExitingUser } = mobVeriSlice.actions;
export default mobVeriSlice.reducer;
