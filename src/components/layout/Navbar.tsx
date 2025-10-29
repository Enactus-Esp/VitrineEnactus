import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Actualités', path: '/news' },
  { label: 'Projets', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = `relative group font-semibold transition-all duration-300 hover:text-[#FFD800] text-lg`;
  const activeLinkClasses = `text-[#FFD800]`;

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <img src="/logo.jpg" alt="Enactus ESP Logo" className="h-12 md:h-14 w-auto mr-4 rounded-full shadow-lg" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD800] to-[#ffb300] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-[#FFD800] leading-tight">
                  Enactus ESP
                </span>
                <span className="text-xs text-gray-600 font-medium hidden md:block">
                  Entrepreneurial Action for a Better World
                </span>
              </div>
            </NavLink>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClasses : 'text-gray-800'}`
                  }
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD800] to-[#ffb300] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </NavLink>
              ))}
              
              {/* Bouton CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Rejoins-nous
                </NavLink>
              </motion.div>
            </nav>

            {/* Bouton Menu Mobile */}
            <motion.button
              className="lg:hidden text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl z-40 overflow-hidden"
          >
            <div className="container mx-auto container-padding py-8">
              <nav className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block text-xl font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'text-[#FFD800] bg-[#FFD800]/10' 
                            : 'text-gray-800 hover:text-[#FFD800] hover:bg-gray-50'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                
                {/* Bouton CTA Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <NavLink
                    to="/contact"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#FFD800] to-[#ffb300] text-black font-bold rounded-xl shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Rejoins-nous
                  </NavLink>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
