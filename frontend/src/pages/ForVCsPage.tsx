import { useLang } from '@/lib/lang';
import { PitchNav } from '@/components/landing/pitch/PitchNav';
import {
  BenchmarkPanel,
  OwnStackRow,
  PitchFinal,
  PitchFooter,
  TrustBlock,
} from '@/components/landing/pitch/PitchShared';

const cases = [
  {
    h: 'Preferential pricing across the book.',
    p: 'Pre-negotiated at portfolio scale across 11 carriers. Typically 10–20% lower than what your founders find on their own.',
  },
  {
    h: 'Same-week onboarding for new investments.',
    p: "We onboard the company inside a week of your wire hitting. They're covered before their first board meeting.",
  },
  {
    h: 'One broker. Portugal and Spain.',
    p: "Hiscox to Fidelidade, Madrid to Lisbon. Your founders see one contact across the network they're actually operating in.",
  },
  {
    h: 'Quarterly benchmark from our broader book.',
    p: 'Anonymised coverage stats by stage from across our entire portfolio. Useful for portfolio reviews. Defensible to your founders.',
  },
];

const steps = [
  { num: '01', h: 'You introduce.', p: 'Forward an intro email or drop us in a Slack channel. We take it from there. 3 minutes of intake from the founder; the kind of thing the CFO already knows.' },
  { num: '02', h: 'We pick and bind.', p: 'Stage-appropriate stack, preferential pricing already loaded. They review, they sign, we file with the carrier. Often immediately; worst case, next business day.' },
  { num: '03', h: 'We handle renewals.', p: "At renewal or when something material changes — new round, new hire, new geography — we run the numbers and bring three options back. You don't have to manage it." },
];

const fundStack = [
  { name: 'D&O', what: 'For the GPs and the management company.', tag: 'Required' },
  { name: 'Cyber', what: 'LP data, deal flow, dataroom exposure.', tag: 'Recommended' },
  { name: 'PI', what: 'Professional indemnity on the management company.', tag: 'Recommended' },
];

export default function ForVCsPage() {
  const [lang, setLang] = useLang();

  return (
    <div className="pitch-page" id="top">
      <PitchNav lang={lang} setLang={setLang} current="vcs" />

      <section className="hero pitch-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <a className="crumb" href="index.html">← indiebackedstartups.com</a>
              <div className="hero-eyebrow">
                <span className="dot" />
                For VCs
              </div>
              <h1>We back the founders you back.</h1>
              <p className="hero-sub">
                Indie is the broker your portfolio uses across Portugal and Spain. Pre-negotiated rates at portfolio scale. Same-week onboarding for new investments. Free for the fund — and we put your own coverage on autopilot too.
              </p>
              <div className="hero-actions">
                <a className="nav-cta" href="mailto:partners@indie.pt?subject=IndieBacked%20for%20VCs">Set up a quick intro</a>
                <span className="hero-meta">Free for the fund · ≈10–20% lower for portfolio · Iberia</span>
              </div>
            </div>
            <BenchmarkPanel />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow"><span className="num">02</span>What you get</div>
          <h2 className="sec-h2" style={{ maxWidth: '22ch', marginBottom: 8 }}>One broker across your portfolio. Free for the fund.</h2>
          <p className="sec-sub">Four things you don&rsquo;t get from a generic perks page.</p>
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
          <div className="sec-eyebrow"><span className="num">03</span>How it runs for you</div>
          <h2 className="sec-h2" style={{ maxWidth: '20ch' }}>You introduce. We handle the rest.</h2>
          <p className="sec-sub">Your founders deal with us. You get the visibility, not the inbox.</p>
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

      <section>
        <div className="wrap">
          <div className="feature">
            <div>
              <div className="sec-eyebrow"><span className="num">04</span>Quarterly benchmark</div>
              <h2 className="sec-h2">Useful. Anonymous. Defensible.</h2>
              <p>
                Once a quarter, we send you a benchmark cut of our broader Iberia book. Coverage rates by stage. Median spend per company. Where the gaps usually open. No company names. No portfolio audits.
              </p>
              <p>
                You can hand it to a founder and say <em>&ldquo;here&rsquo;s where companies at your stage typically sit.&rdquo;</em> That&rsquo;s the value — not telling you which of your companies are uncovered.
              </p>
              <p style={{ color: 'var(--fg-3)', fontSize: 14, marginTop: 24 }}>
                We never share who&rsquo;s on the book with anyone outside the broker. Your founders&rsquo; coverage is between them and us.
              </p>
            </div>
            <BenchmarkPanel />
          </div>
        </div>
      </section>

      <div className="wrap" style={{ marginTop: 96, marginBottom: 96 }}>
        <div className="own-block">
          <div>
            <div className="sec-eyebrow"><span className="num">05</span>And while we&rsquo;re at it</div>
            <h2>Put your fund&rsquo;s own stack on autopilot.</h2>
            <p>
              Funds carry their own exposure. D&amp;O on the GPs. Cyber on the LP data and deal flow. PI on the management company. The same broker that runs your portfolio runs your fund. Two flywheels, one relationship, one calendar.
            </p>
          </div>
          <div className="own-stack">
            {fundStack.map((s, i) => (
              <OwnStackRow key={i} name={s.name} what={s.what} tag={s.tag} />
            ))}
          </div>
        </div>
      </div>

      <TrustBlock />

      <PitchFinal
        h="Want a look?"
        body="Quick intro on a call. We'll walk you through the benchmark report, show how onboarding works for your next investment, and answer whatever you want to ask."
        cta="Set up a quick intro"
      />

      <PitchFooter />
    </div>
  );
}
