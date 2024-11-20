import Image from "next/image";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className=" text-white text-center">
      <Image src="/images/logo.png" alt="logo" width={300} height={100} />
    </header>
  );
}
