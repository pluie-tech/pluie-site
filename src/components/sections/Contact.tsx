'use client';

import { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';
import { motion } from 'motion/react';

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
}

export interface ContactProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
}

export default function Contact({
  title = "Pronto para começar seu projeto?",
  subtitle = "Conte com a Pluie para desenvolver ou aprimorar sua solução digital.",
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  return (
    <Section
      id="contato"
      color="white"
    >
      <motion.div 
        className="grid lg:grid-cols-3 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="lg:col-span-2 place-content-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <SectionTitle title={title} className="max-w-md text-left" />
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >

          <div className="">
            <motion.p 
              className="text-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="grid gap-6 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              >
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              >
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nome@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                <Label htmlFor="service">O que você está procurando?</Label>
                <Select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Desenvolvimento de site</option>
                  <option>Desenvolvimento de aplicativo</option>
                  <option>Desenvolvimento de sistema web</option>
                  <option>Validação de ideia / MVP</option>
                  <option>Consultoria em usabilidade</option>
                  <option>Automação de processos</option>
                  <option>Criação de identidade visual</option>
                  <option>Diagnóstico técnico / avaliação de sistema</option>
                  <option>Outro (descrever abaixo)</option>
                </Select>
              </motion.div>

              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              >
                <Label htmlFor="message">Conte mais pra gente</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Nos diga o que você precisa, com o máximo de clareza que conseguir."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="flex items-center justify-center cursor-pointer rounded-lg bg-brand-secondary hover:bg-brand-secondary-hover text-white font-semibold px-6 py-3 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              >
                Enviar
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
