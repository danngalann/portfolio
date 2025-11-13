import type { Metadata } from "next";
import BackButton from "../ui/back-button";

export const metadata: Metadata = {
  title: "Experience - Daniel's Portfolio",
  description: "Detailed experience information",
};

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
