import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  onCta: () => void;
}

export function Hero({ onCta }: HeroProps) {
  const { t } = useI18n();
  const panel = t.hero.panel;

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-32 sm:px-10 sm:pt-40 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-indie-yellow">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tightish text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {t.hero.headlineLead}
            <span className="text-indie-yellow">{t.hero.headlineAccent}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {t.hero.sub}
          </p>
          <div className="mt-12">
            <Button size="lg" onClick={onCta} className="group">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="lg:justify-self-end lg:max-w-md w-full">
          <SystemPanel panel={panel} />
        </div>
      </div>
    </section>
  );
}

interface SystemPanelProps {
  panel: {
    title: string;
    subtitle: string;
    rows: { name: string; status: string }[];
    meta: string;
  };
}

function SystemPanel({ panel }: SystemPanelProps) {
  return (
    <div className="border border-white/15 bg-black/30 p-6 sm:p-8">
      <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/55">
          {panel.title}
        </span>
        <span className="text-xs text-white/40">{panel.subtitle}</span>
      </div>
      <ul className="divide-y divide-white/5">
        {panel.rows.map((row) => {
          const isActive = /(^active$|^ativo$)/i.test(row.status);
          return (
            <li
              key={row.name}
              className="flex items-center justify-between py-3.5 text-sm"
            >
              <span className="flex items-center gap-3 text-white">
                <Check
                  className={
                    isActive
                      ? 'h-4 w-4 text-indie-yellow'
                      : 'h-4 w-4 text-white/35'
                  }
                  strokeWidth={3}
                />
                <span className="font-medium">{row.name}</span>
              </span>
              <span
                className={
                  isActive
                    ? 'font-mono text-xs uppercase tracking-wider text-white/55'
                    : 'font-mono text-xs uppercase tracking-wider text-indie-yellow'
                }
              >
                {row.status}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-2 border-t border-white/10 pt-4 text-xs text-white/40">
        {panel.meta}
      </div>
    </div>
  );
}
