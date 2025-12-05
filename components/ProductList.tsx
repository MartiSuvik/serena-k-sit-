import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';
import { PRODUCTS } from '../constants.ts';
import { Product } from '../types.ts';

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1,
    message: '',
    customNote: ''
  });

  const openContactModal = (product: Product) => {
    setSelectedProduct(product);
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      quantity: 1,
      message: '',
      customNote: ''
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ba60f625-a95b-4f29-ae98-6022bb905409',
          name: formData.name,
          email: formData.email,
          product: selectedProduct.name,
          price: `€${selectedProduct.price.toFixed(2)}`,
          quantity: formData.quantity,
          total: `€${(selectedProduct.price * formData.quantity).toFixed(2)}`,
          subject: `Uus tellimus: ${selectedProduct.name}`,
          note: formData.customNote || 'Lisamärkusi pole',
          message: `Tellimus: ${selectedProduct.name} x${formData.quantity} = €${(selectedProduct.price * formData.quantity).toFixed(2)}${formData.customNote ? `\n\nKliendi märkus: ${formData.customNote}` : ''}`
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        alert('Viga saatmisel. Palun proovige uuesti.');
      }
    } catch (error) {
      alert('Viga saatmisel. Palun proovige uuesti.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        quantity: newQuantity,
        message: `Tere!\n\nSoovin tellida: ${selectedProduct.name}\nHind: €${selectedProduct.price.toFixed(2)}\nKogus: ${newQuantity}\nKokku: €${(selectedProduct.price * newQuantity).toFixed(2)}\n\nPalun võtke minuga ühendust!`
      }));
    }
  };

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
                <div 
                  key={product.id} 
                  className="group cursor-pointer"
                  onClick={() => openContactModal(product)}
                >
                    
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

                        <div className="pt-2">
                          <span className="inline-block px-6 py-2 text-xs font-sans uppercase tracking-widest text-earth-600 border border-earth-300 group-hover:bg-earth-900 group-hover:text-white group-hover:border-earth-900 transition-all duration-300">
                            Telli
                          </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Mobile button removed */}

      </div>

      {/* Contact Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-950/40 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" onClick={closeModal}>
          <div className="relative bg-[#faf8f6] p-6 shadow-2xl max-w-md w-full border border-earth-200 animate-[slideUp_0.4s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-earth-400 hover:text-earth-900 transition-colors z-10"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            {/* Product Header */}
            <div className="flex gap-4 mb-5 pr-8">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg text-earth-900 mb-1 leading-tight">{selectedProduct.name}</h3>
                <p className="text-earth-600 font-sans font-medium">€{selectedProduct.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-earth-200 bg-white font-sans text-earth-900 focus:outline-none focus:border-earth-400"
                placeholder="Teie nimi"
              />
              
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-earth-200 bg-white font-sans text-earth-900 focus:outline-none focus:border-earth-400"
                placeholder="E-mail"
              />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-earth-600 font-sans">Kogus:</span>
                  <button type="button" onClick={() => updateQuantity(formData.quantity - 1)} className="w-9 h-9 border border-earth-200 text-earth-600 hover:bg-earth-100 font-sans text-lg">−</button>
                  <span className="font-sans text-earth-900 w-6 text-center">{formData.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(formData.quantity + 1)} className="w-9 h-9 border border-earth-200 text-earth-600 hover:bg-earth-100 font-sans text-lg">+</button>
                </div>
                <span className="font-sans text-earth-900 font-medium text-lg">€{(selectedProduct.price * formData.quantity).toFixed(2)}</span>
              </div>

              <textarea
                value={formData.customNote}
                onChange={(e) => setFormData(prev => ({ ...prev, customNote: e.target.value }))}
                className="w-full px-4 py-3 border border-earth-200 bg-white font-sans text-earth-900 focus:outline-none focus:border-earth-400 resize-none"
                placeholder="Lisamärkused (valikuline)"
                rows={2}
              />

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 font-sans uppercase tracking-widest text-sm flex items-center justify-center gap-2 ${isSuccess ? 'bg-green-600 text-white' : 'bg-earth-900 text-white hover:bg-earth-800'} ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? 'Saadan...' : isSuccess ? (<>Saadetud! <Check size={18} /></>) : (<>Saada tellimus <span className="text-lg">❤️</span></>)}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;