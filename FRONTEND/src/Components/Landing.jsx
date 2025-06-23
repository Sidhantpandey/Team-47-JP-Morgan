import React from 'react'
import Header from './LHeader';
import HeroSection from './LHeroSection';
import ProgramsSection from './LProgramSection';
import ImpactSection from './LImpactSection';
import CTASection from './LCTASection';
import Footer from './LFooter';
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
