'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | null;

interface ConsentContextType {
  consentStatus: ConsentStatus;
  isLoaded: boolean;
  hasConsented: boolean;
  hasAccepted: boolean;
  hasRejected: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

interface ConsentProviderProps {
  children: ReactNode;
}

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

export function ConsentProvider({ children }: ConsentProviderProps) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize consent state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('pluie-cookie-consent') as ConsentStatus;
    setConsentStatus(saved);
    setIsLoaded(true);

    // Initialize gtag consent mode
    if (window.gtag) {
      window.gtag('consent', 'default', {
        analytics_storage: saved === 'accepted' ? 'granted' : 'denied',
        ad_storage: 'denied', // We're not using ads
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted', // Always granted for security
      });
    }
  }, []);

  // Update consent when status changes
  useEffect(() => {
    if (isLoaded && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consentStatus === 'accepted' ? 'granted' : 'denied',
      });
    }
  }, [consentStatus, isLoaded]);

  const acceptCookies = () => {
    localStorage.setItem('pluie-cookie-consent', 'accepted');
    setConsentStatus('accepted');
    
    // Update gtag consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('pluie-cookie-consent', 'rejected');
    setConsentStatus('rejected');
    
    // Update gtag consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  const resetConsent = () => {
    localStorage.removeItem('pluie-cookie-consent');
    setConsentStatus(null);
    
    // Reset gtag consent to default (denied)
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  const value: ConsentContextType = {
    consentStatus,
    isLoaded,
    hasConsented: consentStatus !== null,
    hasAccepted: consentStatus === 'accepted',
    hasRejected: consentStatus === 'rejected',
    acceptCookies,
    rejectCookies,
    resetConsent,
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextType {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
