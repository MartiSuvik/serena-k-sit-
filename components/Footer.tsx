
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-100/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <h3 className="text-3xl font-serif font-bold text-earth-900 mb-6">Serena Käsitöö</h3>
                <p className="text-earth-600 text-sm leading-relaxed mb-6 font-sans font-light tracking-wide">
                    Loo kirg šokolaadi vastu oma sõprade ja lähedastega. Valmistatud südamega Eestis.
                </p>
            </div>

             {/* Social */}
             <div className="flex flex-col items-start md:items-end">
                 <div className="flex space-x-6 mb-6">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61566675466816" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-earth-800 hover:text-earth-600 transition-colors"
                    >
                      <Facebook size={20} strokeWidth={1.5}/>
                    </a>
                    <a 
                      href="https://www.instagram.com/serena.kasitoo/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-earth-800 hover:text-earth-600 transition-colors"
                    >
                      <Instagram size={20} strokeWidth={1.5}/>
                    </a>
                 </div>
             </div>
        </div>

        <div className="border-t border-earth-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-earth-500 font-sans tracking-wide">
            <p className="mt-2 md:mt-0">Kõik õigused kaitstud SERESULI OÜ 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
