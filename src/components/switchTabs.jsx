"use client";
import React, { useState } from "react";
function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 200);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    // onTabChange(tab, index);
    onTabChange(index);
  };
  return (
    <div>
      <div className=" bg-white text-black  ">
        <div className=" h-full mt-1 flex items-center relative">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`h-full  px-1 text-center text-base cursor-pointer   mt-2 justify-center items-center 
              ${selectedTab == index ? " text-black" : ""}  `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 200 }}
            >
              {tab}
            </span>
          ))}
          <span
            className=" border-b-2   border-blue-500 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500  mt-2"
            style={{ left, height: 30, width: 190 }}
          ></span>
        </div>
      </div>
    </div>
  );
}
export default SwitchTabs;
