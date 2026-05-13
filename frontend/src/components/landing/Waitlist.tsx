import { Fragment, useEffect, useRef, useState, type FormEvent } from 'react';
import type { LangContent, SegmentId } from '@/lib/content';
import { IconAccelerator, IconArrow, IconCheck, IconClose, IconFounder, IconVC } from './Icons';

type Step = 0 | 1 | 2;

interface WaitlistProps {
  open: boolean;
  onClose: () => void;
  t: LangContent['waitlist'];
}

const SEGMENT_ICONS = [IconFounder, IconVC, IconAccelerator] as const;

export function Waitlist({ open, onClose, t }: WaitlistProps) {
  const [step, setStep] = useState<Step>(0);
  const [segment, setSegment] = useState<SegmentId | null>(null);
  const [form, setForm] = useState({ name: '', company: '', email: '' });
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      const id = window.setTimeout(() => {
        setStep(0);
        setSegment(null);
        setForm({ name: '', company: '', email: '' });
      }, 250);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (step === 1 && firstFieldRef.current) firstFieldRef.current.focus();
  }, [step]);

  if (!open) return null;

  const pickSegment = (id: SegmentId) => { setSegment(id); setStep(1); };
  const back = () => setStep(0);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const valid = form.name.trim() && form.company.trim() && /\S+@\S+\.\S+/.test(form.email);

  return (
    <div
      className="dialog-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="dialog" role="dialog" aria-modal="true">
        <button className="dialog-close" onClick={onClose} aria-label="Close">
          <IconClose />
        </button>

        {step === 0 && (
          <Fragment>
            <div className="dialog-head">
              <h3>{t.step1_title}</h3>
              <span className="step-indicator">
                <span className="pip on" />
                <span className="pip" />
                {t.step1_indicator}
              </span>
            </div>
            <div className="dialog-body">
              <p style={{ fontSize: 14, color: 'var(--fg-3)', margin: '0 0 16px' }}>{t.step1_prompt}</p>
              <div className="segments">
                {t.segments.map((s, i) => {
                  const Icon = SEGMENT_ICONS[i] ?? IconFounder;
                  return (
                    <button key={s.id} className="segment" onClick={() => pickSegment(s.id)}>
                      <span className="seg-icon"><Icon /></span>
                      <span className="seg-text">
                        <span className="seg-title">{s.title}</span>
                        <span className="seg-meta">{s.meta}</span>
                      </span>
                      <span className="seg-arrow"><IconArrow size={16} /></span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Fragment>
        )}

        {step === 1 && segment && (
          <form onSubmit={submit}>
            <div className="dialog-head">
              <h3>{t.step2_title[segment]}</h3>
              <span className="step-indicator">
                <span className="pip on" />
                <span className="pip on" />
                {t.step2_indicator}
              </span>
            </div>
            <div className="dialog-body">
              <label className="field">
                <span className="field-label">{t.labels.name}</span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.placeholders.name}
                  required
                />
              </label>
              <label className="field">
                <span className="field-label">{t.labels.company[segment]}</span>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder={t.placeholders.company[segment]}
                  required
                />
              </label>
              <label className="field">
                <span className="field-label">{t.labels.email}</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.placeholders.email}
                  required
                />
              </label>
              <div className="dialog-actions">
                <button type="button" className="dialog-back" onClick={back}>← {t.back}</button>
                <button type="submit" className="dialog-submit" disabled={!valid}>{t.submit}</button>
              </div>
            </div>
          </form>
        )}

        {step === 2 && (
          <Fragment>
            <div className="dialog-head">
              <h3 style={{ visibility: 'hidden' }}>.</h3>
            </div>
            <div className="dialog-body">
              <div className="success">
                <div className="check"><IconCheck size={24} /></div>
                <h4>{t.success_title}</h4>
                <p>{t.success_body}</p>
                <button className="dialog-submit" onClick={onClose}>{t.success_close}</button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
