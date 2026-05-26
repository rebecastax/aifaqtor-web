import { cn } from "@/lib/utils";

interface Props {
  text: string;
  repeat?: number;
  durationSec?: number;
  className?: string;
}

export default function Marquee({
  text,
  repeat = 8,
  durationSec = 30,
  className,
}: Props) {
  const items = Array.from({ length: repeat });
  return (
    <div className={cn("overflow-hidden w-full", className)} aria-hidden>
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-x ${durationSec}s linear infinite`,
        }}
      >
        {items.map((_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 text-[80px] md:text-[120px] font-semibold leading-none text-white pr-12"
          >
            {text}
            <span className="text-[#0076C4]">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
