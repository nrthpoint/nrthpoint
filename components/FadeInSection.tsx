import { useInView } from "@/hooks/useInView";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
