import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useI18n, type Segment } from '@/lib/i18n';
import { WaitlistForm } from './WaitlistForm';
import { ArrowRight } from 'lucide-react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialSegment: Segment | null;
}

export function WaitlistDialog({ open, onOpenChange, initialSegment }: Props) {
  const { t } = useI18n();
  const [segment, setSegment] = useState<Segment | null>(initialSegment);

  // Sync the dialog's working segment with the trigger that opened it.
  useEffect(() => {
    if (open) setSegment(initialSegment);
  }, [open, initialSegment]);

  const segmentEntries: { key: Segment; label: string; sub: string }[] = [
    { key: 'startup', ...t.waitlist.segments.startup },
    { key: 'vc', ...t.waitlist.segments.vc },
    { key: 'accelerator', ...t.waitlist.segments.accelerator },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {segment === null ? (
          <>
            <div>
              <DialogTitle>{t.waitlist.pickSegmentTitle}</DialogTitle>
              <DialogDescription className="mt-2">{t.waitlist.pickSegmentSub}</DialogDescription>
            </div>
            <ul className="flex flex-col gap-3">
              {segmentEntries.map((s) => (
                <li key={s.key}>
                  <button
                    type="button"
                    onClick={() => setSegment(s.key)}
                    className="group flex w-full items-center justify-between border border-white/15 bg-transparent px-5 py-4 text-left transition-colors hover:border-indie-yellow"
                  >
                    <span>
                      <span className="block text-base font-bold text-white group-hover:text-indie-yellow">
                        {s.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-white/55">{s.sub}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-indie-yellow" />
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div>
              <DialogTitle>{t.waitlist.title}</DialogTitle>
              <DialogDescription className="mt-2">
                {t.waitlist.segments[segment].label} · {t.waitlist.segments[segment].sub}
              </DialogDescription>
            </div>
            <WaitlistForm segment={segment} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
