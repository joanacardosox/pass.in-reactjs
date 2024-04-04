import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<"tr"> {
  transparent?: boolean;
}

export function TableRow({ transparent, ...props }: TableRowProps) {
  return (
    <tr
      {...props}
      className={twMerge(
        "border-b  border-white/10",
        transparent ? "bg-black/10" : "hover:bg-white/10"
      )}
    />
  );
}
