import { createSlice } from "@reduxjs/toolkit";
export const bookSessionData = createSlice({
  name: "Book New User",
  initialState: {
    phoneNumber: "",
    selectedDate: "",
    selectedTime: "",
    relations:[],
    language:"",
    device:"",
    moreDetails:"",
    isPersonalizeCompleted:false
  },
  reducers: {
    // Note this change
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setSelectedTime(state, action) {
      state.selectedTime = action.payload;
    },
    setRelations(state, action) {
      state.relations = action.payload;
    },
    setLanguage(state, action) {
      state.isNameEntered = action.payload;
    },
    setDevice(state, action) {
      state.isGradeSelected = action.payload;
    },
    setMoreDetails(state, action) {
      state.isExamSelected = action.payload;
    },
    setIsPersonalizeCompleted(state, action) {
        state.isPersonalizeCompleted = action.payload;
      },
  },
});
export const {setPhoneNumber, setSelectedDate, setSelectedTime, setRelations, setLanguage, setDevice, setMoreDetails, setIsPersonalizeCompleted } = bookSessionData.actions;
export default bookSessionData.reducer;
