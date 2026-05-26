import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0076C4]",
        className
      )}
    >
      <span aria-hidden className="text-[#0076C4]">✦</span>
      {children}
    </span>
  );
}
