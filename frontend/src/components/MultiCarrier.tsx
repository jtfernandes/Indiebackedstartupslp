import { useI18n } from '@/lib/i18n';
import { CARRIER_LOGOS } from '@/lib/logos';

export function MultiCarrier() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.carriers.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {t.carriers.body}
        </p>

        <ul className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-8 sm:gap-x-14">
          {CARRIER_LOGOS.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.alt ?? logo.name}
                className="logo-mono h-7 w-auto sm:h-8"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
