'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { scrollToElement } from '@/utils/scrollUtils';

const navLinks = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Experience', path: 'experience' },
  { name: 'Skills', path: 'skills' },
  { name: 'Projects', path: 'projects' },
  { name: 'Contact', path: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Check for dark mode preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      setIsDark(savedTheme === 'dark' || 
                (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches));
      
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Handle scroll event to change navbar style and detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => document.getElementById(link.path)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom link handler to replace ScrollLink
  const handleNavClick = (targetId: string) => {
    scrollToElement(targetId);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="container">
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <div className="hidden-mobile">
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-900/80 dark:border dark:border-gray-700/30 shadow-lg dark:shadow-blue-900/20 rounded-full px-6 py-2 flex items-center transition-all duration-300">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mx-3 inline-block"
                >
                  <div
                    onClick={() => handleNavClick(link.path)}
                    className={`nav-link cursor-pointer ${
                      activeSection === link.path 
                        ? 'nav-active text-primary dark:text-blue-400 font-medium' 
                        : 'dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                    }`}
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    {link.name}
                  </div>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                onClick={toggleTheme}
                className="theme-toggle ml-3 rounded-full bg-transparent border-0 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                style={{ padding: '0.5rem', transition: 'all 0.2s ease' }}
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun className="icon-xl" /> : <FiMoon className="icon-xl" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="visible-mobile flex w-full justify-between items-center">
            <div></div> {/* Empty div to maintain space */}
            <div className="flex items-center bg-white/90 backdrop-blur-sm dark:bg-gray-900/80 dark:border dark:border-gray-700/30 shadow-lg dark:shadow-blue-900/20 rounded-full px-2 transition-all duration-300">
              <button 
                onClick={toggleTheme}
                className="theme-toggle mr-2 rounded-full bg-transparent border-0 cursor-pointer p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun className="icon" /> : <FiMoon className="icon" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle rounded-full bg-transparent border-0 cursor-pointer p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu bg-white/95 dark:bg-gray-900/95 shadow-lg dark:shadow-blue-900/20 backdrop-blur-sm overflow-hidden border-t dark:border-gray-800"
          >
            <div className="container py-4">
              <div className="flex-col gap-4">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`nav-link cursor-pointer py-2 block ${
                      activeSection === link.path 
                        ? 'nav-active text-primary dark:text-blue-400 font-medium' 
                        : 'dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                    }`}
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 