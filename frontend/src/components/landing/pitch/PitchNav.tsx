import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/content';
import type { NavStrings } from '@/lib/pitch-content';
import { toggleTheme, useTheme } from '@/lib/theme';
import { IconBrandMark, IconClose, IconMenu, IconMoon, IconSun } from '../Icons';

interface PitchNavProps {
  lang: Lang;
  setLang: (next: Lang) => void;
  current: 'vcs' | 'accelerators';
  strings: NavStrings;
}

export function PitchNav({ lang, setLang, current, strings }: PitchNavProps) {
  const theme = useTheme();
  const otherHref = current === 'vcs' ? 'for-accelerators.html' : 'for-vcs.html';
  const otherLabel = current === 'vcs' ? strings.cross_to_accelerators : strings.cross_to_vcs;
  const homeLabel = lang === 'pt' ? 'Ir para a página principal' : 'Back to main page';

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('touchstart', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('touchstart', onPointer);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="index.html" aria-label="IndieBacked Startups">
          <IconBrandMark size={44} />
          <span className="brand-text">
            <span className="brand-mark">IndieBacked</span>
            <span className="brand-sub">Startups</span>
          </span>
        </a>
        <div className="nav-right">
          <a href={otherHref} className="pitch-cross">{otherLabel}</a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <div className="lang-toggle" role="tablist" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            <button className={lang === 'pt' ? 'on' : ''} onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>PT</button>
          </div>
          <a className="nav-cta" href="index.html">{strings.waitlist_link}</a>
          <div className="mobile-menu-wrap" ref={menuRef}>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? (lang === 'pt' ? 'Fechar menu' : 'Close menu') : (lang === 'pt' ? 'Abrir menu' : 'Open menu')}
            >
              {menuOpen ? <IconClose size={18} /> : <IconMenu size={18} />}
            </button>
            {menuOpen && (
              <div className="mobile-menu" role="menu">
                <a className="mobile-menu-link" href={otherHref} role="menuitem" onClick={closeMenu}>{otherLabel}</a>
                <a className="mobile-menu-link" href="index.html" role="menuitem" onClick={closeMenu}>{homeLabel}</a>
                <div className="mobile-menu-divider" />
                <div className="mobile-menu-row">
                  <span className="mobile-menu-label">{lang === 'pt' ? 'Tema' : 'Theme'}</span>
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {theme === 'dark' ? <IconSun /> : <IconMoon />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
