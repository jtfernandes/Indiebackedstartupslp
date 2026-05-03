import { createContext, useContext, useEffect, useState, type ReactNode, createElement } from 'react';

// =============================================================================
// COPY DECK v2 — every visible string lives here, EN + PT side by side.
// Voice principles: candid > clever, agentic without saying so, seamless as
// promise not boast, trustworthy advisor not vendor, specifics over adjectives.
// =============================================================================

export type Lang = 'en' | 'pt';
export type Segment = 'startup' | 'vc' | 'accelerator';

const dict = {
  en: {
    nav: { langEn: 'EN', langPt: 'PT' },

    hero: {
      eyebrow: 'IndieBacked Startups',
      headlineLead: 'Protection, on autopilot',
      headlineAccent: '.',
      sub: 'Tell us about your company once. We pick the right policies from 11 carriers across Iberia, keep them current as you grow, and only call you when something needs your attention.',
      cta: 'Join the waitlist',
      panel: {
        title: 'Your protection',
        subtitle: 'Active stack',
        rows: [
          { name: 'D&O', status: 'active' },
          { name: 'Cyber', status: 'active' },
          { name: 'Tech E&O', status: 'renewing 14 Mar' },
          { name: 'Workers’ comp', status: 'active' },
          { name: 'Group health', status: 'active' },
        ],
        meta: 'Last update: yesterday',
      },
    },

    triggers: {
      title: 'Every milestone changes what you’re exposed to.',
      tiles: [
        { event: 'You closed a round.', consequence: 'Your investors expect D&O on the cap table.', tag: 'D&O' },
        { event: 'You hired your first employee.', consequence: 'Workers’ comp is mandatory and EPL exposure starts.', tag: 'AT + EPL' },
        { event: 'You shipped a paid product.', consequence: 'Tech E&O matters now.', tag: 'Tech E&O' },
        { event: 'An enterprise customer asked for SOC2.', consequence: 'Cyber coverage is the next request.', tag: 'Cyber' },
        { event: 'You opened a Madrid office.', consequence: 'Spanish workers’ comp is a different regulator.', tag: 'AT (ES)' },
        { event: 'Your product uses AI in customer-facing decisions.', consequence: 'EU AI Act creates new exposure most brokers won’t address yet.', tag: 'AI Liability' },
      ],
    },

    autopilot: {
      kicker: 'How autopilot runs',
      title: 'Set it once. Stay covered.',
      sub: 'No quote forms. No insurance vocab. No annual scramble.',
      steps: [
        {
          n: '01',
          title: 'Tell us once.',
          body: '3 minutes of questions. Stage, headcount, customers, geography. The kind of thing your CFO already knows.',
        },
        {
          n: '02',
          title: 'We pick and bind.',
          body: 'We shop 11 carriers across Portugal and Spain, propose a stack that fits your stage, and bind the policies you approve. Often immediately. Worst case, next business day.',
        },
        {
          n: '03',
          title: 'Renewals come back automatically.',
          body: 'At renewal — or when something material changes — we run the numbers and propose: renegotiate, renew, or cancel. Three options, prepared for you. Your call.',
        },
      ],
      closer: 'Done right, you forget we’re there.',
    },

    pricing: {
      kicker: 'Pricing',
      title: 'Priced per product. Quoted in 24h.',
      body: 'We don’t sell bundles. Each policy gets its own quote with a real, line-item price. You see what each piece costs, you decide what to bind, you can drop coverage you don’t need.',
      anchor: {
        cheap: 'Cheapest piece in our market is workers’ comp in Portugal — around',
        cheapNumber: '€150 / year per person',
        cheapTail: '.',
        expensive: 'The most expensive lever is D&O after a complicated round.',
        candid: 'Most pre-seed teams spend less on their full stack than founders expect.',
      },
    },

    stack: {
      kicker: 'The risk stack',
      title: 'Running quietly in the background.',
      sub: 'What’s actually in your stack — without the insurance vocab.',
      rows: [
        { name: 'D&O', desc: 'Personal lawsuits against your board and execs.', trigger: 'You have a board, or your investors require it.' },
        { name: 'Cyber', desc: 'Ransomware, breach disclosure, downtime.', trigger: 'You store customer data or process payments.' },
        { name: 'Tech E&O', desc: 'What your product does — or fails to do — for customers.', trigger: 'You sell software or a service to other businesses.' },
        { name: 'EPL', desc: 'Wrongful termination, harassment, discrimination claims.', trigger: 'You have employees, not just contractors.' },
        { name: 'AT + Saúde', desc: 'Workers’ comp (mandatory in PT/ES) + group health.', trigger: 'You hire your first employee.' },
        { name: 'AI Liability', desc: 'What your AI product does or recommends. New under the EU AI Act.', trigger: 'Your product uses AI in any decision the customer relies on.' },
      ],
      colHeaders: { what: 'What it covers', when: 'When it activates' },
    },

    carriers: {
      title: '11 carriers. One relationship.',
      body: 'We’re not locked to one balance sheet. We shop the market for the right policy at each stage and switch carriers when it makes sense for you. You see one contact, one bill, one renewal calendar.',
    },

    testimonials: [
      {
        quote: 'I’d been chasing my old broker for three weeks for a single certificate. Indie did it immediately.',
        name: 'João Bogalho',
        role: 'Chief People Officer, Leadzai',
      },
      {
        quote: 'We tried to set up D&O ourselves before our Series A. Six weeks of quotes that didn’t make sense. Indie did it immediately.',
        name: 'Filipe Nery',
        role: 'Founder & CEO, Lyzer',
      },
      {
        quote: 'Founders ask us about insurance constantly. Indie is the first answer that’s actually useful.',
        name: 'Milana Dovzhenko',
        role: 'Director, Unicorn Factory Lisboa',
      },
    ],

    partners: {
      kicker: 'For the people backing them, too',
      vc: {
        title: 'Extend autopilot to your portfolio.',
        body: 'Standardized baseline coverage across the book. Preferential terms. Same-week onboarding for new investments. One account team that knows every company.',
        cta: 'Talk to our portfolio team',
      },
      accelerator: {
        title: 'Plug Indie into your program.',
        body: 'Cohort onboarding sessions — async or live. Optional co-branded landing for your program. Alumni keep us as their broker after demo day.',
        cta: 'Bring Indie to your cohort',
      },
    },

    why: {
      kicker: 'Why us',
      title: 'Licensed. Independent. Built here.',
      points: [
        {
          headline: 'Indie Mediação de Seguros, Lda — ASF #420563256.',
          body: 'Regulated. Accountable. On the hook for the advice we give.',
        },
        {
          headline: '11 carrier partners across Portugal and Spain.',
          body: 'We’re not a comparison site and we’re not locked to a single balance sheet. We shop the market and put you with the carrier that fits your stage.',
        },
        {
          headline: 'Backed by Olisipo Way, Caravela, COREAngels.',
          body: 'Founders backing founders.',
        },
      ],
    },

    finalCta: {
      title: 'Tell us about your company.',
      body: '3 minutes of intake. We come back with a stack that fits your stage and a quote that doesn’t waste your time.',
      cta: 'Join the waitlist',
    },

    footer: {
      legal: 'Indie Mediação de Seguros, Lda · ASF #420563256',
      email: 'startups@indie.pt',
    },

    // Waitlist dialog (segment selector + form) — kept compatible with v1.
    waitlist: {
      title: 'Join the waitlist',
      pickSegmentTitle: 'Tell us who you are',
      pickSegmentSub: 'We’ll tailor what comes next.',
      segments: {
        startup: { label: 'I’m a founder or operator', sub: 'VC-backed startup' },
        vc: { label: 'I’m a VC', sub: 'Investing in early-stage companies' },
        accelerator: { label: 'I’m an accelerator or incubator', sub: 'Running programs for founders' },
      },
      labels: {
        name: 'Name',
        company: { startup: 'Company', vc: 'Firm', accelerator: 'Program' },
        email: 'Work email',
      },
      placeholders: {
        name: 'Jane Doe',
        company: { startup: 'Acme, Inc.', vc: 'Acme Ventures', accelerator: 'Acme Accelerator' },
        email: 'jane@acme.com',
      },
      submit: 'Join the waitlist',
      submitting: 'Sending…',
      success: {
        title: 'You’re on the list.',
        body: 'We’ll be in touch shortly. In the meantime, anything urgent — startups@indie.pt.',
      },
      errors: {
        nameRequired: 'Name is required.',
        companyRequired: 'This field is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Enter a valid email.',
        generic: 'Something went wrong. Try again, or email us at startups@indie.pt.',
      },
    },
  },

  pt: {
    nav: { langEn: 'EN', langPt: 'PT' },

    hero: {
      eyebrow: 'IndieBacked Startups',
      headlineLead: 'Proteção, em piloto automático',
      headlineAccent: '.',
      sub: 'Conta-nos sobre a tua empresa uma vez. Escolhemos as apólices certas em 11 seguradoras da Ibéria, mantemo-las atualizadas à medida que cresces, e só te ligamos quando precisa da tua atenção.',
      cta: 'Entrar na waitlist',
      panel: {
        title: 'A tua proteção',
        subtitle: 'Stack ativo',
        rows: [
          { name: 'D&O', status: 'ativo' },
          { name: 'Ciber', status: 'ativo' },
          { name: 'Tech E&O', status: 'a renovar 14 mar' },
          { name: 'AT', status: 'ativo' },
          { name: 'Saúde de grupo', status: 'ativo' },
        ],
        meta: 'Última atualização: ontem',
      },
    },

    triggers: {
      title: 'Cada etapa muda aquilo a que estás exposto.',
      tiles: [
        { event: 'Fechaste uma ronda.', consequence: 'Os investidores esperam D&O no cap table.', tag: 'D&O' },
        { event: 'Contrataste o primeiro funcionário.', consequence: 'A AT é obrigatória e a exposição a EPL começa.', tag: 'AT + EPL' },
        { event: 'Lançaste um produto pago.', consequence: 'Tech E&O passa a importar.', tag: 'Tech E&O' },
        { event: 'Um cliente enterprise pediu SOC2.', consequence: 'A próxima exigência será cobertura ciber.', tag: 'Ciber' },
        { event: 'Abriste em Madrid.', consequence: 'A AT em Espanha tem outro regulador.', tag: 'AT (ES)' },
        { event: 'O teu produto usa IA em decisões para o cliente.', consequence: 'O AI Act cria uma nova exposição que a maioria dos mediadores ainda não trata.', tag: 'AI Liability' },
      ],
    },

    autopilot: {
      kicker: 'Como funciona o piloto automático',
      title: 'Configuras uma vez. Continuas coberto.',
      sub: 'Sem formulários. Sem jargão. Sem corrida anual.',
      steps: [
        {
          n: '01',
          title: 'Conta-nos uma vez.',
          body: '3 minutos de perguntas. Fase, headcount, clientes, geografias. Coisas que o teu CFO já sabe de cor.',
        },
        {
          n: '02',
          title: 'Escolhemos e contratamos.',
          body: 'Comparamos 11 seguradoras em Portugal e Espanha, propomos um stack adequado à tua fase e contratamos as apólices que aprovares. Muitas vezes na hora. Na pior das hipóteses, no dia útil seguinte.',
        },
        {
          n: '03',
          title: 'As renovações voltam automaticamente.',
          body: 'Na renovação — ou quando algo material muda — fazemos as contas e propomos: renegociar, renovar ou cancelar. Três opções, prontas. A decisão é tua.',
        },
      ],
      closer: 'Bem feito, esqueces-te que existimos.',
    },

    pricing: {
      kicker: 'Preços',
      title: 'Preço por produto. Proposta em 24h.',
      body: 'Não vendemos pacotes. Cada apólice tem a sua proposta com um preço discriminado. Vês o que cada peça custa, decides o que contratas, e podes deixar de fora o que não precisas.',
      anchor: {
        cheap: 'A peça mais barata no nosso mercado é a AT em Portugal — à volta de',
        cheapNumber: '€150 / ano por pessoa',
        cheapTail: '.',
        expensive: 'A alavanca mais cara é D&O depois de uma ronda complicada.',
        candid: 'A maioria das equipas pre-seed paga pelo stack completo menos do que esperam.',
      },
    },

    stack: {
      kicker: 'O risk stack',
      title: 'A correr em segundo plano.',
      sub: 'O que está mesmo no teu stack — sem o jargão dos seguros.',
      rows: [
        { name: 'D&O', desc: 'Processos pessoais contra o board e os executivos.', trigger: 'Tens um board, ou os investidores exigem.' },
        { name: 'Ciber', desc: 'Ransomware, divulgação de breach, downtime.', trigger: 'Guardas dados de clientes ou processas pagamentos.' },
        { name: 'Tech E&O', desc: 'O que o teu produto faz — ou deixa de fazer — para os clientes.', trigger: 'Vendes software ou serviço a outras empresas.' },
        { name: 'EPL', desc: 'Despedimento sem justa causa, assédio, discriminação.', trigger: 'Tens colaboradores, não só freelancers.' },
        { name: 'AT + Saúde', desc: 'Acidentes de trabalho (obrigatório em PT/ES) + saúde de grupo.', trigger: 'Contratas o primeiro funcionário.' },
        { name: 'AI Liability', desc: 'O que o teu produto de IA faz ou recomenda. Novo com o AI Act.', trigger: 'O teu produto usa IA em decisões para o cliente.' },
      ],
      colHeaders: { what: 'O que cobre', when: 'Quando ativa' },
    },

    carriers: {
      title: '11 seguradoras. Uma única relação.',
      body: 'Não estamos presos a um único balanço. Vamos ao mercado pela apólice certa em cada fase e mudamos de seguradora quando faz sentido para ti. Vês um contacto, uma fatura, um calendário de renovações.',
    },

    testimonials: [
      {
        quote: 'Andei três semanas atrás do meu antigo mediador por causa de um certificado. A Indie tratou disso na hora.',
        name: 'João Bogalho',
        role: 'Chief People Officer, Leadzai',
      },
      {
        quote: 'Tentámos montar o D&O sozinhos antes da Série A. Seis semanas de propostas que não faziam sentido. A Indie tratou disso na hora.',
        name: 'Filipe Nery',
        role: 'Founder & CEO, Lyzer',
      },
      {
        quote: 'Os fundadores perguntam-nos sobre seguros constantemente. A Indie é a primeira resposta que é mesmo útil.',
        name: 'Milana Dovzhenko',
        role: 'Diretora, Unicorn Factory Lisboa',
      },
    ],

    partners: {
      kicker: 'Feito também para quem os apoia',
      vc: {
        title: 'Estende o piloto automático ao portfólio.',
        body: 'Cobertura base padronizada em todo o portfólio. Condições preferenciais. Onboarding na mesma semana para novas participadas. Uma equipa de conta que conhece todas as empresas.',
        cta: 'Fala com a equipa de portfólio',
      },
      accelerator: {
        title: 'Liga a Indie ao teu programa.',
        body: 'Sessões de onboarding por cohort — assíncronas ou ao vivo. Landing co-branded opcional para o teu programa. Os alumni continuam connosco depois do demo day.',
        cta: 'Traz a Indie ao teu cohort',
      },
    },

    why: {
      kicker: 'Porquê a Indie',
      title: 'Licenciados. Independentes. Construídos aqui.',
      points: [
        {
          headline: 'Indie Mediação de Seguros, Lda — ASF #420563256.',
          body: 'Regulados. Responsáveis. Vinculados ao aconselhamento que damos.',
        },
        {
          headline: '11 seguradoras parceiras em Portugal e Espanha.',
          body: 'Não somos um comparador e não estamos presos a um único balanço. Vamos ao mercado e colocamos-te na seguradora certa para a tua fase.',
        },
        {
          headline: 'Apoiados por Olisipo Way, Caravela, COREAngels.',
          body: 'Fundadores a apoiar fundadores.',
        },
      ],
    },

    finalCta: {
      title: 'Fala-nos da tua empresa.',
      body: '3 minutos de intake. Voltamos com um stack adequado à tua fase e uma proposta que não te faz perder tempo.',
      cta: 'Entrar na waitlist',
    },

    footer: {
      legal: 'Indie Mediação de Seguros, Lda · ASF #420563256',
      email: 'startups@indie.pt',
    },

    waitlist: {
      title: 'Entrar na waitlist',
      pickSegmentTitle: 'Diz-nos quem és',
      pickSegmentSub: 'Adaptamos o que vem a seguir.',
      segments: {
        startup: { label: 'Sou fundador ou operador', sub: 'Startup com investimento de VC' },
        vc: { label: 'Sou VC', sub: 'Investimento em fases iniciais' },
        accelerator: { label: 'Sou aceleradora ou incubadora', sub: 'Programas para fundadores' },
      },
      labels: {
        name: 'Nome',
        company: { startup: 'Empresa', vc: 'Fundo', accelerator: 'Programa' },
        email: 'Email profissional',
      },
      placeholders: {
        name: 'Joana Santos',
        company: { startup: 'Acme, Lda.', vc: 'Acme Ventures', accelerator: 'Acme Accelerator' },
        email: 'joana@acme.com',
      },
      submit: 'Entrar na waitlist',
      submitting: 'A enviar…',
      success: {
        title: 'Estás na lista.',
        body: 'Entramos em contacto em breve. Para algo urgente — startups@indie.pt.',
      },
      errors: {
        nameRequired: 'O nome é obrigatório.',
        companyRequired: 'Este campo é obrigatório.',
        emailRequired: 'O email é obrigatório.',
        emailInvalid: 'Introduz um email válido.',
        generic: 'Algo correu mal. Tenta de novo ou escreve-nos para startups@indie.pt.',
      },
    },
  },
};

export type Dict = typeof dict.en;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = 'indie-lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'pt' ? 'pt' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return createElement(
    I18nContext.Provider,
    { value: { lang, setLang, t: dict[lang] } },
    children
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
