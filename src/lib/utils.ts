import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateWhatsappLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  const baseUrl = "https://wa.me"

  phoneNumber = phoneNumber.replace(/^\+|^00/, "")
  // Ensure the phone number starts with the country code
  if (!phoneNumber.startsWith("55")) {
    phoneNumber = "55" + phoneNumber
  }

  const formattedNumber = phoneNumber.replace(/\D/g, "")
  
  const searchParams = new URLSearchParams({
    text: encodedMessage
  })

  const whatsAppLink = `${baseUrl}/${formattedNumber}?${searchParams.toString()}`
  return whatsAppLink
}
