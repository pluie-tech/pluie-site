import CTAButton from '../ui/CTAButton';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
            {description && (
              <motion.p 
                className="mt-6 text-lg leading-7 text-white max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {description}
              </motion.p>
            )}
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <CTAButton text={ctaText} link={ctaLink} leftIcon={Calendar} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
