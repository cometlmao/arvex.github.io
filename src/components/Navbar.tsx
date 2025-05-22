import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import LogoSVG from './LogoSVG';
import Modal from './Modal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'reviews' | 'status' | 'terms' | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToWelcome = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error("Scrolling failed:", error);
    }
    closeMobileMenu();
  };

  const openModal = (modalType: 'reviews' | 'status' | 'terms') => {
    setActiveModal(modalType);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center cursor-pointer"
              onClick={scrollToWelcome}
            >
              <LogoSVG className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-white">ARVEX</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#welcome" 
                onClick={scrollToWelcome}
                className="text-white hover:text-[#9929ea] transition-colors duration-200"
              >
                Home
              </a>
              <button onClick={() => openModal('reviews')} className="text-white hover:text-[#9929ea] transition-colors duration-200">
                Reviews
              </button>
              <button onClick={() => openModal('status')} className="text-white hover:text-[#9929ea] transition-colors duration-200">
                Status
              </button>
              <button onClick={() => openModal('terms')} className="text-white hover:text-[#9929ea] transition-colors duration-200">
                Terms
              </button>
            </div>

            <button 
              className="block md:hidden text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={closeMobileMenu} 
          scrollToWelcome={scrollToWelcome}
          openModal={openModal}
        />
      </nav>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'reviews'}
        onClose={() => setActiveModal(null)}
        title="Customer Reviews"
      >
        <div className="space-y-6">
          {[
            { name: "Slax", rating: 5, text: "Best spoofer I've ever used UD ASF" },
            { name: "k0vy", rating: 5, text: "Best Rust cheat ive used" },
            { name: "Zoph", rating: 4, text: "I lasted 1 week with FN external and spoofer" }
          ].map((review, index) => (
            <div key={index} className="bg-black/50 p-4 rounded-lg border border-white/10">
              <div className="flex items-center mb-2">
                <span className="font-bold text-purple-400">{review.name}</span>
                <div className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</div>
              </div>
              <p className="text-gray-300">{review.text}</p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'status'}
        onClose={() => setActiveModal(null)}
        title="Service Status"
      >
        <div className="space-y-4">
          {[
            { service: "HWID Spoofer", status: "Operational", color: "text-green-500" },
            { service: "Fortnite Cheat", status: "Operational", color: "text-green-500" },
            { service: "Rust External", status: "Operational", color: "text-green-500" },
            { service: "Rocket League", status: "Operational", color: "text-green-500" }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-black/50 rounded-lg border border-white/10">
              <span className="font-medium">{item.service}</span>
              <span className={`${item.color} font-semibold`}>{item.status}</span>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
      >
        <div className="space-y-4 text-gray-300">
          <p>By using our services, you agree to the following terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All purchases are final and non-refundable</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Modal>
    </>
  );
};

const MobileMenu = ({ isOpen, onClose, scrollToWelcome, openModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-4">
      <div className="flex justify-end">
        <button 
          onClick={onClose}
          className="text-white p-2"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <a 
          href="#welcome"
          onClick={scrollToWelcome}
          className="text-white hover:text-[#9929ea] transition-colors duration-200 text-xl"
        >
          Home
        </a>
        <button onClick={() => openModal('reviews')} className="text-white hover:text-[#9929ea] transition-colors duration-200 text-xl">
          Reviews
        </button>
        <button onClick={() => openModal('status')} className="text-white hover:text-[#9929ea] transition-colors duration-200 text-xl">
          Status
        </button>
        <button onClick={() => openModal('terms')} className="text-white hover:text-[#9929ea] transition-colors duration-200 text-xl">
          Terms
        </button>
      </div>
    </div>
  );
};

export default Navbar;