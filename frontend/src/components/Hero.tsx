import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCta: () => void;
}

export function Hero({ onCta }: HeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-32 sm:px-10 sm:pt-40 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-indie-yellow">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tightish text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          {t.hero.headlineLead}
          <span className="text-indie-yellow">{t.hero.headlineAccent}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          {t.hero.sub}
        </p>
        <div className="mt-12">
          <Button size="lg" onClick={onCta} className="group">
            {t.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* sparing yellow accent — single dot, top-right of viewport on large screens */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 lg:block"
      >
        <div className="h-full w-full border-l border-white/5" />
      </div>
    </section>
  );
}
