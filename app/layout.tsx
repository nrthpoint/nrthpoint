import "./globals.css";
import {
  Host_Grotesk,
  Ephesis,
  Inter,
  Lato,
  Libre_Baskerville,
} from "next/font/google";
import Footer from "@/components/Footer";
import { getFooterContent, getMetaData } from "@/lib/api";

export async function generateMetadata() {
  const data = await getMetaData();

  return {
    title: data.title,
    description: data.homeTagline,
    //keywords: blog.keywords,
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ephesis = Ephesis({
  variable: "--font-ephesis",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700", "900"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = await getFooterContent();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ephesis.variable} ${hostGrotesk.variable} ${lato.variable} ${libreBaskerville.variable}`}
    >
      <body>
        <section className="min-h-screen p-12 pt-20 lg:pt-20 lg:pl-20">
          <main>{children}</main>
          <Footer content={footerData} />
        </section>
      </body>
    </html>
  );
}
