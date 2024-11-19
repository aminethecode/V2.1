import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Server, Cpu, Users, CheckCircle, Network, Cloud, Database, 
  Lock, Clock, Headset, Wrench, BrainCircuit
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const serviceCategories = [
    {
      icon: Shield,
      title: t('services.categories.cyber.title'),
      description: t('services.categories.cyber.desc'),
      services: [
        {
          icon: Lock,
          name: t('services.categories.cyber.title'),
          features: [
            t('services.categories.cyber.features.assessment'),
            t('services.categories.cyber.features.policy'),
            t('services.categories.cyber.features.compliance'),
            t('services.categories.cyber.features.training')
          ]
        },
        {
          icon: Database,
          name: t('services.categories.dataProtection.title'),
          features: [
            t('services.categories.dataProtection.features.encryption'),
            t('services.categories.dataProtection.features.backup'),
            t('services.categories.dataProtection.features.access'),
            t('services.categories.dataProtection.features.prevention')
          ]
        }
      ]
    },
    {
      icon: Server,
      title: t('services.categories.infrastructure.title'),
      description: t('services.categories.infrastructure.desc'),
      services: [
        {
          icon: Network,
          name: t('services.categories.infrastructure.title'),
          features: [
            t('services.categories.infrastructure.features.network'),
            t('services.categories.infrastructure.features.wireless'),
            t('services.categories.infrastructure.features.vpn'),
            t('services.categories.infrastructure.features.performance')
          ]
        },
        {
          icon: Cloud,
          name: t('services.categories.cloud.title'),
          features: [
            t('services.categories.cloud.features.migration'),
            t('services.categories.cloud.features.hybrid'),
            t('services.categories.cloud.features.security'),
            t('services.categories.cloud.features.recovery')
          ]
        }
      ]
    },
    {
      icon: Headset,
      title: t('services.categories.support.title'),
      description: t('services.categories.support.desc'),
      services: [
        {
          icon: Clock,
          name: t('services.categories.support.title'),
          features: [
            t('services.categories.support.features.remote'),
            t('services.categories.support.features.hardware'),
            t('services.categories.support.features.software'),
            t('services.categories.support.features.email')
          ]
        },
        {
          icon: Wrench,
          name: t('services.categories.managed.title'),
          features: [
            t('services.categories.managed.features.monitoring'),
            t('services.categories.managed.features.maintenance'),
            t('services.categories.managed.features.assets'),
            t('services.categories.managed.features.reporting')
          ]
        }
      ]
    },
    {
      icon: BrainCircuit,
      title: t('services.categories.consulting.title'),
      description: t('services.categories.consulting.desc'),
      services: [
        {
          icon: Users,
          name: t('services.categories.consulting.title'),
          features: [
            t('services.categories.consulting.features.roadmap'),
            t('services.categories.consulting.features.transformation'),
            t('services.categories.consulting.features.planning'),
            t('services.categories.consulting.features.risk')
          ]
        },
        {
          icon: Cpu,
          name: t('services.categories.consulting.title'),
          features: [
            t('services.categories.consulting.features.roadmap'),
            t('services.categories.consulting.features.transformation'),
            t('services.categories.consulting.features.planning'),
            t('services.categories.consulting.features.risk')
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-navy-800 rounded-xl p-8">
                  <div className="flex items-center mb-8">
                    <category.icon className="w-12 h-12 text-primary mr-4" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-gray-300 mt-2">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-navy-700 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <service.icon className="w-6 h-6 text-primary mr-3" />
                          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        </div>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('services.cta.desc')}
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-block bg-primary text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors"
            >
              {t('services.cta.button')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;