import { useI18n } from '@/lib/i18n';

export function WhyIndie() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.why.kicker}
        </p>
        <h2 className="mb-16 max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.why.title}
        </h2>
        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {t.why.points.map((p) => (
            <div key={p.title} className="bg-indie-black p-8 sm:p-10">
              <h3 className="mb-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="text-base leading-relaxed text-white/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
