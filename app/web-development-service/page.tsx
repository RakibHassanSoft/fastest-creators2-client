import React from 'react';
import WebsiteShowcase from './components/websiteShowcase';
import WebsiteHero from './components/WebHero';
import ContactUs from '../components/contractUs';

const webDevPage = () => {
    return (
        <div>
        <WebsiteHero/>
        <WebsiteShowcase/>
         <ContactUs/>
        </div>
    );
};

export default webDevPage;