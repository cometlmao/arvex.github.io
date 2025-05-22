import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import CryptoSection from './components/CryptoSection';
import NotificationBanner from './components/NotificationBanner';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
        {Array.from({ length: 12 }).map((_, colIndex) => (
          Array.from({ length: 20 }).map((_, rowIndex) => (
            <div key={`${colIndex}-${rowIndex}`} className="border border-white/20"></div>
          ))
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {showBanner && <NotificationBanner onClose={() => setShowBanner(false)} />}
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <CryptoSection />
        
        {/* Footer */}
        <footer className="bg-black/80 py-8 mt-16 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9929ea] to-[#5808fb] bg-clip-text text-transparent">
                  ARVEX
                </h2>
                <p className="text-gray-400 mt-2">ARVEX SERVICES</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <AudioPlayer />
                <div className="flex space-x-4">
                  <a 
                    href="https://discord.gg/BmTt5pFcBV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Discord"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      className="text-gray-400 group-hover:text-blue-500 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="YouTube"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      className="text-gray-400 group-hover:text-[#9929ea] transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110"
                      fill="currentColor"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ARVEX. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;