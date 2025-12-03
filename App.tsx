import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import WavySection from './components/WavySection.tsx';
import ProductList from './components/ProductList.tsx';
import PriceList from './components/PriceList.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900 antialiased font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WavySection />
        <ProductList />
        <PriceList />
      </main>
      <Footer />
    </div>
  );
};

export default App;