import type { Metadata } from 'next';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { BaseLayout, BackToHomeButton, CookiePreferences } from '@/components';
import { siteConfig } from '@/siteConfig';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Pluie',
  description: 'Política de Privacidade da Pluie. Saiba como coletamos, usamos, armazenamos e protegemos seus dados pessoais.',
};

const lastUpdated = "11 de julho de 2025";

export default function PrivacyPolicy() {

  return (
    <BaseLayout footerSticky={false}>
      <BackToHomeButton />
      <Section id="privacidade" color="white" className="px-4 sm:px-8" contentClassName='mt-12 md:mt-16'>
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Política de Privacidade" 
            subtitle="Como coletamos, usamos e protegemos seus dados pessoais" 
            className="mb-12 text-center" 
          />
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Última atualização:</strong> {lastUpdated}
            </p>
            <p className="text-sm text-gray-600">
              Esta Política de Privacidade descreve como a Pluie coleta, usa e protege suas informações pessoais quando você visita nosso site e utiliza nossos serviços.
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Informações Gerais */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações gerais</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Pluie está comprometida em proteger sua privacidade e garantir a segurança de suas informações pessoais. Esta política explica como tratamos os dados que você compartilha conosco.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nosso site e serviços, você concorda com as práticas descritas nesta Política de Privacidade.
              </p>
            </section>

            {/* 2. Dados Coletados */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Dados que coletamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 Dados fornecidos voluntariamente</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Coletamos apenas as informações que você nos fornece voluntariamente através do formulário de contato:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Tipo de serviço de interesse</li>
                    <li>Mensagem descrevendo suas necessidades</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 Dados técnicos anônimos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Coletamos automaticamente informações técnicas anônimas e não identificáveis, como tipo de navegador, dispositivo utilizado e localização geográfica geral, exclusivamente para melhorar a experiência do usuário e entender como nosso site é utilizado.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2 text-sm bg-blue-50 p-3 rounded-lg">
                    <strong>Importante:</strong> Não coletamos endereços IP nem qualquer informação que possa identificar você pessoalmente através destes dados técnicos.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Como Usamos os Dados */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como usamos seus dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos suas informações pessoais exclusivamente para os seguintes propósitos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Responder às suas solicitações de contato e dúvidas</li>
                <li>Compreender suas necessidades e oferecer soluções adequadas</li>
                <li>Fornecer informações sobre nossos serviços</li>
                <li>Gerenciar nosso relacionamento comercial</li>
                <li>Melhorar nossos serviços com base no feedback recebido</li>
                <li>Cumprir obrigações legais quando necessário</li>
              </ul>
            </section>

            {/* 4. Armazenamento e Segurança */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Armazenamento e segurança</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">4.1 Onde armazenamos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Seus dados são armazenados com segurança em nosso sistema de CRM (Customer Relationship Management), que utiliza medidas de segurança padrão da indústria para proteger suas informações.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">4.2 Medidas de segurança</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Compartilhamento de Dados */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Não vendemos, alugamos ou compartilhamos</strong> suas informações pessoais com terceiros para fins comerciais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Seus dados podem ser compartilhados apenas em situações específicas, como cumprimento de obrigações legais ou mediante seu consentimento explícito.
              </p>
            </section>

            {/* 6. Seus Direitos */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Acesso:</strong> Solicitar informações sobre quais dados temos sobre você</li>
                <li><strong>Retificação:</strong> Solicitar correção de dados incorretos ou incompletos</li>
                <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> Solicitar uma cópia de seus dados em formato estruturado</li>
                <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados em certas circunstâncias</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais disponíveis em nosso site.
              </p>
            </section>

            {/* 7. Retenção de Dados */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retenção de dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            {/* 8. Dados Anônimos e Analytics */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Dados de analytics</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos o Google Analytics 4 (GA4) para entender como os visitantes interagem com nosso site e melhorar continuamente nossos serviços. Esse serviço coleta informações anônimas como:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
                <li>Tipo de navegador utilizado</li>
                <li>Tipo de dispositivo (desktop, mobile, tablet)</li>
                <li>Localização geográfica geral (país/região)</li>
                <li>Páginas visitadas e tempo de permanência</li>
              </ul>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm">
                  Esses dados são coletados por meio de cookies e tecnologias similares. O Google Analytics utiliza técnicas de anonimização, e os relatórios gerados não contêm informações que permitam a identificação direta de visitantes. O endereço IP é processado apenas para fins de geolocalização e não é armazenado.
                </p>
                <p className="text-sm">
                  Para mais informações sobre como o Google Analytics coleta e processa dados, você pode visitar a página de
                  <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline"> políticas de privacidade do Google</a>.
                </p>
              </div>
              
              {/* Cookie Preferences */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-3">Gerenciar preferências de cookies</h4>
                <CookiePreferences showIcon={false} />
              </div>
            </section>

            {/* 9. Alterações */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Recomendamos que você revise esta página regularmente para estar ciente de eventuais alterações.
              </p>
            </section>

            {/* 10. Contato */}
            <section className="border-l-4 border-gray-800 pl-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Como nos contatar</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> {siteConfig.email}<br />
                  <strong>Responsabilidade:</strong> Equipe Pluie
                </p>
              </div>
            </section>
          </div>

          {/* Footer da política */}
          <div className="mt-12 pt-8 border-t border-gray-200 mb-8">
            <p className="text-sm text-gray-500 text-center">
              Esta Política de Privacidade é efetiva a partir de {lastUpdated} e se aplica a todos os usuários do site da Pluie.
            </p>
          </div>
        </div>
      </Section>
    </BaseLayout>
  );
}
