import { createSlice } from "@reduxjs/toolkit";
const packageSubscriptionPopup = createSlice({
  name: "package subscription popup",
  initialState: {
    isPopupShow: false,
    componentName: null
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
export const { setIsPopupShow, setComponentToShow} = packageSubscriptionPopup.actions;
export default packageSubscriptionPopup.reducer;
