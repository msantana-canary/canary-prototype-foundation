import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@canary-ui/components/styles.css";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Canary UI Component Library",
  description: "A comprehensive React component library for building high-fidelity prototypes that match the Canary design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
        style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
