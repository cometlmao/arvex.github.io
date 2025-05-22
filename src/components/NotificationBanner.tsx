import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotificationBannerProps {
  onClose: () => void;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-[#111111] py-2 relative border-b border-white/10"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div></div>
        <motion.p 
          className="text-center text-sm font-medium animate-glow"
          whileHover={{ scale: 1.05 }}
        >
          ARVEX <span className="font-bold gradient-text">ontop</span> 
        </motion.p>
        <motion.button 
          onClick={onClose} 
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NotificationBanner;