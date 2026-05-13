import { useEffect, useState } from 'react';
import type { Lang } from './content';

const LANG_KEY = 'indie.lang';

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'pt') return saved;
  } catch { /* ignore */ }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').toLowerCase();
  return nav.startsWith('pt') ? 'pt' : 'en';
}

export function useLang(): [Lang, (next: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() => getInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'pt'
      ? 'IndieBacked Startups — Proteção, em piloto automático.'
      : 'IndieBacked Startups — Protection, on autopilot.';
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try { localStorage.setItem(LANG_KEY, next); } catch { /* ignore */ }
  };

  return [lang, setLang];
}
