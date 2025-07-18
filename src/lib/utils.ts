import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateWhatsappLink(phoneNumber: string, message: string): string {
  const baseUrl = "https://wa.me"

  phoneNumber = phoneNumber.replace(/^\+|^00/, "")
  // Ensure the phone number starts with the country code
  if (!phoneNumber.startsWith("55")) {
    phoneNumber = "55" + phoneNumber
  }

  const formattedNumber = phoneNumber.replace(/\D/g, "")
  
  const searchParams = new URLSearchParams({
    text: message
  })

  const whatsAppLink = `${baseUrl}/${formattedNumber}?${searchParams.toString()}`
  return whatsAppLink
}

export function generateImageUrl(imagePath: string, size: number = 280): string {
  if (process.env.NODE_ENV === 'development') {
    return `/images${imagePath}`
  }
  return `/images/${size}${imagePath}`
}
