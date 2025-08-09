import React, { useState, useEffect } from 'react';

const Generator = () => {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomCat = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      setCatUrl(data[0].url);
    } catch (error) {
      console.error('Failed to fetch cat image:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchRandomCat();
  }, []);

  return (
    <div
      id="generator"
      className="flex flex-col items-center justify-center min-h-screen bg-pink-300 p-4"
    >
     
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-playwrite font-bold mb-16 sm:mb-24 text-center">
        Random Cat Generator 🐾
      </h1>

   
      {loading ? (
        <p className="mb-4 text-gray-700 text-lg sm:text-xl">Loading...</p>
      ) : (
        catUrl && (
          <img
            src={catUrl}
            alt="Random Cat"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
        )
      )}

      {/* Button */}
      <button
        onClick={fetchRandomCat}
        className="px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl md:text-3xl font-robotoSlab bg-white text-pink-400 rounded-md hover:bg-pink-200 transition"
      >
        Generate New Cat
      </button>
    </div>
  );
};

export default Generator;


