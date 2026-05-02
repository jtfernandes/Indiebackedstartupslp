// =============================================================================
// LOGO ROSTER — edit to add/remove logos.
// SVG/PNG files live in `frontend/public/logos/{carriers,ecosystem}/`.
// To swap a placeholder for a real file: drop the file in that folder using
// the same filename (or update `src` here).
// Logos render light gray on the black background via `.logo-mono` in index.css.
// =============================================================================

export type Logo = { name: string; src: string; alt?: string };

export const CARRIER_LOGOS: Logo[] = [
  { name: 'Hiscox',                 src: '/logos/carriers/hiscox.svg' },
  { name: 'Fidelidade',             src: '/logos/carriers/fidelidade.svg' },
  { name: 'Generali Tranquilidade', src: '/logos/carriers/generali.svg' },
  { name: 'Allianz',                src: '/logos/carriers/allianz.svg' },
  { name: 'Caravela',               src: '/logos/carriers/caravela.svg' },
  { name: 'Berkley',                src: '/logos/carriers/berkley.svg' },
  { name: 'Innovarisk',             src: '/logos/carriers/innovarisk.svg' },
  { name: 'Metlife',                src: '/logos/carriers/metlife.svg' },
  { name: 'Real Vida',              src: '/logos/carriers/real-vida.svg' },
  // Add additional carrier partners here.
];

export const ECOSYSTEM_LOGOS: Logo[] = [
  { name: 'OSCAR',                  src: '/logos/ecosystem/oscar.svg' },
  { name: 'Leadzai',                src: '/logos/ecosystem/leadzai.svg' },
  { name: 'Lyzer',                  src: '/logos/ecosystem/lyzer.svg' },
  { name: 'MyCareforce',            src: '/logos/ecosystem/mycareforce.svg' },
  { name: 'Bolt',                   src: '/logos/ecosystem/bolt.svg' },
  { name: 'DareData',               src: '/logos/ecosystem/daredata.svg' },
  { name: 'Olisipo Way',            src: '/logos/ecosystem/olisipo-way.svg' },
  { name: 'COREAngels',             src: '/logos/ecosystem/coreangels.svg' },
  { name: 'Unicorn Factory Lisboa', src: '/logos/ecosystem/unicorn-factory.svg' },
];
