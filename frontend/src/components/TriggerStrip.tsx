import { useI18n } from '@/lib/i18n';

export function TriggerStrip() {
  const { t } = useI18n();

  return (
    <section className="border-b border-white/10 px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 max-w-3xl text-3xl font-bold leading-tight tracking-tightish text-white sm:text-4xl lg:text-5xl">
          {t.triggers.title}
        </h2>
        <ul className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.triggers.tiles.map((tile) => (
            <li key={tile.event} className="bg-indie-black p-6 sm:p-7">
              <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-indie-yellow">
                {tile.tag}
              </span>
              <p className="mb-2 text-base font-bold text-white">{tile.event}</p>
              <p className="text-sm leading-relaxed text-white/65">{tile.consequence}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
