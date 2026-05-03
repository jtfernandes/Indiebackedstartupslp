import { useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Hero } from '@/components/Hero';
import { TriggerStrip } from '@/components/TriggerStrip';
import { HowAutopilot } from '@/components/HowAutopilot';
import { Pricing } from '@/components/Pricing';
import { RiskStack } from '@/components/RiskStack';
import { MultiCarrier } from '@/components/MultiCarrier';
import { Testimonials } from '@/components/Testimonials';
import { Partners } from '@/components/Partners';
import { WhyIndie } from '@/components/WhyIndie';
import { FinalCTA } from '@/components/FinalCTA';
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
        <TriggerStrip />
        <HowAutopilot />
        <Pricing />
        <RiskStack />
        <MultiCarrier />
        <Testimonials />
        <Partners onCta={openWith} />
        <WhyIndie />
        <FinalCTA onCta={() => openWith(null)} />
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
