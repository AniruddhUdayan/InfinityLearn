import { createSlice } from "@reduxjs/toolkit";

export const examGradeSelection = createSlice({
  name: "Exam Garde Selection",
  initialState: {
    showGradePopup: false,
    selectedExam: "",
    selectedGrade: "",
    grades:[11,12,13]
  },
  reducers: {
      // Note this change
      setShowGradePopup(state, action) {
          state.showGradePopup = action.payload;
      },
      setSelectedExam(state, action) {
          state.selectedExam = action.payload;
      },
      setSelectedGrade(state, action) {
          state.selectedGrade = action.payload;
      },
      setGrades(state, action) {
          state.grades = action.payload;
      }
  },
});

export const { setShowGradePopup, setSelectedExam, setSelectedGrade, setGrades } = examGradeSelection.actions;
export default examGradeSelection.reducer;
