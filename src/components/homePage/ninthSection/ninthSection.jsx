import React, { useState } from "react";
import "./ninthSection.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const faq = [
  {
    id: 0,
    ques: "Will Infinity Learn classes be live or recorded?",
    ans: "Each subject will have live classes (if students miss one, they can watch recorded lectures).",
  },
  {
    id: 1,
    ques: "Will Infinity Learn classes be live or recorded?",
    ans: "Each subject will have live classes (if students miss one, they can watch recorded lectures).",
  },
  {
    id: 2,
    ques: "Will Infinity Learn classes be live or recorded?",
    ans: "Each subject will have live classes (if students miss one, they can watch recorded lectures).",
  },
  {
    id: 3,
    ques: "Will Infinity Learn classes be live or recorded?",
    ans: "Each subject will have live classes (if students miss one, they can watch recorded lectures).",
  },
  {
    id: 4,
    ques: "Will Infinity Learn classes be live or recorded?",
    ans: "Each subject will have live classes (if students miss one, they can watch recorded lectures).",
  },
];

function FaqBox(props) {
  const [showAns, setShowAns] = useState(false);

  const toggleAnswer = () => {
    setShowAns(!showAns);
  };

  return (
    <div className="faq-box  p-10">
      <div className="flex flex-col">
        <div className="flex">
          <div className="faq-ques z-10">{props.data.id}.</div>
          <div className="faq-ques z-10">{props.data.ques}</div>
        </div>
        {showAns ? <div className="faq-ans z-10 ">{props.data.ans}</div> : null}
      </div>
      <div className=" left-full  hover:cursor-pointer " onClick={toggleAnswer}>
        {showAns ? (
          <RiArrowDropUpLine size={30} />
        ) : (
          <RiArrowDropDownLine size={30} />
        )}
      </div>
    </div>
  );
}

function NinthSection() {
  return (
    <div className="ninthSection gap-[20px] px-[112px] ">
      <div className="ns-h1">FAQ’s</div>

      {faq.map((item, index) => (
        <FaqBox key={index} data={item} />
      ))}
    </div>
  );
}

export default NinthSection;
