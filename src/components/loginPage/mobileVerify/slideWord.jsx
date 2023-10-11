"use client";
// import React, { useState, useEffect } from "react";

// function SlideWord() {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowText(true);
//     }, 1000); // 1-second delay before sliding

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
//       <div className="relative w-64 h-12 bg-white p-3 rounded shadow">
//         <div
//           className={`absolute right-0 transform transition-transform duration-1000 ${
//             showText ? "-translate-x-full" : "translate-x-0"
//           }`}
//         >
//           SlideMe
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SlideWord;
