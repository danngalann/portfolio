"use client";

import { createContext, useContext } from "react";
import { type Locale } from "@/dictionaries";

type Dictionary = {
  generic: {
    readDetails: string;
    year: string;
    years: string;
    present: string;
    viewProject: string;
  };
  navbar: {
    experience: string;
    projects: string;
    myCareer: string;
    chat: string;
  };
  // Add other sections as needed
  [key: string]: Record<string, string>;
};

type DictionaryContextType = {
  dict: Dictionary;
  locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export function DictionaryProvider({
  children,
  dictionary,
  locale,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context.dict;
}

export function useLocale() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useLocale must be used within a DictionaryProvider");
  }
  return context.locale;
}
