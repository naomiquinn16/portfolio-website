// Single source of truth for site content.
export const profile = {
  name: 'Naomi Quinn',
  title: 'Senior Software Engineer',
  tagline:
    'Senior software engineer with 7+ years building and shipping consumer and fintech products, with hands-on experience integrating LLMs into production.',
  location: 'Dublin, Ireland',
  email: 'quinnn1@tcd.ie',
  social: {
    github: 'https://github.com/naomiquinn16',
    linkedin: 'https://linkedin.com/in/naomiquinn-045a87109',
  },
  about: 'Senior software engineer with 7+ years building and shipping consumer and fintech products, including experience as a founding engineer and as a technical lead managing and mentoring engineering teams, driving new-market and regulatory-facing launches. Hands-on experience integrating LLMs into production products — transaction enrichment, OCR, agent-based analysis, and automated categorisation and workflow automation. Runs independent projects and side ventures spanning mobile, web, and sales intelligence. Track record of owning products end-to-end — from roadmap and architecture through delivery and team leadership — in fast-moving startup and enterprise environments.',
  experience: [
    {
      role: 'Lead Fullstack Engineer',
      company: 'TaxZap',
      period: 'Sept 2024 — Present',
      location: 'Dublin, Ireland',
      bullets: [
        "Led fullstack engineering for TaxZap's consumer tax product, used by over 100,000 people and generating $1M ARR.",
        'Led integration of LLMs into the core product: transaction enrichment, OCR for receipt and document capture, and an internal agent that scans transaction health to surface tax return suggestions and prefill returns from transaction data.',
        'Managed a team of 5 junior engineers, owning overall product direction, roadmap, and the allocation of work across the team.',
        "Led the effort that secured TaxZap's approval as an HMRC-recognised software provider, listed on HMRC's official website, managing direct relations with HMRC through certification and launch of a Making Tax Digital (MTD) compliant product for the UK market.",
        'Led technical planning and delivery for expansion into the UK as a new market, from requirements through launch.',
        'Drove mobile app development from concept through release, extending the product beyond web.',
        'Contributed to the product and technical story used to raise over $4M in funding.',
      ],
    },
    {
      role: 'Founding Software Engineer',
      company: 'Xelda',
      period: 'Dec 2022 — Jul 2024',
      location: 'Dublin, Ireland',
      bullets: [
        'Joined as a founding engineer at Xelda, a Sequoia-backed startup, to build a payments application on Open Banking rails, covering billing and invoicing end-to-end.',
        'Built AI-powered features for automatic transaction categorisation and document parsing, automating workflows previously done manually.',
        'Owned architecture and key technical decisions as part of a small founding team, taking the product from zero to production.',
        'Managed and mentored junior engineers and contractors through peer-to-peer coding, and built individualised progression and learning plans for each.',
      ],
    },
    {
      role: 'Software Engineer (progressing to Associate Manager)',
      company: 'Accenture',
      period: 'Oct 2017 — Dec 2022',
      location: 'Dublin, Ireland',
      bullets: [
        'Progressed from Analyst through Senior Analyst, Specialist, and Associate Manager over a 5-year tenure spanning consulting and software engineering.',
        'Delivered software engineering and technology consulting projects for enterprise clients, including large-scale utilities engagements.',
      ],
    },
  ],
  projects: [
    {
      name: 'Storalla',
      role: 'Contract Engineer',
      link: 'https://storalla.com',
      tags: ['iOS', 'Android', 'Contract'],
      bullets: [
        'Built and shipped a visual home-inventory app on iOS and Android as a contract engineer, letting users photograph, tag, and instantly search their belongings via QR-coded storage.',
        'Built an attribution system to track and credit sales back to individual influencers, supporting influencer-led marketing.',
      ],
    },
    {
      name: 'nocoapi',
      role: 'Founder & Engineer',
      link: 'https://nocoapi.com',
      tags: ['AWS Bedrock', 'LLMs', 'Web Scraping'],
      bullets: [
        'Building a sales intelligence platform combining web scraping with LLMs (AWS Bedrock) to let users define targeted prompts that filter and surface buying-intent signals (ongoing personal project).',
      ],
    },
    {
      name: 'Something Blue',
      role: 'Founder & Engineer',
      link: 'https://somethingblue.ie',
      tags: ['Founder', 'Web'],
      bullets: [
        'Built and run a bespoke wedding-website business end-to-end — design, development, hosting, and tiered pricing — serving paying customers.',
      ],
    },
  ],
  education: [
    {
      institution: 'Trinity College Dublin',
      degree: 'M.A.I., Mechanical & Manufacturing Engineering',
      detail: 'First Class Honours',
      period: '2016 — 2017',
    },
    {
      institution: 'Trinity College Dublin',
      degree: 'B.A.I., Mechanical & Manufacturing Engineering',
      detail: 'First Class Honours',
      period: '2012 — 2016',
    },
  ],
  skillGroups: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
    { category: 'Frontend', items: ['Next.js', 'React', 'Vue', 'Angular'] },
    { category: 'Databases & Frameworks', items: ['SQL (Supabase/PostgreSQL)', 'MongoDB', 'Django', 'Node.js'] },
    { category: 'Cloud', items: ['AWS (full suite)', 'Google Cloud Platform'] },
    { category: 'AI & Integrations', items: ['AWS Bedrock', 'LLM integration', 'agent-based systems', 'LangGraph', 'Langfuse', 'OCR', 'web scraping', 'Open Banking APIs'] },
  ],
  certifications: ['AWS Certified Cloud Practitioner (2021)'],
}
