import React from 'react';
import Services from './components/Services';
import AboutServices from './components/AboutService';
import FounderIntro from './components/FounderIntro';
import ContractUs from './components/contractUs';
import Hero from './components/Hero';
import PreviousWork from './components/PreviousWork';
import OurWorks from './components/OurWorks';

const homePage = () => {
  return (
    <div className= "bg-white">

      <Hero/>
      <Services/>
      <AboutServices/>
      <FounderIntro/>
      <PreviousWork/>
      <OurWorks/>
      <ContractUs/>

      
    </div>
  );
};

export default homePage;