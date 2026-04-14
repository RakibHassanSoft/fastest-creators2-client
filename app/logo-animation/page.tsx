import React from 'react';
import LogoAnimationHero from './components/LogoAnimationHero';
import LogoShowcase from './components/LogoShowcase';
import ContactUs from '../components/contractUs';

const LogoAnimation = () => {
    return (
        <div>
            <LogoAnimationHero/>
            <LogoShowcase/>
            <ContactUs/>
        </div>
    );
};

export default LogoAnimation;