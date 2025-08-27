

// export default TechCard;
import React from "react";
// import img2 from '../../../public/PlaneImages/img2.png'
// import img3 from "../../../public/PlaneImages/img3.png";
import img7 from "../../../public/PlaneImages/img7.png";
import img11 from "../../../public/PlaneImages/img11.png";
import img6 from "../../../public/PlaneImages/img6.png";
// import img10 from "../../../public/PlaneImages/img10.png";
// // Array of card data
import {motion, easeInOut} from 'framer-motion'
const cards = [
  {
    id: 1,
    category: "Wingrush Game studio",
    // categoryColor: "bg-blue-100 text-blue-600",
    // title: "Customize Your Flight",
    title: "SilverWing",
    description:
      "Tweak the X-Plane environment to practice specific skills ’ll encounter in a real cockpit But the thriving X-Plane community has spawned !",
    // image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg",
    image: img6,
    author: "Haris khattak",
    authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
    time: "9 months ago",
  },
  {
    id: 2,
    // category: "Lazy Fox",
    category: "Wingrush Game studio",
    // categoryColor: "bg-yellow-100 text-yellow-600",
    title: "Lazy Fox",
    description:
      "X-Plane 12 comes with amazing attention to detail in all navigational systems. Brush up on the classic fundamentals in our Cessna 172 !",
    // image: "https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg",
    image: img7,
    author: "Muhammad atif",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "2 months ago",
  },
  {
    id: 3,
    // category: "Hunter",
    category: "Wingrush Game studio",
    // categoryColor: "bg-red-100 text-red-600",
    // title: "Experience a World of Add-Ons",
    title: 'Hunter',
    description:
      "Everything that comes with X-Plane makes it the most realistic, most robust flight sim experience you can have. But the thriving!",
    // image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    image: img11,
    author: "Amir khan",
    authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
    time: "6 months ago",
  },
];

const Card = ({ card }) => {
  return (
    <div
      id="features"
      className="bg-gradient-to-l from-blue-950 to-blue-700 via-black rounded-md shadow-lg  max-w-xs mx-auto hover:scale-105 duration-500 "
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-48 object-cover bg-center  rounded-md"
      />

      {/* Content */}
      <div className="p-4">
        {/* <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${card.categoryColor}`}
        >
          {card.category}
        </span> */}

        <h1 className=" bg-blue-100 text-blue-700 rounded-3xl inline-block px-[5px] py-1 text-xs hover:font-semibold ">
          {card.category}
        </h1>

        <h2 className="mt-2 text-lg font-bold text-white">{card.title}</h2>
        <p className="text-sm  mt-1 text-white">{card.description}</p>

        {/* Author */}
        <div className="flex items-center mt-4">
          <img
            src={card.authorImg}
            alt={card.author}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold  text-white">{card.author}</p>
            <p className="text-xs  text-white">{card.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechCard = () => {
  return (
    <>
      {/* Desktop responsive */}
      <div
        className="hidden h-[550px]  md:flex items-center justify-center bg-black/95 "
        // style={{ backgroundImage: `url(${img11})` }}
      >
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{
            opacity: 0,
            y: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: easeInOut,
          }}
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>

      {/* Mobile responsive */}
      <div className="min-h-screen md:hidden bg-gradient-to-r from-blue-900 to-blue-700 via-blue-950 flex items-center justify-center p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 2,
                ease: easeInOut,
              }}
            >
              <Card key={card.id} card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechCard;
