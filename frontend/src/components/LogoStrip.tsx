import { useI18n } from '@/lib/i18n';
import { CARRIER_LOGOS, ECOSYSTEM_LOGOS, type Logo } from '@/lib/logos';

interface Props {
  variant: 'carriers' | 'ecosystem';
}

export function LogoStrip({ variant }: Props) {
  const { t } = useI18n();
  const logos: Logo[] = variant === 'carriers' ? CARRIER_LOGOS : ECOSYSTEM_LOGOS;
  const label = variant === 'carriers' ? t.logos.carriers : t.logos.ecosystem;

  return (
    <section className="border-b border-white/10 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {label}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
          {logos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.alt ?? logo.name}
                className="logo-mono h-8 w-auto sm:h-9"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
