"use client";

import Image from 'next/image';
import Section from '../Section';
import { motion } from 'motion/react';
import IconWrapper from '../ui/IconWrapper';
import { Sprout } from 'lucide-react';

type AboutSectionWithContent = {
  content: string;
}

type AboutSectionWithPoints = {
  title: string;
  points: {
    title: string;
    description: string;
  }[]
}

export interface AboutProps {
  title: string;
  intro: string;
  sections: Array<AboutSectionWithContent | AboutSectionWithPoints>;
}


export default function About({
  title,
  intro,
  sections
}: AboutProps) {
  const aboutSectionWithContent = sections[0] as AboutSectionWithContent;
  const aboutSectionWithPoints = sections[1] as AboutSectionWithPoints;
  return (
    <Section
      id="quem-somos"
      title={title}
      subtitle={intro}
    >  
      <motion.div 
        className="mx-auto mt-16 max-w-5xl flex flex-col sm:flex-row gap-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="rounded-3xl bg-border p-8 sm:p-12 grid gap-6 sm:w-2/5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Image src="/Pluie-logo.svg" alt="Pluie Logo" width={64} height={74} />
          </motion.div>
          <motion.p 
            className="text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {aboutSectionWithContent.content}
          </motion.p>
          <motion.h3 
            className="text-2xl font-bold font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Por isso, fundamos a Pluie.
          </motion.h3>
        </motion.div>
            
            
        <motion.div 
          className="rounded-3xl p-8 sm:p-12 sm:w-3/5 bg-gradient-to-b from-[#E1EFF899]/60 to-[#E0F8ED99]/60"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h4 
            className="text-4xl font-black font-heading mb-5 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {aboutSectionWithPoints.title}
          </motion.h4>
          <div className="grid grid-cols-1 gap-8">
            {aboutSectionWithPoints.points.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2), ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.2), ease: "easeOut" }}
                >
                  {/* <Image src="/mini-logo.svg" alt={feature.title} width={28} height={28} /> */}
                  <IconWrapper icon={Sprout} size="small" />
                </motion.div>
                <div className="ml-4">
                  <motion.h4 
                    className="text-2xl font-bold mb-3 font-heading"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.8, delay: 1.1 + (index * 0.2), ease: "easeOut" }}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p 
                    className="text-xl leading-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.8, delay: 1.2 + (index * 0.2), ease: "easeOut" }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}