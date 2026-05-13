import { useState } from 'react';
import { CONTENT } from '@/lib/content';
import { useLang, usePageTitle } from '@/lib/lang';
import { Nav } from '@/components/landing/Nav';
import {
  Autopilot,
  Carriers,
  FinalCTA,
  Footer,
  Hero,
  Pricing,
  RiskStack,
  Testimonials,
  Triggers,
  VCA,
  WhyUs,
} from '@/components/landing/Sections';
import { Waitlist } from '@/components/landing/Waitlist';

const HOME_TITLES = {
  en: 'IndieBacked Startups — Protection, on autopilot.',
  pt: 'IndieBacked Startups — Proteção, em piloto automático.',
} as const;

export default function App() {
  const [lang, setLang] = useLang();
  usePageTitle(lang, HOME_TITLES);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const openWaitlist = () => setWaitlistOpen(true);
  const closeWaitlist = () => setWaitlistOpen(false);

  const t = CONTENT[lang];

  return (
    <div className="page" id="top">
      <Nav lang={lang} setLang={setLang} onCTA={openWaitlist} />
      <Hero t={t.hero} onCTA={openWaitlist} />
      <Triggers t={t.triggers} />
      <Autopilot t={t.autopilot} />
      <Pricing t={t.pricing} />
      <RiskStack t={t.riskstack} />
      <Carriers t={t.carriers} />
      <Testimonials quotes={t.quotes} />
      <VCA t={t.vca} />
      <WhyUs t={t.whyus} />
      <FinalCTA t={t.final} onCTA={openWaitlist} />
      <Footer t={t.footer} />
      <Waitlist open={waitlistOpen} onClose={closeWaitlist} t={t.waitlist} />
    </div>
  );
}
