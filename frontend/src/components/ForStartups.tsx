import { useI18n, type Segment } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  onCta: (segment: Segment) => void;
}

export function ForStartups({ onCta }: Props) {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-indie-yellow">
            {t.startups.kicker}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
            {t.startups.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{t.startups.body}</p>
          <div className="mt-10">
            <Button size="lg" onClick={() => onCta('startup')} className="group">
              {t.startups.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
            {t.startups.productsTitle}
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {t.startups.products.map((p) => (
              <li key={p.name} className="grid grid-cols-[120px_1fr] gap-6 py-5 sm:grid-cols-[160px_1fr]">
                <span className="text-base font-bold text-white">{p.name}</span>
                <span className="text-sm leading-relaxed text-white/65 sm:text-base">{p.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
