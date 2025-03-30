"use client";
import { useState, useRef } from "react";
import {  FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EidMubarak() {
  const [showPoetry, setShowPoetry] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePoetry = () => setShowPoetry(!showPoetry);
  const toggleMusic = () => {
    if (!audioRef.current) return; 
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden px-4 md:px-10">
      {/* Animated Moon */}
      <motion.div 
        className="absolute top-5 right-5 md:top-10 md:right-10 text-yellow-300 text-6xl md:text-7xl"
        animate={{ rotate: 360 }} 
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        🌙
      </motion.div>

      {/* Floating Stars */}
      <motion.div 
        className="absolute top-16 left-10 text-yellow-200 text-4xl md:text-5xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        ⭐
      </motion.div>
      <motion.div 
        className="absolute top-24 right-14 text-yellow-300 text-4xl md:text-5xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ⭐
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-14 text-yellow-400 text-4xl md:text-5xl"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ⭐
      </motion.div>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-8">
        

        <motion.div 
          className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-yellow-300 overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/music/mypic2.jpg" alt="Your Picture 1" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-lg border border-gray-700 text-center w-full max-w-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-yellow-300 tracking-wide drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ✨ Eid Mubarak ✨
          </motion.h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-2">
            May this Eid bring endless joy & peace. 🌙
          </p>

          {/* Buttons */}
          <div className="mt-6 space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
            <motion.button
              onClick={toggleMusic}
              className="px-5 py-2 bg-yellow-500 text-black font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-600 hover:scale-110 transition-all w-full md:w-auto"
              whileHover={{ scale: 1.1 }}
            >
              {isPlaying ? "Pause Music 🎵" : "Play Music 🎶"}
            </motion.button>
            
            <motion.button
              onClick={togglePoetry}
              className="px-5 py-2 bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gray-700 hover:scale-110 transition-all w-full md:w-auto"
              whileHover={{ scale: 1.1 }}
            >
              <FaHeart className="inline-block mr-2 text-red-400" />
              Read Poetry
            </motion.button>
          </div>

         
          {showPoetry && (
            <motion.div 
              className="mt-6 bg-gray-800 text-yellow-200 p-5 rounded-lg shadow-md text-lg"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <p className="leading-relaxed">
                چاند کی چاندنی، خوشبو کی مہکار ہو  
                <br />
                آپ کے چہرے پر ہمیشہ خوشیوں کی بہار ہو  
                <br />
                عید کی خوشیاں دل میں سمو لیں  
                <br />
                آپ کو عید کی بہت بہت مبارک ہو! ✨
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-yellow-300 overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/music/mypicss.jpg" alt="Your Picture 2" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <audio ref={audioRef} src="/music/eid-song.mp3" preload="auto"></audio>
    </div>
  );
}
