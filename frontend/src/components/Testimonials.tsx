import { useI18n } from '@/lib/i18n';

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-10 md:grid-cols-3">
          {t.testimonials.map((q) => (
            <li key={q.name} className="flex flex-col">
              <span className="mb-4 text-5xl leading-none text-indie-yellow" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="flex-1 text-base leading-relaxed text-white/85 sm:text-lg">
                {q.quote}
              </blockquote>
              <footer className="mt-6 text-sm">
                <span className="block font-bold text-white">{q.name}</span>
                <span className="block text-white/55">{q.role}</span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
