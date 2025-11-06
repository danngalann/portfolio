import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Daniel's Portfolio",
  description: "Welcome to Daniel's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
