import type { Segment } from './i18n';

export interface WaitlistPayload {
  name: string;
  company: string;
  email: string;
  segment: Segment;
}

// When true, the form skips the backend call and simulates success — used
// for static deploys (e.g. GitHub Pages) where there's no FastAPI proxy.
const DEMO_MODE = import.meta.env.VITE_PUBLIC_DEMO === '1';

export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line no-console
    console.info('[demo] would submit:', payload);
    return;
  }

  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let detail: string | undefined;
    try {
      const body = await res.json();
      detail = body?.detail;
    } catch {
      // ignore
    }
    throw new Error(detail || `Request failed (${res.status})`);
  }
}
