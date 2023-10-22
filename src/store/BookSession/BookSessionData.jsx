import { createSlice } from "@reduxjs/toolkit";
export const bookSessionData = createSlice({
  name: "Book Session Data",
  initialState: {
    phoneNumber: "",
    selectedDate: new Date(),
    selectedTime: "",
    relations:[],
    language:"",
    device:"",
    moreDetails:"",
    isPersonalizeStarted:false
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
      state.language = action.payload;
    },
    setDevice(state, action) {
      state.device = action.payload;
    },
    setMoreDetails(state, action) {
      state.moreDetails = action.payload;
    },
    setIsPersonalizeStarted(state, action) {
        state.isPersonalizeStarted = action.payload;
      },
  },
});
export const {setPhoneNumber, setSelectedDate, setSelectedTime, setRelations, setLanguage, setDevice, setMoreDetails, setIsPersonalizeStarted } = bookSessionData.actions;
export default bookSessionData.reducer;
