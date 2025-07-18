// Layout components
export { default as Header } from './layout/Header';
export { default as Footer } from './layout/Footer';
export { default as BaseLayout } from './layout/BaseLayout';

// Section components
export { default as Hero } from './sections/Hero';
export { default as About } from './sections/About';
export { default as HowItWorks } from './sections/HowItWorks';
export { default as Services } from './sections/Services';
export { default as Testimonials } from './sections/Testimonials';
export { default as LatestWorks } from './sections/LatestWorks';
export { default as FinalCTA } from './sections/FinalCTA';
export { default as Contact } from './sections/Contact';

// Page components
export { HomePage, SitesPage, DesignPage, NotFoundPage } from './pages';

// UI components
export { default as Button } from './ui/Button';
export { default as IconWrapper } from './ui/IconWrapper';
export { WhatsAppIcon, LinkedInIcon } from './ui/BrandIcon';

// Shared components
export { default as Section } from './Section';
export { default as SectionTitle } from './SectionTitle';

// Type exports
export type { ButtonProps } from './ui/Button';
export type { BrandIconType, WhatsAppIconType, LinkedInIconType } from './ui/BrandIcon';
