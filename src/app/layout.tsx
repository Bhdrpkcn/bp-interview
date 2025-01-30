import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Questions App",
  description: "Practice technical interview questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
