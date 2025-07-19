import { useState, useEffect } from 'react';

type CookieConsentStatus = 'accepted' | 'rejected' | null;

export function useCookieConsent() {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pluie-cookie-consent');
    setConsentStatus(saved as CookieConsentStatus);
    setIsLoaded(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('pluie-cookie-consent', 'accepted');
    setConsentStatus('accepted');
  };

  const rejectCookies = () => {
    localStorage.setItem('pluie-cookie-consent', 'rejected');
    setConsentStatus('rejected');
  };

  const resetConsent = () => {
    localStorage.removeItem('pluie-cookie-consent');
    setConsentStatus(null);
  };

  return {
    consentStatus,
    isLoaded,
    hasConsented: consentStatus !== null,
    hasAccepted: consentStatus === 'accepted',
    hasRejected: consentStatus === 'rejected',
    acceptCookies,
    rejectCookies,
    resetConsent,
  };
}
