import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  onCta: () => void;
}

export function FinalCTA({ onCta }: Props) {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tightish text-white sm:text-5xl lg:text-6xl">
          {t.finalCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
          {t.finalCta.body}
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={onCta} className="group">
            {t.finalCta.cta}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
