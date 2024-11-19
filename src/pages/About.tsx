import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Target, Users, Shield, Rocket, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.desc')
    },
    {
      icon: Rocket,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.desc')
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: t('about.achievements.clients')
    },
    {
      number: '5+',
      label: t('about.achievements.experience')
    },
    {
      number: '24/7',
      label: t('about.achievements.support')
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('about.mission.description')}
              </p>
              <ul className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span>{t(`about.mission.points.${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-xl p-8">
              <Target className="w-20 h-20 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-300">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-navy-700 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-xl p-12">
            <div className="flex items-center justify-center mb-12">
              <Award className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-white">
                {t('about.achievements.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;