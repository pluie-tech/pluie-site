import { generateWhatsappLink } from './lib/utils'

export const siteConfig = {
  email: 'contato@pluie.com',
  phone: '(41) 9 8492-6574',
  whatsappLink: generateWhatsappLink('(41) 9 8492-6574', 'Olá, gostaria de saber mais sobre os serviços da Pluie.'),
  linkedin: 'https://www.linkedin.com/company/pluietech'
}
