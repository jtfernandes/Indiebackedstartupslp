import type { Lang } from './content';

export interface NavStrings {
  cross_to_accelerators: string;
  cross_to_vcs: string;
  waitlist_link: string;
}

export interface CaseItem { h: string; p: string }
export interface StepItem { num: string; h: string; p: string }
export interface OwnStackItem { name: string; what: string; tag: string }

export interface BenchmarkPanelStrings {
  title: string;
  subtitle: string;
  book: string;
  chip: string;
  foot_lead: string;
  foot_emph: string;
  rows: { stage: string; val: number }[];
}

export type CohortStatus = 'live' | 'review' | 'queued';

export interface CohortPanelStrings {
  title: string;
  count_companies: string;
  count_bound: string;
  chip: string;
  status: Record<CohortStatus, string>;
  rows: { num: string; name: string; meta: string; status: CohortStatus }[];
  foot: string;
}

export interface PitchHero {
  crumb: string;
  eyebrow: string;
  h1: string;
  sub: string;
  cta: string;
  meta: string;
}

export interface PitchSection { eyebrow: string; h2: string; sub: string }

export interface VCsContent {
  nav: NavStrings;
  hero: PitchHero;
  cases: { sec: PitchSection; items: CaseItem[] };
  run: { sec: PitchSection; steps: StepItem[] };
  benchmark_narrative: {
    eyebrow: string;
    h2: string;
    p1: string;
    p2_lead: string;
    p2_em: string;
    p2_rest: string;
    p3: string;
  };
  own: {
    eyebrow: string;
    h2: string;
    p: string;
    stack: OwnStackItem[];
  };
  final: { h: string; body: string; cta: string };
  panel: BenchmarkPanelStrings;
}

export interface AcceleratorsContent {
  nav: NavStrings;
  hero: PitchHero;
  cases: { sec: PitchSection; items: CaseItem[] };
  run: { sec: PitchSection; steps: StepItem[] };
  proof: {
    eyebrow: string;
    h2: string;
    p: string;
    logos: string[];
    logos_extra: string;
  };
  own: {
    eyebrow: string;
    h2: string;
    p: string;
    stack: OwnStackItem[];
  };
  final: { h: string; body: string; cta: string };
  panel: CohortPanelStrings;
}

const NAV_EN: NavStrings = {
  cross_to_accelerators: 'For accelerators →',
  cross_to_vcs: 'For VCs →',
  waitlist_link: 'Founder waitlist',
};

const NAV_PT: NavStrings = {
  cross_to_accelerators: 'Para aceleradoras →',
  cross_to_vcs: 'Para VCs →',
  waitlist_link: 'Lista de founders',
};

export const VCS_CONTENT: Record<Lang, VCsContent> = {
  en: {
    nav: NAV_EN,
    hero: {
      crumb: '← indiebackedstartups.com',
      eyebrow: 'For VCs',
      h1: 'We back the founders you back.',
      sub: 'Indie is the broker your portfolio uses across Portugal and Spain. Pre-negotiated rates at portfolio scale. Same-week onboarding for new investments. Free for the fund — and we put your own coverage on autopilot too.',
      cta: 'Set up a quick intro',
      meta: 'Free for the fund · ≈10–20% lower for portfolio · Iberia',
    },
    cases: {
      sec: {
        eyebrow: 'What you get',
        h2: 'One broker across your portfolio. Free for the fund.',
        sub: "Four things you don't get from a generic perks page.",
      },
      items: [
        {
          h: 'Preferential pricing across the book.',
          p: 'Pre-negotiated at portfolio scale across 15 carriers. Typically 10–20% lower than what your founders find on their own.',
        },
        {
          h: 'Same-week onboarding for new investments.',
          p: "We onboard the company inside a week of your wire hitting. They're covered before their first board meeting.",
        },
        {
          h: 'One broker. Portugal and Spain.',
          p: "Hiscox to Fidelidade, Madrid to Lisbon. Your founders see one contact across the network they're actually operating in.",
        },
        {
          h: 'Quarterly benchmark from our broader book.',
          p: 'Anonymised coverage stats by stage from across our entire portfolio. Useful for portfolio reviews. Defensible to your founders.',
        },
      ],
    },
    run: {
      sec: {
        eyebrow: 'How it runs for you',
        h2: 'You introduce. We handle the rest.',
        sub: 'Your founders deal with us. You get the visibility, not the inbox.',
      },
      steps: [
        { num: '01', h: 'You introduce.', p: 'Forward an intro email or drop us in a Slack channel. We take it from there. 3 minutes of intake from the founder; the kind of thing the CFO already knows.' },
        { num: '02', h: 'We pick and bind.', p: 'Stage-appropriate stack, preferential pricing already loaded. They review, they sign, we file with the carrier. Often immediately; worst case, next business day.' },
        { num: '03', h: 'We handle renewals.', p: "At renewal or when something material changes — new round, new hire, new geography — we run the numbers and bring three options back. You don't have to manage it." },
      ],
    },
    benchmark_narrative: {
      eyebrow: 'Quarterly benchmark',
      h2: 'Useful. Anonymous. Defensible.',
      p1: 'Once a quarter, we send you a benchmark cut of our broader Iberia book. Coverage rates by stage. Median spend per company. Where the gaps usually open. No company names. No portfolio audits.',
      p2_lead: 'You can hand it to a founder and say ',
      p2_em: '“here’s where companies at your stage typically sit.”',
      p2_rest: ' That’s the value — not telling you which of your companies are uncovered.',
      p3: "We never share who's on the book with anyone outside the broker. Your founders' coverage is between them and us.",
    },
    own: {
      eyebrow: "And while we're at it",
      h2: "Put your fund's own stack on autopilot.",
      p: 'Funds carry their own exposure. D&O on the GPs. Cyber on the LP data and deal flow. PI on the management company. The same broker that runs your portfolio runs your fund. Two flywheels, one relationship, one calendar.',
      stack: [
        { name: 'D&O', what: 'For the GPs and the management company.', tag: 'Required' },
        { name: 'Cyber', what: 'LP data, deal flow, dataroom exposure.', tag: 'Recommended' },
        { name: 'PI', what: 'Professional indemnity on the management company.', tag: 'Recommended' },
      ],
    },
    final: {
      h: 'Want a look?',
      body: "Quick intro on a call. We'll walk you through the benchmark report, show how onboarding works for your next investment, and answer whatever you want to ask.",
      cta: 'Set up a quick intro',
    },
    panel: {
      title: 'Q1 Coverage benchmark',
      subtitle: 'D&O take-up by stage',
      book: 'Iberia book',
      chip: 'Anonymised',
      foot_lead: 'Sent quarterly.',
      foot_emph: 'No company names.',
      rows: [
        { stage: 'Pre-seed', val: 38 },
        { stage: 'Seed', val: 71 },
        { stage: 'Series A', val: 94 },
        { stage: 'Series B', val: 98 },
      ],
    },
  },

  pt: {
    nav: NAV_PT,
    hero: {
      crumb: '← indiebackedstartups.com',
      eyebrow: 'Para VCs',
      h1: 'Apoiamos os founders que tu apoias.',
      sub: 'A Indie é a corretora que o teu portfolio usa em Portugal e Espanha. Condições pré-negociadas à escala do portfolio. Onboarding na mesma semana para novos investimentos. Grátis para o fundo — e pomos os seguros do próprio fundo em piloto automático também.',
      cta: 'Marcar uma conversa rápida',
      meta: 'Grátis para o fundo · ≈10–20% mais barato para o portfolio · Ibéria',
    },
    cases: {
      sec: {
        eyebrow: 'O que recebes',
        h2: 'Uma corretora para todo o portfolio. Grátis para o fundo.',
        sub: 'Quatro coisas que uma página de perks genérica não te dá.',
      },
      items: [
        {
          h: 'Condições preferenciais em todo o portfolio.',
          p: 'Pré-negociadas à escala do portfolio em 15 seguradoras. Tipicamente 10–20% mais baratas do que os teus founders conseguem sozinhos.',
        },
        {
          h: 'Onboarding na mesma semana para novos investimentos.',
          p: 'Fazemos o onboarding da empresa numa semana, a contar da tua transferência. Ficam cobertos antes do primeiro board meeting.',
        },
        {
          h: 'Uma corretora. Portugal e Espanha.',
          p: 'Da Hiscox à Fidelidade, de Madrid a Lisboa. Os teus founders veem um contacto único na rede onde estão mesmo a operar.',
        },
        {
          h: 'Benchmark trimestral da nossa carteira.',
          p: 'Estatísticas de cobertura anonimizadas, por estágio, do nosso portfolio. Úteis para portfolio reviews. Defensáveis perante os teus founders.',
        },
      ],
    },
    run: {
      sec: {
        eyebrow: 'Como funciona para ti',
        h2: 'Tu apresentas. Nós tratamos do resto.',
        sub: 'Os teus founders falam connosco. Tu tens a visibilidade, não a inbox.',
      },
      steps: [
        { num: '01', h: 'Tu apresentas.', p: 'Reencaminhas um email de intro ou pões-nos num canal de Slack. Daí em diante somos nós. 3 minutos de intake do founder — o que o CFO já sabe de cabeça.' },
        { num: '02', h: 'Escolhemos e contratamos.', p: 'Stack adequado ao estágio, com preço preferencial já aplicado. Eles revêem, assinam, e nós tratamos com a seguradora. Quase sempre na hora; no pior caso, no dia útil seguinte.' },
        { num: '03', h: 'Tratamos das renovações.', p: 'Na renovação, ou quando muda algo importante — nova ronda, novo hire, nova geografia — fazemos as contas e trazemos três opções. Não precisas de gerir nada.' },
      ],
    },
    benchmark_narrative: {
      eyebrow: 'Benchmark trimestral',
      h2: 'Útil. Anónimo. Defensável.',
      p1: 'Uma vez por trimestre, enviamos-te um corte de benchmark da nossa carteira na Ibéria. Taxas de cobertura por estágio. Gasto mediano por empresa. Onde costumam abrir-se os buracos. Sem nomes de empresas. Sem auditorias ao portfolio.',
      p2_lead: 'Podes passar a um founder e dizer ',
      p2_em: '“é aqui que as empresas no teu estágio costumam estar.”',
      p2_rest: ' O valor está aí — não em dizer-te quais das tuas empresas estão descobertas.',
      p3: 'Nunca partilhamos quem está na nossa carteira com ninguém fora da corretora. A cobertura dos teus founders é entre eles e nós.',
    },
    own: {
      eyebrow: 'E já agora',
      h2: 'Põe o stack do próprio fundo em piloto automático.',
      p: 'Os fundos têm a sua própria exposição. D&O nos GPs. Cyber nos dados de LPs e no deal flow. PI na sociedade gestora. A mesma corretora que cuida do portfolio cuida do fundo. Dois flywheels, uma relação, um calendário.',
      stack: [
        { name: 'D&O', what: 'Para os GPs e a sociedade gestora.', tag: 'Obrigatório' },
        { name: 'Cyber', what: 'Dados de LPs, deal flow, dataroom.', tag: 'Recomendado' },
        { name: 'PI', what: 'Responsabilidade civil profissional na sociedade gestora.', tag: 'Recomendado' },
      ],
    },
    final: {
      h: 'Queres ver?',
      body: 'Uma conversa rápida. Mostramos-te o relatório de benchmark, como funciona o onboarding para o teu próximo investimento, e respondemos ao que quiseres perguntar.',
      cta: 'Marcar uma conversa rápida',
    },
    panel: {
      title: 'Benchmark de cobertura T1',
      subtitle: 'Adesão a D&O por estágio',
      book: 'Carteira da Ibéria',
      chip: 'Anonimizado',
      foot_lead: 'Enviado trimestralmente.',
      foot_emph: 'Sem nomes de empresas.',
      rows: [
        { stage: 'Pre-seed', val: 38 },
        { stage: 'Seed', val: 71 },
        { stage: 'Series A', val: 94 },
        { stage: 'Series B', val: 98 },
      ],
    },
  },
};

export const ACC_CONTENT: Record<Lang, AcceleratorsContent> = {
  en: {
    nav: NAV_EN,
    hero: {
      crumb: '← indiebackedstartups.com',
      eyebrow: 'For accelerators',
      h1: 'Stop sending your cohort a perks PDF.',
      sub: "Indie replaces the generic group-discount link with real coverage your founders actually use. Free for the program. Preferential pricing for the cohort and alumni. We onboard the whole cohort in one session — and your program's own insurance comes along for the ride.",
      cta: 'Set up a quick intro',
      meta: 'Free for the program · Cohort + alumni pricing',
    },
    cases: {
      sec: {
        eyebrow: 'What changes',
        h2: 'The perks-PDF replaced with something founders use.',
        sub: "Four things the discount-code approach doesn't do.",
      },
      items: [
        {
          h: 'Real coverage, not a discount code.',
          p: 'D&O, Cyber, Tech E&O, AT, Saúde. Stage-appropriate stacks for pre-seed teams that actually need them — not a 10% off link your founders never click.',
        },
        {
          h: 'One cohort, one session.',
          p: "We onboard the whole cohort together. Every founder leaves with a stack quoted in 24h. You don't chase, you don't track, you don't follow up.",
        },
        {
          h: 'Alumni stay with us after demo day.',
          p: 'Renewals come back automatically. Your program is the front door, not the lifetime account manager.',
        },
        {
          h: 'Optional co-branded landing.',
          p: 'Cohort intake on a page that reads like your program. Same broker behind it. We handle the rest.',
        },
      ],
    },
    run: {
      sec: {
        eyebrow: 'How it runs for your program',
        h2: 'One session. The rest is ours.',
        sub: "Your team doesn't manage the relationship after onboarding. We do.",
      },
      steps: [
        { num: '01', h: 'One session with the cohort.', p: 'We come in for one hour. 3 minutes of intake per founder, live. Every company in the room leaves with a stack proposal in flight.' },
        { num: '02', h: 'Each company gets a quote.', p: 'Stage-appropriate stack. Preferential pricing locked at cohort scale. Quoted in 24h. Bound the moment they approve.' },
        { num: '03', h: 'Alumni stay on autopilot.', p: 'Renewals come back to them, not you. New rounds, new hires, new geographies — we re-run the stack. You get the credit; we keep the relationship.' },
      ],
    },
    proof: {
      eyebrow: 'The proof point',
      h2: 'The VCs investing in your alumni already use us.',
      p: "Indie is on the cap table of companies funded by Olisipo Way, Caravela, COREAngels and others. When your founders raise, their new investors already know who we are. One broker, one relationship across the network they're about to join — no handover, no re-onboarding.",
      logos: ['Olisipo Way', 'Caravela', 'COREAngels'],
      logos_extra: '+ funds across Iberia',
    },
    own: {
      eyebrow: "And while we're at it",
      h2: "Put your program's own stack on autopilot.",
      p: 'Programs carry their own exposure: D&O on the management entity, cyber on application data, PI on the advice your mentors give. We put your own coverage on the same autopilot we run for the cohort. Free, same broker, no extra calls.',
      stack: [
        { name: 'D&O', what: 'On the management entity and the program directors.', tag: 'Required' },
        { name: 'Cyber', what: 'Application data, alumni database, mentor portal.', tag: 'Recommended' },
        { name: 'PI', what: 'Professional indemnity on the advice your mentors give.', tag: 'Recommended' },
      ],
    },
    final: {
      h: 'Plug us in?',
      body: "Quick intro. We'll show you what a cohort onboarding session looks like, share what alumni retention has looked like for us so far, and answer whatever you want to ask.",
      cta: 'Set up a quick intro',
    },
    panel: {
      title: "Cohort — Spring '26",
      count_companies: '6 companies',
      count_bound: '5 stacks bound',
      chip: 'Live',
      status: { live: 'Stack live', review: 'In review', queued: 'Onboarding' },
      rows: [
        { num: '01', name: 'Faro Robotics', meta: '4 people · D&O + Cyber + AT', status: 'live' },
        { num: '02', name: 'Linha', meta: '2 people · AT + Tech E&O', status: 'live' },
        { num: '03', name: 'Pulso', meta: '3 people · Full stack', status: 'live' },
        { num: '04', name: 'Camões AI', meta: '5 people · AI Liability added', status: 'review' },
        { num: '05', name: 'Routeful', meta: '6 people · ES expansion', status: 'live' },
        { num: '06', name: 'Nuvem', meta: 'Onboarding', status: 'queued' },
      ],
      foot: 'Alumni stay on after demo day.',
    },
  },

  pt: {
    nav: NAV_PT,
    hero: {
      crumb: '← indiebackedstartups.com',
      eyebrow: 'Para aceleradoras',
      h1: 'Para de mandar um PDF de perks à tua cohort.',
      sub: 'A Indie substitui o link de desconto genérico por cobertura a sério que os teus founders usam mesmo. Grátis para o programa. Preço preferencial para a cohort e para os alumni. Fazemos o onboarding da cohort toda numa sessão — e os seguros do próprio programa vão junto.',
      cta: 'Marcar uma conversa rápida',
      meta: 'Grátis para o programa · Preço para cohort e alumni',
    },
    cases: {
      sec: {
        eyebrow: 'O que muda',
        h2: 'O PDF de perks substituído por algo que os founders usam.',
        sub: 'Quatro coisas que a abordagem do código de desconto não faz.',
      },
      items: [
        {
          h: 'Cobertura a sério, não um código de desconto.',
          p: 'D&O, Cyber, Tech E&O, AT, Saúde. Stacks adequados ao estágio, para equipas pre-seed que precisam mesmo deles — não um link de 10% off que os teus founders nunca clicam.',
        },
        {
          h: 'Uma cohort, uma sessão.',
          p: 'Fazemos o onboarding da cohort toda em conjunto. Cada founder sai com um stack cotado em 24h. Não persegues, não acompanhas, não fazes follow-up.',
        },
        {
          h: 'Os alumni ficam connosco depois do demo day.',
          p: 'As renovações voltam sozinhas. O teu programa é a porta de entrada, não o gestor de conta vitalício.',
        },
        {
          h: 'Landing co-branded opcional.',
          p: 'Inscrição da cohort numa página com a cara do teu programa. A mesma corretora por trás. Nós tratamos do resto.',
        },
      ],
    },
    run: {
      sec: {
        eyebrow: 'Como funciona para o teu programa',
        h2: 'Uma sessão. O resto é nosso.',
        sub: 'A tua equipa não gere a relação depois do onboarding. Nós geramos.',
      },
      steps: [
        { num: '01', h: 'Uma sessão com a cohort.', p: 'Aparecemos durante uma hora. 3 minutos de intake por founder, ao vivo. Cada empresa na sala sai com uma proposta de stack a caminho.' },
        { num: '02', h: 'Cada empresa recebe uma cotação.', p: 'Stack adequado ao estágio. Preço preferencial fechado à escala da cohort. Cotação em 24h. Contratada assim que aprovam.' },
        { num: '03', h: 'Os alumni ficam em piloto automático.', p: 'As renovações voltam para eles, não para ti. Novas rondas, novos hires, novas geografias — voltamos a correr o stack. O crédito é teu; a relação fica connosco.' },
      ],
    },
    proof: {
      eyebrow: 'A prova',
      h2: 'Os VCs que investem nos teus alumni já nos usam.',
      p: 'A Indie está na cap table de empresas financiadas pela Olisipo Way, Caravela, COREAngels e outras. Quando os teus founders levantam ronda, os novos investidores já sabem quem somos. Uma corretora, uma relação na rede em que vão entrar — sem passagem de testemunho, sem novo onboarding.',
      logos: ['Olisipo Way', 'Caravela', 'COREAngels'],
      logos_extra: '+ fundos pela Ibéria',
    },
    own: {
      eyebrow: 'E já agora',
      h2: 'Põe o stack do teu programa em piloto automático.',
      p: 'Os programas têm a sua própria exposição: D&O na entidade gestora, cyber nos dados das candidaturas, PI nos conselhos que os mentores dão. Pomos os teus seguros no mesmo piloto automático que corremos para a cohort. Grátis, mesma corretora, sem chamadas extra.',
      stack: [
        { name: 'D&O', what: 'Na entidade gestora e nos diretores do programa.', tag: 'Obrigatório' },
        { name: 'Cyber', what: 'Dados de candidaturas, base de alumni, portal de mentores.', tag: 'Recomendado' },
        { name: 'PI', what: 'Responsabilidade civil profissional nos conselhos dos mentores.', tag: 'Recomendado' },
      ],
    },
    final: {
      h: 'Pôr-nos a trabalhar?',
      body: 'Uma conversa rápida. Mostramos-te como é uma sessão de onboarding de cohort, partilhamos o que tem sido a retenção dos alumni até agora, e respondemos ao que quiseres perguntar.',
      cta: 'Marcar uma conversa rápida',
    },
    panel: {
      title: "Cohort — Primavera '26",
      count_companies: '6 empresas',
      count_bound: '5 stacks contratados',
      chip: 'Em curso',
      status: { live: 'Stack em curso', review: 'Em revisão', queued: 'Onboarding' },
      rows: [
        { num: '01', name: 'Faro Robotics', meta: '4 pessoas · D&O + Cyber + AT', status: 'live' },
        { num: '02', name: 'Linha', meta: '2 pessoas · AT + Tech E&O', status: 'live' },
        { num: '03', name: 'Pulso', meta: '3 pessoas · Stack completo', status: 'live' },
        { num: '04', name: 'Camões AI', meta: '5 pessoas · AI Liability adicionado', status: 'review' },
        { num: '05', name: 'Routeful', meta: '6 pessoas · Expansão para ES', status: 'live' },
        { num: '06', name: 'Nuvem', meta: 'Em onboarding', status: 'queued' },
      ],
      foot: 'Os alumni ficam connosco depois do demo day.',
    },
  },
};
