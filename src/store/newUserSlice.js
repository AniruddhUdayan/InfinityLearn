import { createSlice } from "@reduxjs/toolkit";
export const newUserSlice = createSlice({
  name: "new user",
  initialState: {
    name: "",
    class: "",
    course: "",
  },
  reducers: {
    // Note this change
    storeName(state, action) {
      state.name = action.payload;
    },
    storeClass(state, action) {
      state.class = action.payload;
    },
    storeCourse(state, action) {
      state.course = action.payload;
    },
  },
});
export const { storeName, storeClass, storeCourse } = newUserSlice.actions;
export default newUserSlice.reducer;
