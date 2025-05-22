import React from 'react';
import { motion } from 'framer-motion';
import LogoSVG from './LogoSVG';

const Hero = () => {
  const scrollToFeaturedProducts = () => {
    const featuredProductsSection = document.getElementById('featured-products');
    if (featuredProductsSection) {
      featuredProductsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background logo */}
      <motion.div 
        className="absolute right-0 top-0 opacity-5 transform translate-x-1/4 -translate-y-1/4"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <LogoSVG gradient className="w-[600px] h-[600px]" />
      </motion.div>
      
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white/80">Welcome to</span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-[#9929ea] to-[#5808fb] bg-clip-text text-transparent"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ARVEX
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The #1 Provider of HWID Spoofers, Fortnite Cheats & Rocket League AI Bots
        </motion.p>
        <motion.button 
          onClick={scrollToFeaturedProducts}
          className="gradient-bg text-white font-medium px-8 py-3 rounded-md hover:opacity-90 transition-all animate-pulse-custom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Products
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;