import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const geist = localFont({ src: "../../public/fonts/geist/GeistMonoVF.woff2" });

export const metadata: Metadata = {
  title: "sanzhar abduraimov",
  description: "personal website",
  keywords: [
    "sanxzhar",
    "sanzhar",
    "abduraimov",
    "sanzhar abduraimov",
    "Sanzhar Abduraimov",
    "Sanzhar",
    "Abduraimov",
  ],
  robots: "index, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
