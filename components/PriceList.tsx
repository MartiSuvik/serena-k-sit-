import React from 'react';
import { PRICES } from '../constants.ts';

const PriceList: React.FC = () => {
  return (
    <section id="pricelist" className="py-24 bg-earth-100/30 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 mb-4">Hinnakiri</h2>
          <p className="text-earth-600 font-sans tracking-wide text-sm">Tellimiseks kirjuta meile.</p>
        </div>

        <div className="space-y-6">
          {PRICES.map((item, index) => (
            <div key={index} className="flex justify-between items-baseline border-b border-earth-200 pb-4 group hover:border-earth-400 transition-colors">
              <div className="pr-4">
                <h3 className="text-xl font-serif text-earth-800">{item.name}</h3>
                {item.description && <p className="text-xs text-earth-500 mt-1 font-sans">{item.description}</p>}
              </div>
              <div className="text-lg font-medium text-earth-900 font-sans whitespace-nowrap">
                {item.price}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-earth-500 font-sans italic">
                * Hinnad võivad muutuda vastavalt erisoovidele ja hooajale.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PriceList;