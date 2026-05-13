import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/content';
import { useTheme, toggleTheme } from '@/lib/theme';
import { IconBrandMark, IconClose, IconMenu, IconMoon, IconSun } from './Icons';

interface NavProps {
  lang: Lang;
  setLang: (next: Lang) => void;
  onCTA: () => void;
}

function ThemeToggle() {
  const theme = useTheme();
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
}

export function Nav({ lang, setLang, onCTA }: NavProps) {
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
        <a className="brand" href="#top" aria-label="IndieBacked Startups">
          <IconBrandMark size={44} />
          <span className="brand-text">
            <span className="brand-mark">IndieBacked</span>
            <span className="brand-sub">Startups</span>
          </span>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a className="nav-link" href="for-vcs.html">{lang === 'pt' ? 'Para VCs' : 'For VCs'}</a>
            <a className="nav-link" href="for-accelerators.html">{lang === 'pt' ? 'Para aceleradoras' : 'For accelerators'}</a>
          </div>
          <ThemeToggle />
          <div className="lang-toggle" role="tablist" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            <button className={lang === 'pt' ? 'on' : ''} onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>PT</button>
          </div>
          <button className="nav-cta" onClick={onCTA}>{lang === 'pt' ? 'Lista de espera' : 'Join the waitlist'}</button>
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
                <a className="mobile-menu-link" href="for-vcs.html" role="menuitem" onClick={closeMenu}>{lang === 'pt' ? 'Para VCs' : 'For VCs'}</a>
                <a className="mobile-menu-link" href="for-accelerators.html" role="menuitem" onClick={closeMenu}>{lang === 'pt' ? 'Para aceleradoras' : 'For accelerators'}</a>
                <div className="mobile-menu-divider" />
                <div className="mobile-menu-row">
                  <span className="mobile-menu-label">{lang === 'pt' ? 'Tema' : 'Theme'}</span>
                  <ThemeToggle />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
