import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Providers";

export const metadata: Metadata = {
  title: "bp-int",
  description: "Practice technical interview questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
