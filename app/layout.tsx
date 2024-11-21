import { getMetaData } from "@/lib/api";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Ephesis, Inter, Lato, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import FixedBanner from "@/components/EditBanner";
import { draftMode } from "next/headers";

export async function generateMetadata() {
  const data = await getMetaData();

  return {
    title: data.title,
    description: data.homeTagline,
  };
}

const inter = Inter({
  variable: "--font-inter",
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
  const { isEnabled } = await draftMode();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ephesis.variable} ${lato.variable} ${libreBaskerville.variable}`}
    >
      <body>
        <section className="min-h-screen p-6 md:p-8 lg:p-12 pt-20 lg:pt-20 lg:pl-20">
          <div className="container mx-auto">
            <FixedBanner isEnabled={isEnabled} message="Preview Mode" />

            <main>{children}</main>
            <footer>
              <p className="text-sm mt-12 text-gray-500">
                © {new Date().getFullYear()} North Point Technology. All rights
                reserved.
              </p>
            </footer>
          </div>
          <SpeedInsights />
        </section>
      </body>
    </html>
  );
}
