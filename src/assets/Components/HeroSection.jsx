// import React, { useContext } from "react";
// import myContext from "../Context/MyContext";
// import { easeInOut, motion } from "framer-motion";
// import video from '../../../public/Videos/Wingrush-trailer.mp4'

// function HeroSection() {
//   const { mode } = useContext(myContext);

//   return (
//     <div
//       id="home"
//       className="max-w-[1600px] mx-auto relative w-full bg-fixed h-screen bg-center bg-cover overflow-hidden"
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundColor: mode === "dark" ? "rgb(62,64,66)" : "",
//         color: mode === "dark" ? "white" : "",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/75 z-0"></div>

//       {/* Desktop Section */}
//       <motion.div
//         className="hidden md:block  pt-40 px-60 md:h-screen shadow-lg relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, ease: easeInOut }}
//       >
//         <div className="md:text-8xl font-bold space-y-2 tracking-wide">
//           <h1 className="text-orange-500 pb-4">WingRush</h1>
//         </div>
//         <p className=" mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-5">
//           {/* <button className="bg-gradient-to-b from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-9 rounded-sm hover:shadow-md hover:shadow-black">
//             Download
//           </button>
//           <button className="bg-gradient-to-b from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-5 rounded-sm hover:shadow-md hover:shadow-black">
//             Watch Trailer
//           <button className="bg-blue-500 px-4 p-1">Explore</button>
//           // </button> */}
//           {/* // <button className="bg-[#0ba360] px-6 p-1">Explore</button>
//           // <button className="bg-[#1875FF] px-4 p-1">Explore</button> */}
//           <button className="bg-orange-500 px-9 py-2 text-white text-xl rounded-md hover:cursor-pointer  shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500 ">
//             <a
//               href="https://play.google.com/store/apps/details?id=com.ignipulse.TrackMaster&pcampaignid=web_share"
//               target="-Newblank"
//             >
//               {" "}
//               Explore
//             </a>
//           </button>
//           <button className="border-amber-600 border-1 hover:bg-orange-500 px-5 py-2 text-white text-xl rounded-md  hover:cursor-pointer  shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
//             Watch Trailer
//           </button>
//         </div>
//       </motion.div>

//       {/* Mobile Section */}
//       <div className="px-16 pt-36 md:hidden relative z-10">
//         <div className="text-3xl text-white font-bold space-y-2 tracking-wide">
//           <h1>WingRush Gaming</h1>
//           <h1>Studio</h1>
//         </div>
//         <p className="text-md mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-3">
//           {/* <button className="bg-gradient-to-b from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-5 rounded-sm">
//             Explore
//           </button> */}
//           <button className="bg-blue-500 px-4 p-1">Explore</button>
//           {/* <button className="bg-gradient-to-b from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-3 rounded-sm">
//             Watch Trailer
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;





// import React, { useContext } from "react";
// import myContext from "../Context/MyContext";
// import { easeInOut, motion } from "framer-motion";
// import img1 from "../../../public/PlaneImages/img11.png";
// import Header from "./Header";

// function HeroSection() {
//   const { mode } = useContext(myContext);

//   return (
//     <div
//       id="home"
//       className="max-w-[1600px] mx-auto relative w-full bg-fixed h-screen bg-center bg-cover overflow-hidden"
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundColor: mode === "dark" ? "rgb(62,64,66)" : "",
//         color: mode === "dark" ? "white" : "",
//       }}
//     >
//       {/* ✅ Fixed Header */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Header />
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/65 z-0"></div>

//       {/* Desktop Section */}
//       <motion.div
//         className="hidden md:block pt-40 px-60 md:h-screen shadow-lg relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, ease: easeInOut }}
//       >
//         <div className="md:text-7xl font-bold space-y-2 tracking-wide">
//           <h1 className="text-orange-500 pb-4">WingRush</h1>
//         </div>
//         <p className="md:text-xl mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-5">
//           <button className="bg-gradient-to-b from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-9 rounded-sm hover:shadow-md hover:shadow-black">
//             Download
//           </button>
//           <button className="bg-gradient-to-b from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-5 rounded-sm hover:shadow-md hover:shadow-black">
//             Watch Trailer
//           </button>
//         </div>
//       </motion.div>

//       {/* Mobile Section */}
//       <div className="px-16 pt-36 md:hidden relative z-10">
//         <div className="text-3xl text-white font-bold space-y-2 tracking-wide">
//           <h1>WingRush Gaming</h1>
//           <h1>Studio</h1>
//         </div>
//         <p className="text-md mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-3">
//           <button className="bg-gradient-to-b from-pink-500 to-orange-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-5 rounded-sm">
//             Explore
//           </button>
//           <button className="bg-gradient-to-b from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-500 hover:scale-105 duration-300 py-2 px-3 rounded-sm">
//             Watch Trailer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;












// import React, { useContext, useState } from "react";
// import myContext from "../Context/MyContext";
// import { easeInOut, motion } from "framer-motion";
// import video from "../../../public/Videos/Wingrush-trailer.mp4";
// import img1 from '../../../public/PlaneImages/img11.png'

// function HeroSection() {
//   const { mode } = useContext(myContext);
//   const [showTrailer, setShowTrailer] = useState(false);

//   // Function to open trailer modal
//   const handleOpenTrailer = () => {
//     setShowTrailer(true);
//   };

//   // Function to close trailer modal
//   const handleCloseTrailer = () => {
//     setShowTrailer(false);
//   };

//   return (
//     <div
//       id="home"
//       className="max-w-[1600px] mx-auto relative w-full bg-fixed h-screen bg-center bg-cover overflow-hidden"
//       style={{
//         backgroundImage: `url(${img1})`,
//         backgroundColor: mode === "dark" ? "rgb(62,64,66)" : "",
//         color: mode === "dark" ? "white" : "",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/75 z-0"></div>

//       {/* Desktop Section */}
//       <motion.div
//         className="hidden md:block pt-40 px-60 md:h-screen shadow-lg relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 2, ease: easeInOut }}
//       >
//         <div className="md:text-8xl font-bold space-y-2 tracking-wide">
//           <h1 className="text-orange-500 pb-4">WingRush</h1>
//         </div>
//         <p className="mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-5">
//           <button className="bg-orange-500 px-9 py-2 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
//             <a
//               href="https://play.google.com/store/apps/details?id=com.ignipulse.TrackMaster&pcampaignid=web_share"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Explore
//             </a>
//           </button>
//           <button
//             onClick={handleOpenTrailer}
//             className="border-amber-600 border hover:bg-orange-500 px-5 py-2 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500"
//           >
//             Watch Trailer
//           </button>
//         </div>
//       </motion.div>

//       {/* Mobile Section */}
//       <div className="px-16 pt-36 md:hidden relative z-10">
//         <div className="text-3xl text-white font-bold space-y-2 tracking-wide">
//           <h1>WingRush Gaming</h1>
//           <h1>Studio</h1>
//         </div>
//         <p className="text-md mt-1.5 text-white">
//           Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
//           Welcome to Wingrush!
//         </p>
//         <div className="mt-5 space-x-3">
//           <button className="bg-blue-500 px-4 p-1">Explore</button>
//         </div>
//       </div>

//       {/* Trailer Modal */}
//       {showTrailer && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="relative w-[70%] h-[70%] bg-black rounded-lg shadow-lg flex flex-col items-center justify-center">
//             {/* Close Button */}
//             <button
//               onClick={handleCloseTrailer}
//               className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg shadow-lg"
//             >
//               ✕ Close
//             </button>

//             {/* Video Player */}
//             <video
//               src={video}
//               controls
//               autoPlay
//               className="w-full h-full rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HeroSection;















import React, {  useState } from "react";
import { easeInOut, motion } from "framer-motion";
import video from "../../../public/Videos/Wingrush-trailer.mp4";
import img1 from '../../../public/PlaneImages/img11.png'
// import {text} from '../Components/Text/text.png'

function HeroSection() {
  const [showTrailer, setShowTrailer] = useState(false);

  // Open Trailer Modal
  const handleOpenTrailer = () => {
    setShowTrailer(true);
    document.body.style.overflow = "hidden"; // Disable background scroll
  };

  // Close Trailer Modal
  const handleCloseTrailer = () => {
    setShowTrailer(false);
    document.body.style.overflow = "auto"; // Enable scroll again
  };

  return (
    <div
      id="home"
      className="max-w-[1600px] mx-auto relative w-full bg-fixed h-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      {/* Desktop Section */}
      <motion.div
        className="hidden md:block pt-72 px-60 lg:pt-40 lg:px-60 md:h-screen shadow-lg relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        <div className="md:text-8xl font-bold space-y-2 tracking-wide">
          <h1 className="text-red-700 pb-4">WingRush</h1>
          {/* <h1 className="">{text}</h1> */}
        </div>
        <p className="mt-1.5 text-white">
          Wingrush: Soar Beyond Limits, Fast Skies, <br /> Fierce Battle —
          Welcome to Wingrush!
        </p>
        <div className="mt-5 space-x-5 space-y-2">
          <button className="bg-orange-500 px-9 py-2 hover:font-semibold text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
            <a
              href="https://play.google.com/store/apps/details?id=com.ignipulse.TrackMaster&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </button>
          <button
            onClick={handleOpenTrailer}
            className="border-amber-600 border hover:bg-orange-500 px-5 py-2 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500"
          >
            Watch Trailer
          </button>
        </div>
      </motion.div>

      
      
      {/* Mobile Section */}
      <div className="md:px-16 md:pt-36  top-1/3 flex flex-col items-center md:hidden relative z-10">
        <div className="text-4xl sm:text-5xl text-white font-bold space-y-2 tracking-wide">
          <h1>WingRush</h1>
        </div>
        <p className="text-md mt-1.5 flex items-center justify-center text-center text-white">
          Wingrush: Soar Beyond Limits, Fast <br /> Skies, Fierce Battle —
          Welcome to Wingrush!
        </p>
        <div className="mt-5 space-x-3 space-y-4">
          <button className="bg-orange-500 px-5 py-1 hover:font-semibold text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500">
            <a
              href="https://play.google.com/store/apps/details?id=com.ignipulse.TrackMaster&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </button>
          <button
            onClick={handleOpenTrailer}
            className="border-amber-600 border hover:bg-orange-500 px-3 py-1 text-white text-xl rounded-md hover:cursor-pointer shadow-[0_0_10px_rgba(200,200,200)] hover:scale-105 duration-500"
          >
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[50]">
          <div className="relative w-[80%] h-[50%] md:w-[80%] md:h-[75%] bg-black rounded-lg shadow-lg flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={handleCloseTrailer}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg shadow-lg cursor-pointer z-[10000]"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              src={video}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
