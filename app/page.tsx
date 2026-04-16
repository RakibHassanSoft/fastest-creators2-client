import React from 'react';
import Services from './components/Services';
import AboutServices from './components/AboutService';
import FounderIntro from './components/FounderIntro';
import ContractUs from './components/contractUs';
import Hero from './components/Hero';
import Reviews from './components/Reviews';


const homePage = () => {
  return (
    <div className= "bg-white">

      <Hero/>
      <Services/>
      <AboutServices/>
      <FounderIntro/>
      <Reviews/>
      <ContractUs/>

      
    </div>
  );
};

export default homePage;