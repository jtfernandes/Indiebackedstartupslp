import { Fragment } from 'react';
import type { HeroContent, HeroStack, LangContent } from '@/lib/content';
import { IconArrow, IconCheck } from './Icons';

function StackPanel({ data }: { data: HeroStack }) {
  return (
    <div className="stack-card">
      <div className="stack-head">
        <div>
          <p className="stack-title">{data.title}</p>
          <div className="stack-meta">
            <span className="stack-co-pill">
              <span className="avatar">{data.co_initial}</span>
              {data.company}
            </span>
            <span className="sep">·</span>
            <span>{data.meta_people}</span>
            <span className="sep">·</span>
            <span>{data.meta_geo}</span>
          </div>
        </div>
      </div>
      <div className="stack-rows">
        {data.rows.map((r, i) => (
          <div className="stack-row" key={i}>
            <div className="check"><IconCheck size={10} /></div>
            <div>
              <div className="stack-name">{r.name}</div>
              <div className="stack-carrier">{r.carrier}</div>
            </div>
            <div className={'stack-status' + (r.renewal ? ' renewal' : '')}>{r.status}</div>
          </div>
        ))}
      </div>
      <div className="stack-foot">
        <span>{data.foot_left}</span>
        <span className="link">{data.foot_right} →</span>
      </div>
    </div>
  );
}

export function Hero({ t, onCTA }: { t: HeroContent; onCTA: () => void }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="dot" />
              {t.eyebrow}
            </div>
            <h1>
              {t.title1}<br />
              {t.title2}<span className="period">.</span>
            </h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="hero-actions">
              <button className="nav-cta" onClick={onCTA}>{t.cta}</button>
              <span className="hero-meta">
                <span className="pulse" />
                {t.meta}
              </span>
            </div>
          </div>
          <div className="stack-frame">
            <StackPanel data={t.stack} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Triggers({ t }: { t: LangContent['triggers'] }) {
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">02</span>{t.eyebrow}</div>
        <h2 className="sec-h2" style={{ maxWidth: '20ch' }}>{t.h2}</h2>
        <div style={{ height: 24 }} />
        <div className="trigger-grid">
          {t.items.map((it, i) => (
            <div className="trigger" key={i}>
              <p className="trigger-when">{it.when}</p>
              <p className="trigger-then">{it.then}</p>
              <span className="trigger-tag">{it.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Autopilot({ t }: { t: LangContent['autopilot'] }) {
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">03</span>{t.eyebrow}</div>
        <h2 className="sec-h2" style={{ maxWidth: '16ch' }}>{t.h2}</h2>
        <p className="sec-sub" style={{ marginBottom: 0 }}>{t.sub}</p>
        <div className="steps">
          {t.steps.map((s, i) => (
            <div className="step" key={i}>
              <p className="step-num">{s.num}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="steps-footer">{t.closing}</p>
      </div>
    </section>
  );
}

export function Pricing({ t }: { t: LangContent['pricing'] }) {
  return (
    <section>
      <div className="wrap">
        <div className="pricing-grid">
          <div>
            <div className="sec-eyebrow"><span className="num">04</span>{t.eyebrow}</div>
            <h2 className="sec-h2" style={{ marginBottom: 24 }}>{t.h2}</h2>
            <p className="pricing-body" style={{ margin: 0 }}>{t.body}</p>
          </div>
          <div className="pricing-anchor">
            <p className="anchor-eyebrow">{t.anchor.eyebrow}</p>
            {t.anchor.items.map((a, i) => (
              <p key={i}>
                <strong>{a.strong}</strong>{a.rest}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RiskStack({ t }: { t: LangContent['riskstack'] }) {
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">05</span>{t.eyebrow}</div>
        <h2 className="sec-h2">{t.h2}</h2>
        <p className="sec-sub" style={{ marginBottom: 40 }}>{t.sub}</p>
        <div className="risk-table">
          <div className="risk-head">{t.heads[0]}</div>
          <div className="risk-head">{t.heads[1]}</div>
          <div className="risk-head">{t.heads[2]}</div>
          {t.rows.map((r, i) => (
            <Fragment key={i}>
              <div className="risk-cell">
                <div className="risk-name">
                  {r.name}
                  <small>{r.full}</small>
                </div>
              </div>
              <div className="risk-cell risk-what">{r.what}</div>
              <div className="risk-cell risk-when">{r.when}</div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Carriers({ t }: { t: LangContent['carriers'] }) {
  return (
    <div className="wrap">
      <div className="carriers">
        <div className="sec-eyebrow"><span className="num">06</span>{t.eyebrow}</div>
        <h2 className="sec-h2" style={{ maxWidth: '14ch' }}>{t.h2}</h2>
        <p className="sec-sub">{t.body}</p>
        <div className="carrier-grid">
          {t.logos.map((name, i) => (
            <div className="carrier-cell" key={i}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ quotes }: { quotes: LangContent['quotes'] }) {
  return (
    <section style={{ borderBottom: 0 }}>
      <div className="wrap">
        <div className="quotes">
          {quotes.map((q, i) => (
            <div className="quote" key={i}>
              <span className="qmark">“</span>
              <p className="qbody">{q.body}</p>
              <div className="qattr">
                <p className="qname">{q.name}</p>
                <p className="qrole">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VCA({ t }: { t: LangContent['vca'] }) {
  const hrefs = ['for-vcs.html', 'for-accelerators.html'];
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">08</span>{t.eyebrow}</div>
        <h2 className="sec-h2" style={{ maxWidth: '22ch', marginBottom: 40 }}>{t.h2}</h2>
        <div className="vca">
          {t.cols.map((c, i) => (
            <div className="vca-col" key={i}>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <a className="vca-link" href={hrefs[i]}>
                {c.cta} <span className="arrow"><IconArrow size={14} /></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({ t }: { t: LangContent['whyus'] }) {
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">09</span>{t.eyebrow}</div>
        <h2 className="sec-h2" style={{ marginBottom: 48 }}>{t.h2}</h2>
        <div className="why-grid">
          {t.blocks.map((b, i) => (
            <div className="why-card" key={i}>
              <h3>{b.h}</h3>
              <p>{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ t, onCTA }: { t: LangContent['final']; onCTA: () => void }) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{t.h2}</h2>
        <p>{t.sub}</p>
        <button className="final-cta" onClick={onCTA}>{t.cta}</button>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: LangContent['footer'] }) {
  return (
    <footer className="footer">
      <div className="wrap">
        {t.line}
        <span className="sep">·</span>
        {t.asf}
        <span className="sep">·</span>
        <a href={'mailto:' + t.email}>{t.email}</a>
      </div>
    </footer>
  );
}
