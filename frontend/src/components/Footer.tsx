import { useI18n } from '@/lib/i18n';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center text-xs text-white/45 sm:flex-row sm:gap-3">
        <span>{t.footer.legal}</span>
        <span className="hidden sm:inline">·</span>
        <a
          href={`mailto:${t.footer.email}`}
          className="text-white/55 transition-colors hover:text-indie-yellow"
        >
          {t.footer.email}
        </a>
      </div>
    </footer>
  );
}
