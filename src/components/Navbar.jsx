
import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Purpose', path: '/purpose' },
    { name: 'Comparison', path: '/comparison' },
    { name: 'Modules', path: '/#modules' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl shadow-black/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-2xl tracking-tighter text-white flex items-center gap-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-heading text-xl md:text-2xl">
            RebelCreator<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">OS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 relative group tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
            Log in
          </button>
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-indigo-50 hover:scale-105 hover:shadow-indigo-500/25">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-slate-900 border-t border-white/10 fixed top-[72px] left-0 right-0 overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6 min-h-[calc(100vh-72px)]">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-slate-200 hover:text-indigo-400 block py-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <hr className="border-white/10 my-4" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <button className="w-full text-center py-4 font-bold text-slate-300 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                  Log in
                </button>
                <button className="w-full text-center py-4 font-bold text-slate-900 bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition-colors">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
