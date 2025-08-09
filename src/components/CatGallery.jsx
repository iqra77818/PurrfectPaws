import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  'https://img.freepik.com/free-photo/closeup-shot-lying-cat_181624-56466.jpg?semt=ais_hybrid&w=740&q=80',
  'https://images.unsplash.com/photo-1716467891152-1b43a96de578?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
  'https://d2zp5xs5cp8zlg.cloudfront.net/image-83814-800.jpg',
  'https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg',
  'https://www.diamondpet.com/wp-content/uploads/2022/02/close-up-white-cat-with-blue-eyes-121224.jpg',
  'https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065',
];

const CatGallery = () => {
  return (
    <div id="catgallery" className="min-h-screen bg-pink-300 px-6 py-10">
      <h1 className="text-5xl font-bold text-center text-white mb-12 mt-4 font-playwrite drop-shadow-lg">
        Cat Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
        {galleryImages.map((url, index) => (
          <motion.div
            key={index}
           className="overflow-hidden rounded-full shadow-lg bg-white/30 backdrop-blur-md w-40 h-28 sm:w-80 sm:h-52 flex items-center justify-center"

            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.5, type: 'spring' }}
          >
            <img
              src={url}
              alt={`Cat ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CatGallery;



