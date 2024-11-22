"use client";

import { useState, useEffect, ReactNode } from "react";

import { useInView } from "@/hooks/useInView";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number; // Optional delay in milliseconds
}

export default function FadeInSection({
  children,
  delay = 0,
}: FadeInSectionProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>(true);
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !isInitiallyVisible) {
      setIsInitiallyVisible(true);
    }
  }, [isVisible, isInitiallyVisible]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[2000ms] ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: isInitiallyVisible ? `${delay}ms` : undefined,
        transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)", // Ease-in-out expo
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
