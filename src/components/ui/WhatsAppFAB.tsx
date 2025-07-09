import { siteConfig } from '@/siteConfig'
import { WhatsAppIcon } from './BrandIcon'
import Button from './Button'
import { trackWhatsAppCTA } from '@/lib/analytics'

export function WhatsAppFAB () {
  return (
    <Button
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={() => trackWhatsAppCTA('fab')}
      className="fixed lg:hidden bottom-6 right-4 bg-green-600 text-background rounded-full p-3 shadow-lg hover:bg-green-700 transition-colors duration-300">
      <WhatsAppIcon className="fill-background" size={36} />
    </Button>
  )
}