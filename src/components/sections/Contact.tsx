'use client';

import { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';
import { motion } from 'motion/react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { trackFormSubmission, useTrackSectionView } from "@/lib/analytics";

export default function Contact() {
  const ref = useTrackSectionView("contato");

  const title = 'Pronto para começar seu projeto?';
  const subtitle = 'Conte com a Pluie para desenvolver ou aprimorar sua solução digital.';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSubmit = {
        ...formData,
        'form-name': 'contact-form'
      }
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSubmit).toString()
      })
      alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', service: '', message: '' });
      trackFormSubmission('Contato', {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  return (
    <Section
      ref={ref}
      id="contato"
      color="white"
      className="px-1 py-8 sm:px-8 sm:py-15"
      contentClassName='mt-0 '
    >
      <motion.div 
        className="flex flex-col lg:flex-row justify-start lg:justify-between max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="lg:col-span-2 place-content-center px-5 sm:px-0 mb-10 sm:mb-15 lg:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Logo className="w-[58px] sm:w-[88] mb-6 sm:mb-8" />
          <SectionTitle title={title} subtitle={subtitle} className="max-w-md text-left" />
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="lg:ml-8"
        >

          <div className="bg-border p-9 sm:p-15 rounded-[36px]">
            <motion.form 
              id='contact-form'
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="grid gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              >
                <Label htmlFor="name">Seu nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div 
                className="grid gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              >
                <Button variant="primary" className="w-full" type="submit" as="button">
                  Enviar
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
