import type { Lang, LangContent } from '@/lib/content';
import { CONTENT } from '@/lib/content';
import type {
  BenchmarkPanelStrings,
  CohortPanelStrings,
} from '@/lib/pitch-content';
import { IconCheck } from '../Icons';

export const CALENDLY_URL = 'https://calendar.app.google/otk2NgCNSPLJZB2S6';

export function SecondaryEmailCTA({ lang, subject }: { lang: Lang; subject: string }) {
  const prefix = lang === 'pt' ? 'ou envia email para' : 'or email';
  return (
    <a className="pitch-cta-secondary" href={`mailto:partners@indie.pt?subject=${subject}`}>
      {prefix} partners@indie.pt
    </a>
  );
}

export function BenchmarkPanel({ t }: { t: BenchmarkPanelStrings }) {
  return (
    <div className="stack-frame">
      <div className="snap-card">
        <div className="snap-head">
          <div>
            <p className="snap-title">{t.title}</p>
            <div className="snap-meta">
              <span>{t.subtitle}</span>
              <span className="sep">·</span>
              <span>{t.book}</span>
            </div>
          </div>
          <span className="snap-chip">{t.chip}</span>
        </div>
        <div className="bench-rows">
          {t.rows.map((r) => (
            <div className="bench-row" key={r.stage}>
              <span className="bench-stage">{r.stage}</span>
              <div className="bench-bar">
                <div className="bench-fill" style={{ width: r.val + '%' }} />
              </div>
              <span className="bench-val">{r.val}%</span>
            </div>
          ))}
        </div>
        <div className="snap-foot">
          <span>{t.foot_lead} <strong>{t.foot_emph}</strong></span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export function CohortPanel({ t }: { t: CohortPanelStrings }) {
  return (
    <div className="stack-frame">
      <div className="snap-card">
        <div className="snap-head">
          <div>
            <p className="snap-title">{t.title}</p>
            <div className="snap-meta">
              <span>{t.count_companies}</span>
              <span className="sep">·</span>
              <span>{t.count_bound}</span>
            </div>
          </div>
          <span className="snap-chip">{t.chip}</span>
        </div>
        <div className="cohort-rows">
          {t.rows.map((r) => (
            <div className="cohort-row" key={r.num}>
              <span className="num">{r.num}</span>
              <div>
                <div className="cohort-name">{r.name}</div>
                <div className="cohort-meta">{r.meta}</div>
              </div>
              <span className={'cohort-status ' + r.status}>{t.status[r.status]}</span>
            </div>
          ))}
        </div>
        <div className="snap-foot">
          <span>{t.foot}</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export function TrustBlock({ lang }: { lang: Lang }) {
  const t: LangContent['whyus'] = CONTENT[lang].whyus;
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">·</span>{t.eyebrow}</div>
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

interface PitchFinalProps { h: string; body: string; cta: string; lang: Lang; subject: string }

export function PitchFinal({ h, body, cta, lang, subject }: PitchFinalProps) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{h}</h2>
        <p>{body}</p>
        <a className="final-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">{cta}</a>
        <div className="pitch-cta-secondary-wrap">
          <SecondaryEmailCTA lang={lang} subject={subject} />
        </div>
      </div>
    </section>
  );
}

export function PitchFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        Indie Mediação de Seguros, Lda
        <span className="sep">·</span>
        ASF #420563256
        <span className="sep">·</span>
        <a href="mailto:partners@indie.pt">partners@indie.pt</a>
      </div>
    </footer>
  );
}

export function OwnStackRow({ name, what, tag }: { name: string; what: string; tag: string }) {
  return (
    <div className="own-row">
      <div className="check"><IconCheck size={10} /></div>
      <div>
        <div className="own-name">{name}</div>
        <div className="own-what">{what}</div>
      </div>
      <span className="own-tag">{tag}</span>
    </div>
  );
}
