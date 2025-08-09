import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Facts from './components/Facts';
import CatGallery from './components/CatGallery';
import Generator from './components/Generator';
import Footer from './components/Footer';

function App() {
  return (
    <>
   
      <div className=""> 
        <Home />
        <Facts />
        <CatGallery />
        <Generator />
      </div>
      <Footer />
    </>
  );
}

export default App;




