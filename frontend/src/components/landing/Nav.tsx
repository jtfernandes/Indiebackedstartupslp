import type { Lang } from '@/lib/content';
import { useTheme, toggleTheme } from '@/lib/theme';
import { IconBrandMark, IconSun, IconMoon } from './Icons';

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
        </div>
      </div>
    </nav>
  );
}
