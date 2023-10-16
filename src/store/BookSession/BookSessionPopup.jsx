import { createSlice } from "@reduxjs/toolkit";
export const bookSessionPopup = createSlice({
  name: "new user",
  initialState: {
    isPopupShow: false,
    componentName:null
  },
  reducers: {
    setIsPopupShow(state, action) {
        state.isPopupShow = action.payload;
      },
    setComponentToShow(state, action) {
      state.componentName = action.payload;
    },
  },
});
export const { setIsPopupShow, setComponentToShow} = bookSessionPopup.actions;
export default bookSessionPopup.reducer;
