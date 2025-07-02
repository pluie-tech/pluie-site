import { LabelHTMLAttributes } from "react";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className="text-lg font-medium" />
  );
}
