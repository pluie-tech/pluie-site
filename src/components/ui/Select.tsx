import { SelectHTMLAttributes } from "react";

export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-lg border border-gray-300 p-4 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
