import React from "react";
import Header from "../Components/Header";
import PlanesCarousel from "../Components/PlanesCarousel";
import Mission from "../Components/missions";
import Enemies from "../Components/Enemies";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";


function Components() {
  return (
    <>
          <Header />
      <HeroSection />
      {/* <Hero/> */}
      {/* <PlanesCarousel /> */}
      <Mission />
      {/* <Enemies /> */}
      {/* <Gallery /> */}
      <Footer/>
    </>
  );
}

export default Components;



