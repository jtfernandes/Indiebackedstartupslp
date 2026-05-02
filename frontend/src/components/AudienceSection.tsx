import { useI18n, type Segment } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

interface Props {
  segment: Exclude<Segment, 'startup'>;
  onCta: (segment: Segment) => void;
}

export function AudienceSection({ segment, onCta }: Props) {
  const { t } = useI18n();
  const copy = segment === 'vc' ? t.vcs : t.accelerators;

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-indie-yellow">
            {copy.kicker}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{copy.body}</p>
        </div>
        <div className="flex flex-col">
          <ul className="space-y-5 border-l-2 border-indie-yellow/70 pl-6">
            {copy.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/85">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-indie-yellow" />
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button size="lg" onClick={() => onCta(segment)} className="group">
              {copy.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
