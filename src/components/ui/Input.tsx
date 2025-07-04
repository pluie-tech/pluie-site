import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-lg border border-[#bdbdbd] placeholder-placeholder p-4 text-lg focus:outline-none focus:border-primary bg-white',
        props.className
      )}
    />
  );
}