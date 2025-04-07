import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBrain } from 'react-icons/fa';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-dark/80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FaBrain className="text-neon-cyan text-2xl" />
          <span className="text-2xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
            VYAKTRA
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                to={link.path}
                className="text-lg font-medium transition-colors hover:text-neon-cyan"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', bounce: 0.25 }}
                />
              )}
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark"
          >
            Launch Agent
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-neon-cyan">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;