
import React, { useState } from 'react';

const WavySection: React.FC = () => {
  return (
    <div id="about" className="relative bg-earth-50 scroll-mt-28">
      {/* Wave removed from top, now integrated into Hero bottom for better gradient layering */}
      <section className="relative bg-earth-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <div className="text-white space-y-10 order-2 lg:order-1">
                    <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                        Šokolaad on nagu <br/>
                        <span className="text-earth-300 italic font-light">kallistus seestpoolt</span>
                    </h2>
                    
                    <div className="space-y-8 text-earth-100/80 text-lg leading-loose font-sans font-light tracking-wide">
                        <p>
                            Suurendab südame tervist: Tumedas šokolaadis sisalduvad antioksüdandid on tõestatult kasulikud vererõhu alandamisel ja vereringe parandamisel.
                        </p>
                        <p>
                            Serena Käsitöö šokolaadid on valmistatud Eestis, kasutades vaid eetilist toorainet ja retsepte, mis on pärandatud põlvest põlve.
                        </p>
                    </div>
                </div>

                {/* Image Composition */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm aspect-[3/4]">
                         <img 
                            src="https://res.cloudinary.com/effichat/image/upload/v1764708903/fcyyklhynockpqzchugr.jpg" 
                            alt="Chocolate assortment" 
                            className="w-full h-full object-cover rounded-t-full rounded-b-none shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700 border-[1px] border-earth-700"
                        />
                        
                         <div className="absolute top-1/2 -right-8 w-24 h-24 border border-earth-400/30 rounded-full animate-pulse"></div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
};

export default WavySection;
