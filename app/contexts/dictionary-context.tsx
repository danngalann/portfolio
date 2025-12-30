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
  chat: {
    start: string;
  };
  navbar: {
    experience: string;
    projects: string;
    myCareer: string;
    chat: string;
  };
  hero: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    jobs: {
      delectatech: {
        title: string;
        company: string;
        description: string;
      };
      perception: {
        title: string;
        company: string;
        description: string;
      };
      necsia: {
        title: string;
        company: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
    items: Record<
      string,
      {
        title: string;
        description: string;
      }
    >;
  };
  career: {
    title: string;
    contents: string;
    sections: {
      overview: string;
      summary: string;
      keyTakeaways: string;
      aboutMe: string;
    };
    tooltips: {
      ai: string;
      human: string;
    };
    overviewItems: string[];
    summaryText: string;
    keyTakeawaysItems: string[];
    aboutMeParagraphs: string[];
  };
  astro: {
    title: string;
    content: string[];
    instagram: {
      url: string;
      text: string;
    };
    media: Record<
      string,
      {
        title: string;
        description: string;
        width?: number;
        height?: number;
      }
    >;
  };
  experienceDetails: Record<
    string,
    {
      title: string;
      contents: string;
      sections: {
        overview: string;
        summary: string;
        keyTakeaways: string;
        experience: string;
      };
      tooltips: {
        ai: string;
        human: string;
      };
      overviewItems: string[];
      summaryText: string;
      keyTakeawaysItems: string[];
      experienceParagraphs: string[];
    }
  >;
  backButton: {
    back: string;
  };
  scrollIndicator: {
    scrollDown: string;
  };
  metadata: {
    title: string;
    description: string;
  };
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
