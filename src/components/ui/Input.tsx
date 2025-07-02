import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-gray-300 p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}