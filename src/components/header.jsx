"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdCall, MdClose } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import subItem from "../utils/infoHeader";

const items = ["courses", "study material", "results", "more"];
function BooksCard(props) {
  return (
    <div
      className={`${
        props.svgPresent === null ? "" : " ml-20  "
      }text-base  grid grid-cols-2  max-md:w-full max-md:ml  max-md:flex max-md:flex-col text-black gap-2 `}
    >
      {props.data?.map((item, index) => (
        <div key={index} className=" rounded-lg hover:bg-blue-200   p-1 ">
          {item}
        </div>
      ))}
    </div>
  );
}

function SubItemCard(props) {
  const handleClick = () => {
    if (props.subItem) {
      props.onSubMenuToggle(props.index, props.subIndex);
    }
    if (props.onDoubtClick) {
      props.onDoubtClick();
    }
  };

  return (
    <div
      className="flex items-center hover:cursor-pointer  justify-between w-96 h-20 p-1 bg-white text-black rounded-lg cursor-pointer z-50"
      onClick={handleClick}
    >
      {props.data.listHeading === true ? (
        <div className="px-4">{props.data.name}</div>
      ) : (
        <div className="flex-grow flex items-center justify-between">
          {props.data.svg !== "null" && (
            <Image
              src={props.data.svg}
              height={40}
              width={40}
              alt="SubItemCard image"
            />
          )}
          <div className="flex-grow flex flex-col justify-center items-start ml-3 px-2 pr-9">
            <div className="text-left flex-grow">{props.data.name}</div>
            <div className="text-sm flex flex-col opacity-50 text-left">
              {props.data.subItemAbout}
            </div>
          </div>
          {props.data.listPresent === "true" && (
            <IoIosArrowForward className="self-center " />
          )}
        </div>
      )}
    </div>
  );
}

function ResHeader({
  activeItem,
  foundItem,
  toggleSubMenu,
  toggleSubMenuItems,
  // toggleBooksCardVisibility,
  activeSubItem,
  foundSubItem,
  // visibleBooksCards,
  closeResHeader,
}) {
  const [visibleBooksCards, setVisibleBooksCards] = useState([]);
  const innerClickHandler = (event) => {
    event.stopPropagation();
    // Your logic for handling the click inside the component
  };
  const toggleBooksCardVisibility = (index) => {
    console.log("called");
    if (visibleBooksCards.includes(index)) {
      // Hide the BooksCard
      setVisibleBooksCards((prev) => prev.filter((i) => i !== index));
    } else {
      // Show the BooksCard
      setVisibleBooksCards((prev) => [...prev, index]);
    }
  };
  const [textHead, setTexthead] = useState(null);
  console.log(activeSubItem, "resHeader  1");
  console.log("resHeader   2", foundSubItem);
  useEffect(() => {
    // Whenever activeItem changes, update foundItem
    console.log("activeSubItem Updated:    3", activeSubItem);
    if (activeSubItem !== null && activeItem !== null) {
      // const item = foundItem.subItems?.find(
      //   (item) => item.id === activeSubItem
      // );
      const item = subItem?.find((item) => item.id === activeSubItem[0]);
      const tryy = item?.subItems?.find((item) => item.id === activeSubItem[1]);
      console.log(tryy);
      setTexthead(tryy.name);
    } else {
    }
  }, [activeItem, activeSubItem]);
  const [show1, setShow1] = useState(" hidden ");
  function showHeader2() {
    setShow1(show1 == " hidden " ? "" : " hidden ");
    // if(activeSubItem!=null)
  }

  return (
    <div className="md:hidden fixed  overflow-y-auto no-scrollbar flex-col top-0 left-0 w-full h-screen  bg-white text-black z-50 flex ">
      <div className=" flex py-7 px-2 bg-white justify-end">
        <button
          className=" justify-end items-end close-button"
          onClick={closeResHeader}
        >
          <MdClose size={24} />
        </button>
      </div>
      <div className=" flex-grow">
        <div className="flex max-md:hidde flex-col justify-evenly">
          {items?.map((item, index) => (
            <div key={index} className="relative">
              <li
                className={`flex px7 py-4 justify-normal hover:cursor-pointer items-center border-b-2 border-opacity-50   hover:border-2  p-1 `}
                onClick={() => toggleSubMenu(index)}
                // onMouseEnter={() => hoverHandler1(index)}
              >
                <div className="px-2 w-1/2">{item}</div>
                <div className=" w-1/2 flex px-2 justify-end ">
                  <IoIosArrowDown size={15} />
                </div>
              </li>
              {index === activeItem && foundItem && (
                <ul className=" w-fit    left-0 mt-2 bg-white  text-white border-white border-2 rounded-lg">
                  {foundItem?.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4  py-2 hover:cursor-pointer  "
                      onClick={showHeader2}
                      // onClick={() => toggleSubMenuItems(index, subItem.id)}
                      // onMouseEnter={() => hoverHandler2(index)}
                    >
                      <SubItemCard
                        data={subItem}
                        subItem={true}
                        index={index}
                        subIndex={subItem.id}
                        onSubMenuToggle={toggleSubMenuItems}
                      />
                      <div
                        onClick={innerClickHandler}
                        className={` ${show1}  md:hidden fixed hover:cursor-auto overflow-y-auto no-scrollbar flex-col top-0 left-0 w-full h-screen bg-opacity-75 bg-white text-black z-50 flex `}
                      >
                        <div className="  flex py-7 w-full items-center justify-stretch">
                          <div className=" flex px-6">
                            <button
                              className=" justify-end items-start close-button"
                              onClick={showHeader2}
                            >
                              <BsArrowLeft size={24} />
                            </button>
                            <div className=" px-2 pl-4">{textHead}</div>
                          </div>
                          <button
                            className=" pl-40 ml-3 justify-end items-end close-button"
                            onClick={showHeader2}
                          >
                            <MdClose size={24} />
                          </button>
                        </div>
                        {activeSubItem != null && (
                          <ul className=" rounded-lg max-md:w-full max-md:items-start  w-fit bg-white  border-white border-2 top-0 left-full flex flex-col  ">
                            {Array.isArray(foundSubItem) &&
                              foundSubItem.map((subItem, listItemIndex) => (
                                <div
                                  key={listItemIndex}
                                  className="flex items-center flex-col"
                                >
                                  <div
                                    // onClick={() =>
                                    //   toggleBooksCardVisibility(listItemIndex)
                                    // }
                                    className=" doubt "
                                  >
                                    <SubItemCard
                                      data={subItem}
                                      onDoubtClick={() =>
                                        toggleBooksCardVisibility(listItemIndex)
                                      }
                                      // bookPresent={subItem.listPresent}
                                    />
                                  </div>
                                  {visibleBooksCards.includes(
                                    listItemIndex
                                  ) && (
                                    <BooksCard
                                      data={subItem.books}
                                      svgPresent={subItem.svg}
                                    />
                                  )}
                                </div>
                              ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className=" md:hidden gap-3 flex border-opacity-20 justify-center  border-t-2  border-black h-20 w-full bg-white ">
        <Image
          src="/header/whatsapp.svg"
          height={48}
          width={48}
          alt="whatsapp"
        />
        <button
          className={`my-4 gap-3 p-2 w-72 flex rounded-2xl justify-center items-center bg-blue-500  text-white`}
        >
          <div>
            <MdCall size={20} />
          </div>
          <div>1800-419-427</div>
        </button>
      </footer>
    </div>
  );
}
function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState([false, false]);
  const [foundItem, setFoundItem] = useState(null);
  const [foundSubItem, setFoundSubItem] = useState(null);

  useEffect(() => {
    // Whenever activeItem changes, update foundItem
    if (activeItem !== null) {
      const item = subItem.find((item) => item.id === activeItem);
      setFoundItem(item);
    } else {
      setFoundItem(null);
    }
  }, [activeItem,activeSubItem]);

  useEffect(() => {
    // Whenever activeItem changes, update foundItem
    // console.log("activeSubItem Updated:    3", activeSubItem);
    if (activeSubItem !== null && activeItem !== null) {
      // const item = foundItem.subItems?.find(
      //   (item) => item.id === activeSubItem
      // );
      const item = subItem?.find((item) => item.id === activeSubItem[0]);
      const tryy = item?.subItems?.find((item) => item.id === activeSubItem[1]);
      setFoundSubItem(tryy?.lists);
    } else {
      setFoundSubItem(null);
    }
  }, [activeSubItem]);

  const toggleSubMenu = (index) => {
    setActiveItem(index === activeItem ? null : index);
    setActiveSubItem(null);
  };
  const toggleSubMenuItems = (index, subItem) => {
    setActiveSubItem([index, subItem]);
  };
  const hoverHandler1 = (index) => {
    if (activeItem !== null) {
      setFoundItem(null);
      setFoundSubItem(null);

      setActiveSubItem(null);
    }
    setActiveItem(index === activeItem ? null : index);
  };
  const hoverHandler2 = (index) => {
    setActiveSubItem(activeSubItem != null ? index : null);
  };
  // console.log("active Item", activeItem);

  // console.log("active SubItem", activeSubItem);

  // console.log("foundItem", foundItem);
  // console.log("foundSubItem     4", foundSubItem);
  const [visibleBooksCards, setVisibleBooksCards] = useState([]);
  const [isResHeaderVisible, setIsResHeaderVisible] = useState(false);

  const handleMenuClick = () => {
    setIsResHeaderVisible(!isResHeaderVisible);
    setFoundItem(null);
    setActiveSubItem(null);
    setFoundSubItem(null);
  };
  const closeResHeader = () => {
    setIsResHeaderVisible(false);
  };
  const toggleBooksCardVisibility = (index) => {
    console.log("called");
    if (visibleBooksCards.includes(index)) {
      // Hide the BooksCard
      setVisibleBooksCards((prev) => prev.filter((i) => i !== index));
    } else {
      // Show the BooksCard
      setVisibleBooksCards((prev) => [...prev, index]);
    }
  };
  return (
    <div>
      <nav
        className={`bg-[#007BFF] z-50 max-lg:px-3 max-xl:px-3 max-lg:w-full max-md:py-5 max-md:fixed top-0 left-0 right-0 max-md:pb-2 max-md:px-4 px-14 w-screen max-md:border-b-0 border-b-2`}
      >
        <div className="flex justify-evenly   items-center">
          <Image
            className="mx-6 lg:mx-0 max-md:hidden"
            src="./logo/logo.svg"
            alt="My Logo"
            width={230}
            height={64}
          />
          <Image
            className=" md:hidden "
            src="./logo/responsiveLogo.svg"
            alt="My Logo"
            width={85}
            height={70}
          />

          <div className="flex-grow">
            <ul className="flex max-md:hidden justify-evenly">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  <li
                    className={`flex text-white lex px-7 items-center group hover:cursor-pointer hover:bg-blue-400 hover:border-white hover:border-2  hover:rounded-3xl p-1 `}
                    onClick={() => toggleSubMenu(index)}
                    onMouseEnter={() => hoverHandler1(index)}
                  >
                    <div className="px-2">{item}</div>
                    <IoIosArrowDown size={15} />
                  </li>
                  {index === activeItem && foundItem && (
                    <ul
                      className="absolute w-fit z-20  left-0 mt-2 bg-white  text-white border-white border-2 rounded-lg"
                      onMouseLeave={() => hoverHandler1(null)}
                    >
                      {foundItem?.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 "
                          // onClick={() => toggleSubMenuItems(index, subItem.id)}
                          // onMouseEnter={() => hoverHandler2(index)}
                        >
                          <SubItemCard
                            data={subItem}
                            subItem={true}
                            index={index}
                            subIndex={subItem.id}
                            onSubMenuToggle={toggleSubMenuItems}
                          />
                          {activeSubItem != null && (
                            <ul className=" z-20 rounded-lg absolute w-fit bg-white  border-white border-2 top-0 left-full flex flex-col  ">
                              {foundSubItem?.map((subItem, listItemIndex) => (
                                <div
                                  key={listItemIndex}
                                  className="flex items-center flex-col"
                                >
                                  <div
                                    // onClick={() =>
                                    //   toggleBooksCardVisibility(listItemIndex)
                                    // }
                                    className=" doubt "
                                  >
                                    <SubItemCard
                                      data={subItem}
                                      onDoubtClick={() =>
                                        toggleBooksCardVisibility(listItemIndex)
                                      }
                                    />
                                  </div>
                                  {visibleBooksCards.includes(
                                    listItemIndex
                                  ) && (
                                    <BooksCard
                                      data={subItem.books}
                                      svgPresent={subItem.svg}
                                    />
                                  )}
                                </div>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex mx-7 max-xl:hidden max-lg:hidden max-md:hidden">
            <Image
              src="/header/call.svg"
              width={50}
              height={50}
              alt="call.svg"
            />
            <div className="flex flex-col">
              <div className="text-yellow-300">need help? talk to experts</div>
              <div className="text-yellow-300">1800-419-427</div>
            </div>
          </div>
          <button
            className="rounded-xl max-md:bg-[#007BFF] max-md:border-2 bg-white"
            style={{ height: 32 }}
          >
            <p className="text-blue-500 max-md:text-white px-5">sign-in</p>
          </button>
          <div className="md:hidden hover:cursor-pointer ml-5">
            <SlMenu size={20} onClick={handleMenuClick} />
          </div>
        </div>
      </nav>
      {isResHeaderVisible && (
        <ResHeader
          activeItem={activeItem}
          foundItem={foundItem}
          toggleSubMenu={toggleSubMenu}
          toggleSubMenuItems={toggleSubMenuItems}
          toggleBooksCardVisibility={toggleBooksCardVisibility}
          activeSubItem={activeSubItem}
          foundSubItem={foundSubItem}
          visibleBooksCards={visibleBooksCards}
          closeResHeader={closeResHeader}
        />
      )}
    </div>
  );
}

export default Header;
