import type { Lang } from '@/lib/content';
import { toggleTheme, useTheme } from '@/lib/theme';
import { IconBrandMark, IconMoon, IconSun } from '../Icons';

interface PitchNavProps {
  lang: Lang;
  setLang: (next: Lang) => void;
  current: 'vcs' | 'accelerators';
}

export function PitchNav({ lang, setLang, current }: PitchNavProps) {
  const theme = useTheme();
  const otherHref = current === 'vcs' ? 'for-accelerators.html' : 'for-vcs.html';
  const otherLabel = current === 'vcs' ? 'For accelerators →' : 'For VCs →';

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
            <button
              className={lang === 'pt' ? 'on' : ''}
              aria-pressed={lang === 'pt'}
              disabled
              style={{ opacity: 0.4, cursor: 'not-allowed' }}
              title="Portuguese coming soon"
            >PT</button>
          </div>
          <a className="nav-cta" href="index.html#waitlist">Founder waitlist</a>
        </div>
      </div>
    </nav>
  );
}
