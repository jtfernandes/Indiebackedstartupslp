import { useI18n } from '@/lib/i18n';

export function Problem() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.problem.kicker}
        </p>
        <h2 className="mb-16 max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.problem.title}
        </h2>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {t.problem.points.map((point, idx) => (
            <li key={idx} className="border-t border-white/15 pt-6">
              <span className="block text-sm font-bold text-indie-yellow">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-lg leading-relaxed text-white/80">{point}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
