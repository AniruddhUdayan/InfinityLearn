"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MobileVerification from "./mobileVerify/mobileVerification";
import NewUser from "./newuser/newUser";
import ChooseClass from "./newuser/chooseClass";
import { setIsExitingUser } from "../../store/mobVeriSlice";
import {verifyPhone} from '../../services/userServics';
function LoginPage() {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state) => state.mobileVerification.phoneNumber
  );
  const [isExitingUser, setExitingUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  useEffect(()=>{
    async function verifyMobileNumber() {
      let body = {
        isdCode:'+91',
        phone: phoneNumber
      }
      try {
        const userData = await verifyPhone(body);
        setExitingUser(userData?.existingUser);
        dispatch(setIsExitingUser(userData?.existingUser));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    }

    verifyMobileNumber();
  },[])
  if(isExitingUser && !loading){
    return <div>{showOverlay && <MobileVerification />}</div>;
  } else if(!loading) {
    return <div>{showOverlay && <NewUser />}</div>;
  }
}
export default LoginPage;
