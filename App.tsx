import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { UtensilsCrossed, ShoppingBag, MapPin, Phone, Star, Clock, ChefHat, PhoneCall, Search } from 'lucide-react';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import { useCartStore } from './store';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore(state => state.totalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-stone-800 selection:bg-amber-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-stone-200' : 'bg-transparent py-6 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shadow-sm p-1 overflow-hidden shrink-0">
              {/* Fallback to M if logo.png is not uploaded yet */}
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden font-serif text-xl font-bold italic">M</span>
            </div>
            <div className="font-serif text-xl font-bold tracking-tight text-stone-900">
              Maa Tara <span className="font-sans text-xs uppercase tracking-widest text-amber-700 block -mt-1 font-semibold">Restaurant</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 font-medium text-stone-600">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-amber-700 transition-colors">Home</button>
              <button onClick={scrollToMenu} className="hover:text-amber-700 transition-colors">Menu</button>
              <button onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-700 transition-colors">Location</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-700 transition-colors">About</button>
            </div>

            <div className="flex items-center gap-6">
              <a href="tel:+919832104567" className="hidden md:flex items-center gap-2 font-medium text-stone-600 hover:text-amber-700 transition-colors">
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 bg-white hover:bg-stone-50 border border-stone-200 shadow-sm rounded-full text-stone-700 hover:text-amber-700 hover:scale-105 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#EAE5DF]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] rounded-full bg-amber-200/40 blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-orange-200/30 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50/50 text-amber-800 text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              4.1 (256+ Reviews)
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-stone-900 mb-6 drop-shadow-sm">
              Taste of tradition <br className="hidden md:block"/>
              <span className="text-amber-700 italic">in every bite.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience the authentic flavors of Bengali thali, North Indian delicacies, and quick snacks in a warm, family-friendly atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors shadow-xl shadow-stone-900/20 flex items-center justify-center gap-2 text-lg"
              >
                <UtensilsCrossed className="w-5 h-5" />
                View Menu & Order
              </button>
              <a 
                href="tel:+919832104567"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-stone-200 text-stone-800 font-medium hover:border-stone-300 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <PhoneCall className="w-5 h-5 text-stone-400" />
                Call to Order
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-stone-900 rounded-[4rem] rotate-3 shadow-2xl"></div>
              <div className="absolute inset-0 bg-stone-800 rounded-[4rem] -rotate-3 border-8 border-[#FAF9F6] flex flex-col items-center justify-center text-white overflow-hidden shadow-inner">
                <img src="/cover.jpg" alt="Dish Preview" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center bg-stone-900/60 rounded-3xl backdrop-blur-md m-8 border border-white/20">
                  <ChefHat className="w-20 h-20 mb-4 text-amber-400" />
                  <h3 className="font-serif text-3xl italic mb-2 text-white drop-shadow-md">Authentic Recipes</h3>
                  <p className="font-sans uppercase tracking-[0.2em] text-xs text-stone-300">Since 2016</p>
                </div>
              </div>
              
              {/* Floating review badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-stone-100 transform -rotate-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-amber-700 text-xl">"</span>
                </div>
                <div>
                  <p className="font-serif italic text-stone-800 text-sm max-w-[150px]">Amazing fish curry & rice, homely taste.</p>
                  <p className="text-xs text-stone-500 mt-1 uppercase font-semibold">— Aniket P.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="flex flex-col items-center md:items-start p-6">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 text-amber-700">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Location</h3>
              <p className="text-stone-500">45 College Street, Near Ghurni More<br/>Krishnanagar, West Bengal 741103</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-6">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 text-amber-700">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Services</h3>
              <p className="text-stone-500">Dine-in • Takeaway<br/>Home Delivery (within 5km)</p>
            </div>

            <div className="flex flex-col items-center md:items-start p-6">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 text-amber-700">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Contact</h3>
              <p className="text-stone-500">+91 98321 04567<br/>maatara.restaurant@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu */}
      <MenuSection />

      {/* Footer */}
      <footer id="about" className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-2xl font-bold tracking-tight text-white mb-4">
              Maa Tara <span className="font-sans text-xs uppercase tracking-widest text-amber-600 block mt-1 font-semibold">Restaurant</span>
            </div>
            <p className="max-w-md text-stone-400 mb-6 leading-relaxed">
              Serving the authentic taste of Bengal and North India since 2016. Founded by Subhendu Chakraborty. A perfect place for family gatherings and delicious meals.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-stone-800 rounded-full text-xs font-medium text-stone-300 border border-stone-700">Cash</span>
              <span className="px-3 py-1 bg-stone-800 rounded-full text-xs font-medium text-stone-300 border border-stone-700">UPI</span>
              <span className="px-3 py-1 bg-stone-800 rounded-full text-xs font-medium text-stone-300 border border-stone-700">Cards</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={scrollToMenu} className="hover:text-amber-500 transition-colors">Menu</button></li>
              <li><button className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button className="hover:text-amber-500 transition-colors">Contact</button></li>
              <li><button className="hover:text-amber-500 transition-colors">Party Orders</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Mon - Sun:</span> <span>11:00 AM - 10:30 PM</span></li>
            </ul>
            <div className="mt-8">
              <a href="tel:+919832104567" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
                <PhoneCall className="w-4 h-4" /> +91 98321 04567
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Maa Tara Family Restaurant. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for taste, built with love.</p>
        </div>
      </footer>

      {/* Cart Drawer Overlay */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
