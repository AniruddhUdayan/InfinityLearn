import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
const NewUserDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the phone number has 10 digits
    if (phoneNumber.length !== 10) {
      setPhoneNumberError(true);
      return;
    }

    // If the phone number is valid, proceed with saving the data
    setPhoneNumberError(false);

    // You can now save the full name and email
    // For example:
    const userData = {
      fullName,
      email,
    };

    // You can send the userData to your backend or handle it as needed

    // Reset the form fields
    setPhoneNumber("");
    setFullName("");
    setEmail("");
  };

  return (
    <div>
      <div className=" w-full">
        <h2 className="text-[20px] mb-[32px] font-[600] ">
          please add your contact details
        </h2>
        <Form onSubmit={handleSubmit} className=" max-2xl:w[525px]">
          <Form.Group as={Col} controlId="phoneNumber" className="mb-[26px]">
            <Form.Label
              column
              className="font-[400] mb-[8px] w-full text-[#080E14] text-[14px]"
            >
              enter your phone number
            </Form.Label>
            <div className="mb-1 max-2xl:w-[340px] items-stretch flex">
              <div
                className="rounded-s-2xl rounded-e-none 
              border-[1px] border-r-0 border-[#9C9FA1]
              max-2xl:bg-transparent max-md:bg-white px-4 py-2 max-md:text-[#080E14] max-2xl:text-black pe-2 flex justify-center items-center"
              >
                +91
              </div>
              <input
                className="rounded-2xl max-2xl:w-[320px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 rounded-l-none rounded-r-none
                 focus:outline-none
                 border-[#9C9FA1]

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  border-l-0 border-r-0
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={phoneNumber}
                placeholder="enter your mobile number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                // value={query}
                // onChange={handleInputChange}
              />

              <div
                className="rounded-2xl rounded-s-none 
              border-[1px] border-l-0 border-[#9C9FA1]
              max-2xl:bg-transparent max-md:bg-white w-[50px]
               max-md:text-[#080E14] max-2xl:text-black 
              pe-2 flex justify-center items-center"
              >
                <Image src="/../tick1.svg" width={25} height={25}  alt=""/>
              </div>
            </div>
          </Form.Group>

          <Form.Group as={Col} className="mb-[26px]" controlId="fullName">
            <Form.Label
              column
              className="font-[400] mb-[8px] text-[#080E14] text-[14px]"
            >
              enter students name
            </Form.Label>
            <div className="mb-1  items-stretch flex">
              <input
                className="rounded-2xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                border-[#9C9FA1]
                 focus:outline-none

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={fullName}
                placeholder="eg: Rhiddit Paul"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </Form.Group>

          <Form.Group as={Row} className="mb-[26px]" controlId="email">
            <Form.Label
              column
              className="font-[400] mb-[8px] text-[#080E14] text-[14px]"
            >
              enter students email id
            </Form.Label>
            <div className="mb-1 items-stretch flex">
              <input
                className="rounded-2xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl 
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                 focus:outline-none
                border-[#9C9FA1]
                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={email}
                placeholder="eg: rhidditpaul@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Form.Group>

          <div className="flex mt-[220px] gap-3 justify-evenly m-6">
            <button
              type="submit"
              className="btn l rounded btn-outline-secondary"
              style={{ width: "168px", height: "48px" }}
            >
              <div className="flex justify-center items-center">
                <div className="text-secondary">Back</div>
              </div>
            </button>
            <Button
              type="submit"
              className="bg-primary rounded text-white"
              style={{ width: "168px", height: "48px" }}
            >
              <div className="flex justify-center items-center">
                <div>Proceed</div>
                <GoArrowUpRight size={20} className="ml-2" />
              </div>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewUserDetails;
