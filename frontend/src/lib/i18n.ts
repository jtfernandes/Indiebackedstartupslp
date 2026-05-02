import { createContext, useContext, useEffect, useState, type ReactNode, createElement } from 'react';

// =============================================================================
// COPY DECK — edit this file to change anything visible on the page.
// All strings shipped to users live here. EN is the default; PT mirrors it.
// =============================================================================
//
// Hero headline alternates (not shipped — keep here for reference):
//   alt: "The broker your startup didn't know it needed."
//   alt: "Coverage that scales with your cap table."
//
// =============================================================================

export type Lang = 'en' | 'pt';

const dict = {
  en: {
    nav: {
      langEn: 'EN',
      langPt: 'PT',
    },
    hero: {
      eyebrow: 'IndieBacked Startups',
      headlineLead: 'Insurance, on autopilot',
      headlineAccent: '.',
      sub: 'A licensed broker that picks the right coverage from 11 carriers across Portugal and Spain — and adjusts as your startup grows.',
      cta: 'Join the waitlist',
    },
    problem: {
      kicker: 'The problem',
      title: "Insurance wasn't built for startups.",
      points: [
        'Traditional brokers treat startups like SMEs — wrong products, wrong stage, wrong price.',
        'Founders waste hours figuring out what they actually need, then more hours comparing quotes.',
        'One bad gap — a missing D&O, an uncovered cyber claim — can kill a round or a contract.',
      ],
    },
    startups: {
      kicker: 'For startups',
      title: 'One relationship. Every policy. Every stage.',
      body: "Tell us about your company once. We figure out what you need now, get it from the right carrier, and update it as you raise, hire, and ship. No quote forms. No insurance vocab. One contact for everything.",
      productsTitle: 'What we typically cover',
      products: [
        { name: 'D&O', desc: 'Director & Officer liability — table stakes once you have a board.' },
        { name: 'Cyber', desc: 'Breach response, business interruption, ransom.' },
        { name: 'Tech E&O', desc: 'Professional liability for what your product does (or fails to do).' },
        { name: 'EPL', desc: 'Employment practices — claims from current and former employees.' },
        { name: 'Health & Benefits', desc: 'Group health for the team, structured for fast hiring.' },
        { name: 'AI Liability', desc: "New exposure under the EU AI Act. Most brokers won't address it. We will." },
      ],
      cta: 'Join the waitlist',
    },
    vcs: {
      kicker: 'For VCs',
      title: 'A portfolio insurance partner.',
      body: 'Standardized baseline coverage across the book, preferential terms, fast onboarding for new investments, and one account team that knows every company. De-risk the portfolio without doing the work — and stop fielding the same insurance question from every founder.',
      bullets: [
        'Pre-negotiated terms across D&O, Cyber, Tech E&O.',
        'Same-week onboarding for new portfolio companies.',
        'Quarterly portfolio review — gaps, renewals, claims.',
      ],
      cta: 'Join the waitlist',
    },
    accelerators: {
      kicker: 'For accelerators & incubators',
      title: 'A turnkey insurance partner for your cohorts.',
      body: 'Onboarding flows tailored to early-stage companies, co-branded if useful, and a relationship that continues serving founders after the program ends. Stop sending founders a generic perks PDF.',
      bullets: [
        'Cohort onboarding sessions — async or live.',
        'Optional co-branded landing for your program.',
        'Same broker still serving alumni five years in.',
      ],
      cta: 'Join the waitlist',
    },
    why: {
      kicker: 'Why Indie',
      title: 'Licensed. Independent. Built here.',
      points: [
        {
          title: 'A real broker, not a comparison site.',
          body: 'Indie Mediação de Seguros, Lda — ASF #420563256. Regulated, accountable, on the hook for the advice we give.',
        },
        {
          title: '11 carrier partners across Iberia.',
          body: "We're not locked to one balance sheet. We shop the market and put you with the right carrier for your stage.",
        },
        {
          title: 'Built in SW Europe. Built for SW Europe.',
          body: 'Portuguese and Spanish regulatory reality, not a US playbook bolted on.',
        },
        {
          title: 'Backed by founders, for founders.',
          body: 'Olisipo Way · Caravela · COREAngels.',
        },
      ],
    },
    logos: {
      carriers: 'Carriers we work with',
      ecosystem: 'Founders, investors and partners we work with',
    },
    footer: {
      legal: 'Indie Mediação de Seguros, Lda · ASF #420563256',
      email: 'startups@indie.pt',
    },
    waitlist: {
      title: 'Join the waitlist',
      pickSegmentTitle: 'Tell us who you are',
      pickSegmentSub: "We'll tailor what comes next.",
      segments: {
        startup: { label: "I'm a founder or operator", sub: 'VC-backed startup' },
        vc: { label: "I'm a VC", sub: 'Investing in early-stage companies' },
        accelerator: { label: "I'm an accelerator or incubator", sub: 'Running programs for founders' },
      },
      labels: {
        name: 'Name',
        company: {
          startup: 'Company',
          vc: 'Firm',
          accelerator: 'Program',
        },
        email: 'Work email',
      },
      placeholders: {
        name: 'Jane Doe',
        company: {
          startup: 'Acme, Inc.',
          vc: 'Acme Ventures',
          accelerator: 'Acme Accelerator',
        },
        email: 'jane@acme.com',
      },
      submit: 'Join the waitlist',
      submitting: 'Sending…',
      success: {
        title: "You're on the list.",
        body: "We'll be in touch shortly. In the meantime, anything urgent — startups@indie.pt.",
      },
      errors: {
        nameRequired: 'Name is required.',
        companyRequired: 'This field is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Enter a valid email.',
        generic: "Something went wrong. Try again, or email us at startups@indie.pt.",
      },
    },
  },
  pt: {
    nav: {
      langEn: 'EN',
      langPt: 'PT',
    },
    hero: {
      eyebrow: 'IndieBacked Startups',
      headlineLead: 'Seguros, em piloto automático',
      headlineAccent: '.',
      sub: 'Um mediador licenciado que escolhe a cobertura certa entre 11 seguradoras em Portugal e Espanha — e ajusta à medida que a tua startup cresce.',
      cta: 'Entrar na waitlist',
    },
    problem: {
      kicker: 'O problema',
      title: 'Os seguros não foram pensados para startups.',
      points: [
        'Os mediadores tradicionais tratam startups como PMEs — produtos errados, fase errada, preço errado.',
        'Os fundadores perdem horas a perceber o que precisam, e mais horas a comparar propostas.',
        'Uma falha — um D&O em falta, um ciber sem cobertura — pode matar uma ronda ou um contrato.',
      ],
    },
    startups: {
      kicker: 'Para startups',
      title: 'Uma relação. Todas as apólices. Todas as fases.',
      body: 'Conta-nos sobre a empresa uma vez. Tratamos do que precisas agora, com a seguradora certa, e atualizamos à medida que cresces, contratas e lanças. Sem formulários. Sem jargão. Um único ponto de contacto.',
      productsTitle: 'O que normalmente cobrimos',
      products: [
        { name: 'D&O', desc: 'Responsabilidade de administradores — essencial assim que tens um board.' },
        { name: 'Ciber', desc: 'Resposta a violações, interrupção de negócio, ransomware.' },
        { name: 'Tech E&O', desc: 'Responsabilidade profissional pelo que o teu produto faz (ou deixa de fazer).' },
        { name: 'EPL', desc: 'Conflitos laborais — reclamações de colaboradores atuais e antigos.' },
        { name: 'Saúde & Benefícios', desc: 'Saúde de grupo para a equipa, estruturada para contratação rápida.' },
        { name: 'AI Liability', desc: 'Nova exposição com o AI Act. A maioria dos mediadores não trata. Nós tratamos.' },
      ],
      cta: 'Entrar na waitlist',
    },
    vcs: {
      kicker: 'Para VCs',
      title: 'Um parceiro de seguros para o portfólio.',
      body: 'Cobertura base padronizada em todo o portfólio, condições preferenciais, onboarding rápido para novos investimentos e uma equipa de conta que conhece todas as empresas. Reduz o risco do portfólio sem o trabalho — e deixa de responder à mesma pergunta de cada fundador.',
      bullets: [
        'Condições pré-negociadas em D&O, Ciber, Tech E&O.',
        'Onboarding na mesma semana para novas participadas.',
        'Revisão trimestral do portfólio — falhas, renovações, sinistros.',
      ],
      cta: 'Entrar na waitlist',
    },
    accelerators: {
      kicker: 'Para aceleradoras e incubadoras',
      title: 'Um parceiro de seguros chave-na-mão para os teus cohorts.',
      body: 'Fluxos de onboarding pensados para fases iniciais, co-branded se fizer sentido, e uma relação que continua depois do programa. Deixa de enviar aos fundadores um PDF de perks genérico.',
      bullets: [
        'Sessões de onboarding por cohort — assíncronas ou ao vivo.',
        'Landing co-branded para o teu programa, se quiseres.',
        'Mesmo mediador a servir alumni cinco anos depois.',
      ],
      cta: 'Entrar na waitlist',
    },
    why: {
      kicker: 'Porquê a Indie',
      title: 'Licenciados. Independentes. Construídos aqui.',
      points: [
        {
          title: 'Um mediador a sério, não um comparador.',
          body: 'Indie Mediação de Seguros, Lda — ASF #420563256. Regulados, responsáveis, vinculados ao aconselhamento que damos.',
        },
        {
          title: '11 seguradoras parceiras na Ibéria.',
          body: 'Não estamos presos a um único balanço. Vamos ao mercado e colocamos-te na seguradora certa para a tua fase.',
        },
        {
          title: 'Construídos no Sudoeste da Europa. Para o Sudoeste da Europa.',
          body: 'A realidade regulatória portuguesa e espanhola — não um manual americano adaptado.',
        },
        {
          title: 'Apoiados por fundadores, para fundadores.',
          body: 'Olisipo Way · Caravela · COREAngels.',
        },
      ],
    },
    logos: {
      carriers: 'Seguradoras com quem trabalhamos',
      ecosystem: 'Fundadores, investidores e parceiros com quem trabalhamos',
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
        company: {
          startup: 'Empresa',
          vc: 'Fundo',
          accelerator: 'Programa',
        },
        email: 'Email profissional',
      },
      placeholders: {
        name: 'Joana Santos',
        company: {
          startup: 'Acme, Lda.',
          vc: 'Acme Ventures',
          accelerator: 'Acme Accelerator',
        },
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
export type Segment = 'startup' | 'vc' | 'accelerator';

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
