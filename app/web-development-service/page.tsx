import React from 'react';
import WebsiteShowcase from './components/websiteShowcase';
import WebsiteHero from './components/WebHero';
import ContactUs from '../components/contractUs';
import OurWorks from '../components/OurWorks';
import PreviousWork from '../components/PreviousWork';

const webDevPage = () => {
    return (
        <div>
        <WebsiteHero/>
        <WebsiteShowcase/>
      
      <OurWorks/>
              <PreviousWork/>
         <ContactUs/>
        </div>
    );
};

export default webDevPage;