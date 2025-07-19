'use client';

import { useConsent } from '@/contexts/ConsentContext';
import Button from './Button';
import { Settings } from 'lucide-react';

interface CookiePreferencesProps {
  className?: string;
  showIcon?: boolean;
}

export default function CookiePreferences({ className = "", showIcon = true }: CookiePreferencesProps) {
  const { consentStatus, resetConsent, acceptCookies, rejectCookies, isLoaded } = useConsent();

  if (!isLoaded) {
    return null;
  }

  const handleReset = () => {
    resetConsent();
    // The CookieConsent component will automatically appear again
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {showIcon && <Settings className="w-4 h-4" />}
        <span>
          {consentStatus === 'accepted' && 'Cookies aceitos'}
          {consentStatus === 'rejected' && 'Cookies recusados'}
          {!consentStatus && 'Nenhuma preferência salva'}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {consentStatus && (
          <Button
            as="button"
            onClick={handleReset}
            variant="outline"
            className="text-xs px-3 py-1 h-auto"
          >
            Alterar preferências
          </Button>
        )}
        
        {!consentStatus && (
          <>
            <Button
              as="button"
              onClick={acceptCookies}
              variant="primary"
              className="text-xs px-3 py-1 h-auto"
            >
              Aceitar
            </Button>
            <Button
              as="button"
              onClick={rejectCookies}
              variant="outline"
              className="text-xs px-3 py-1 h-auto"
            >
              Recusar
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
