import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <Church className="h-8 w-8 text-primary-800" />
          <div className="ml-2">
            <h1 className="text-xl font-serif font-bold text-primary-800 leading-none">
              THE LORD REIGNS
            </h1>
            <p className="text-xs font-medium text-primary-700 mt-[-2px]">CHURCH</p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col space-y-6 p-8 text-center">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;