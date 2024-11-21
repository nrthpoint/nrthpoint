import Link from "next/link";
import { FaTimes } from "react-icons/fa"; // Importing the cross icon

interface FixedBannerProps {
  isEnabled: boolean;
  message: string;
}

export default function FixedBanner({ isEnabled, message }: FixedBannerProps) {
  if (!isEnabled) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center shadow-lg z-50">
      <p className="text-sm flex justify-center align-middle w-full uppercase p-4 font-bold tracking-widest m-0">
        {message}{" "}
        <Link href="/api/disable-draft" className="ml-2 flex items-center">
          <FaTimes />
        </Link>
      </p>
    </div>
  );
}
