import { useI18n } from '@/lib/i18n';

export function RiskStack() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.stack.kicker}
        </p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.stack.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/65">{t.stack.sub}</p>

        <div className="mt-14 hidden grid-cols-[140px_1fr_1fr] gap-x-8 border-b border-white/15 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 md:grid">
          <span>&nbsp;</span>
          <span>{t.stack.colHeaders.what}</span>
          <span>{t.stack.colHeaders.when}</span>
        </div>

        <ul className="divide-y divide-white/10 border-t border-white/10 md:border-t-0">
          {t.stack.rows.map((row) => (
            <li
              key={row.name}
              className="grid grid-cols-1 gap-y-3 py-6 md:grid-cols-[140px_1fr_1fr] md:gap-x-8 md:py-7"
            >
              <span className="text-base font-bold text-white md:text-lg">
                {row.name}
              </span>
              <span className="text-sm leading-relaxed text-white/75 md:text-base">
                {row.desc}
              </span>
              <span className="text-sm leading-relaxed text-white/55 md:text-base">
                {row.trigger}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
