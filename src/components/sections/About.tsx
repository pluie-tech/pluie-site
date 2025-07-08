"use client";

import Section from '../Section';
import { motion } from 'motion/react';
import IconWrapper from '../ui/IconWrapper';
import { Sprout } from 'lucide-react';
import Logo from '../ui/Logo';
import { useTrackSectionView } from "@/lib/analytics";

export default function About() {
  const ref = useTrackSectionView("quem-somos");

  const title = 'Quem somos';
  const intro = 'Profissionais experientes em design, desenvolvimento e metologias de trabalho.';
  const sections = [
    {
      content:
        'Temos vivência na área de tecnologia e queremos oferecer às pequenas e médias empresas uma abordagem com a nossa cara: pensamento colaborativo, processos enxutos, agilidade e qualidade nas entregas.'
    },
    {
      title: 'Por que somos diferentes',
      points: [
        {
          title: 'Ouvimos antes de criar',
          description: 'Entendemos sua realidade para sugerir a solução ideal (não a mais complexa).'
        },
        {
          title: 'Software que funciona',
          description: 'Seu sistema nasce rápido, com boa usabilidade e pronto para crescer.'
        },
        {
          title: 'Sem dor de cabeça',
          description: 'Levamos nosso trabalho a sério. Você ganha tempo e qualidade.'
        }
      ]
    }
  ];

  const aboutSectionWithContent = sections[0] as { content: string };
  const aboutSectionWithPoints = sections[1] as { title: string; points: { title: string; description: string }[] };

  return (
    <Section
      ref={ref}
      id="quem-somos"
      title={title}
      subtitle={intro}
      titleClassName="max-w-2xl mx-auto text-center"
      className="px-2 pt-8 pb-2 sm:px-0 lg:py-10"
    >  
      <motion.div 
        className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          className="rounded-3xl bg-border p-8 lg:p-12 grid gap-6 lg:w-2/5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Logo size={64} />
          </motion.div>
          <motion.p 
            className="text-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          >
            {aboutSectionWithContent.content}
          </motion.p>
          <motion.h3 
            className="text-2xl font-bold font-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          >
            Por isso, fundamos a Pluie.
          </motion.h3>
        </motion.div>
            
            
        <motion.div 
          className="rounded-3xl p-8 lg:p-12 lg:w-3/5 bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h4 
            className="text-[32px] sm:text-[40px] font-extrabold sm:font-black font-heading leading-small mb-5 lg:mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            {aboutSectionWithPoints.title}
          </motion.h4>
          <div className="grid grid-cols-1 gap-8">
            {aboutSectionWithPoints.points.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.2), ease: "easeOut" }}
                >
                  <IconWrapper icon={Sprout} size="small" />
                </motion.div>
                <div className="ml-4">
                  <motion.h6 
                    className="text-2xl font-semibold mb-1 font-heading"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.2), ease: "easeOut" }}
                  >
                    {feature.title}
                  </motion.h6>
                  <motion.p 
                    className="text-xl leading-normal"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.2), ease: "easeOut" }}
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