import { createSlice } from "@reduxjs/toolkit";
export const bookSessionNewUser = createSlice({
  name: "Book New User",
  initialState: {
    name: "",
    class: {},
    course: [],
    isNameEntered:false,
    isGradeSelected:false,
    isExamSelected:false,
    isStudentProfileCompleted: false,
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
    setIsStudentProfileCompleted(state, action) {
        state.isStudentProfileCompleted = action.payload;
      },
  },
});
export const { storeName, storeClass, storeCourse, setIsNameEntered, setIsGradeSelected, setIsExamSelected, setIsStudentProfileCompleted } = bookSessionNewUser.actions;
export default bookSessionNewUser.reducer;
