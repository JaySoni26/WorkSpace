import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template:`%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons:[
    {
      url:"/favicon.svg",
      href:"/favicon.svg",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}