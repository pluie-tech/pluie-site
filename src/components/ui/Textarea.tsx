import { cn } from '@/lib/utils';
import { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'w-full rounded-lg border border-[#bdbdbd] bg-white placeholder-placeholder p-4 text-lg focus:outline-none focus:border-primary',
        props.className
      )}
    />
  );
}
