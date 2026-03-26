import React from 'react'
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/LHeroSection";
import ProgramsSection from "../Components/LProgramSection";
import ImpactSection from "../Components/LImpactSection";
import CTASection from "../Components/LCTASection";
import Footer from "../Components/LFooter";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <ProgramsSection />
        <ImpactSection />
        <CTASection />
        <Footer />
      </div>
      
    </div>
  );
}

export default Landing
