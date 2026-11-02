import type { Metadata } from "next";
import { Geist, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "XV Años · Jade Isabella",
  description:
    "Acompáñanos a celebrar los XV años de Jade Isabella · 28 de noviembre · Salón Kenia",
  openGraph: {
    title: "XV Años · Jade Isabella",
    description: "28 de noviembre · Salón Kenia · ¡Te esperamos!",
    images: ["/images/og-image.jpg"], // 1200x630 px, foto de Jade o la noche estrellada
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}