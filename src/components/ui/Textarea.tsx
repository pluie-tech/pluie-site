import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-gray-300 p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
