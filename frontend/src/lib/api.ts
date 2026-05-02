import type { Segment } from './i18n';

export interface WaitlistPayload {
  name: string;
  company: string;
  email: string;
  segment: Segment;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<void> {
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
