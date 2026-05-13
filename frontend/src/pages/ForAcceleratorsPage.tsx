import { useLang } from '@/lib/lang';
import { PitchNav } from '@/components/landing/pitch/PitchNav';
import {
  CohortPanel,
  OwnStackRow,
  PitchFinal,
  PitchFooter,
  TrustBlock,
} from '@/components/landing/pitch/PitchShared';

const cases = [
  {
    h: 'Real coverage, not a discount code.',
    p: 'D&O, Cyber, Tech E&O, AT, Saúde. Stage-appropriate stacks for pre-seed teams that actually need them — not a 10% off link your founders never click.',
  },
  {
    h: 'One cohort, one session.',
    p: "We onboard the whole cohort together. Every founder leaves with a stack quoted in 24h. You don't chase, you don't track, you don't follow up.",
  },
  {
    h: 'Alumni stay with us after demo day.',
    p: 'Renewals come back automatically. Your program is the front door, not the lifetime account manager.',
  },
  {
    h: 'Optional co-branded landing.',
    p: 'Cohort intake on a page that reads like your program. Same broker behind it. We handle the rest.',
  },
];

const steps = [
  { num: '01', h: 'One session with the cohort.', p: 'We come in for one hour. 3 minutes of intake per founder, live. Every company in the room leaves with a stack proposal in flight.' },
  { num: '02', h: 'Each company gets a quote.', p: 'Stage-appropriate stack. Preferential pricing locked at cohort scale. Quoted in 24h. Bound the moment they approve.' },
  { num: '03', h: 'Alumni stay on autopilot.', p: 'Renewals come back to them, not you. New rounds, new hires, new geographies — we re-run the stack. You get the credit; we keep the relationship.' },
];

const orgStack = [
  { name: 'D&O', what: 'On the management entity and the program directors.', tag: 'Required' },
  { name: 'Cyber', what: 'Application data, alumni database, mentor portal.', tag: 'Recommended' },
  { name: 'PI', what: 'Professional indemnity on the advice your mentors give.', tag: 'Recommended' },
];

export default function ForAcceleratorsPage() {
  const [lang, setLang] = useLang();

  return (
    <div className="pitch-page" id="top">
      <PitchNav lang={lang} setLang={setLang} current="accelerators" />

      <section className="hero pitch-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <a className="crumb" href="index.html">← indiebackedstartups.com</a>
              <div className="hero-eyebrow">
                <span className="dot" />
                For accelerators
              </div>
              <h1>Stop sending your cohort a perks PDF.</h1>
              <p className="hero-sub">
                Indie replaces the generic group-discount link with real coverage your founders actually use. Free for the program. Preferential pricing for the cohort and alumni. We onboard the whole cohort in one session — and your program&rsquo;s own insurance comes along for the ride.
              </p>
              <div className="hero-actions">
                <a className="nav-cta" href="mailto:partners@indie.pt?subject=IndieBacked%20for%20accelerators">Set up a quick intro</a>
                <span className="hero-meta">Free for the program · Cohort + alumni pricing</span>
              </div>
            </div>
            <CohortPanel />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow"><span className="num">02</span>What changes</div>
          <h2 className="sec-h2" style={{ maxWidth: '22ch', marginBottom: 8 }}>The perks-PDF replaced with something founders use.</h2>
          <p className="sec-sub">Four things the discount-code approach doesn&rsquo;t do.</p>
          <div className="case-grid">
            {cases.map((c, i) => (
              <div className="case-cell" key={i}>
                <p className="case-num">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="case-h">{c.h}</h3>
                <p className="case-p">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow"><span className="num">03</span>How it runs for your program</div>
          <h2 className="sec-h2" style={{ maxWidth: '20ch' }}>One session. The rest is ours.</h2>
          <p className="sec-sub">Your team doesn&rsquo;t manage the relationship after onboarding. We do.</p>
          <div className="run-steps">
            {steps.map((s, i) => (
              <div className="run-step" key={i}>
                <p className="run-num">{s.num}</p>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap" style={{ marginTop: 96, marginBottom: 96 }}>
        <div className="proof-block">
          <div className="sec-eyebrow"><span className="num">04</span>The proof point</div>
          <h2 className="sec-h2">The VCs investing in your alumni already use us.</h2>
          <p>
            Indie is on the cap table of companies funded by Olisipo Way, Caravela, COREAngels and others. When your founders raise, their new investors already know who we are. One broker, one relationship across the network they&rsquo;re about to join — no handover, no re-onboarding.
          </p>
          <div className="proof-logos">
            <span>Olisipo Way</span>
            <span>Caravela</span>
            <span>COREAngels</span>
            <span style={{ color: 'var(--fg-3)' }}>+ funds across Iberia</span>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: 96 }}>
        <div className="own-block">
          <div>
            <div className="sec-eyebrow"><span className="num">05</span>And while we&rsquo;re at it</div>
            <h2>Put your program&rsquo;s own stack on autopilot.</h2>
            <p>
              Programs carry their own exposure: D&amp;O on the management entity, cyber on application data, PI on the advice your mentors give. We put your own coverage on the same autopilot we run for the cohort. Free, same broker, no extra calls.
            </p>
          </div>
          <div className="own-stack">
            {orgStack.map((s, i) => (
              <OwnStackRow key={i} name={s.name} what={s.what} tag={s.tag} />
            ))}
          </div>
        </div>
      </div>

      <TrustBlock />

      <PitchFinal
        h="Plug us in?"
        body="Quick intro. We'll show you what a cohort onboarding session looks like, share what alumni retention has looked like for us so far, and answer whatever you want to ask."
        cta="Set up a quick intro"
      />

      <PitchFooter />
    </div>
  );
}
