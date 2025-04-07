import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import WhatWeDo from '../components/sections/WhatWeDo';
import WhyVyaktra from '../components/sections/WhyVyaktra';
import UseCases from '../components/sections/UseCases';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  useEffect(() => {
    document.title = 'Vyaktra | AI Agents for Your Business';
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyVyaktra />
        <UseCases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;