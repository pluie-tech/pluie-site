"use client";

import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import { motion } from 'motion/react';

export default function Testimonials() {
  const title = 'Tecnologia que faz sentido pra todo mundo';
  const subtitle = 'Não importa se é dono do negócio ou se é quem está usando: o que a gente faz resolve e funciona de verdade.';
  const quotes = [
    {
      quote: 'Eu não entendo nada de tecnologia, mas eles explicaram tudo com clareza e foram super parceiros do começo ao fim.',
      author: 'Irene, dona de clínica',
      authorImage: '/images/testimonials/testimonial1.png'
    },
    {
      quote: 'Usei o DESAFIADO e consegui alcançar meus objetivos de vida.',
      author: 'Pi, dono de zoológico',
      authorImage: '/images/testimonials/testimonial2.png'
    },
    {
      quote: 'Graças ao GASTADO eu consegui comprar minha coleção de bonecos de Jojo Parte 3.',
      author: 'Cleia, otaku safada',
      authorImage: '/images/testimonials/testimonial3.png'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />

        <motion.div 
          className="mx-auto mt-16 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {quotes.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-4xl p-8 bg-gradient-to-b from-[#E1EFF8]/60 to-[#E0F8ED]/60"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                >
                  <Image
                    className="size-16 rounded-2xl mb-6"
                    src={testimonial.authorImage}
                    width={64}
                    height={64}
                    alt="User avatar"
                  />
                </motion.div>
                <motion.blockquote 
                  className="leading-[130%] text-xl font-medium font-heading tracking-title mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                >
                  {testimonial.quote}
                </motion.blockquote>
                <motion.cite 
                  className="not-italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                >
                  — {testimonial.author}
                </motion.cite>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
