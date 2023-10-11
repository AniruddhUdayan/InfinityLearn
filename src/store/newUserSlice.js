import { createSlice } from "@reduxjs/toolkit";
export const newUserSlice = createSlice({
  name: "new user",
  initialState: {
    name: "",
    class: {},
    course: [],
    isNameEntered:false,
    isGradeSelected:false,
    isExamSelected:false
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
    setIsNameEntered(state, action) {
      state.isNameEntered = action.payload;
    },
    setIsGradeSelected(state, action) {
      state.isGradeSelected = action.payload;
    },
    setIsExamSelected(state, action) {
      state.isExamSelected = action.payload;
    },
  },
});
export const { storeName, storeClass, storeCourse, setIsNameEntered, setIsGradeSelected, setIsExamSelected } = newUserSlice.actions;
export default newUserSlice.reducer;
