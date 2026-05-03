import { useI18n } from '@/lib/i18n';

export function HowAutopilot() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.autopilot.kicker}
        </p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.autopilot.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/65">{t.autopilot.sub}</p>

        <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {t.autopilot.steps.map((step) => (
            <li key={step.n} className="bg-indie-black p-8 sm:p-10">
              <div className="mb-5 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-indie-yellow">{step.n}</span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-white/65">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 text-center text-lg italic text-white/55 sm:text-xl">
          {t.autopilot.closer}
        </p>
      </div>
    </section>
  );
}
