import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storePhoneNumber } from "@/store/mobVeriSlice";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
const poppins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Bookdemo = () => {
  const [query, setQuery] = useState("");
//   const handleInputChange = (e) => {
//     // Only update the state if the entered value is a digit and the length is <= 10
//     if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
//       setQuery(e.target.value);
//     }
//   };
//   const handleToggleOverlay1 = () => {
//     // Check if the number is 10 digits
//     if (query.length === 10) {
//       // Here, you'd typically dispatch an action to update the state in Redux
//       dispatch(storePhoneNumber(query));
//       dispatch(showOverlayMode(!showOverlay));
//       // Any other logic you want to execute...
//     } else {
//       console.error("Phone number should be 10 digits!");
//     }
//   };
//   const showOverlay = useSelector(
//     (state) => state.mobileVerification.showOverlay
//   );

//   // Get the dispatch function to dispatch actions
//   const dispatch = useDispatch();

//   // Handler function to toggle the overlay
//   const handleToggleOverlay = () => {
//     // Assuming you want to toggle the state
//     dispatch(showOverlayMode(!showOverlay));
//   };
  return (
    <div className="bg-[#00364E] sm:flex h-auto flex-col sm:flex-row flex-wrap justify-center sm:py-[78px] sm:gap-[108px]  py-[32px] px-[20px]">
      <div className="flex flex-col gap-[20px]">
        <div
          className={`${poppins.className}  w-auto h-auto text-[#FFF] text-[48px] font-[700]`}
        >
          book a <span className="text-[#FCDE5A]">demo session</span>
        </div>
        <div
          className={`${poppins.className} w-auto h-auto text-[#FFF] text-[18px] font-[500]`}
        >
          a short sentence about how an academic counsellor would help the
          student.
        </div>
      </div>
      <div className="flex flex-col gap-1 w-auto justify-center mt-5">
        <div className="flex flex-row ">
          <div
            className={`${poppins.className} sm:h-[56px] h-[48px] sm:w-auto bg-white rounded-tl-[20px] rounded-bl-[20px] flex justify-center items-center  sm:px-[28px] text-[13px] sm:text-[16px] font-[500]  sm:gap-1`}
          >
            <span>+91 </span>
            <input
              className="outline-none w-auto"
              type="text"
              placeholder="enter your mobile number"
            //   value={query}
            //   onChange={handleInputChange}
            />
          </div>
          <button
            // onClick={handleToggleOverlay1}
            className="bg-[#007BFF] text-white px-[24px] text-[14px] sm:text-[16px] sm:px-[28px] rounded-tr-[20px] rounded-br-[20px]"
          >
            book now
          </button>
        </div>
        <div className={`text-white text-[16px] font-[500]`}>
          we will send an otp for verification
        </div>
      </div>
    </div>
  );
};

export default Bookdemo;
