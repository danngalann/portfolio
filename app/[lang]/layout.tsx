import type { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import { getDictionary, locales, type Locale } from "@/dictionaries";
import { DictionaryProvider } from "@/app/contexts/dictionary-context";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale; // o valida contra `locales`
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dict} locale={locale}>
      <Navbar />
      {children}
      <Footer />
    </DictionaryProvider>
  );
}
