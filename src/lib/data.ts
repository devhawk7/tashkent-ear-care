export type Stage = "Pre-idea" | "Pre-seed" | "Seed" | "Series A" | "Series B" | "Growth";

export interface Startup {
  slug: string;
  name: string;
  initials: string;
  gradient: string;
  tagline: string;
  industry: string;
  stage: Stage;
  city: string;
  country: string;
  founded: number;
  teamSize: number;
  website: string;
  verified: boolean;
  ask: string;
  askValue: number;
  mrr?: string;
  arr?: string;
  metricLabel: string;
  metricValue: string;
  growth: string;
  committedPct: number;
  investorsInterested: number;
  views: number;
  description: string;
  problem: string;
  solution: string;
  tam: string;
  sam: string;
  som: string;
  traction: { label: string; value: string; trend: string; up: boolean }[];
  team: { name: string; role: string; initials: string; founder: boolean }[];
}

export const startups: Startup[] = [
  {
    slug: "payflow-uz",
    name: "PayFlow UZ",
    initials: "PF",
    gradient: "from-[#2563eb] to-[#3b82f6]",
    tagline: "Instant B2B payments for Central Asian merchants",
    industry: "Fintech",
    stage: "Seed",
    city: "Tashkent",
    country: "Uzbekistan",
    founded: 2022,
    teamSize: 14,
    website: "payflow.uz",
    verified: true,
    ask: "$500,000",
    askValue: 500000,
    mrr: "$18,400",
    metricLabel: "MRR",
    metricValue: "$18,400",
    growth: "+23%",
    committedPct: 68,
    investorsInterested: 12,
    views: 1284,
    description:
      "PayFlow UZ is building the payment rails that power commerce across Uzbekistan and the wider CIS. Our platform lets merchants accept and settle B2B payments in seconds, with built-in compliance for local regulation.",
    problem:
      "Cross-border and inter-bank B2B settlements in Central Asia still take days and carry punishing fees, locking working capital out of growing businesses.",
    solution:
      "A single API and dashboard that settles merchant-to-merchant payments instantly, reconciles automatically, and stays compliant with CBU regulation out of the box.",
    tam: "$4.2B",
    sam: "$880M",
    som: "$120M",
    traction: [
      { label: "MRR", value: "$18.4K", trend: "+23%", up: true },
      { label: "ARR", value: "$221K", trend: "+31%", up: true },
      { label: "Merchants", value: "1,240", trend: "+18%", up: true },
      { label: "Growth MoM", value: "23%", trend: "+4pts", up: true },
      { label: "Runway", value: "14 mo", trend: "stable", up: true },
    ],
    team: [
      { name: "Bobur Jurayev", role: "Co-founder & CEO", initials: "BJ", founder: true },
      { name: "Dilnoza Saidova", role: "Co-founder & CTO", initials: "DS", founder: true },
      { name: "Aziz Karimov", role: "Head of Compliance", initials: "AK", founder: false },
      { name: "Madina Yusupova", role: "Head of Growth", initials: "MY", founder: false },
    ],
  },
  {
    slug: "agrosense",
    name: "AgroSense",
    initials: "AS",
    gradient: "from-[#22c55e] to-[#16a34a]",
    tagline: "Satellite + IoT crop intelligence for CIS farms",
    industry: "AgriTech",
    stage: "Pre-seed",
    city: "Samarkand",
    country: "Uzbekistan",
    founded: 2023,
    teamSize: 8,
    website: "agrosense.uz",
    verified: true,
    ask: "$200,000",
    askValue: 200000,
    metricLabel: "Pilots",
    metricValue: "14 pilots",
    growth: "$2.4B TAM",
    committedPct: 41,
    investorsInterested: 7,
    views: 642,
    description:
      "AgroSense combines satellite imagery and low-cost field sensors to give Central Asian farms actionable irrigation and yield insights, cutting water use while improving harvests.",
    problem:
      "Smallholder and mid-size farms across the CIS lack affordable tools to monitor soil, water, and crop health — leading to wasted water and lost yield.",
    solution:
      "An affordable sensor kit plus a satellite-fed dashboard that recommends precise irrigation and predicts yield, localized for regional crops.",
    tam: "$2.4B",
    sam: "$540M",
    som: "$74M",
    traction: [
      { label: "Pilots", value: "14", trend: "+6", up: true },
      { label: "Hectares", value: "9,200", trend: "+40%", up: true },
      { label: "Water saved", value: "22%", trend: "+3pts", up: true },
      { label: "LOIs", value: "31", trend: "+11", up: true },
    ],
    team: [
      { name: "Sarvinoz Komilov", role: "Founder & CEO", initials: "SK", founder: true },
      { name: "Jasur Tukhtaev", role: "Head of Hardware", initials: "JT", founder: false },
      { name: "Nigora Ergasheva", role: "Agronomy Lead", initials: "NE", founder: false },
    ],
  },
  {
    slug: "medlink",
    name: "MedLink",
    initials: "ML",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    tagline: "Telemedicine and e-prescriptions for Uzbekistan",
    industry: "HealthTech",
    stage: "Series A",
    city: "Tashkent",
    country: "Uzbekistan",
    founded: 2021,
    teamSize: 36,
    website: "medlink.uz",
    verified: true,
    ask: "$2,000,000",
    askValue: 2000000,
    arr: "$480,000",
    metricLabel: "Patients",
    metricValue: "84K patients",
    growth: "$480K ARR",
    committedPct: 55,
    investorsInterested: 19,
    views: 2410,
    description:
      "MedLink connects patients with licensed doctors via video and chat, with integrated e-prescriptions and pharmacy delivery across major Uzbek cities.",
    problem:
      "Access to specialists is concentrated in a handful of cities, forcing patients to travel long distances for routine care.",
    solution:
      "A telemedicine platform with verified doctors, e-prescriptions, and last-mile pharmacy delivery — care from anywhere.",
    tam: "$1.8B",
    sam: "$420M",
    som: "$95M",
    traction: [
      { label: "ARR", value: "$480K", trend: "+62%", up: true },
      { label: "Patients", value: "84K", trend: "+28%", up: true },
      { label: "Doctors", value: "640", trend: "+15%", up: true },
      { label: "NPS", value: "71", trend: "+6", up: true },
    ],
    team: [
      { name: "Rustam Tashmatov", role: "Co-founder & CEO", initials: "RT", founder: true },
      { name: "Kamola Rashidova", role: "Co-founder & COO", initials: "KR", founder: true },
      { name: "Otabek Nazarov", role: "CTO", initials: "ON", founder: false },
    ],
  },
  {
    slug: "qatnov",
    name: "Qatnov",
    initials: "QT",
    gradient: "from-[#f59e0b] to-[#ea580c]",
    tagline: "On-demand freight matching for the Silk Road corridor",
    industry: "Logistics",
    stage: "Seed",
    city: "Tashkent",
    country: "Uzbekistan",
    founded: 2022,
    teamSize: 22,
    website: "qatnov.uz",
    verified: false,
    ask: "$750,000",
    askValue: 750000,
    mrr: "$31,000",
    metricLabel: "MRR",
    metricValue: "$31,000",
    growth: "+19%",
    committedPct: 33,
    investorsInterested: 9,
    views: 980,
    description:
      "Qatnov is the digital freight marketplace matching shippers with verified carriers across the Central Asian trade corridor.",
    problem:
      "Freight capacity is booked through fragmented brokers, leaving trucks empty on return legs and shippers overpaying.",
    solution:
      "A real-time marketplace that matches loads to carriers, optimizes routes, and handles digital documentation and payments.",
    tam: "$3.1B",
    sam: "$610M",
    som: "$88M",
    traction: [
      { label: "MRR", value: "$31K", trend: "+19%", up: true },
      { label: "Carriers", value: "2,100", trend: "+24%", up: true },
      { label: "Loads/mo", value: "5,400", trend: "+17%", up: true },
    ],
    team: [
      { name: "Sherzod Akbarov", role: "Founder & CEO", initials: "SA", founder: true },
      { name: "Laziz Mirzaev", role: "Head of Ops", initials: "LM", founder: false },
    ],
  },
  {
    slug: "bilim",
    name: "Bilim",
    initials: "BL",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    tagline: "Adaptive exam prep for Uzbek students",
    industry: "EdTech",
    stage: "Pre-seed",
    city: "Namangan",
    country: "Uzbekistan",
    founded: 2023,
    teamSize: 11,
    website: "bilim.uz",
    verified: true,
    ask: "$300,000",
    askValue: 300000,
    mrr: "$9,200",
    metricLabel: "MRR",
    metricValue: "$9,200",
    growth: "+41%",
    committedPct: 47,
    investorsInterested: 6,
    views: 720,
    description:
      "Bilim is an adaptive learning platform helping Uzbek students prepare for national and university entrance exams in Uzbek and Russian.",
    problem:
      "Quality exam prep is expensive and city-centric, leaving most students reliant on rote materials.",
    solution:
      "An AI-adaptive curriculum that personalizes practice to each student, affordable on mobile and offline-friendly.",
    tam: "$900M",
    sam: "$210M",
    som: "$38M",
    traction: [
      { label: "MRR", value: "$9.2K", trend: "+41%", up: true },
      { label: "Students", value: "26K", trend: "+33%", up: true },
      { label: "Retention", value: "64%", trend: "+5pts", up: true },
    ],
    team: [
      { name: "Nilufar Umarova", role: "Founder & CEO", initials: "NU", founder: true },
      { name: "Davron Saidov", role: "Head of Content", initials: "DS", founder: false },
    ],
  },
  {
    slug: "savdo",
    name: "Savdo",
    initials: "SV",
    gradient: "from-[#ec4899] to-[#db2777]",
    tagline: "Social commerce for CIS resellers",
    industry: "E-commerce",
    stage: "Seed",
    city: "Tashkent",
    country: "Uzbekistan",
    founded: 2022,
    teamSize: 18,
    website: "savdo.uz",
    verified: false,
    ask: "$600,000",
    askValue: 600000,
    mrr: "$24,500",
    metricLabel: "MRR",
    metricValue: "$24,500",
    growth: "+27%",
    committedPct: 29,
    investorsInterested: 8,
    views: 1130,
    description:
      "Savdo equips individual resellers with tools to source, market, and fulfill products across social channels in the CIS.",
    problem:
      "Millions of informal resellers lack reliable sourcing, logistics, and payment tools to scale.",
    solution:
      "An all-in-one app for sourcing, storefronts, payments, and delivery built for social-first selling.",
    tam: "$2.7B",
    sam: "$500M",
    som: "$70M",
    traction: [
      { label: "MRR", value: "$24.5K", trend: "+27%", up: true },
      { label: "Resellers", value: "12K", trend: "+22%", up: true },
      { label: "GMV/mo", value: "$1.4M", trend: "+30%", up: true },
    ],
    team: [
      { name: "Gulnoza Abdullaeva", role: "Founder & CEO", initials: "GA", founder: true },
      { name: "Timur Yuldashev", role: "CTO", initials: "TY", founder: false },
    ],
  },
];

export interface Investor {
  slug: string;
  name: string;
  initials: string;
  gradient: string;
  fund: string;
  verified: boolean;
  bio: string;
  industries: string[];
  stages: Stage[];
  ticket: string;
  ticketMin: number;
  ticketMax: number;
  location: string;
  thesis: string;
  totalInvestments: number;
  avgCheck: string;
  activePortfolio: number;
  regions: string[];
  portfolio: { name: string; stage: string; outcome: string; initials: string; gradient: string }[];
  past: { company: string; stage: string; year: number; outcome: string }[];
}

export const investors: Investor[] = [
  {
    slug: "alisher-nazarov",
    name: "Alisher Nazarov",
    initials: "AN",
    gradient: "from-[#2563eb] to-[#3b82f6]",
    fund: "Samarkand Ventures",
    verified: true,
    bio: "Early-stage operator-turned-investor backing fintech and B2B SaaS founders building for the CIS.",
    industries: ["Fintech", "B2B SaaS"],
    stages: ["Pre-seed", "Seed"],
    ticket: "$50K – $500K",
    ticketMin: 50000,
    ticketMax: 500000,
    location: "Tashkent, Uzbekistan",
    thesis:
      "I invest in technical founders solving infrastructure-level problems for Central Asian businesses. I look for sharp insight, fast iteration, and a path to regional dominance before global expansion.",
    totalInvestments: 23,
    avgCheck: "$180K",
    activePortfolio: 14,
    regions: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan"],
    portfolio: [
      { name: "PayFlow UZ", stage: "Seed", outcome: "Active · 3x markup", initials: "PF", gradient: "from-[#2563eb] to-[#3b82f6]" },
      { name: "Qatnov", stage: "Seed", outcome: "Active", initials: "QT", gradient: "from-[#f59e0b] to-[#ea580c]" },
    ],
    past: [
      { company: "PayFlow UZ", stage: "Seed", year: 2023, outcome: "Active · 3x markup" },
      { company: "Qatnov", stage: "Seed", year: 2023, outcome: "Active" },
      { company: "CloudKassa", stage: "Pre-seed", year: 2021, outcome: "Acquired" },
    ],
  },
  {
    slug: "zulfiya-karimova",
    name: "Zulfiya Karimova",
    initials: "ZK",
    gradient: "from-[#22c55e] to-[#16a34a]",
    fund: "Silk Road Capital",
    verified: true,
    bio: "Partner focused on AgriTech and CleanTech ventures advancing sustainable growth across Central Asia.",
    industries: ["AgriTech", "CleanTech"],
    stages: ["Seed", "Series A"],
    ticket: "$100K – $1M",
    ticketMin: 100000,
    ticketMax: 1000000,
    location: "Tashkent, Uzbekistan",
    thesis:
      "Sustainability is the defining opportunity of the region. I back founders applying technology to agriculture, energy, and resource efficiency with measurable impact and unit economics.",
    totalInvestments: 17,
    avgCheck: "$420K",
    activePortfolio: 11,
    regions: ["Uzbekistan", "Kazakhstan", "Tajikistan"],
    portfolio: [
      { name: "AgroSense", stage: "Pre-seed", outcome: "Active", initials: "AS", gradient: "from-[#22c55e] to-[#16a34a]" },
    ],
    past: [
      { company: "AgroSense", stage: "Pre-seed", year: 2023, outcome: "Active" },
      { company: "SolarSteppe", stage: "Seed", year: 2022, outcome: "Active · 2x markup" },
    ],
  },
  {
    slug: "rustam-tashmatov",
    name: "Rustam Tashmatov",
    initials: "RT",
    gradient: "from-[#0ea5e9] to-[#2563eb]",
    fund: "Frontier Ventures",
    verified: true,
    bio: "Backing HealthTech and EdTech founders building category leaders for emerging markets.",
    industries: ["HealthTech", "EdTech"],
    stages: ["Seed", "Series A"],
    ticket: "$200K – $2M",
    ticketMin: 200000,
    ticketMax: 2000000,
    location: "Almaty, Kazakhstan",
    thesis:
      "Healthcare and education are structurally underserved across the CIS. I lead rounds for teams with strong retention, regulatory savvy, and a clear wedge into large markets.",
    totalInvestments: 29,
    avgCheck: "$650K",
    activePortfolio: 18,
    regions: ["Kazakhstan", "Uzbekistan", "Russia"],
    portfolio: [
      { name: "MedLink", stage: "Series A", outcome: "Active · lead", initials: "ML", gradient: "from-[#0ea5e9] to-[#2563eb]" },
      { name: "Bilim", stage: "Pre-seed", outcome: "Watching", initials: "BL", gradient: "from-[#8b5cf6] to-[#6366f1]" },
    ],
    past: [
      { company: "MedLink", stage: "Series A", year: 2024, outcome: "Active · lead" },
      { company: "EduPro", stage: "Seed", year: 2021, outcome: "Acquired" },
    ],
  },
  {
    slug: "nilufar-umarova-angel",
    name: "Nilufar Umarova",
    initials: "NU",
    gradient: "from-[#ec4899] to-[#db2777]",
    fund: "CIS Angel Network",
    verified: false,
    bio: "Angel investor and operator backing consumer and marketplace founders at the earliest stage.",
    industries: ["Consumer", "Marketplace"],
    stages: ["Pre-idea", "Pre-seed"],
    ticket: "$25K – $150K",
    ticketMin: 25000,
    ticketMax: 150000,
    location: "Tashkent, Uzbekistan",
    thesis:
      "I write first checks for ambitious consumer founders. I value taste, distribution instincts, and relentless customer obsession over polished decks.",
    totalInvestments: 41,
    avgCheck: "$60K",
    activePortfolio: 22,
    regions: ["Uzbekistan", "Kyrgyzstan"],
    portfolio: [
      { name: "Savdo", stage: "Seed", outcome: "Active", initials: "SV", gradient: "from-[#ec4899] to-[#db2777]" },
    ],
    past: [
      { company: "Savdo", stage: "Seed", year: 2022, outcome: "Active" },
      { company: "Lazzat", stage: "Pre-seed", year: 2021, outcome: "Active" },
    ],
  },
  {
    slug: "sardor-rakhimov",
    name: "Sardor Rakhimov",
    initials: "SR",
    gradient: "from-[#6366f1] to-[#4f46e5]",
    fund: "Tashkent Growth Partners",
    verified: true,
    bio: "Growth-stage investor partnering with regional category leaders ready to scale across borders.",
    industries: ["Fintech", "Logistics"],
    stages: ["Series A", "Series B"],
    ticket: "$500K – $3M",
    ticketMin: 500000,
    ticketMax: 3000000,
    location: "Tashkent, Uzbekistan",
    thesis:
      "I help proven teams cross from regional traction to multi-country scale, with capital and operating support for go-to-market.",
    totalInvestments: 12,
    avgCheck: "$1.2M",
    activePortfolio: 9,
    regions: ["Uzbekistan", "Kazakhstan", "UAE"],
    portfolio: [
      { name: "Qatnov", stage: "Seed", outcome: "Active", initials: "QT", gradient: "from-[#f59e0b] to-[#ea580c]" },
    ],
    past: [
      { company: "Qatnov", stage: "Seed", year: 2023, outcome: "Active" },
      { company: "PayMe Plus", stage: "Series A", year: 2022, outcome: "Active · 2.5x" },
    ],
  },
  {
    slug: "kamila-yusupova",
    name: "Kamila Yusupova",
    initials: "KY",
    gradient: "from-[#14b8a6] to-[#0d9488]",
    fund: "Aral Fund",
    verified: true,
    bio: "Mission-driven investor backing climate, water, and clean energy founders in Central Asia.",
    industries: ["CleanTech", "AgriTech"],
    stages: ["Pre-seed", "Seed"],
    ticket: "$75K – $750K",
    ticketMin: 75000,
    ticketMax: 750000,
    location: "Nukus, Uzbekistan",
    thesis:
      "The region faces acute climate and water challenges — and the founders solving them can build enduring businesses. I back resilient teams with technical depth.",
    totalInvestments: 15,
    avgCheck: "$240K",
    activePortfolio: 10,
    regions: ["Uzbekistan", "Kazakhstan"],
    portfolio: [
      { name: "AgroSense", stage: "Pre-seed", outcome: "Active", initials: "AS", gradient: "from-[#22c55e] to-[#16a34a]" },
    ],
    past: [
      { company: "AgroSense", stage: "Pre-seed", year: 2023, outcome: "Active" },
      { company: "HydroNukus", stage: "Seed", year: 2022, outcome: "Active" },
    ],
  },
  {
    slug: "jahongir-tursunov",
    name: "Jahongir Tursunov",
    initials: "JT",
    gradient: "from-[#f97316] to-[#ea580c]",
    fund: "Registan Capital",
    verified: false,
    bio: "Generalist seed investor with a soft spot for marketplaces and developer tools.",
    industries: ["B2B SaaS", "Marketplace"],
    stages: ["Pre-seed", "Seed"],
    ticket: "$40K – $400K",
    ticketMin: 40000,
    ticketMax: 400000,
    location: "Samarkand, Uzbekistan",
    thesis:
      "Great companies start with great wedges. I invest early in focused teams with a clear path to becoming the default tool in their niche.",
    totalInvestments: 19,
    avgCheck: "$130K",
    activePortfolio: 13,
    regions: ["Uzbekistan", "Tajikistan"],
    portfolio: [
      { name: "Savdo", stage: "Seed", outcome: "Active", initials: "SV", gradient: "from-[#ec4899] to-[#db2777]" },
    ],
    past: [
      { company: "Savdo", stage: "Seed", year: 2022, outcome: "Active" },
      { company: "DevHub", stage: "Pre-seed", year: 2021, outcome: "Active" },
    ],
  },
  {
    slug: "dilshoda-ergasheva",
    name: "Dilshoda Ergasheva",
    initials: "DE",
    gradient: "from-[#a855f7] to-[#7c3aed]",
    fund: "Chust Angels",
    verified: true,
    bio: "Operator angel backing EdTech and consumer founders solving everyday problems for CIS families.",
    industries: ["EdTech", "Consumer"],
    stages: ["Pre-idea", "Pre-seed"],
    ticket: "$20K – $120K",
    ticketMin: 20000,
    ticketMax: 120000,
    location: "Namangan, Uzbekistan",
    thesis:
      "I back founders close to the problem they're solving, with early signs that customers love the product.",
    totalInvestments: 33,
    avgCheck: "$50K",
    activePortfolio: 20,
    regions: ["Uzbekistan"],
    portfolio: [
      { name: "Bilim", stage: "Pre-seed", outcome: "Active · lead", initials: "BL", gradient: "from-[#8b5cf6] to-[#6366f1]" },
    ],
    past: [
      { company: "Bilim", stage: "Pre-seed", year: 2023, outcome: "Active · lead" },
    ],
  },
];

export const industries = [
  "Fintech", "AgriTech", "HealthTech", "EdTech", "E-commerce", "Logistics", "B2B SaaS", "CleanTech", "Other",
];
export const stages: Stage[] = ["Pre-idea", "Pre-seed", "Seed", "Series A", "Series B", "Growth"];
export const countries = ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Russia", "UAE", "Other"];

export const trustedLogos = [
  "Uzum Market", "Click", "Payme", "Inha University", "Silk Road Fund", "Frontier Ventures", "IT Park Uzbekistan",
];

export const testimonials = [
  {
    quote: "We met our lead investor within 3 weeks via Ventra. The quality of intros was unlike anything we'd seen.",
    name: "Bobur Jurayev",
    role: "CEO, PayFlow UZ",
    initials: "BJ",
    gradient: "from-[#2563eb] to-[#3b82f6]",
  },
  {
    quote: "Ventra gives me clean, vetted deal flow. I see real companies with real traction, not noise.",
    name: "Zulfiya Karimova",
    role: "Partner, Silk Road Capital",
    initials: "ZK",
    gradient: "from-[#22c55e] to-[#16a34a]",
  },
  {
    quote: "Eight qualified investor meetings in a single month. Ventra changed our fundraise completely.",
    name: "Sarvinoz Komilov",
    role: "Founder, AgroSense",
    initials: "SK",
    gradient: "from-[#f59e0b] to-[#ea580c]",
  },
];
