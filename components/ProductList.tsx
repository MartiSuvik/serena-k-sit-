import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants.ts';

const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-earth-50 relative overflow-hidden scroll-mt-28">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-earth-200/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-5xl md:text-6xl font-serif text-earth-900 mb-4">
                    Meie Lemmikud
                </h2>
                <p className="text-earth-600 font-sans tracking-widest uppercase text-sm">Vaieldamatud kliendi lemmikud</p>
            </div>
            <div className="hidden md:block">
               {/* Link removed to keep single page flow */}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCTS.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                    
                    {/* Image Area */}
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-earth-100">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Minimal Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-2">
                        <h3 className="font-serif text-2xl text-earth-900">
                            {product.name}
                        </h3>
                        
                        <p className="text-xs font-sans text-earth-500 tracking-wide uppercase line-clamp-2 px-4">
                            {product.description}
                        </p>

                        <div className="pt-2 text-earth-800 font-sans font-medium">
                            €{product.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Mobile button removed */}

      </div>
    </section>
  );
};

export default ProductList;