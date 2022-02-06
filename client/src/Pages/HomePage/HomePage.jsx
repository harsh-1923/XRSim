import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import HomePageUses from "../../Components/HomePageUses/HomePageUses";

const HomePage = () => {
  return (
    <div style={{ width: "100%"}}>
      <HeroSection />
      <HomePageUses />
    </div>
  );
};

export default HomePage;
