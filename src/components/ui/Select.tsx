import { SelectHTMLAttributes } from "react";

export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
   <select
    {...props}
    className="appearance-none w-full rounded-lg border border-gray-300 p-4 pr-12 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg fill='none' stroke='black' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 1rem center",
      backgroundSize: "1rem",
    }}
  />

  );
}
