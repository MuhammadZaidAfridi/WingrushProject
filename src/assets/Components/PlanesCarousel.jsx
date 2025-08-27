import React, { useState } from "react";

// Import images

// For Desktop Screen
import img1 from "../../../public/PlaneImages/img1.png";
import img2 from "../../../public/PlaneImages/img2.png";
import img3 from "../../../public/PlaneImages/img3.png";
import img4 from "../../../public/PlaneImages/img4.png";
import img6 from "../../../public/PlaneImages/img6.png";
import img7 from "../../../public/PlaneImages/img7.png";
import img8 from "../../../public/PlaneImages/img8.png";
import img9 from "../../../public/PlaneImages/img9.png";
import img11 from "../../../public/PlaneImages/img11.png";
import img12 from "../../../public/PlaneImages/img12.png";
import img13 from "../../../public/PlaneImages/img13.png";
import img14 from "../../../public/PlaneImages/img14.png";
import img15 from "../../../public/PlaneImages/img15.png";

// For Mobile Screen
import img22 from "../../../public/PlaneImages/img22.png";
import img33 from "../../../public/PlaneImages/img33.png";
import img44 from "../../../public/PlaneImages/img44.png";
import img55 from "../../../public/PlaneImages/img55.png";
import img66 from "../../../public/PlaneImages/img66.png";
import img77 from "../../../public/PlaneImages/img7777.png";
import img88 from "../../../public/PlaneImages/img88.png";
import img99 from "../../../public/PlaneImages/img99.png";
import img1010 from "../../../public/PlaneImages/img1010.png";
import img1111 from "../../../public/PlaneImages/img1111.png";
import img1212 from "../../../public/PlaneImages/img1212.png";
import img1313 from "../../../public/PlaneImages/img1313.png";
import img1414 from "../../../public/PlaneImages/img1414.png";

// Array of slides (image + content)
const slides = [
  {
    image: img1,
    img: img1010,
    title: "Explore the Skies",
    description:
      "Discover the thrill of aviation with our stunning plane collection. From takeoff to landing, feel the freedom of the sky.",
  },
  {
    image: img2,
    img: img22,
    title: "Silver Wing",
    description:
      "Fast and agile, perfect for quick strikes , Best for short missions due to low fuel and weak breakes.",
  },
  {
    image: img3,
    img: img33,
    title: "Jaguar",
    description:
      "Balanced speed and control with great braking and fuel , Slightly slower , ideal for tractical missions.",
  },
  {
    image: img4,
    img: img44,
    title: "Lazt Fox",
    description:
      "High speed and powerful thrust make it great for hit  and run attacks, Weak brakes needs skillful handling .",
  },
  {
    image: img6,
    img: img66,
    title: "Sky Fire",
    description:
      "Stable and precise with desccent fuel and control . Slower speed amkes it better for strategic play.",
  },
  {
    image: img7,
    img: img77,
    title: "Hunter",
    description:
      "Versatile with balanced speed and fuel , Limited brakes, but great for mid-range, flexible  combat.",
  },
  {
    image: img8,
    img: img88,
    title: "Cooper Head",
    description:
      "Built for long missions with strong endurance, Good speed, but needs care due to weak breakes.",
  },
  {
    image: img9,
    img: img99,
    title: "Storm Rider",
    description:
      "Endurance-focused with steady control and fuel , Not very fast, but reliable for longer battles.",
  },
  {
    image: img11,
    img: img1111,
    title: "Cooper Head",
    description:
      "Built for long missions with strong endurance, Good speed, but needs care due to weak breakes.",
  },
  {
    image: img12,
    img: img1212,
    title: "Star Blaze",
    description:
      "Fast and powerful with great thrust and fuel , Braking is weaker but excellent for offense.",
  },
  {
    image: img13,
    img: img1313,
    title: "Night Shade",
    description:
      "Stealthy and fuel efficient with strong control . Lower thrust , ideal for precise , long mission.",
  },
  {
    image: img14,
    img: img1414,
    title: "Aero Blade",
    description:
      "Durable and stable with hight fuel , Low thrust but handles will - great for long, tactical missions.",
  }
 ,
];

const PlaneCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="plane">
      {/* <div className="flex justify-center md:text-5xl pt-4 relative z-10 text-white">
        Games
      </div> */}

      <div
        className="relative w-full max-w-6xl mx-auto m-5 pb-7 h-[400px] md:h-[425px] md:rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
        style={{
          backgroundImage: `url(${img8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✅ Black Overlay with 10% opacity */}
        {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-6 md:px-12">
          {/* LEFT: Text Content */}
          <div className="text-center md:text-left max-w-lg mb-6 md:mb-0 md:ml-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {slides[current].title}
            </h1>
            <p className="mt-3 text-gray-200 text-sm md:text-base">
              {slides[current].description}
            </p>
          </div>

          {/* RIGHT: Image for Desktop */}
          <div className="w-full md:w-[350px] md:flex justify-center md:mr-10 hidden">
            <img
              src={slides[current].image}
              className="w-full max-h-[200px] md:max-h-[350px] object-contain rounded-lg"
            />
          </div>

          {/* RIGHT: Image for Mobile */}
          <div className="w-full md:w-[350px] flex justify-center md:mr-10 md:hidden">
            <img
              src={slides[current].img}
              className="w-full max-h-[150px] pt-14 md:max-h-[350px] object-contain rounded-lg"
            />
          </div>
        </div>

       
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❯
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                current === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaneCarousel;
