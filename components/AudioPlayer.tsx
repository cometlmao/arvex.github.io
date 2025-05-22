import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.loop = true;
    }
  }, [volume, isMuted]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex items-center gap-3 bg-black/90 backdrop-blur-lg p-3 rounded-xl border border-white/20 hover:border-[#9929ea]/50 transition-all duration-300 shadow-lg shadow-purple-500/20"
      >
        <motion.button
          onClick={toggleMute}
          className="text-white hover:text-[#9929ea] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
        <motion.input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer volume-slider
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3.5 
            [&::-webkit-slider-thumb]:h-3.5 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-[#9929ea]
            [&::-webkit-slider-thumb]:hover:bg-[#5808fb]
            [&::-webkit-slider-thumb]:transition-colors
            [&::-webkit-slider-thumb]:duration-300
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:shadow-purple-500/20"
          whileHover={{ scale: 1.05 }}
        />
        <audio
          ref={audioRef}
          src="https://r2-bios.e-z.host/5c171946-aef4-4fca-8d76-3c6bf20f42fb/kuccsbfqdn.mp3"
          autoPlay
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;