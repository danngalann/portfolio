import type { Metadata } from "next";
import BackButton from "../../ui/back-button";
import { getDictionary, type Locale } from "@/dictionaries";

export const metadata: Metadata = {
  title: "Experience - Daniel's Portfolio",
  description: "Detailed experience information",
};

export default async function ExperienceLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <BackButton lang={lang} text={dict.backButton.back} />
      {children}
    </>
  );
}
