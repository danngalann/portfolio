import { getDictionary, type Locale } from "@/dictionaries";
import CareerPageClient from "./career-client";

export default async function CareerPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <CareerPageClient dict={dict.career} lang={lang} />;
}
