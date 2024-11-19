// Enhanced security utility functions
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

interface RateLimitData {
  attempts: number;
  lastAttempt: number;
  lockedUntil?: number;
}

export const sanitizeInput = (input: string): string => {
  // Enhanced input sanitization
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s@.-]/gi, '')
    .trim()
    .slice(0, 1000); // Limit input length
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length < 254;
};

export const rateLimit = (key: string, limitMs: number = 60000): boolean => {
  try {
    const storageKey = `rateLimit_${key}`;
    const now = Date.now();
    
    // Get existing rate limit data
    const storedData = localStorage.getItem(storageKey);
    const data: RateLimitData = storedData ? JSON.parse(storedData) : {
      attempts: 0,
      lastAttempt: 0
    };

    // Check if user is locked out
    if (data.lockedUntil && now < data.lockedUntil) {
      return false;
    }

    // Reset attempts if enough time has passed
    if (now - data.lastAttempt > limitMs) {
      data.attempts = 0;
    }

    // Increment attempts
    data.attempts++;
    data.lastAttempt = now;

    // Check if should be locked out
    if (data.attempts > MAX_ATTEMPTS) {
      data.lockedUntil = now + LOCKOUT_TIME;
      localStorage.setItem(storageKey, JSON.stringify(data));
      return false;
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch {
    return false; // Fail closed
  }
};