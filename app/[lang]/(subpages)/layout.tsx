import BackButton from "@/app/ui/back-button";
import { getDictionary, locales, type Locale } from "@/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function ExperienceLayout({
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
    <>
      <BackButton lang={locale} text={dict.backButton.back} />
      {children}
    </>
  );
}
