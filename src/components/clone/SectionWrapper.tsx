import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
}: Props) {
  return (
    <section id={id} className={cn("w-full px-5", className)}>
      <div className={cn("mx-auto w-full max-w-[1626px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
