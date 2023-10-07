import React from "react";
import { UseSelector, useSelector } from "react-redux";
import MobileVerification from "./mobileVerify/mobileVerification";
import NewUser from "./newuser/newUser";
import ChooseClass from "./newuser/chooseClass";
function LoginPage() {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  return <div>{showOverlay && <MobileVerification />}</div>;
}
export default LoginPage;
