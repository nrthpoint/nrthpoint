import { useState, useEffect, useRef } from "react";

export function useInView<T extends HTMLElement>(
  persist: boolean = false
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (persist && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (persist && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, persist]);

  return [ref, isVisible];
}
