import { useState } from 'react';
import { useCartStore } from '../store';
import { menuData, MenuItem } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { items: cartItems, addItem, updateQuantity } = useCartStore();

  const categories = ['All', ...new Set(menuData.map(item => item.category))];

  const filteredMenu = menuData.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getItemQuantity = (id: string) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  return (
    <section id="menu" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Our Menu</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search for your favorite dish..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-800 text-white shadow-md' 
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => {
              const qty = getItemQuantity(item.id);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {item.image && (
                    <div className="w-full h-48 bg-stone-100 overflow-hidden relative group shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-xl font-serif font-medium text-stone-800 leading-tight">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 bg-stone-50 px-3 py-1 rounded-full shrink-0">
                          <span className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-500' : item.type === 'non-veg' ? 'bg-red-500' : 'bg-stone-400'}`}></span>
                          <span className="font-semibold text-stone-800">₹{item.price}</span>
                        </div>
                      </div>
                      <p className="text-stone-500 text-sm mb-5">{item.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-stone-100/80 border-dashed">
                    {qty === 0 ? (
                      <button 
                        onClick={() => addItem(item)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 font-medium hover:bg-amber-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" /> Add to Order
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-between border border-amber-600 bg-white rounded-xl p-1 shadow-[0_0_0_2px_rgba(217,119,6,0.1)]">
                        <button 
                          onClick={() => updateQuantity(item.id, qty - 1)}
                          className="p-2 text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-stone-800 w-8 text-center">{qty}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, qty + 1)}
                          className="p-2 text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center text-stone-500 py-12">
            <p>No items found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
