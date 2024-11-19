import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Server, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.desc')
    },
    {
      icon: Server,
      title: t('features.support.title'),
      description: t('features.support.desc')
    },
    {
      icon: Users,
      title: t('features.expert.title'),
      description: t('features.expert.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {t('hero.title')}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary">
            {t('hero.subtitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('hero.description')}
          </p>
          <p className="text-xl text-gray-300 mb-12">
            {t('hero.subDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors"
            >
              {t('hero.cta.support')}
            </Link>
            <Link 
              to="/services"
              className="border-2 border-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-primary hover:text-primary transition-colors"
            >
              {t('hero.cta.services')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-navy-700 hover:transform hover:scale-105 transition-all duration-300"
              >
                <feature.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;