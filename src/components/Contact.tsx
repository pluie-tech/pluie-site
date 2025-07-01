'use client';

import { useState } from 'react';
import Section from './Section';

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
  title = "Entre em Contato",
  subtitle = "Pronto para começar seu projeto? Adoraríamos ouvir de você. Mande uma mensagem e responderemos o mais rápido possível.",
  contactInfo = {
    email: "hello@pluie.com",
    phone: "+55 (11) 99999-9999",
    address: "São Paulo, SP",
    hours: "Segunda - Sexta: 9:00 - 18:00"
  }
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section
      id="contato"
      title={title}
      subtitle={subtitle}
      color="white"
    >
      <div className="grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2 mx-auto">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Informações de Contato
          </h3>
          
          <div className="space-y-6">
            {contactInfo.email && (
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            )}
            
            {contactInfo.phone && (
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold mb-1">Telefone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            )}
            
            {contactInfo.address && (
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold mb-1">Localização</p>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            )}
            
            {contactInfo.hours && (
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold mb-1">Horário de Funcionamento</p>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Envie uma mensagem
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Nome *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-4 py-3 bg-white"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-4 py-3 bg-white"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-900">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-4 py-3 bg-white"
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Mensagem *
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-gray-200 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-4 py-3 bg-white"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
