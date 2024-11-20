type ResponsiveImageProps = {
  desktop: string;
  mobile: string;
  alt: string;
};

export default function ResponsiveImage({
  desktop,
  mobile,
  alt,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source srcSet={mobile} media="(max-width: 768px)" />
      <source srcSet={desktop} media="(min-width: 769px)" />
      <img src={desktop} alt={alt} style={{ width: "100%", height: "auto" }} />
    </picture>
  );
}
