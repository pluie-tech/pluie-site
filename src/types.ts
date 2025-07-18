import { LucideIcon } from 'lucide-react';

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon
}

export type Service = {
  title?: string;
  description?: string;
  features: Feature[];
  imagePath?: string;
}
