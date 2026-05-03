import { useI18n } from '@/lib/i18n';

export function Pricing() {
  const { t } = useI18n();
  const a = t.pricing.anchor;

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.pricing.kicker}
        </p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.pricing.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {t.pricing.body}
        </p>

        <div className="mt-12 max-w-3xl border-l-2 border-indie-yellow/70 pl-6">
          <p className="text-base leading-relaxed text-white/75">
            {a.cheap}{' '}
            <span className="font-bold text-indie-yellow">{a.cheapNumber}</span>
            {a.cheapTail} {a.expensive}
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/55">{a.candid}</p>
        </div>
      </div>
    </section>
  );
}
