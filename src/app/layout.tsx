import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Providers";

export const metadata: Metadata = {
  title: "bp-QUIZ",
  description: "An awesome quiz app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}


