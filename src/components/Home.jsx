import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://images.freecreatives.com/wp-content/uploads/2016/02/White-Glitter-Wallpaper-.jpg')",
      }}
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full px-6 sm:px-10">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col mt-20 lg:mt-32 justify-center text-pink-400">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 px-4 sm:px-8 font-bold drop-shadow-lg"
            style={{ textShadow: '0 0 6px white, 0 0 10px white' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to PurrfectPaws 🐾
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl px-4 sm:px-8 drop-shadow-sm font-robotoSlab text-white"
            style={{ textShadow: '2px 2px 4px #f472b6' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Just like a curious kitty chasing after sunbeams, we’re here to bring you joy, inspiration, and a little bit of magic every time you visit. Whether you’re here to explore, learn, or simply enjoy some paws-itively delightful content, you’re in the right place. So, grab your favorite cozy spot✨
          </motion.p>

         <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-8 mt-10 font-playwrite text-pink-400 drop-shadow-sm whitespace-nowrap"
        style={{ textShadow: '0 0 6px white, 0 0 10px white' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: 'spring' }}
        >
       Love Loves to Love Love
       </motion.p>


          <motion.div
         className="mt-5 self-center"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.4, duration: 0.5 }}
          > 
        <span className="text-white text-4xl sm:text-5xl animate-pulse">💗</span>
        </motion.div>

        </div>

        {/* Right Side: Cat Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <img
            src="/MarieKitten.webp"
            alt="Cute Cat"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;



