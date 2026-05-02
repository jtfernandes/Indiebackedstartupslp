import { useI18n, type Lang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  const item = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={cn(
        'px-1 text-sm font-semibold transition-colors',
        lang === l ? 'text-indie-yellow' : 'text-white/45 hover:text-white/80'
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed right-5 top-5 z-40 flex items-center gap-2 border border-white/15 bg-indie-black/60 px-3 py-1.5 backdrop-blur-sm sm:right-8 sm:top-8">
      {item('en', t.nav.langEn)}
      <span className="text-white/20">|</span>
      {item('pt', t.nav.langPt)}
    </div>
  );
}
