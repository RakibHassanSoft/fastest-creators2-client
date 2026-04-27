import React from "react";
import ApifyHero from "./components/ApifyHero";
import ApifyServices from "./components/ApifyServices";
import ApifyUseCases from "./components/ApifyUseCases";
import ApifyProcess from "./components/ApifyProcess";


const ApifyPage = () => {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <ApifyHero />

      {/* SERVICES */}
      <ApifyServices />

      {/* USE CASES */}
      <ApifyUseCases />

      {/* PROCESS + CTA */}
      <ApifyProcess />

    </div>
  );
};

export default ApifyPage;