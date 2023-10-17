"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeName } from "@/store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import ChooseClass from "./chooseClass";

function NewUser() {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  function handleBack() {
    setShowClassOverlay(true);
  }
  const [showClassOverlay, setShowClassOverlay] = useState(true);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const storeNameHandler = () => {
    dispatch(storeName(name));
    setShowClassOverlay(false);
    // dispatch(showOverlayMode(!showOverlay));
  };
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };

  return (
    <div>
      {showClassOverlay ? (
        <div
          className={`fixed inset-0 max-md:z-50 ${
            showOverlay ? "block" : "hidden"
          } bg-black bg-opacity-50 max-md:h-screen max-md:flex-col flex items-center justify-center`}
        >
          <div className="bg-white max-md:h-screen max-md:rounded-none  max-md:w-screen gap-10   flex p-8 rounded-xl justify-evenly relative">
            <Image
              src="/login/newUser/newUser1.webp"
              className=" max-md:hidden"
              height={400}
              width={400}
              alt="newUser-ver-1"
            />
            <div className="flex flex-col max-md:my-12 max-md:justify-start justify-evenly text-black">
              <div className=" flex flex-col gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold mb-2">
                    tell us your name,our next{" "}
                  </h2>
                  <h2 className="text-2xl font-extrabold mb-4">topper!</h2>
                </div>
                <div>
                  <div className=" opacity-50 max-md:hidden text-sm mb-2">
                    enter your name
                  </div>
                  <div className="flex items-center border-2 rounded-xl w-80">
                    <input
                      className="appearance-none border-l-0 flex-grow p-2 focus:outline-none"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                className={`mt-4 max-md:hidden p-2 rounded bg-blue-500 text-white ${
                  !name ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={storeNameHandler}
                disabled={!name}
              >
                continue <span>&#8599;</span>
              </button>
            </div>
            <button
              onClick={handleToggleOverlay}
              className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
            >
              <IoClose size={24} color="black" />
            </button>
          </div>
          <footer className=" md:hidden flex border-opacity-20 justify-center  border-t-2  border-black h-20 w-full bg-white ">
            <button
              className={`mt-4 p-2 w-80 mb-4  rounded-xl bg-blue-500 text-white ${
                !name ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={storeNameHandler}
              disabled={!name}
            >
              continue <span>&#8599;</span>
            </button>
          </footer>
        </div>
      ) : (
        <ChooseClass handleBack={handleBack} />
      )}
    </div>
  );
}
export default NewUser;
