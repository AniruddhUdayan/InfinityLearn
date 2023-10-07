"use client";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showOverlayMode, storePhoneNumber } from "@/store/mobVeriSlice";
// import Image from "next/image";
// import { IoClose } from "react-icons/io5";
// import OtpComponent from "./otpComponent";

// import { BiArrowBack } from "react-icons/bi";

// function MobileVerification() {
//   const [number, setNumber] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const isNumberValid = number.length === 10 && /^\d+$/.test(number);
//   const phoneNumber = useSelector(
//     (state) => state.mobileVerification.phoneNumber
//   );
//   const isNumberValid1 = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
//   console.log(phoneNumber, "jkjkjvmvjv");
//   // const isNumberValid1 = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);

//   // useEffect(() => {
//   //   if (isNumberValid1) {
//   //     // When number becomes valid, send OTP
//   //     phoneNumberHandler();
//   //   }
//   // }, [isNumberValid1]);

//   const showOverlay = useSelector(
//     (state) => state.mobileVerification.showOverlay
//   );
//   const dispatch = useDispatch();

//   const handleToggleOverlay = () => {
//     dispatch(showOverlayMode(!showOverlay));
//   };

//   const phoneNumberHandler = () => {
//     dispatch(storePhoneNumber(number));
//     setOtpSent(true);
//   };

//   const handleNumberChange = (e) => {
//     const value = e.target.value;
//     if (value === "" || /^\d+$/.test(value)) {
//       setNumber(value);
//     }
//   };

//   if (otpSent) {
//     return <OtpComponent onClose={() => setOtpSent(false)} />;
//   }

//   return (
//     <div
//       className={`fixed inset-0 ${
//         showOverlay ? "block" : "hidden"
//       } bg-black bg-opacity-50 flex max-md:z-50 max-md:flex-col items-center justify-center`}
//     >
//       <div className="bg-white max-md:h-screen max-md:rounded-none  max-md:w-screen gap-10 flex p-8 rounded justify-evenly relative">
//         <Image
//           src="./login/mobVer/mobVer1.svg"
//           height={400}
//           width={400}
//           alt="mob-ver-1"
//           className=" max-md:hidden"
//         />
//         <div className="flex flex-col  max-md:my-12 max-md:justify-start justify-evenly text-black">
//           <div className=" flex flex-col gap-3">
//             <div>
//               <h2 className="text-2xl font-extrabold mb-2">
//                 drop your number, we've{" "}
//               </h2>
//               <h2 className="text-2xl font-extrabold mb-4">got the rest</h2>
//             </div>
//             <div>
//               <div className=" opacity-50 text-sm mb-2">
//                 enter your mobile number
//               </div>
//               <div className="flex items-center border-2 rounded-xl w-80">
//                 <select
//                   defaultValue="+91"
//                   className="appearance-none bg-transparent border-r-2 w-1/6  pl-4 focus:outline-none"
//                 >
//                   <option value="+91">+91</option>
//                   <option value="+1">+1</option>
//                 </select>
//                 <input
//                   className="appearance-none  border-l-0 flex-grow p-2 focus:outline-none"
//                   placeholder="Your number..."
//                   value={number}
//                   onChange={handleNumberChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             className={`mt-4 p-2 rounded ${
//               isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
//             } text-white max-md:hidden`}
//             disabled={!isNumberValid}
//             onClick={phoneNumberHandler}
//           >
//             Send OTP <span>&#8599;</span>
//           </button>
//         </div>

//         <button
//           onClick={handleToggleOverlay}
//           className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
//         >
//           <IoClose size={24} color="black" />
//         </button>
//       </div>
//       <footer className=" md:hidden flex border-opacity-20 justify-center  border-t-2  border-black h-20 w-full bg-white ">
//         <button
//           className={`my-4 p-2 w-80 rounded ${
//             isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
//           } text-white`}
//           disabled={!isNumberValid}
//           onClick={phoneNumberHandler}
//         >
//           Send OTP <span>&#8599;</span>
//         </button>
//       </footer>
//     </div>
//   );
// }

// export default MobileVerification;
