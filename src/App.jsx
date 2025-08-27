
import React from "react";;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./assets/Components/PrivacyPolicy";
import Components from "./assets/Pages/Components";
// import Header from "./assets/Components/Header";
// import HeroSection from "./assets/Components/HeroSection";
// import PlaneCarousel from "./assets/Components/PlanesCarousel";
// import Mission from "./assets/Components/missions";
// import Enemies from "./assets/Components/Enemies";
// import Gallery from "./assets/Components/Gallery";
// import Footer from "./assets/Components/Footer";
function App() {
  return (
    <>
      {/* <MyState> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Components/>} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />}  />
          </Routes>
        </BrowserRouter>

      {/* <Header />
      <HeroSection />
      <PlaneCarousel />
      <Mission />
      <Enemies />
      <Gallery />
      <Footer /> */}

      {/* </MyState> */}
    </>
  );
}

export default App;
