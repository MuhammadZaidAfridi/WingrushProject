

import React from "react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { navLinksdata } from "../Constant";
import { Link } from "react-scroll";
import { motion, easeInOut } from "framer-motion";

const Footer = () => {
  

  return (
    <footer className="bg-black w-full max-w-8xl mx-auto  lg:px-3 pt-18 pb-28 ">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-6 text-center md:text-left md:mx-8">
        {/* Scroll to Top Button */}
        <motion.div
          className="md:mt-7"
          // framer-animation
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <button
            className="text-white text-md xl:text-xl  font-mono flex justify-center items-center text-center"
            // onClick={() => window.scrollTo(0, 0)}
            onClick={() => {
              window.scrollTo({
                // top: 0,
                top: -100,

                behavior: "smooth", // 👈 this makes it smooth
              });
            }}
          >
            <NavLink to="/PrivacyPolicy">Policy and Privacy</NavLink>
          </button>
        </motion.div>

        {/* Center Section */}
        <motion.div
          className="flex flex-col items-center gap-6"
          //  framer-anomation
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 rounded-full p-2 shadow-md">
              <span className="text-white font-bold text-lg">WR</span>
            </div>
            <span className="text-white text-xl font-semibold lg:text-xl">
              WingRush
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center  text-sm md:text-base lg:text-xl font-medium">
            <ul className=" md:flex items-center gap-3 lg:gap-5">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  className="  text-base font-normal text-white tracking-wide cursor-pointer hover:text-orange-600 hover:font-semibold duration-300"
                  key={_id}
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={900}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 text-2xl">
            <a
              target="_newTab"
              href="https://www.facebook.com/igniPulse/"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF className="text-blue-600 hover:text-blue-800" />
            </a>
            <a
              target="_newTab"
              href="https://www.tiktok.com/@ignipulse?_t=ZN-8vYUvu4nZZO&_r=1"
              className="text-gray-400 hover:text-white transition"
            >
              <RiTiktokFill />
            </a>
            <a
              target="_newTab"
              href="https://www.instagram.com/ignipulse/?igsh=MTd4cDZ4YnZ3OTVnbg%3D%3D#"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram className="text-pink-600 hover:text-pink-800" />
            </a>
            <a
              target="_newTab"
              href="https://www.youtube.com/channel/UCOI2_8463WfbJJKSBd4RI8g"
              className="text-gray-400 hover:text-white transition"
            >
              <FaYoutube className="text-red-500 hover:text-red-800" />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-white text-md xl:text-xl md:mt-7 font-mono flex justify-center items-center text-center"
          // framer-animation
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <a href="https://igniup.com/" target="_Newblanks">
            {" "}
            © 2025 IgniPulse All Rights Reserved
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
