import { useLang, usePageTitle } from '@/lib/lang';
import { VCS_CONTENT } from '@/lib/pitch-content';

const TITLES = {
  en: 'IndieBacked — For VCs',
  pt: 'IndieBacked — Para VCs',
} as const;
import { PitchNav } from '@/components/landing/pitch/PitchNav';
import {
  BenchmarkPanel,
  OwnStackRow,
  PitchFinal,
  PitchFooter,
  TrustBlock,
} from '@/components/landing/pitch/PitchShared';

export default function ForVCsPage() {
  const [lang, setLang] = useLang();
  usePageTitle(lang, TITLES);
  const t = VCS_CONTENT[lang];

  return (
    <div className="pitch-page" id="top">
      <PitchNav lang={lang} setLang={setLang} current="vcs" strings={t.nav} />

      <section className="hero pitch-hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <a className="crumb" href="index.html">{t.hero.crumb}</a>
              <div className="hero-eyebrow">
                <span className="dot" />
                {t.hero.eyebrow}
              </div>
              <h1>{t.hero.h1}</h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="hero-actions">
                <a className="nav-cta" href="mailto:partners@indie.pt?subject=IndieBacked%20for%20VCs">{t.hero.cta}</a>
                <span className="hero-meta">{t.hero.meta}</span>
              </div>
            </div>
            <BenchmarkPanel t={t.panel} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow"><span className="num">02</span>{t.cases.sec.eyebrow}</div>
          <h2 className="sec-h2" style={{ maxWidth: '22ch', marginBottom: 8 }}>{t.cases.sec.h2}</h2>
          <p className="sec-sub">{t.cases.sec.sub}</p>
          <div className="case-grid">
            {t.cases.items.map((c, i) => (
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
          <div className="sec-eyebrow"><span className="num">03</span>{t.run.sec.eyebrow}</div>
          <h2 className="sec-h2" style={{ maxWidth: '20ch' }}>{t.run.sec.h2}</h2>
          <p className="sec-sub">{t.run.sec.sub}</p>
          <div className="run-steps">
            {t.run.steps.map((s, i) => (
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
              <div className="sec-eyebrow"><span className="num">04</span>{t.benchmark_narrative.eyebrow}</div>
              <h2 className="sec-h2">{t.benchmark_narrative.h2}</h2>
              <p>{t.benchmark_narrative.p1}</p>
              <p>{t.benchmark_narrative.p2_lead}<em>{t.benchmark_narrative.p2_em}</em>{t.benchmark_narrative.p2_rest}</p>
              <p style={{ color: 'var(--fg-3)', fontSize: 14, marginTop: 24 }}>{t.benchmark_narrative.p3}</p>
            </div>
            <BenchmarkPanel t={t.panel} />
          </div>
        </div>
      </section>

      <div className="wrap" style={{ marginTop: 96, marginBottom: 96 }}>
        <div className="own-block">
          <div>
            <div className="sec-eyebrow"><span className="num">05</span>{t.own.eyebrow}</div>
            <h2>{t.own.h2}</h2>
            <p>{t.own.p}</p>
          </div>
          <div className="own-stack">
            {t.own.stack.map((s, i) => (
              <OwnStackRow key={i} name={s.name} what={s.what} tag={s.tag} />
            ))}
          </div>
        </div>
      </div>

      <TrustBlock lang={lang} />

      <PitchFinal h={t.final.h} body={t.final.body} cta={t.final.cta} />

      <PitchFooter />
    </div>
  );
}
