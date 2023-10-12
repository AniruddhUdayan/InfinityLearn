import { createSlice } from "@reduxjs/toolkit";
export const modalToShow = createSlice({
  name: "new user",
  initialState: {
    componentName:null
  },
  reducers: {
    // Note this change
    setComponentToShow(state, action) {
      state.componentName = action.payload;
    },
  },
});
export const { setComponentToShow} = modalToShow.actions;
export default modalToShow.reducer;
