import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { sendEmail } from '../lib/emailjs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await sendEmail(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('contact.title')}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-navy-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.title')}</h3>
                </div>
                <p className="text-gray-300 whitespace-pre-line">{t('contact.info.available')}</p>
              </div>

              <div className="bg-navy-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.phone')}</h3>
                </div>
                <a 
                  href="tel:+14383706033"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (438) 370-6033
                </a>
              </div>

              <div className="bg-navy-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.email')}</h3>
                </div>
                <a 
                  href="mailto:info@aetechsolutions.net"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@aetechsolutions.net
                </a>
              </div>

              <div className="bg-navy-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-white">{t('contact.info.location')}</h3>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Montreal,QC,Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Montreal, QC, Canada
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-navy-800 p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={6}
                      className="w-full px-4 py-2 bg-navy-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={`w-full bg-primary text-navy-900 py-3 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors ${
                      status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {status.submitting ? '...' : t('contact.form.send')}
                  </button>

                  {status.submitted && (
                    <p className="text-green-400 text-center">Message sent successfully!</p>
                  )}
                  {status.error && (
                    <p className="text-red-400 text-center">{status.error}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;