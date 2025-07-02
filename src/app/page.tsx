"use client";

import { Hero, About, HowItWorks, Services, Testimonials, LatestWorks, FinalCTA, Contact } from '@/components';
import { motion } from 'framer-motion';
import content from '@/../docs/content.json';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const { hero, about_us, how_it_works, solutions, testimonials, latest_works, final_cta } = content.page;

  return (
    <main className="overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          ctaText={hero.cta_button.text}
          ctaLink="#contato"
          backgroundImage='/images/hero.png'
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <About {...about_us} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <HowItWorks {...how_it_works} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <Services services={solutions} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <Testimonials {...testimonials} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <LatestWorks {...latest_works} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <FinalCTA {...final_cta} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
        className="will-change-transform"
      >
        <Contact />
      </motion.div>
    </main>
  );
}
