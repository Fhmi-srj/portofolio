import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "fhmi.srj — Fullstack Developer",
  description:
    "Portfolio Fahmi Muh Sirojul Munir — Fullstack Developer spesialis Laravel & React. 6 proyek live, 2+ tahun pengalaman membangun aplikasi web yang berdampak nyata.",
  keywords: ["Fahmi Munir", "fhmi srj", "Portfolio", "Fullstack Developer", "React", "Next.js", "Laravel", "Indonesia"],
  authors: [{ name: "Fahmi Muh Sirojul Munir" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "fhmi.srj — Fullstack Developer",
    description: "6 proyek live, Laravel & React specialist. Dari ide jadi produk nyata.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body
        className="antialiased text-slate-900"
        style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
      >
        {children}
      </body>
    </html>
  );
}
