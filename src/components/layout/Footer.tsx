export interface FooterProps {
  companyName?: string;
  description?: string;
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
  quickLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export default function Footer({
  companyName = "Pluie",
  description = "Construindo soluções inovadoras para empresas no mundo todo. Comprometidos com a excelência e entregando resultados que importam.",
  socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" }
  ],
  quickLinks = [
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Contato", href: "#contato" },
    { name: "Política de Privacidade", href: "#" }
  ]
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              {companyName}
            </h3>
            <p className="text-gray-400 text-sm leading-6 mb-6">
              {description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <span className="text-xl" role="img" aria-label={link.name}>
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Informações de Contato
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="block">hello@pluie.com</span>
              </p>
              <p className="text-gray-400">
                <span className="block">+55 (11) 99999-9999</span>
              </p>
              <p className="text-gray-400">
                <span className="block">São Paulo, SP</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Mantenha-se atualizado
              </h3>
              <p className="text-gray-400 text-sm">
                Inscreva-se em nossa newsletter para receber as últimas atualizações e insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-1 rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-600 focus:ring-blue-600"
              />
              <button
                type="button"
                className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
