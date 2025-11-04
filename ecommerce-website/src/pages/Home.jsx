import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoBanner from '../components/home/PromoBanner';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <PromoBanner />
            <Testimonials />
        </div>
    );
};

export default Home;