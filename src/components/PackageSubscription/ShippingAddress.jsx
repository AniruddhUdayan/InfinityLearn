import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import "./css/packageSubscription.css";
import { useDispatch } from "react-redux";
import { setShippingAddress } from "@/store/PackageSubscription/PackageSubscriptionData";
import { setComponentToShow, setIsPopupShow } from "@/store/PackageSubscription/PackageSubscriptionPopup";
const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];
const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    flatHouse: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
  });

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. Collect the data into an array of objects
    // const collectedData = [];
    // for (const key in formData) {
    //   collectedData.push({ [key]: formData[key] });
    // }

    // console.log(collectedData); // This will log the array of objects to the console

    // ... You can then handle the data as needed ...
    dispatch(setShippingAddress(formData))
    dispatch(setComponentToShow(null))
    dispatch(setIsPopupShow(false))
  };

  return (
    <div>
      <div className=" w-full">
        <h2 className="text-[20px] mb-[32px] font-[600] ">
          please add your shipping address
        </h2>
        <Form onSubmit={handleSubmit} className=" max-2xl:w[525px]">
          {/* <Form.Group as={Col} controlId="phoneNumber" className="mb-[26px]">
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
                <Image src="/../tick1.svg" width={25} height={25} />
              </div>
            </div>
          </Form.Group> */}
          <Form.Group as={Col} className="mb-[22px]" controlId="flat house">
            <div className="mb-1  items-stretch flex">
              <input
                className="rounded-xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                border-[#E6E7E8]
                 focus:outline-none

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={formData.flatHouse}
                onChange={handleInputChange}
                placeholder="flat house no. building apartment"
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} className="mb-[22px]" controlId="area">
            <div className="mb-1  items-stretch flex">
              <input
                className="rounded-xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                border-[#E6E7E8]
                 focus:outline-none

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="area sector village"
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} className="mb-[22px]" controlId="landmark">
            <div className="mb-1  items-stretch flex">
              <input
                className="rounded-xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                border-[#E6E7E8]
                 focus:outline-none

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={formData.landmark}
                onChange={handleInputChange}
                placeholder="landmark"
              />
            </div>
          </Form.Group>

          <Form.Group as={Col} className="mb-[22px]" controlId="city">
            <div className="mb-1  items-stretch flex">
              <input
                className="rounded-xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl max-md:bg-white
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                border-[#E6E7E8]
                 focus:outline-none

                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="text"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="town/city"
              />
            </div>
          </Form.Group>

          <Form.Group as={Row} className="mb-[22px]" controlId="pincode">
            <div className="mb-1 items-stretch flex">
              <input
                className="rounded-xl max-2xl:w-[340px] max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl 
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                 focus:outline-none
                border-[#E6E7E8]
                 placeholder-[#9C9FA1]
                text-black max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px]  text-base md:text-lg border-[1px] "
                type="number"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="6 digit pincode"
              />
            </div>
          </Form.Group>
          <Form.Group as={Row} className="mb-[22px]" controlId="state">
            <div className="mb-1 items-stretch flex">
              <Form.Select
                className="rounded-xl max-2xl:w-[340px] w-ft max-md:h-12 max-md:placeholder:text-sm 
              max-md:rounded--3xl 
               max-md:placeholder-gray-500 
                placeholder-text:ml-3 
                 focus:outline-none
                border-[#E6E7E8]
                 placeholder-[#9C9FA1]
                 max-md:w-96  
                 pl-2 max-2xl:h-[48px] placeholder-[400] placeholder:[16px] 
                  text-base md:text-lg border-[1px]"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option className=" text-[#9C9FA1]" disabled value="">
                  Select a state
                </option>
                {statesOfIndia.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Form.Group>

          <div className="flex mt-[23px]  justify-center my-6">
            <Button
              type="submit"
              className="bg-primary rounded text-white"
              style={{ width: "352px", height: "48px" }}
            >
              <div className="flex font-[600] justify-center text-[16px] items-center">
                <div>Proceed to purchase</div>
                <GoArrowUpRight size={20} className="ml-2" />
              </div>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddress;
