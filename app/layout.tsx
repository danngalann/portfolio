import type { Metadata } from "next";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";
import { roboto, montserrat } from "./ui/fonts";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

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
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
