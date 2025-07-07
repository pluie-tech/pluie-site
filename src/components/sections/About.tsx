"use client";

import Section from '../Section';
import { motion } from 'motion/react';
import IconWrapper from '../ui/IconWrapper';
import { Sprout } from 'lucide-react';
import Logo from '../ui/Logo';

export default function About() {
  const title = 'Quem somos';
  const intro = 'Dois veteranos da tecnologia que viram produtos bons morrerem em processos ruins.';
  const sections = [
    {
      content:
        'Nos conhecemos no mercado de trabalho, onde aprendemos uma lição valiosa: times inflados e hierarquias engessadas criam produtos caros, lentos e distantes de quem realmente importa – o cliente. Por isso, fundamos a Pluie.'
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
      id="quem-somos"
      title={title}
      subtitle={intro}
      titleClassName="max-w-2xl mx-auto text-center"
    >  
      <motion.div 
        className="mx-auto mt-16 max-w-7xl flex flex-col lg:flex-row gap-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="rounded-3xl bg-border p-8 lg:p-12 grid gap-6 lg:w-2/5"
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
            <Logo size={64} />
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
          className="rounded-3xl p-8 lg:p-12 lg:w-3/5 bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h4 
            className="text-4xl font-black font-heading mb-5 lg:mb-8"
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
                  <IconWrapper icon={Sprout} size="small" />
                </motion.div>
                <div className="ml-4">
                  <motion.h4 
                    className="text-2xl font-bold mb-1 font-heading"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.8, delay: 1.1 + (index * 0.2), ease: "easeOut" }}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p 
                    className="text-xl leading-normal"
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