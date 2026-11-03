import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfólio de Leonardo Trojan, desenvolvedor full-stack. Produtos digitais modernos, bem estruturados e orientados a produto com React, Next.js, TypeScript, Node.js e NestJS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leonardo Trojan · Desenvolvedor Full-Stack",
    template: "%s · Leonardo Trojan",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Leonardo Trojan",
    title: "Leonardo Trojan · Desenvolvedor Full-Stack",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Trojan · Desenvolvedor Full-Stack",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
    { media: "(prefers-color-scheme: light)", color: "#ECECE6" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
