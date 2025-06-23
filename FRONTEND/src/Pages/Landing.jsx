import React from 'react'
import Header from '../Components/LHeader';
import HeroSection from "../Components/LHeroSection";
import ProgramsSection from "../Components/LProgramSection";
import ImpactSection from "../Components/LImpactSection";
import CTASection from "../Components/LCTASection";
import Footer from "../Components/LFooter";

const Landing = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProgramsSection />
      <ImpactSection />
      <CTASection />
      <Footer />
      
    </div>
  );
}

export default Landing
