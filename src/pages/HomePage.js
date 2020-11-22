import React from "react";

import HeroLanding from "../components/HeroLanding";
import OurRooms from "../components/OurRooms";
import AboutUsSection from "../components/AboutUsSection";
import Best from "../components/Best";
import Testimonials from "../components/Testimonials";
import ExcursionsSection from "../components/ExcursionsSection";

const Home = () => {
  return (
    <>
      <HeroLanding />
      <OurRooms />
      <AboutUsSection />
      <Best />
      <Testimonials />
      <ExcursionsSection />
    </>
  );
};

export default Home;
