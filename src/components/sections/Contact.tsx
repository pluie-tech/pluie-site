'use client';

import { useState, ReactNode } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';
import { motion } from 'motion/react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

interface ContactProps {
  children: ReactNode;
  id?: string;
  color?: 'white' | 'black';
  className?: string;
  contentClassName?: string;
}

interface ContactContainerProps {
  children: ReactNode;
  className?: string;
}

interface ContactInfoProps {
  title: string;
  subtitle: string;
  showLogo?: boolean;
  logoClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface ContactFormProps {
  onSubmit?: (formData: FormData) => Promise<void>;
  submitButtonText?: string;
  serviceOptions?: string[];
  className?: string;
  formClassName?: string;
}

interface ContactFieldProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const defaultServiceOptions = [
  'Desenvolvimento de site',
  'Desenvolvimento de aplicativo',
  'Desenvolvimento de sistema web',
  'Validação de ideia / MVP',
  'Consultoria em usabilidade',
  'Automação de processos',
  'Criação de identidade visual',
  'Diagnóstico técnico / avaliação de sistema',
  'Outro (descrever abaixo)'
];

function ContactRoot({ 
  children, 
  id = "contato", 
  color = "white", 
  className = "px-1 py-8 sm:px-8 sm:py-15",
  contentClassName = "mt-0"
}: ContactProps) {
  return (
    <Section
      id={id}
      color={color}
      className={className}
      contentClassName={contentClassName}
    >
      {children}
    </Section>
  );
}

function ContactContainer({ children, className = "flex flex-col lg:flex-row justify-start lg:justify-between max-w-7xl mx-auto" }: ContactContainerProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ContactInfo({ 
  title, 
  subtitle, 
  showLogo = true, 
  logoClassName = "w-[58px] sm:w-[88] mb-6 sm:mb-8",
  titleClassName = "max-w-md text-left",
  className = "lg:col-span-2 place-content-center px-5 sm:px-0 mb-10 sm:mb-15 lg:mb-0"
}: ContactInfoProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
    >
      {showLogo && <Logo className={logoClassName} />}
      <SectionTitle title={title} subtitle={subtitle} className={titleClassName} />
    </motion.div>
  );
}

function ContactForm({ 
  onSubmit, 
  submitButtonText = "Enviar", 
  serviceOptions = defaultServiceOptions,
  className = "lg:ml-8",
  formClassName = "lg:min-w-[24rem] xl:min-w-[28rem] 2xl:min-w-[32rem] bg-border p-9 sm:p-15 rounded-[36px]"
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      await onSubmit(formData);
    } else {
      // Default form submission
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
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className={className}
    >
      <div className={formClassName}>
        <motion.form 
          id='contact-form'
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="grid gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Contact.Field delay={0.3}>
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
          </Contact.Field>

          <Contact.Field delay={0.4}>
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
          </Contact.Field>

          <Contact.Field delay={0.5}>
            <Label htmlFor="service">O que você está procurando?</Label>
            <Select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>Selecione uma opção</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </Select>
          </Contact.Field>

          <Contact.Field delay={0.6}>
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
          </Contact.Field>

          <Button variant="primary" className="w-full" type="submit" as="button">
            {submitButtonText}
          </Button>
        </motion.form>
      </div>
    </motion.div>
  );
}

function ContactField({ children, delay = 0.2, className = "grid gap-2" }: ContactFieldProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Compound component with sub-components
const Contact = Object.assign(ContactRoot, {
  Container: ContactContainer,
  Info: ContactInfo,
  Form: ContactForm,
  Field: ContactField,
});

export default Contact;

// Export types for external use
export type { FormData as ContactFormData };
