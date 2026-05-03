import { useI18n, type Segment } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';

interface Props {
  onCta: (segment: Segment) => void;
}

export function Partners({ onCta }: Props) {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          {t.partners.kicker}
        </p>
        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          <Block
            title={t.partners.vc.title}
            body={t.partners.vc.body}
            cta={t.partners.vc.cta}
            onClick={() => onCta('vc')}
          />
          <Block
            title={t.partners.accelerator.title}
            body={t.partners.accelerator.body}
            cta={t.partners.accelerator.cta}
            onClick={() => onCta('accelerator')}
          />
        </div>
      </div>
    </section>
  );
}

interface BlockProps {
  title: string;
  body: string;
  cta: string;
  onClick: () => void;
}

function Block({ title, body, cta, onClick }: BlockProps) {
  return (
    <div className="flex flex-col bg-indie-black p-8 sm:p-10">
      <h3 className="text-2xl font-bold leading-tight tracking-tightish text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-white/65">{body}</p>
      <button
        type="button"
        onClick={onClick}
        className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-indie-yellow transition-colors hover:text-white"
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
