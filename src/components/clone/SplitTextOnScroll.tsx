"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Replica el efecto SplitText de aifaqtor.com: cada palabra/letra entra desde
 * la derecha con opacidad creciente mientras se hace scroll sobre la frase.
 */
export default function SplitTextOnScroll({
  text,
  as = "h2",
  className,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLElement>("[data-letter]");
    gsap.set(letters, { x: -7, opacity: 0.3 });

    const tween = gsap.to(letters, {
      x: 0,
      opacity: 1,
      ease: "none",
      stagger: 0.02,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text]);

  const words = text.split(" ");
  const inner = (
    <>
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {Array.from(word).map((char, ci) => (
            <span
              key={ci}
              data-letter
              style={{ display: "inline-block", willChange: "transform, opacity" }}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </>
  );

  if (as === "h1")
    return (
      <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={className} style={style}>
        {inner}
      </h1>
    );
  if (as === "h3")
    return (
      <h3 ref={ref as React.RefObject<HTMLHeadingElement>} className={className} style={style}>
        {inner}
      </h3>
    );
  if (as === "p")
    return (
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className} style={style}>
        {inner}
      </p>
    );
  return (
    <h2 ref={ref as React.RefObject<HTMLHeadingElement>} className={className} style={style}>
      {inner}
    </h2>
  );
}
