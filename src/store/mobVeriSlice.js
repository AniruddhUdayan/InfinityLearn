import { createSlice } from "@reduxjs/toolkit";

export const mobVeriSlice = createSlice({
  name: "mobile verification",
  initialState: {
    showOverlay: false,
    phoneNumber: "",
  },
  reducers: {
    // Note this change
    showOverlayMode(state, action) {
      state.showOverlay = action.payload;
    },
    storePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { showOverlayMode, storePhoneNumber } = mobVeriSlice.actions;
export default mobVeriSlice.reducer;
