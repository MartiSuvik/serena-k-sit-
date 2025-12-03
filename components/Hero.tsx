import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { HERO_IMAGES } from '../constants.ts';

const Hero: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="shop" className="relative w-full pt-40 pb-48 lg:pb-64 overflow-hidden bg-earth-50">
      {/* Decorative Circles - Enhanced Gradient */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-earth-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Bottom Right Pink Glow - Adjusted to sit behind the wave */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-serena-pink rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none z-0" />
      
      {/* Center Bottom Pink Glow for continuity */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[500px] bg-serena-pink/50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/3 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-block mb-6 px-4 py-1 border border-earth-300 rounded-full bg-transparent text-earth-800 text-xs tracking-[0.2em] uppercase">
            Eesti Käsitööšokolaad
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-earth-900 mb-8 leading-[0.9]">
            Natuke sära <br />
            <span className="italic font-light">igasse päeva</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-earth-700/80 mb-12 leading-relaxed font-sans font-light tracking-wide">
            Kõik, mida vajad, on armastus... ja natuke šokolaadi. 
            Meie käsitöökompvekid on valmistatud parimatest koostisosadest.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#products" className="group relative inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-widest text-earth-900 transition-all duration-300 bg-transparent border border-earth-900 hover:bg-earth-900 hover:text-white">
              Vaata kollektsiooni
            </a>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group relative inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-widest text-earth-900 transition-all duration-300 bg-transparent border border-earth-900 hover:bg-earth-900 hover:text-white"
            >
              Võta ühendust
              <span className="absolute -top-3 -right-3 text-xl animate-wiggle origin-bottom">
                ❤️
              </span>
            </button>
          </div>

          {/* Floating Images Container */}
          <div className="relative w-full h-[400px] md:h-[600px] mt-20 perspective-1000">
            {/* Left Image */}
            <div className="absolute left-0 md:left-[15%] top-10 w-48 md:w-72 aspect-[3/4] rotate-[-8deg] animate-float shadow-2xl overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <img 
                src={HERO_IMAGES[0]} 
                alt="Delicious chocolate" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 md:right-[15%] top-0 w-48 md:w-72 aspect-[3/4] rotate-[8deg] animate-float-delayed shadow-2xl overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
               <img 
                src={HERO_IMAGES[1]} 
                alt="Handmade truffle" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-950/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="relative bg-[#faf8f6] text-center p-12 shadow-2xl max-w-md w-full border border-earth-200" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-earth-400 hover:text-earth-900 transition-colors p-2"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <h3 className="text-3xl font-serif text-earth-900 mb-10">Võta ühendust</h3>

              <div className="space-y-8 text-earth-800 font-sans tracking-wide">
                 <div className="flex flex-col items-center gap-1">
                    <span className="text-xs uppercase text-earth-400 tracking-widest mb-1">Telefon</span>
                    <a href="tel:+37255989672" className="text-xl md:text-2xl font-serif hover:text-earth-600 transition-colors">5598 9672</a>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <span className="text-xs uppercase text-earth-400 tracking-widest mb-1">E-mail</span>
                    <a href="mailto:sandra.sulin@gmail.com" className="text-lg md:text-xl font-serif hover:text-earth-600 transition-colors">sandra.sulin@gmail.com</a>
                 </div>
              </div>

              <div className="mt-12 pt-8 border-t border-earth-200/50">
                 <p className="font-serif italic text-2xl text-earth-900">
                   Parimad soovid ❤️
                 </p>
              </div>
           </div>
           {/* Close on backdrop click */}
           <div className="absolute inset-0 -z-10" onClick={() => setIsContactOpen(false)} />
        </div>
      )}

      {/* Bottom Wave SVG - Filled with Dark Brown (earth-900) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[100px] md:h-[150px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-earth-900"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;