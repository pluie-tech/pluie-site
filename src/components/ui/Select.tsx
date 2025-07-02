import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className="w-full rounded-lg border border-gray-300 p-4 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
