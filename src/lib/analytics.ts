declare global {
  interface Window {
    umami: {
      track: (event: string, context?: Record<string, unknown>) => void;
    };
  }

}

export type SiteSection = 'header' | 'hero' | 'quem-somos' | 'servicos' | 'trabalhos' | 'cta_final' | 'como-funciona' | 'depoimentos' | 'contato' | 'footer';


/**
 * Tipos de eventos suportados
 */
export type AnalyticsEvent =
  | 'clique_cta_whatsapp'
  | 'envio_formulario'
  | 'visualizacao_secao'
  | `visualizacao_secao_${SiteSection}`; // permite eventos dinâmicos por seção

/**
 * Contextos possíveis para eventos
 */

export type AnalyticsContext = Record<string, unknown>


/**
 * Função para rastrear eventos usando o umami
 */
export function trackEvent(
  event: AnalyticsEvent,
  context?: AnalyticsContext
) {
  if (typeof window !== 'undefined' && (window.umami)) {
    window.umami.track(event, context);
  }
}

/**
 * Rastreia clique em CTA do WhatsApp
 * @param section Seção onde o CTA foi clicado (ex: 'header', 'footer')
 */
export function trackWhatsAppCTA(section: SiteSection) {
  trackEvent('clique_cta_whatsapp', { section });
}

/**
 * Rastreia envio de formulário
 * @param section Seção do formulário (ex: 'Contato')
 */
export function trackFormSubmission(formName: string, data?: Record<string, string>) {
  trackEvent('envio_formulario', { formName, data });
}

/**
 * Rastreia visualização de seção
 * @param section Nome da seção visualizada
 */
export function trackSectionView(section: SiteSection) {
  trackEvent(`visualizacao_secao_${section}`, { section });
}

/**
 * Hook para rastrear visualização de seção
 * Usa Intersection Observer para disparar o evento quando a seção estiver visível
 */
import { useEffect, useRef } from 'react';

export function useTrackSectionView(section: SiteSection, options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            trackSectionView(section);
            triggered = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3, ...options }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [section, options]);

  return ref;
}
