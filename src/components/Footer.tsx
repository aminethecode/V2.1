import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-navy-800 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <button onClick={() => handleNavigation('/')} className="hover:opacity-80 transition-opacity">
              <Logo />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/services')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.servicesList.support')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/services')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.servicesList.infrastructure')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/services')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.servicesList.security')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/services')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.servicesList.consulting')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/about')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.companyList.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="text-gray-400 hover:text-primary"
                >
                  {t('footer.companyList.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+14383706033" 
                  className="hover:text-primary transition-colors"
                >
                  (438) 370-6033
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@aetechsolutions.net" 
                  className="hover:text-primary transition-colors"
                >
                  info@aetechsolutions.net
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Montreal,QC,Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Montreal, QC, Canada
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AE Tech Solutions. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;