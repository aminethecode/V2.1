import emailjs from '@emailjs/browser';
import { sanitizeInput, validateEmail, rateLimit } from './security';
import config from './config';

// Initialize EmailJS
emailjs.init(config.emailjs.init);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: EmailData) => {
  try {
    if (!validateEmail(formData.email)) {
      throw new Error('Invalid email format');
    }

    if (!rateLimit('emailSend')) {
      throw new Error('Too many attempts. Please try again later.');
    }

    const sanitizedData = {
      from_name: sanitizeInput(formData.name),
      from_email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
      to_email: 'info@aetechsolutions.net'
    };

    if (!sanitizedData.from_name || !sanitizedData.message) {
      throw new Error('Invalid input data');
    }

    const result = await emailjs.send(
      config.emailjs.serviceId,
      config.emailjs.templateId,
      sanitizedData
    );

    return result;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send message. Please try again later.');
  }
};