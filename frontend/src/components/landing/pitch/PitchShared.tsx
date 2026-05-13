import { IconCheck } from '../Icons';

export function BenchmarkPanel() {
  const rows = [
    { stage: 'Pre-seed', val: 38 },
    { stage: 'Seed', val: 71 },
    { stage: 'Series A', val: 94 },
    { stage: 'Series B', val: 98 },
  ];
  return (
    <div className="stack-frame">
      <div className="snap-card">
        <div className="snap-head">
          <div>
            <p className="snap-title">Q1 Coverage benchmark</p>
            <div className="snap-meta">
              <span>D&amp;O take-up by stage</span>
              <span className="sep">·</span>
              <span>Iberia book</span>
            </div>
          </div>
          <span className="snap-chip">Anonymised</span>
        </div>
        <div className="bench-rows">
          {rows.map((r) => (
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
          <span>Sent quarterly. <strong>No company names.</strong></span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

type CohortStatus = 'live' | 'review' | 'queued';

export function CohortPanel() {
  const rows: { num: string; name: string; meta: string; status: CohortStatus }[] = [
    { num: '01', name: 'Faro Robotics', meta: '4 people · D&O + Cyber + AT', status: 'live' },
    { num: '02', name: 'Linha', meta: '2 people · AT + Tech E&O', status: 'live' },
    { num: '03', name: 'Pulso', meta: '3 people · Full stack', status: 'live' },
    { num: '04', name: 'Camões AI', meta: '5 people · AI Liability added', status: 'review' },
    { num: '05', name: 'Routeful', meta: '6 people · ES expansion', status: 'live' },
    { num: '06', name: 'Nuvem', meta: 'Onboarding', status: 'queued' },
  ];
  const label: Record<CohortStatus, string> = {
    live: 'Stack live',
    review: 'In review',
    queued: 'Onboarding',
  };
  return (
    <div className="stack-frame">
      <div className="snap-card">
        <div className="snap-head">
          <div>
            <p className="snap-title">Cohort — Spring &lsquo;26</p>
            <div className="snap-meta">
              <span>6 companies</span>
              <span className="sep">·</span>
              <span>5 stacks bound</span>
            </div>
          </div>
          <span className="snap-chip">Live</span>
        </div>
        <div className="cohort-rows">
          {rows.map((r) => (
            <div className="cohort-row" key={r.num}>
              <span className="num">{r.num}</span>
              <div>
                <div className="cohort-name">{r.name}</div>
                <div className="cohort-meta">{r.meta}</div>
              </div>
              <span className={'cohort-status ' + r.status}>{label[r.status]}</span>
            </div>
          ))}
        </div>
        <div className="snap-foot">
          <span>Alumni stay on after demo day.</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

export function TrustBlock() {
  const blocks = [
    {
      h: 'Indie Mediação de Seguros, Lda — ASF #420563256.',
      p: 'Regulated. Accountable. On the hook for the advice we give.',
    },
    {
      h: '11 carrier partners across Portugal and Spain.',
      p: "We're not a comparison site and we're not locked to a single balance sheet.",
    },
    {
      h: 'Backed by Olisipo Way, Caravela, COREAngels.',
      p: 'Founders backing founders.',
    },
  ];
  return (
    <section>
      <div className="wrap">
        <div className="sec-eyebrow"><span className="num">·</span>Why us</div>
        <h2 className="sec-h2" style={{ marginBottom: 48 }}>Licensed. Independent. Built here.</h2>
        <div className="why-grid">
          {blocks.map((b, i) => (
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

interface PitchFinalProps { h: string; body: string; cta: string }

export function PitchFinal({ h, body, cta }: PitchFinalProps) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{h}</h2>
        <p>{body}</p>
        <a className="final-cta" href="mailto:partners@indie.pt?subject=IndieBacked%20intro">{cta}</a>
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
