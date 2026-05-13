// IndieBacked Startups — copy in EN + PT-PT

export type Lang = 'en' | 'pt';
export type SegmentId = 'founder' | 'vc' | 'accelerator';

export interface StackRow {
  name: string;
  carrier: string;
  status: string;
  renewal?: boolean;
}

export interface HeroStack {
  title: string;
  company: string;
  co_initial: string;
  meta_people: string;
  meta_geo: string;
  rows: StackRow[];
  foot_left: string;
  foot_right: string;
}

export interface HeroContent {
  eyebrow: string;
  title1: string;
  title2: string;
  sub: string;
  cta: string;
  meta: string;
  stack: HeroStack;
}

export interface TriggerItem { when: string; then: string; tag: string; }
export interface Step { num: string; title: string; body: string; }
export interface AnchorLine { strong: string; rest: string; }
export interface PricingAnchor { eyebrow: string; items: AnchorLine[]; }
export interface RiskRow { name: string; full: string; what: string; when: string; }
export interface Quote { body: string; name: string; role: string; }
export interface VcaCol { h: string; p: string; cta: string; }
export interface WhyBlock { h: string; p: string; }
export interface SegmentMeta { id: SegmentId; title: string; meta: string; }

export interface LangContent {
  nav: { cta: string };
  hero: HeroContent;
  triggers: { eyebrow: string; h2: string; items: TriggerItem[] };
  autopilot: { eyebrow: string; h2: string; sub: string; steps: Step[]; closing: string };
  pricing: { eyebrow: string; h2: string; body: string; anchor: PricingAnchor };
  riskstack: { eyebrow: string; h2: string; sub: string; heads: [string, string, string]; rows: RiskRow[] };
  carriers: { eyebrow: string; h2: string; body: string; logos: string[] };
  quotes: { eyebrow: string; sub: string; items: Quote[] };
  vca: { eyebrow: string; h2: string; cols: VcaCol[] };
  whyus: { eyebrow: string; h2: string; blocks: WhyBlock[] };
  final: { h2: string; sub: string; cta: string };
  footer: { line: string; asf: string; email: string };
  waitlist: {
    step1_title: string;
    step1_indicator: string;
    step1_prompt: string;
    segments: SegmentMeta[];
    step2_title: Record<SegmentId, string>;
    step2_indicator: string;
    labels: { name: string; company: Record<SegmentId, string>; email: string };
    placeholders: { name: string; company: Record<SegmentId, string>; email: string };
    back: string;
    submit: string;
    success_title: string;
    success_body: string;
    success_close: string;
  };
}

export const CONTENT: Record<Lang, LangContent> = {
  en: {
    nav: { cta: 'Join the waitlist' },
    hero: {
      eyebrow: 'IndieBacked Startups',
      title1: 'Protection,',
      title2: 'on autopilot',
      sub: 'Tell us about your company once. We pick the right policies from 15 carriers, keep them current as you grow, and only call when you need to decide.',
      cta: 'Join the waitlist',
      meta: 'Indie Mediação de Seguros · ASF #420563256 · Portugal & Spain',
      stack: {
        title: 'Active stack · Illustrative',
        company: 'Vexa',
        co_initial: 'V',
        meta_people: '12 people',
        meta_geo: 'PT · ES',
        rows: [
          { name: 'D&O', carrier: 'Hiscox', status: 'Active' },
          { name: 'Cyber', carrier: 'Berkley', status: 'Active' },
          { name: 'Tech E&O', carrier: 'Innovarisk', status: 'Active' },
          { name: "Workers' comp", carrier: 'Fidelidade', status: 'Active' },
          { name: 'Group health', carrier: 'MetLife', status: 'Renews Jul 18', renewal: true },
        ],
        foot_left: 'Last reviewed 6 days ago',
        foot_right: 'View stack',
      },
    },
    triggers: {
      eyebrow: 'Why a stack changes',
      h2: "Every milestone changes what you're exposed to.",
      items: [
        { when: 'You closed a round.', then: 'Your investors expect D&O on the cap table.', tag: 'D&O' },
        { when: 'You hired your first employee.', then: "Workers' comp is mandatory and EPL exposure starts.", tag: 'AT + EPL' },
        { when: 'You shipped a paid product.', then: 'Tech E&O matters now.', tag: 'Tech E&O' },
        { when: 'An enterprise customer asked for SOC2.', then: 'Cyber coverage is the next request.', tag: 'Cyber' },
        { when: 'You opened a Madrid office.', then: 'Spanish workers’ comp is a different regulator.', tag: 'AT (ES)' },
        { when: 'Your product uses AI in customer-facing decisions.', then: "The EU AI Act creates new exposure most brokers won't address yet.", tag: 'AI Liability' },
      ],
    },
    autopilot: {
      eyebrow: 'How autopilot runs',
      h2: 'Set it once. Stay covered.',
      sub: 'No quote forms. No insurance vocab. No annual scramble.',
      steps: [
        { num: '01', title: '3 minutes of intake.', body: 'Stage, headcount, customers, geography. The kind of thing the CFO already knows.' },
        { num: '02', title: 'We pick and bind.', body: 'We shop 15 carriers, propose a stack that fits the stage, and bind what you approve. Often immediately; worst case, next business day.' },
        { num: '03', title: 'Renewals come back automatically.', body: 'At renewal or when something material changes, we run the numbers and propose: renegotiate, renew, or cancel. Three options, prepared. Your decision.' },
      ],
      closing: "Done right, you forget we're there.",
    },
    pricing: {
      eyebrow: 'What it costs',
      h2: 'Priced per product. Quoted in 24h.',
      body: "We don't sell bundles. Each policy gets its own quote with a real, line-item price. You see what each piece costs, you decide what to bind, you can drop coverage you don't need.",
      anchor: {
        eyebrow: 'What changes the price',
        items: [
          { strong: 'Headcount and payroll geography.', rest: " Drives workers' comp and group health." },
          { strong: 'Cap-table complexity and investor count.', rest: ' Drives D&O.' },
          { strong: 'Customer geography and data volume.', rest: ' Drives Cyber.' },
          { strong: 'Revenue mix and SLA exposure.', rest: ' Drives Tech E&O.' },
        ],
      },
    },
    riskstack: {
      eyebrow: "What's in your stack",
      h2: 'Running quietly in the background.',
      sub: "What's actually in your stack — without the insurance vocab.",
      heads: ['Coverage', 'What it does', 'When it activates'],
      rows: [
        { name: 'D&O', full: 'Directors & Officers', what: 'Protects you and your board personally if someone sues over a decision you made running the company.', when: 'Closed a priced round.' },
        { name: 'Cyber', full: 'Cyber liability', what: 'Pays for breach response, forensics, ransomware, and the lawyers when customer data leaks. Covers AI-driven data incidents too.', when: 'Storing customer data, processing payments, or selling to enterprise.' },
        { name: 'Tech E&O', full: 'Tech errors & omissions', what: 'Covers you if your software causes a customer financial loss — outage, bug, missed SLA.', when: 'Shipped a paid product.' },
        { name: 'EPL', full: 'Employment practices liability', what: 'Covers you when a current or former employee sues over harassment, discrimination, or wrongful termination.', when: 'First hire onwards.' },
        { name: 'PI', full: 'Professional Liability', what: 'Covers errors in the advice or services you deliver — including AI-driven recommendations and automated decisions that affect customers.', when: 'Selling services or shipping AI-driven decisions.' },
        { name: 'GL', full: 'General Liability', what: 'Covers third-party injury or property damage from your operations — a visitor at your office, equipment damage at a client site.', when: 'Operating an office, hosting clients, or running events.' },
        { name: "Workers' comp", full: "Workers' compensation", what: 'Mandatory once you have employees. Covers medical costs and lost wages if someone is hurt at work.', when: 'First hire onwards.' },
        { name: 'Group health', full: 'Group health insurance', what: 'Health insurance for the team. The standard benefit founders use to compete on hiring.', when: 'First hire, or when you start competing for talent.' },
      ],
    },
    carriers: {
      eyebrow: 'Multi-carrier',
      h2: '15 carriers. One relationship.',
      body: "We're not locked to one balance sheet. We shop the market for the right policy at each stage and switch carriers when it makes sense for you. You see one contact, one bill, one renewal calendar.",
      logos: ['Fidelidade', 'Generali Tranquilidade', 'Allianz', 'Caravela Seguros', 'AIG', 'Hiscox', 'Berkley', 'Innovarisk', 'Nuvu', 'Chubb', 'Real Vida', 'MetLife', 'April', 'Intermundial', 'VD Insurance'],
    },
    quotes: {
      eyebrow: 'Founder voices',
      sub: 'Composites drawn from pilot conversations — names changed.',
      items: [
        { body: "We spent six weeks getting quotes the old way. Indie came back next-day with a real proposal we could actually read. It's the difference between a broker and a fax machine.", name: 'Sofia C.', role: 'COO, Series A SaaS · Lisbon' },
        { body: "I tried buying D&O direct after our seed round. Three logins, two PDFs in English I couldn't fully make sense of, and I still wasn't sure what I'd bought. Indie just sent me the answer.", name: 'Tiago M.', role: 'CEO, seed-stage logistics · Porto' },
        { body: 'Our last accelerator handed us a discount code on a generic group plan. Indie actually looked at the cap table and told us what to bind first.', name: 'Marta L.', role: 'Co-founder, marketplace · Madrid' },
      ],
    },
    vca: {
      eyebrow: 'For VCs and accelerators',
      h2: 'Built for the people backing them, too.',
      cols: [
        { h: 'Extend autopilot to your portfolio.', p: 'Standardized baseline coverage across the book. Preferential terms. Same-week onboarding for new investments.', cta: 'Talk to us about your fund' },
        { h: 'Plug Indie into your program.', p: 'Cohort onboarding. Optional co-branded landing. Alumni stay with us after demo day.', cta: 'Talk to us about your program' },
      ],
    },
    whyus: {
      eyebrow: 'Why us',
      h2: 'Licensed. Independent. Built here.',
      blocks: [
        { h: 'Indie Mediação de Seguros, Lda — ASF #420563256.', p: 'Regulated. Accountable. On the hook for the advice we give.' },
        { h: '15 carrier partners across Portugal and Spain.', p: "We're not a comparison site and we're not locked to a single balance sheet." },
        { h: 'Backed by Olisipo Way, Caravela, COREAngels.', p: 'Founders backing founders.' },
      ],
    },
    final: {
      h2: 'Tell us about your company.',
      sub: "3 minutes of intake. We come back with a stack that fits your stage and a quote that doesn't waste your time.",
      cta: 'Join the waitlist',
    },
    footer: {
      line: 'Indie Mediação de Seguros, Lda',
      asf: 'ASF #420563256',
      email: 'startups@indie.pt',
    },
    waitlist: {
      step1_title: 'Join the waitlist',
      step1_indicator: 'Step 1 of 2',
      step1_prompt: 'Pick what fits.',
      segments: [
        { id: 'founder', title: "I'm a founder", meta: 'Running a VC-backed startup in Portugal or Spain.' },
        { id: 'vc', title: "I'm a VC", meta: 'Backing startups in Iberia.' },
        { id: 'accelerator', title: "I'm an accelerator", meta: 'Running a cohort and picking who to back next.' },
      ],
      step2_title: { founder: 'Tell us about your company', vc: 'Tell us about your fund', accelerator: 'Tell us about your program' },
      step2_indicator: 'Step 2 of 2',
      labels: {
        name: 'Your name',
        company: { founder: 'Company', vc: 'Firm', accelerator: 'Program' },
        email: 'Work email',
      },
      placeholders: {
        name: 'Maria Sousa',
        company: { founder: 'Acme Inc.', vc: 'Caravela Capital', accelerator: 'Demo Day 2026' },
        email: 'you@company.com',
      },
      back: 'Back',
      submit: 'Join the waitlist',
      success_title: "Got it. We'll be in touch.",
      success_body: 'We read every signup ourselves. Expect a short reply within two business days.',
      success_close: 'Close',
    },
  },

  pt: {
    nav: { cta: 'Entrar na lista de espera' },
    hero: {
      eyebrow: 'IndieBacked Startups',
      title1: 'Proteção,',
      title2: 'em piloto automático',
      sub: 'Fala-nos da tua empresa, uma vez. Escolhemos as apólices certas em 15 seguradoras, mantemo-las em dia à medida que cresces, e só te ligamos quando há uma decisão para tomar.',
      cta: 'Entrar na lista de espera',
      meta: 'Indie Mediação de Seguros · ASF #420563256 · Portugal e Espanha',
      stack: {
        title: 'Stack ativo · Ilustrativo',
        company: 'Vexa',
        co_initial: 'V',
        meta_people: '12 pessoas',
        meta_geo: 'PT · ES',
        rows: [
          { name: 'D&O', carrier: 'Hiscox', status: 'Ativa' },
          { name: 'Cyber', carrier: 'Berkley', status: 'Ativa' },
          { name: 'Tech E&O', carrier: 'Innovarisk', status: 'Ativa' },
          { name: 'Acidentes de Trabalho', carrier: 'Fidelidade', status: 'Ativa' },
          { name: 'Saúde de grupo', carrier: 'MetLife', status: 'Renova 18 jul', renewal: true },
        ],
        foot_left: 'Revisto há 6 dias',
        foot_right: 'Ver stack',
      },
    },
    triggers: {
      eyebrow: 'Quando o stack muda',
      h2: 'Cada marco muda aquilo a que estás exposto.',
      items: [
        { when: 'Fechaste uma ronda.', then: 'Os teus investidores esperam D&O na cap table.', tag: 'D&O' },
        { when: 'Contrataste o primeiro funcionário.', then: 'AT passa a obrigatório. Começa a exposição EPL.', tag: 'AT + EPL' },
        { when: 'Lançaste um produto pago.', then: 'Tech E&O passa a importar.', tag: 'Tech E&O' },
        { when: 'Um cliente enterprise pediu SOC2.', then: 'Cyber é o pedido seguinte.', tag: 'Cyber' },
        { when: 'Abriste escritório em Madrid.', then: 'Acidentes de Trabalho em Espanha tem outro regulador.', tag: 'AT (ES)' },
        { when: 'O teu produto usa IA em decisões que afetam clientes.', then: 'O AI Act cria exposição nova que a maioria dos corretores ainda nem aborda.', tag: 'AI Liability' },
      ],
    },
    autopilot: {
      eyebrow: 'Como funciona o piloto automático',
      h2: 'Configura uma vez. Fica coberto.',
      sub: 'Sem formulários de cotação. Sem vocabulário de seguros. Sem corrida anual.',
      steps: [
        { num: '01', title: '3 minutos de onboarding.', body: 'Stage, headcount, clientes, geografia. O que o CFO já sabe de cabeça.' },
        { num: '02', title: 'Escolhemos e contratamos.', body: 'Consultamos 15 seguradoras, propomos um stack que encaixa no teu estágio, e contratamos o que aprovares. Quase sempre na hora; no pior caso, no dia útil seguinte.' },
        { num: '03', title: 'As renovações voltam sozinhas.', body: 'À renovação, ou quando muda algo importante, fazemos as contas e propomos: renegociar, renovar, ou cancelar. Três opções, preparadas. A decisão é tua.' },
      ],
      closing: 'Feito como deve ser, esqueces-te de nós.',
    },
    pricing: {
      eyebrow: 'O que custa',
      h2: 'Preço por produto. Cotação em 24h.',
      body: 'Não vendemos pacotes. Cada apólice tem cotação própria, com preço linha a linha. Vês o que cada peça custa, decides o que contratar, e podes cortar a cobertura que não precisas.',
      anchor: {
        eyebrow: 'O que muda o preço',
        items: [
          { strong: 'Equipa e geografia da folha.', rest: ' Pesa na AT e na Saúde.' },
          { strong: 'Complexidade da cap table e número de investidores.', rest: ' Pesa no D&O.' },
          { strong: 'Geografia dos clientes e volume de dados.', rest: ' Pesa no Cyber.' },
          { strong: 'Mix de receita e exposição a SLAs.', rest: ' Pesa no Tech E&O.' },
        ],
      },
    },
    riskstack: {
      eyebrow: 'O que está no teu stack',
      h2: 'A trabalhar discretamente em background.',
      sub: 'O que está mesmo no teu stack — sem o vocabulário de seguros.',
      heads: ['Cobertura', 'O que faz', 'Quando se ativa'],
      rows: [
        { name: 'D&O', full: 'Directors & Officers', what: 'Protege-te a ti e ao teu board, pessoalmente, se te processarem por uma decisão tomada a gerir a empresa.', when: 'Fechaste uma ronda priced.' },
        { name: 'Cyber', full: 'Cyber liability', what: 'Paga resposta a incidentes, forense, ransomware e advogados quando dados de clientes vazam. Cobre também incidentes ligados a IA.', when: 'Guardas dados de clientes, processas pagamentos, ou vendes a enterprise.' },
        { name: 'Tech E&O', full: 'Tech errors & omissions', what: 'Cobre-te se o teu software causar perda financeira ao cliente — downtime, bug, SLA falhado.', when: 'Lançaste um produto pago.' },
        { name: 'EPL', full: 'Employment practices liability', what: 'Cobre-te quando um funcionário (atual ou antigo) te processa por assédio, discriminação ou despedimento sem justa causa.', when: 'A partir da primeira contratação.' },
        { name: 'RC Profissional', full: 'Responsabilidade Civil Profissional', what: 'Cobre erros nos serviços ou nas recomendações que prestas — incluindo decisões automáticas com IA que afetam clientes.', when: 'Vendes serviços ou usas IA em decisões para clientes.' },
        { name: 'RC Geral', full: 'Responsabilidade Civil Geral', what: 'Cobre danos a terceiros ou bens decorrentes da operação — alguém cair no escritório, equipamento que danifica algo em casa de cliente.', when: 'Tens escritório, recebes clientes ou eventos.' },
        { name: 'AT', full: 'Acidentes de Trabalho', what: 'Obrigatório a partir da primeira contratação. Cobre custos médicos e salário em caso de acidente no trabalho.', when: 'A partir da primeira contratação.' },
        { name: 'Saúde', full: 'Saúde de grupo', what: 'Seguro de saúde para a equipa. O benefício-padrão que os founders usam para competir no hiring.', when: 'Primeira contratação, ou quando começas a competir por talento.' },
      ],
    },
    carriers: {
      eyebrow: 'Multi-seguradora',
      h2: '15 seguradoras. Uma relação.',
      body: 'Não estamos presos a um único balanço. Procuramos a apólice certa no mercado em cada estágio, e mudamos de seguradora quando faz sentido para ti. Vês um contacto, uma fatura, um calendário de renovações.',
      logos: ['Fidelidade', 'Generali Tranquilidade', 'Allianz', 'Caravela Seguros', 'AIG', 'Hiscox', 'Berkley', 'Innovarisk', 'Nuvu', 'Chubb', 'Real Vida', 'MetLife', 'April', 'Intermundial', 'VD Insurance'],
    },
    quotes: {
      eyebrow: 'Vozes de founders',
      sub: 'Compostos a partir de conversas do pilot — nomes alterados.',
      items: [
        { body: 'Estivemos seis semanas a apanhar cotações à moda antiga. A Indie respondeu no dia seguinte com uma proposta que se conseguia ler. É a diferença entre um corretor e um fax.', name: 'Sofia C.', role: 'COO, SaaS Série A · Lisboa' },
        { body: 'Tentei contratar D&O sozinho depois da seed. Três logins, dois PDFs em inglês que não conseguia decifrar, e ainda não tinha a certeza do que tinha comprado. A Indie só me mandou a resposta.', name: 'Tiago M.', role: 'CEO, logística seed · Porto' },
        { body: 'A nossa última aceleradora deu-nos um código de desconto num plano de grupo genérico. A Indie olhou para a cap table e disse-nos o que contratar primeiro.', name: 'Marta L.', role: 'Co-founder, marketplace · Madrid' },
      ],
    },
    vca: {
      eyebrow: 'Para VCs e aceleradores',
      h2: 'Feito para quem os apoia, também.',
      cols: [
        { h: 'Estende o piloto automático ao teu portfolio.', p: 'Cobertura base padronizada em toda a carteira. Condições preferenciais. Onboarding na mesma semana para novos investimentos.', cta: 'Fala connosco sobre o teu fundo' },
        { h: 'Liga a Indie ao teu programa.', p: 'Onboarding por cohort. Landing co-branded opcional. Os alumni continuam connosco depois do demo day.', cta: 'Fala connosco sobre o teu programa' },
      ],
    },
    whyus: {
      eyebrow: 'Porquê nós',
      h2: 'Licenciados. Independentes. Construídos aqui.',
      blocks: [
        { h: 'Indie Mediação de Seguros, Lda — ASF #420563256.', p: 'Regulados. Responsáveis. A responder pessoalmente pelos conselhos que damos.' },
        { h: '15 seguradoras parceiras em Portugal e Espanha.', p: 'Não somos um site de comparação e não estamos presos a um único balanço.' },
        { h: 'Apoiados por Olisipo Way, Caravela, COREAngels.', p: 'Founders a apoiar founders.' },
      ],
    },
    final: {
      h2: 'Fala-nos da tua empresa.',
      sub: '3 minutos de onboarding. Voltamos com um stack que encaixa no teu estágio e uma cotação que não te faz perder tempo.',
      cta: 'Entrar na lista de espera',
    },
    footer: {
      line: 'Indie Mediação de Seguros, Lda',
      asf: 'ASF #420563256',
      email: 'startups@indie.pt',
    },
    waitlist: {
      step1_title: 'Entrar na lista de espera',
      step1_indicator: 'Passo 1 de 2',
      step1_prompt: 'Escolhe o que se aplica.',
      segments: [
        { id: 'founder', title: 'Sou founder', meta: 'A construir uma startup VC-backed em Portugal ou Espanha.' },
        { id: 'vc', title: 'Sou VC', meta: 'Apoio startups na Península Ibérica.' },
        { id: 'accelerator', title: 'Sou de uma aceleradora', meta: 'A correr um cohort e a escolher quem apoiar a seguir.' },
      ],
      step2_title: { founder: 'Fala-nos da tua empresa', vc: 'Fala-nos do teu fundo', accelerator: 'Fala-nos do teu programa' },
      step2_indicator: 'Passo 2 de 2',
      labels: {
        name: 'O teu nome',
        company: { founder: 'Empresa', vc: 'Fundo', accelerator: 'Programa' },
        email: 'Email de trabalho',
      },
      placeholders: {
        name: 'Maria Sousa',
        company: { founder: 'Acme Inc.', vc: 'Caravela Capital', accelerator: 'Demo Day 2026' },
        email: 'tu@empresa.com',
      },
      back: 'Voltar',
      submit: 'Entrar na lista',
      success_title: 'Recebemos. Falamos em breve.',
      success_body: 'Lemos cada inscrição nós próprios. Resposta curta em dois dias úteis.',
      success_close: 'Fechar',
    },
  },
};
