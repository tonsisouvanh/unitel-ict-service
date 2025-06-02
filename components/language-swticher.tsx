"use client";
import { parseCookies, setCookie } from "nookies";
import { useEffect, useState } from "react";

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
}

// Extend the Window interface for client-side access
declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [languageConfig, setLanguageConfig] = useState<{
    languages: LanguageDescriptor[];
    defaultLanguage: string;
  } | null>(null);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue: string | undefined;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    // Access window.__GOOGLE_TRANSLATION_CONFIG__ instead of global.__GOOGLE_TRANSLATION_CONFIG__
    if (window.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      // Access window here too
      setLanguageConfig(window.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  // Render nothing if config or current language isn't set yet
  if (!currentLanguage || !languageConfig) return null;

  return (
    <div className="relative inline-block text-left notranslate">
      <label htmlFor="language-select" className="sr-only">
        Choose language
      </label>
      <select
        id="language-select"
        className="appearance-none px-4 py-1 pr-8 rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-color-1 focus:border-color-1"
        value={currentLanguage}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        {languageConfig.languages.map((lang) => (
          <option key={lang.name} value={lang.name}>
            {lang.title}
          </option>
        ))}
      </select>

      {/* Custom arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
          />
        </svg>
      </div>
    </div>
  );
};

export { COOKIE_NAME, LanguageSwitcher };
