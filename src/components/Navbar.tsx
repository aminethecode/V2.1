import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-navy-800 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary">{t('nav.home')}</Link>
            <Link to="/services" className="text-gray-300 hover:text-primary">{t('nav.services')}</Link>
            <Link to="/about" className="text-gray-300 hover:text-primary">{t('nav.about')}</Link>
            <LanguageSwitch />
            <Link 
              to="/contact"
              className="bg-primary text-navy-900 px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
            >
              {t('nav.support')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-primary">{t('nav.home')}</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-primary">{t('nav.services')}</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-primary">{t('nav.about')}</Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors"
            >
              {t('nav.support')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;