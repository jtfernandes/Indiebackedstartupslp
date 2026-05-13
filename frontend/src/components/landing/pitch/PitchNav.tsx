import type { Lang } from '@/lib/content';
import type { NavStrings } from '@/lib/pitch-content';
import { toggleTheme, useTheme } from '@/lib/theme';
import { IconBrandMark, IconMoon, IconSun } from '../Icons';

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
        </div>
      </div>
    </nav>
  );
}
