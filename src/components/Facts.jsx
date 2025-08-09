import React from 'react';
import { motion } from 'framer-motion';

const Facts = () => {
  const products = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/39/6d/f5/396df568a4325fe46c4a4801e198e7ef.jpg',
      text: 'Cats use their whiskers as powerful sensory tools to detect subtle changes in air currents and their environment. This helps them judge whether they can fit through a space and navigate effectively in the dark, making them excellent silent hunters.',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/closeup-shot-lying-cat_181624-56466.jpg?semt=ais_hybrid&w=740&q=80',
      text: 'A cat’s tail is like a mood indicator. When a cat holds its tail upright, it usually means the cat is feeling confident, friendly, or curious. If the tail is puffed up, it often signals fear, anxiety, or that the cat feels threatened and is trying to appear larger.',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/564x/c5/a9/77/c5a977a674d26ba6b245722d7a8bbc1b.jpg',
      text: 'Adult cats rarely meow at each other in the wild; this behavior is mostly reserved for interacting with humans. Over time, cats develop unique vocalizations to express different needs or emotions, such as asking for food, attention, or signaling discomfort.',
    },
  ];

  return (
    <div id="facts" className="min-h-screen bg-pink-300 px-6 py-10">
      {/* Heading */}
      <motion.h1
        className="text-6xl mt-5 font-bold text-center font-playwrite text-white mb-24 drop-shadow-lg
                   sm:text-5xl xs:text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Facts🐾
      </motion.h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="w-full max-w-xs sm:max-w-md md:w-96 h-auto md:h-[500px] bg-white/30 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.6)] rounded-xl overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
          >
            {/* Image section */}
            <div className="flex items-center justify-center bg-white/20 md:h-1/2">
              <img
                src={product.image}
                alt={`Fact ${product.id}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text section */}
            <div className="flex items-center justify-center p-4 md:h-1/2">
              <p className="text-gray-500 font-robotoSlab font-semibold text-xl text-center
                            sm:text-lg xs:text-base">
                {product.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facts;






