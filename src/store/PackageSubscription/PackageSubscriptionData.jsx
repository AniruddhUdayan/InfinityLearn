import { createSlice } from "@reduxjs/toolkit";
export const PackageSubscriptionData = createSlice({
  name: "Package Subscription Data",
  initialState: {
    selectedDuration: {},
    selectedAddons: [],
    phoneNumber: "",
    contactDetails: {},
    shippingAddress: {}
  },
  reducers: {
    setSelectedDuration(state, action) {
        state.selectedDuration = action.payload;
    },
    setSelectedAddons(state, action) {
        state.selectedAddons = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setContactDetails(state, action) {
        state.contactDetails = action.payload;
    },
    setShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    }
  },
});
export const { setSelectedDuration, setSelectedAddons, setPhoneNumber, setContactDetails, setShippingAddress } = PackageSubscriptionData.actions;
export default PackageSubscriptionData.reducer;
