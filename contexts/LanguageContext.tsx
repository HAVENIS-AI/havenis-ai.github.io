import React, { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';
import { translations, TranslationKey, NestedTranslation, Replacements } from '../locales/translations';

type Locale = 'de' | 'en' | 'fr';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, replacements?: Replacements) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function for nested key access
function getNestedTranslation(obj: NestedTranslation, key: string): string | NestedTranslation | undefined {
    return key.split('.').reduce<any>((acc, part) => acc && acc[part], obj);
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('de');

  useEffect(() => {
    // Optional: Set language based on browser preference
    const browserLang = navigator.language.split('-')[0];
    if (['de', 'en', 'fr'].includes(browserLang)) {
      setLocale(browserLang as Locale);
    }
  }, []);

  const t = useMemo(() => (key: TranslationKey, replacements?: Replacements): string => {
    let translation = getNestedTranslation(translations[locale], key) as string | undefined;

    if (!translation) {
      console.warn(`Translation key "${key}" not found for locale "${locale}".`);
      // Fallback to English
      translation = getNestedTranslation(translations.en, key) as string | undefined;
      if (!translation) {
        return key;
      }
    }
    
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{${placeholder}}`, String(replacements[placeholder]));
        });
    }

    return translation;
  }, [locale]);
  
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
