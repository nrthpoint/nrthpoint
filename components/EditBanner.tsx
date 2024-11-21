interface FixedBannerProps {
  isEnabled: boolean;
  message: string;
}

export default function FixedBanner({ isEnabled, message }: FixedBannerProps) {
  if (!isEnabled) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center shadow-lg z-50">
      <p className="text-sm block uppercase p-4 font-bold tracking-widest m-0">
        {message}
      </p>
    </div>
  );
}
