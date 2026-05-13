import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'indie.theme';
const THEME_EVENT = 'indie:themechange';

export function getStoredTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  return 'light';
}

export function setTheme(next: Theme): void {
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: next }));
}

export function toggleTheme(): void {
  setTheme(getStoredTheme() === 'dark' ? 'light' : 'dark');
}

export function useTheme(): Theme {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Theme>).detail;
      setThemeState(detail);
    };
    window.addEventListener(THEME_EVENT, onChange);
    return () => window.removeEventListener(THEME_EVENT, onChange);
  }, []);
  return theme;
}
