import CTAButton from '../ui/CTAButton';
import { Calendar } from 'lucide-react';

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}: HeroProps) {
  return (
    <section 
      id="home"
      className="relative flex items-center justify-center p-5"
    >
      <div
        className="w-full rounded-3xl"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}>
        <div
          className="relative mx-auto lg:max-w-3xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-white leading-[1.1] sm:text-5xl lg:text-[72px] font-heading">
              {title}
            </h1>
            <p className="mt-6 text-2xl leading-8 text-white max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CTAButton text={ctaText} link={ctaLink} leftIcon={Calendar} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
