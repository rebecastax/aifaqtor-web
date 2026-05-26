import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface Props extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "bg-white text-[#0076C4] hover:opacity-90",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
  ghost:
    "bg-transparent text-white hover:text-[#0076C4] underline-offset-4 hover:underline",
};

export default function CtaPill({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  return (
    <Link
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
