import CTAButton from './CTAButton';
import { Calendar } from 'lucide-react';

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title = "Tecnologia que resolve, sem complicar.",
  subtitle = "Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento.",
  description = "",
  ctaText = "Agende uma conversa",
  ctaLink = "#contato",
  backgroundImage
}: HeroProps) {
  return (
    <section 
      id="home"
      className="relative min-h-dvh flex items-center justify-center p-5"
    >
      <div
        className="w-full min-h-dvh rounded-3xl"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}>
        <div
          className="relative mx-auto lg:max-w-3xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-heading">
              {title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-white max-w-3xl mx-auto">
              {subtitle}
            </p>
            {description && (
              <p className="mt-6 text-lg leading-7 text-white max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CTAButton text={ctaText} link={ctaLink} leftIcon={Calendar} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
