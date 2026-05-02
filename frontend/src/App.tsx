import { useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { ForStartups } from '@/components/ForStartups';
import { AudienceSection } from '@/components/AudienceSection';
import { WhyIndie } from '@/components/WhyIndie';
import { LogoStrip } from '@/components/LogoStrip';
import { Footer } from '@/components/Footer';
import { WaitlistDialog } from '@/components/WaitlistDialog';
import type { Segment } from '@/lib/i18n';

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<Segment | null>(null);

  const openWith = (segment: Segment | null) => {
    setActiveSegment(segment);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-indie-black">
      <LanguageToggle />
      <main>
        <Hero onCta={() => openWith(null)} />
        <Problem />
        <ForStartups onCta={openWith} />
        <AudienceSection segment="vc" onCta={openWith} />
        <AudienceSection segment="accelerator" onCta={openWith} />
        <WhyIndie />
        <LogoStrip variant="carriers" />
        <LogoStrip variant="ecosystem" />
      </main>
      <Footer />
      <WaitlistDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialSegment={activeSegment}
      />
    </div>
  );
}
