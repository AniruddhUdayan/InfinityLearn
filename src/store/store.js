import { configureStore } from "@reduxjs/toolkit";
import mobVeriSlice from "./mobVeriSlice";
import newUserSlice from "./newUserSlice";
import modalToShow from './modalToShow';
import examGradeSelection from './HomePage/examGradeSelection';
import bookSessionNewUser from './BookSession/BookSessionNewUser';
import bookSessionPopup from './BookSession/BookSessionPopup';
import bookSessionData from './BookSession/BookSessionData';
import packageSubscriptionPopup from './PackageSubscription/PackageSubscriptionPopup'
import packageSubscriptionData from './PackageSubscription/PackageSubscriptionData'
export const store = configureStore({
  reducer: {
    mobileVerification: mobVeriSlice,
    newUser: newUserSlice,
    componentToShow: modalToShow,
    examGradeSelection: examGradeSelection,
    bookSessionNewUser: bookSessionNewUser,
    bookSessionPopup: bookSessionPopup,
    bookSessionData: bookSessionData,
    packageSubscriptionPopup: packageSubscriptionPopup,
    packageSubscriptionData: packageSubscriptionData,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  })
});
