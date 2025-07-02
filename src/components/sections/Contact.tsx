'use client';

import { useState } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';

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
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="lg:col-span-2 place-content-center">
          <SectionTitle title={title} className="max-w-md text-left" />
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1">

          <div className="">
            <p className="text-2xl mb-6">
              {subtitle}
            </p>
            <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
              <div className="grid gap-2">
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
              </div>

              <div className="grid gap-2">
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
              </div>

              <div className="grid gap-2">
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
              </div>

              <div className="grid gap-2">
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
              </div>

              <button
                type="submit"
                className="flex items-center justify-center cursor-pointer rounded-lg bg-brand-secondary hover:bg-brand-secondary-hover text-white font-semibold px-6 py-3 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
