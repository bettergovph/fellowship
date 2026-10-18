// Source: [BetterGov] Fellowship Guidelines (slides and document), the BetterGov Summit
// pitch decks (17 October 2026), and the fellowship application form.

const pitchDeck =
  'https://docs.google.com/presentation/d/1aYTkTqNYfPGnIhzDBXXSsJqjk-NBTYA90yoSDfHgEcA/edit'

// Contributions are pledged by email until there is a dedicated donation page.
export const contributeEmail = 'volunteers@bettergov.ph'
const contributeSubject = 'Contributing to the BetterGovPH Fellowship fund'
const contributeBody =
  "Hi BetterGovPH team,\n\nI'd like to contribute to the fellowship fund.\n\nName:\nOrganization (if any):\nHow I'd like to help:\n"

export const fellowshipLinks = {
  apply: 'https://bit.ly/fellowsbgovph',
  guidelines:
    'https://docs.google.com/presentation/d/1aQ9yRlwcRfA15OIKaje5XHaPI1-af0fJ85dP313qvUs/edit?usp=sharing',
  resources: 'https://bit.ly/BetterGovFellowshipApplication',
  pitchDecks: pitchDeck,
  executiveOrder: 'https://www.officialgazette.gov.ph/2026/09/28/executive-order-no-126-s-2026/',
  contribute: `mailto:${contributeEmail}?subject=${encodeURIComponent(contributeSubject)}&body=${encodeURIComponent(contributeBody)}`,
}

// Opens the consolidated pitch deck at one slide. Slide ids come from the deck itself;
// if a slide is deleted and recreated, its id changes and the link falls back to slide one.
export const deckSlideUrl = (slideId: string) => `${pitchDeck}#slide=id.${slideId}`

export const applicationDeadline = 'November 17, 2026'

export const organizers =
  'Jointly organized by BetterGovPH, WeSolve Foundation, the Philippine Open Government Partnership (PH-OGP), and the Department of Budget and Management (DBM), with partner government agencies and civil society organizations, and support from the Mozilla Foundation.'

export const pillars = [
  {
    title: 'Build',
    description: 'Develop digital solutions, tools, integrations, and improvements for public use.',
  },
  {
    title: 'Connect',
    description:
      'Link government datasets and services to DBM COMPASS and the open data ecosystem through open APIs and shared standards.',
  },
  {
    title: 'Open up',
    description: 'Strengthen transparency, accountability, participation, and service delivery.',
  },
]

export const cohortStats = [
  { value: 3, unit: 'months', label: 'From December 2026 to Demo Day in March 2027' },
  { value: 7, unit: 'challenges', label: 'Presented by government and civil society partners' },
  { value: 10, unit: 'areas', label: 'Of public challenge open to proposals' },
]

export const aims = [
  "Accelerate the integration of government datasets and public information systems into the DBM COMPASS ecosystem and the Philippine government's open data platforms.",
  'Develop civic technology solutions that address public service delivery challenges.',
  'Strengthen partnerships among government agencies, civil society organizations, academia, and civic technology communities.',
  'Promote the use of open data, APIs, and emerging technologies for public accountability and citizen engagement.',
  'Pilot a replicable model for civic tech–government collaboration under the Philippine Open Government Partnership.',
]

export const challengeTracks = [
  'E-Government',
  'Open Data, Statistics, and Freedom of Information',
  'Budget and Procurement',
  'Education',
  'Infrastructure Monitoring',
  'Health',
  'Energy',
  'Gender and Development',
  'Local Government Transparency and Monitoring',
  'Accountability and Governance Trackers',
]

export const upcomingChallenges = [
  'Gender and Development',
  'One Education (EDCOM 2, TESDA, CHED, and DepEd)',
]

export interface ChallengeBrief {
  slug: string
  track: string
  headline: string
  accent: string
  government: string
  civilSociety: string
  statement: string
  build: string[]
  figures?: { value: string; label: string }[]
  figureSource?: string
  deck: { slideId: string; image: string; by: string }
}

export const challengeBriefs: ChallengeBrief[] = [
  {
    slug: 'budget-procurement',
    track: 'Budget and Procurement',
    headline: 'Following every peso,',
    accent: 'from budget to procurement.',
    government: 'DBM COMPASS Team, with PS-DBM and PhilGEPS',
    civilSociety: "People's Budget Coalition and WeSolve Foundation",
    statement:
      'Budget, procurement, and beneficial ownership data sit in different government systems. Integrate them in DBM COMPASS so citizens can independently monitor how public money moves.',
    build: [
      'Scope a pilot agency, spending area, or procurement category and map common identifiers',
      'Connect PhilGEPS open procurement data to COMPASS budget records through an API',
      'Publish a documented prototype with source links, data timestamps, and unmatched records explained',
    ],
    deck: {
      slideId: 'h79788a372b6b36d3_1_52',
      image: '/decks/budget-procurement.webp',
      by: 'DBM and WeSolve Foundation',
    },
  },
  {
    slug: 'energy',
    track: 'Energy',
    headline: 'One open energy data layer',
    accent: 'for the Philippines.',
    government: 'Department of Energy',
    civilSociety: 'Mura, Malinis, at Maaasahang Kuryente Coalition',
    statement:
      'Release open energy data in line with ASEAN Energy Statistics, so consumers can see who sells power, at what price, and how reliably.',
    build: [
      'One master list of suppliers, distribution utilities, and electric cooperatives, published as an API',
      'One price table built from the rates 142 utilities publish as PDFs, web tables, and posts',
      "Feeds and an API behind DOE's renewable energy and priority project dashboards",
    ],
    figures: [
      {
        value: '₱12.43',
        label:
          'Per kWh, the Philippine average in June 2026. The highest residential rate in ASEAN.',
      },
    ],
    figureSource: 'Department of Energy, June 2026 rate monitoring, as cited in the Energy pitch',
    deck: {
      slideId: 'h79788a372b6b36d3_1_254',
      image: '/decks/energy.webp',
      by: 'the Mura, Malinis, at Maaasahang Kuryente Coalition',
    },
  },
  {
    slug: 'health',
    track: 'Health',
    headline: 'The vision of health',
    accent: 'for every Filipino.',
    government: 'Department of Health, PhilHealth, and National Nutrition Council',
    civilSociety: 'Philippine Institute for Development Studies (research partner)',
    statement:
      'Open up local health and claims data so health boards are accountable, patients can find services, and benefits reach the people entitled to them.',
    build: [
      'Open local health data to improve local health board accountability',
      'A Patient Navigator that improves access to information on health services',
      'Anonymized PhilHealth claims data to prevent fraud and help patients claim benefits',
    ],
    deck: {
      slideId: 'h79788a372b6b36d3_1_60',
      image: '/decks/health.webp',
      by: 'DOH, PhilHealth, and PIDS',
    },
  },
  {
    slug: 'basic-education',
    track: 'Basic Education',
    headline: 'Make public data useful',
    accent: 'where decisions happen.',
    government: 'Department of Education',
    civilSociety: 'Evidence for Education Coalition (E4E)',
    statement:
      'Link school-level learning outcomes with education budgets to inform more efficient and equitable resource allocation.',
    build: [
      'Explore linking Project Bukas school-level data with DBM COMPASS',
      'Connect local education budget data to basic education data',
      'A prototype that supports a real planning or accountability decision',
    ],
    deck: {
      slideId: 'h5cd69cb8e1650b2f_2_73',
      image: '/decks/basic-education.webp',
      by: 'DepEd and E4E',
    },
  },
  {
    slug: 'early-childhood',
    track: 'Early Childhood Care and Development',
    headline: 'Fixing',
    accent: 'the foundations.',
    government: 'Second Congressional Commission on Education (EDCOM 2)',
    civilSociety: 'Local anti-stunting and literacy coalitions',
    statement:
      'Improve the Early Childhood Care and Development dashboard so coalitions can act on the malnutrition and education crises.',
    build: [
      'Common data schemas across DepEd, DOH–NNC, and DILG datasets',
      'APIs and data pipelines that keep the dashboard updated',
      'Interoperability with Project Bukas, NNC databases, and DBM COMPASS',
    ],
    figures: [
      { value: '1 in 4', label: 'Filipino children under 5 are stunted' },
      { value: '9 in 10', label: 'Grade 1 to 3 learners cannot read a simple text' },
      { value: '4,600', label: 'Barangays have no Child Development Center' },
    ],
    figureSource: 'EDCOM 2, Early Childhood Dashboard pitch',
    deck: {
      slideId: 'h5cd69cb8e1650b2f_2_1097',
      image: '/decks/early-childhood.webp',
      by: 'EDCOM 2',
    },
  },
  {
    slug: 'infrastructure',
    track: 'Infrastructure Monitoring',
    headline: 'Citizen reports on public works,',
    accent: 'from submission to resolution.',
    government: 'Department of Public Works and Highways',
    civilSociety: 'Bisto Proyekto',
    statement:
      'Improve citizen reporting on public works projects and make every report publicly accessible to citizen monitors and the general public.',
    build: [
      'Build on the DPWH Citizen Feedback Management Center',
      'Track each citizen report from submission to resolution',
      'Interconnect reports with DBM COMPASS and make them publicly accessible',
    ],
    deck: {
      slideId: 'h79788a372b6b36d3_1_508',
      image: '/decks/infrastructure.webp',
      by: 'DPWH and Bisto Proyekto',
    },
  },
  {
    slug: 'justice',
    track: 'Justice and Accountability',
    headline: 'Bisto Kurakot:',
    accent: 'closing the accountability loop.',
    government: 'Office of the Ombudsman (to be confirmed)',
    civilSociety: 'CODE-NGO',
    statement:
      'Show the public how corruption cases progress, and help civil society take part in bringing them to justice.',
    build: [
      'A corruption case tracking system',
      'Notifications that help civil society follow and join case hearings',
      'A scientific method to prioritize leads for Ombudsman investigations',
    ],
    deck: {
      slideId: 'h79788a372b6b36d3_1_599',
      image: '/decks/justice.webp',
      by: 'CODE-NGO',
    },
  },
]

export const eligibleRoles = [
  'Civic technology developers',
  'Software engineers',
  'Data scientists and analysts',
  'Product designers and UX specialists',
  'Open data practitioners',
  'Researchers and technologists',
  'Student developers and academic teams',
  'Civic tech organizations and volunteer groups',
]

export const applicationTypes = [
  'Individuals',
  'Teams',
  'Existing organizations or informal groups',
]

export const deliverables = [
  {
    letter: 'A',
    title: 'Solution development',
    description:
      'A working civic-tech solution, platform enhancement, data tool, dashboard, API service, or other approved digital public good.',
  },
  {
    letter: 'B',
    title: 'COMPASS, eGov, and open data integration',
    description:
      'Connect relevant datasets and services through open APIs, metadata standards, MCP-compatible integrations, or other approved mechanisms.',
  },
  {
    letter: 'C',
    title: 'Documentation',
    description:
      'Technical and data-schema documentation, source-code repositories, deployment instructions, and sustainability recommendations.',
  },
  {
    letter: 'D',
    title: 'Participation',
    description:
      'Orientation, weekly sprints, mentorship, technical consultations, government engagement, and Demo Day.',
  },
]

export const partnershipModel = [
  { role: 'Challenge owners', who: 'Government agency and CSO partnerships' },
  { role: 'Implementers', who: 'BetterGovPH fellows' },
  { role: 'Outputs', who: 'Civic tech solutions, APIs, and COMPASS and open data integrations' },
]

export const support = [
  {
    title: 'Mentorship',
    description: 'Technical and policy mentorship from:',
    items: [
      'Department of Budget and Management',
      'BetterGovPH',
      'eHeadsPH',
      'WeSolve Foundation',
      'Participating government agencies',
      'Participating civil society organizations',
      'Invited technical experts',
    ],
  },
  {
    title: 'Technical support',
    description: 'Participating agencies and organizations provide access to:',
    items: [
      'Relevant datasets',
      'Weekly meetings with technical focal persons',
      'Policy and domain experts',
      'Government engagement support',
    ],
  },
  {
    title: 'Capacity building',
    description: 'Fellows take part in:',
    items: [
      'Orientation sessions',
      'Technical learning sessions',
      'Weekly government engagement meetings and sprints',
      'Open data and API integration clinics',
      'Community sharing sessions',
    ],
  },
  {
    title: 'Program management',
    description:
      'The Capacity Development Team of WeSolve Foundation administers the fellowship. BetterGovPH and the DBM COMPASS team lead technical mentorship. The Philippine Open Government Partnership leads engagement mentorship.',
    items: [],
  },
]

export const fundTerms = [
  {
    title: 'Shared across projects',
    description:
      'If ten project teams are selected, the pool is divided across the ten projects, based on approved budgets.',
  },
  {
    title: 'Contracting',
    description: 'Fellowship contracts are issued by WeSolve Foundation, Inc.',
  },
  {
    title: 'Good to know',
    description:
      'Funding is subject to applicable taxes and deductions and does not constitute employment with any organizing institution.',
  },
]

export const contributeReasons = [
  {
    title: 'Time to build',
    description:
      'The fund helps fellows dedicate time and resources to completing their solutions within three months.',
  },
  {
    title: 'Real public challenges',
    description:
      'Every project answers a challenge owned by a government agency and civil society partner.',
  },
  {
    title: 'Open by default',
    description:
      'Outputs are encouraged to be released under open licenses, for anyone to use and build on.',
  },
  {
    title: 'Credit where it is due',
    description: 'Fellows acknowledge supporting partners in all of their public-facing outputs.',
  },
]

export const selectionCriteria = [
  { label: 'Technical capability and relevant experience', weight: 30 },
  { label: 'Quality and feasibility of the proposed solution', weight: 25 },
  { label: 'Alignment with the civic or government challenge', weight: 20 },
  { label: 'Capacity to deliver within three months', weight: 15 },
  { label: 'Commitment to open government, open data, and collaboration', weight: 10 },
]

export const timeline = [
  {
    when: 'October 17',
    what: 'Fellowship launch at the BetterGov Summit. Applications open.',
  },
  { when: 'Oct 17 – Nov 17', what: 'Application submission period' },
  { when: 'November 17', what: 'Application deadline', deadline: true },
  {
    when: 'Nov 18 – 30',
    what: 'Evaluation and selection. Mentors matched with fellows and partners.',
  },
  { when: 'November 30', what: 'Fellows announced' },
  { when: 'December', what: 'Online orientation, kick-off sprint, and team matching' },
  {
    when: 'Dec – March',
    what: 'Weekly calls, technical mentorship, and government engagement sessions. Holiday breaks as announced by the organizers.',
  },
  {
    when: 'March 2027',
    what: 'Final project submission, Demo Day, and release of new DBM COMPASS features',
  },
  { when: 'March 31', what: 'Fellowship closeout and reporting' },
]

export const applySteps = [
  {
    title: 'Find a challenge',
    description: 'Review the challenge areas and identify a concrete public need.',
  },
  {
    title: 'Shape a solution',
    description: 'Explain the problem, the users, the data, and what can be delivered.',
  },
  {
    title: 'Apply',
    description: `Submit the application form by ${applicationDeadline}. Teams apply once, through one representative.`,
  },
]
