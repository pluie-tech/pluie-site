import { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label(props: LabelProps) {
  return (
    <label {...props} className="text-lg font-medium" />
  );
}
