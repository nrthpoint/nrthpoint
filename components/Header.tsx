import Image from "next/image";

import FadeInSection from "./FadeInSection";

export default function Header() {
  return (
    <header className=" text-white text-center">
      <FadeInSection>
        <Image src="/images/logo.png" alt="logo" width={300} height={100} />
      </FadeInSection>
    </header>
  );
}
