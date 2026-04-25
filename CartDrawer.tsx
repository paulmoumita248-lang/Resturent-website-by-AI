import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, PhoneCall, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '../store';
import React, { useState } from 'react';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, updateQuantity, totalPrice, clearCart } = useCartStore();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [orderDetails, setOrderDetails] = useState({ name: '', phone: '', address: '', type: 'delivery' });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const resetAndClose = () => {
    if (checkoutStep === 'success') {
      clearCart();
    }
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-stone-50 shadow-2xl z-50 flex flex-col font-sans border-l border-stone-200"
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-white">
              <h2 className="text-xl font-serif font-semibold text-stone-800 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-600" />
                {checkoutStep === 'success' ? 'Order Confirmed' : checkoutStep === 'details' ? 'Delivery Details' : 'Your Order'}
              </h2>
              <button onClick={resetAndClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {checkoutStep === 'cart' && (
                <>
                  {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                      <ShoppingBag className="w-16 h-16 opacity-50" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="flex-1">
                            <h4 className="font-medium text-stone-800">{item.name}</h4>
                            <p className="text-sm text-stone-500">₹{item.price}</p>
                          </div>
                          <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-full px-3 py-1 scale-90 origin-right">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-stone-400 hover:text-amber-600">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-6 text-center font-medium text-stone-800">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-stone-400 hover:text-amber-600">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="font-medium text-stone-800 w-16 text-right pt-1">
                            ₹{item.price * item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'details' && (
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Order Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderDetails(prev => ({ ...prev, type: 'delivery' }))}
                        className={`py-2 px-4 rounded-full border text-sm font-medium transition-colors ${orderDetails.type === 'delivery' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-600 border-stone-200'}`}
                      >
                        Home Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderDetails(prev => ({ ...prev, type: 'takeaway' }))}
                        className={`py-2 px-4 rounded-full border text-sm font-medium transition-colors ${orderDetails.type === 'takeaway' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-600 border-stone-200'}`}
                      >
                        Takeaway
                      </button>
                    </div>
                    {orderDetails.type === 'delivery' && <p className="text-xs text-stone-500 mt-2">* Delivery within 5 km radius</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                    <input required type="text" value={orderDetails.name} onChange={e => setOrderDetails(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                    <input required type="tel" value={orderDetails.phone} onChange={e => setOrderDetails(prev => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white" placeholder="+91" />
                  </div>
                  {orderDetails.type === 'delivery' && (
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Delivery Address</label>
                      <textarea required rows={3} value={orderDetails.address} onChange={e => setOrderDetails(prev => ({ ...prev, address: e.target.value }))} className="w-full px-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white resize-none" placeholder="Full address with landmark" />
                    </div>
                  )}
                </form>
              )}

              {checkoutStep === 'success' && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-stone-800 mb-2">Order Received!</h3>
                    <p className="text-stone-500 text-sm max-w-[250px] mx-auto">
                      Thank you, {orderDetails.name}. Your {orderDetails.type} order has been placed.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-stone-200 w-full text-left space-y-2 mt-4 shadow-sm">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Order Ref:</span>
                      <span className="font-medium">#MTFR-{Math.floor(Math.random() * 10000)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Total Amount:</span>
                      <span className="font-medium">₹{totalPrice()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Payment:</span>
                      <span className="font-medium">Pay on Delivery/Pickup</span>
                    </div>
                  </div>

                  <p className="text-sm text-stone-500">
                    We will call you shortly to confirm your order.
                  </p>
                </div>
              )}
            </div>

            {items.length > 0 && checkoutStep !== 'success' && (
              <div className="p-6 bg-white border-t border-stone-200 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-stone-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-serif font-medium text-stone-800">₹{totalPrice()}</span>
                </div>
                
                {checkoutStep === 'cart' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a href="tel:+919832104567" className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-amber-600 text-amber-700 font-medium hover:bg-amber-50 transition-colors">
                      <PhoneCall className="w-4 h-4" /> Order via Call
                    </a>
                    <button onClick={() => setCheckoutStep('details')} className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
                      Checkout <span className="opacity-70 mx-1">|</span> ₹{totalPrice()}
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setCheckoutStep('cart')} className="px-6 py-3 rounded-full border border-stone-200 text-stone-600 font-medium hover:bg-stone-50 transition-colors">
                      Back
                    </button>
                    <button form="checkout-form" type="submit" className="flex-1 py-3 px-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
                      Confirm Order
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
