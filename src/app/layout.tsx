import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Head from 'next/head'

const myFont = localFont({ src: '../../public/fonts/geist/GeistMonoVF.woff2' })

export const metadata: Metadata = {
  title: "sanzhar abduraimov",
  description: "personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="sanxzhar, sanzhar, abduraimov, sanzhar abduraimov, Sanzhar Abduraimov, Sanzhar, Abduraimov" />
        <meta name="robots" content="index" />
        <meta name="author" content="Sanzhar Abduraimov" />
      </Head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
