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
      sub: 'Indie is the broker your portfolio uses across Portugal and Spain. Pre-negotiated rates at portfolio scale. Onboarded within 5 business days of your wire. Free for the fund — we earn on standard carrier commission — and we put your own coverage on autopilot too.',
      cta: 'Book a quick intro',
      meta: 'Free for the fund · Preferential rates for portfolio · Iberia',
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
          p: 'Pre-negotiated at portfolio scale across 15 carriers. Better terms than what your founders can negotiate on their own — and we never make pricing claims we can\'t show on a quote.',
        },
        {
          h: 'Onboarded within 5 business days of your wire.',
          p: "Stage-appropriate stack, quoted in 24h, bound the moment they approve. Covered before the first board meeting.",
        },
        {
          h: 'One broker. Portugal and Spain.',
          p: "Hiscox to Fidelidade, Madrid to Lisbon. Your founders see one contact across the network they're actually operating in.",
        },
        {
          h: 'Quarterly benchmark, anonymised.',
          p: 'Coverage rates by stage from our broader Iberia book and carrier conversations. Useful for portfolio reviews. Defensible to your founders.',
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
        { num: '03', h: 'We handle renewals.', p: "At renewal or when something material changes — new round, new hire, new geography — we run the numbers and bring three options back, prepped. No legwork on your side." },
      ],
    },
    benchmark_narrative: {
      eyebrow: 'Quarterly benchmark',
      h2: 'Useful. Anonymous. Defensible.',
      p1: 'Once a quarter, we send a benchmark cut drawn from our Iberia book and carrier conversations. Coverage rates by stage. Median spend per company. Where the gaps usually open. No company names. No portfolio audits.',
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
      cta: 'See the benchmark report',
    },
    panel: {
      title: 'Q1 Coverage benchmark',
      subtitle: 'D&O take-up by stage',
      book: 'Iberia book',
      chip: 'Illustrative',
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
      sub: 'A Indie é a corretora que o teu portfolio usa em Portugal e Espanha. Condições pré-negociadas à escala do portfolio. Onboarding em 5 dias úteis a contar da tua transferência. Grátis para o fundo — ganhamos na comissão de corretor, padrão — e pomos os seguros do próprio fundo em piloto automático também.',
      cta: 'Marcar uma conversa rápida',
      meta: 'Grátis para o fundo · Condições preferenciais para o portfolio · Ibéria',
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
          p: 'Pré-negociadas à escala do portfolio em 15 seguradoras. Melhores condições do que os teus founders conseguem sozinhos — e nunca prometemos preços que não consigamos pôr numa cotação.',
        },
        {
          h: 'Onboarding em 5 dias úteis a contar da tua transferência.',
          p: 'Stack adequado ao estágio, cotado em 24h, contratado assim que aprovam. Cobertos antes do primeiro board meeting.',
        },
        {
          h: 'Uma corretora. Portugal e Espanha.',
          p: 'Da Hiscox à Fidelidade, de Madrid a Lisboa. Os teus founders veem um contacto único na rede onde estão mesmo a operar.',
        },
        {
          h: 'Benchmark trimestral, anonimizado.',
          p: 'Taxas de cobertura por estágio, a partir da nossa carteira ibérica e de conversas com seguradoras. Úteis para portfolio reviews. Defensáveis perante os teus founders.',
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
        { num: '03', h: 'Tratamos das renovações.', p: 'Na renovação, ou quando muda algo importante — nova ronda, novo hire, nova geografia — fazemos as contas e trazemos três opções preparadas. Sem trabalho operacional do teu lado.' },
      ],
    },
    benchmark_narrative: {
      eyebrow: 'Benchmark trimestral',
      h2: 'Útil. Anónimo. Defensável.',
      p1: 'Uma vez por trimestre, enviamos-te um corte de benchmark a partir da nossa carteira ibérica e de conversas com seguradoras. Taxas de cobertura por estágio. Gasto mediano por empresa. Onde costumam abrir-se os buracos. Sem nomes de empresas. Sem auditorias ao portfolio.',
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
      cta: 'Ver o benchmark',
    },
    panel: {
      title: 'Benchmark de cobertura T1',
      subtitle: 'Adesão a D&O por estágio',
      book: 'Carteira da Ibéria',
      chip: 'Ilustrativo',
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
      h1: 'Real coverage. Not a discount code.',
      sub: "Indie replaces the generic group-discount link with real coverage your founders actually use. Free for the program — we earn on standard carrier commission. Preferential pricing for the cohort and alumni. We onboard the whole cohort in one session — and your program's own insurance comes along for the ride.",
      cta: 'Book a cohort session',
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
          p: "D&O, Cyber, Tech E&O, Workers' comp, Group health. Stage-appropriate stacks for pre-seed teams that actually need them — not a 10% off link your founders never click.",
        },
        {
          h: 'One cohort, one session.',
          p: "We onboard the whole cohort together. Every founder leaves with a stack quoted in 24h. You don't chase, you don't track, you don't follow up.",
        },
        {
          h: 'Alumni stay with us after demo day.',
          p: 'Renewals go to the founder; you don\'t get the email. Your program is the front door, not the lifetime account manager.',
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
        { num: '03', h: 'Alumni stay on autopilot.', p: 'Renewals go to the founder; you don\'t get the email. New rounds, new hires, new geographies — we re-run the stack. You get the credit; we keep the relationship.' },
      ],
    },
    proof: {
      eyebrow: 'The proof point',
      h2: 'The VCs investing in your alumni already use us.',
      p: "Indie is already the broker for companies funded by Olisipo Way, Caravela, COREAngels and others. When your alumni raise, their new investors already know us — one broker, one relationship across the network they're about to join. No handover, no re-onboarding.",
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
      body: "Quick intro. We'll show you what a cohort onboarding session looks like, walk through how the cohort-to-alumni handoff works, and answer whatever you want to ask.",
      cta: 'Book a cohort session',
    },
    panel: {
      title: "Cohort — Spring '26",
      count_companies: '6 companies',
      count_bound: '5 stacks bound',
      chip: 'Illustrative',
      status: { live: 'Stack live', review: 'In review', queued: 'Onboarding' },
      rows: [
        { num: '01', name: 'Company 01', meta: "4 people · D&O + Cyber + Workers' comp", status: 'live' },
        { num: '02', name: 'Company 02', meta: "2 people · Workers' comp + Tech E&O", status: 'live' },
        { num: '03', name: 'Company 03', meta: '3 people · Full stack', status: 'live' },
        { num: '04', name: 'Company 04', meta: '5 people · AI Liability added', status: 'review' },
        { num: '05', name: 'Company 05', meta: '6 people · ES expansion', status: 'live' },
        { num: '06', name: 'Company 06', meta: 'Onboarding', status: 'queued' },
      ],
      foot: 'Alumni stay on after demo day.',
    },
  },

  pt: {
    nav: NAV_PT,
    hero: {
      crumb: '← indiebackedstartups.com',
      eyebrow: 'Para aceleradoras',
      h1: 'Cobertura a sério. Não um código de desconto.',
      sub: 'A Indie substitui o link de desconto genérico por cobertura a sério que os teus founders usam mesmo. Grátis para o programa — ganhamos na comissão de corretor, padrão. Preço preferencial para a cohort e para os alumni. Fazemos o onboarding da cohort toda numa sessão — e os seguros do próprio programa vão junto.',
      cta: 'Marcar sessão de cohort',
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
          p: 'As renovações vão para o founder; tu não recebes o email. O teu programa é a porta de entrada, não o gestor de conta vitalício.',
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
        { num: '03', h: 'Os alumni ficam em piloto automático.', p: 'As renovações vão para o founder; tu não recebes o email. Novas rondas, novos hires, novas geografias — voltamos a correr o stack. O crédito é teu; a relação fica connosco.' },
      ],
    },
    proof: {
      eyebrow: 'A prova',
      h2: 'Os VCs que investem nos teus alumni já nos usam.',
      p: 'A Indie já é a corretora de empresas financiadas pela Olisipo Way, Caravela, COREAngels e outras. Quando os teus alumni levantam ronda, os novos investidores já nos conhecem — uma corretora, uma relação na rede em que vão entrar. Sem passagem de testemunho, sem novo onboarding.',
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
      body: 'Uma conversa rápida. Mostramos-te como é uma sessão de onboarding de cohort, explicamos como funciona a passagem da cohort para os alumni, e respondemos ao que quiseres perguntar.',
      cta: 'Marcar sessão de cohort',
    },
    panel: {
      title: "Cohort — Primavera '26",
      count_companies: '6 empresas',
      count_bound: '5 stacks contratados',
      chip: 'Ilustrativo',
      status: { live: 'Stack em curso', review: 'Em revisão', queued: 'Onboarding' },
      rows: [
        { num: '01', name: 'Empresa 01', meta: '4 pessoas · D&O + Cyber + AT', status: 'live' },
        { num: '02', name: 'Empresa 02', meta: '2 pessoas · AT + Tech E&O', status: 'live' },
        { num: '03', name: 'Empresa 03', meta: '3 pessoas · Stack completo', status: 'live' },
        { num: '04', name: 'Empresa 04', meta: '5 pessoas · AI Liability adicionado', status: 'review' },
        { num: '05', name: 'Empresa 05', meta: '6 pessoas · Expansão para ES', status: 'live' },
        { num: '06', name: 'Empresa 06', meta: 'Em onboarding', status: 'queued' },
      ],
      foot: 'Os alumni ficam connosco depois do demo day.',
    },
  },
};
