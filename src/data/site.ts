// Single source of truth for all portfolio content.
// Edit the values marked TODO before deploying.

export const site = {
  name: "Sirish Poudel",
  shortName: "Sirish",
  role: "Full Stack Software Engineer",
  headline:
    "Full Stack Software Engineer | Big Data Platform | IAM & Access Governance | Multi-Tenant Authentication & Authorization • Kubernetes • IaC",
  description:
    "Sirish Poudel is a Full Stack Software Engineer in Kathmandu, Nepal, building secure, multi-tenant platforms: identity and access management, SSO, hierarchical RBAC, licensing for SaaS and air-gapped deployments, Kubernetes and Infrastructure as Code.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirishpoudel.github.io").replace(/\/$/, ""),
  locale: "en_US",
  location: { city: "Kathmandu", region: "Bagmati", country: "Nepal", countryCode: "NP" },
  email: "sirishpoudel21@gmail.com",
  // TODO: confirm the LinkedIn URL
  socials: {
    linkedin: "https://www.linkedin.com/in/sirish-poudel",
    github: "https://github.com/SirishPoudel",
  },
  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Sirish Poudel, Full Stack Software Engineer",
  },
  keywords: [
    "Sirish Poudel",
    "Full Stack Software Engineer",
    "Full Stack Developer Nepal",
    "Software Engineer Kathmandu",
    "Identity and Access Management",
    "IAM",
    "RBAC",
    "Single Sign-On",
    "Multi-tenant authentication",
    "Authorization",
    "Access governance",
    "Kubernetes",
    "Infrastructure as Code",
    "GitOps",
    "Rust",
    "Distributed systems",
    "Dlytica",
  ],
};

export const highlights = [
  {
    title: "Multi-Tenant Auth",
    text: "SSO architectures that keep authentication separate from authorization.",
  },
  {
    title: "Access Governance",
    text: "Hierarchical RBAC with fine-grained, system- and data-level controls.",
  },
  {
    title: "Licensing Platforms",
    text: "Licensing that works cloud-connected and fully air-gapped.",
  },
  {
    title: "Kubernetes & IaC",
    text: "GitOps, CI/CD and automated, repeatable deployments.",
  },
];

// Shown in the "Tools I build with" grid. Edit to match your real stack.
export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Rust",
  "PostgreSQL",
  "Kubernetes",
  "Docker",
];

export const stats = [
  { value: "2+", label: "Years at Dlytica" },
  { value: "2", label: "Core product UIs led" },
  { value: "3", label: "Systems rebuilt in Rust" },
  { value: "22", label: "Listed skills" },
  { value: "SaaS", label: "Cloud deployments" },
  { value: "Air-gap", label: "Offline deployments" },
];

export const approach = [
  {
    title: "Model the identity",
    text: "Start from who can do what: tenants, roles, hierarchies and the data each one is allowed to touch.",
  },
  {
    title: "Separate & enforce",
    text: "Authentication and authorization as distinct layers, enforced consistently at system and data level.",
  },
  {
    title: "Ship & automate",
    text: "Event-driven services, caching and query tuning, delivered through Kubernetes, IaC and GitOps pipelines.",
  },
];

export const projects = [
  {
    tag: "Platform · Dlytica",
    title: "Licensing Platform",
    text: "Designed and built a licensing platform that supports both cloud-connected and fully air-gapped enterprise environments.",
  },
  {
    tag: "IAM · Dlytica",
    title: "Multi-Tenant SSO & RBAC",
    text: "Single Sign-On that separates authentication from authorization, with hierarchical role-based access control and fine-grained data governance.",
  },
  {
    tag: "Product · Dlytica",
    title: "DataNature & AI360Studio",
    text: "Led development of the main web interfaces for two of the company's core analytics products.",
  },
  {
    tag: "Rust · Distributed Systems",
    title: "Raft Consensus",
    text: "Three-node Raft cluster on tokio with leader election, log replication and recovery when the leader is killed mid-write.",
  },
  {
    tag: "Rust · Systems",
    title: "Git Clone",
    text: "A simplified Git: immutable content-addressed objects linked by hashes into a reconstructable history.",
  },
  {
    tag: "Rust · Databases",
    title: "SQLite Clone",
    text: "Tokenizer, parser to AST, execution plan and a storage engine with binary serialization.",
  },
];

export const experience = [
  {
    company: "Dlytica Inc.",
    role: "Full Stack Developer II",
    period: "Oct 2024 — Present",
    place: "Kathmandu · Hybrid",
    points: [
      "Contribute to architecture and evolution of enterprise analytics platforms.",
      "Multi-tenant authentication, SSO and hierarchical RBAC with fine-grained authorization.",
      "Built a licensing platform for cloud-connected and air-gapped deployments.",
      "Improved API performance through database optimization and caching; cut deployment time with automation.",
      "Mentor junior engineers through code reviews and backend design discussions.",
    ],
  },
  {
    company: "Dlytica Inc.",
    role: "Junior Full Stack Developer",
    period: "Jul 2024 — Sep 2024",
    place: "Kathmandu · Hybrid",
    points: ["Built product features across the frontend and backend of the analytics platform."],
  },
  {
    company: "The British College, Kathmandu",
    role: "Bachelor's degree, Computer Science",
    period: "Sep 2021 — Jul 2024",
    place: "Kathmandu",
    points: [],
  },
];

export const testimonials = [
  {
    quote:
      "What stood out most about Sirish was his ability to take vague, incomplete requirements and deliver solid, working results without needing his hand held through the process.",
    name: "Anish Shilpakar",
    title: "Senior Data Engineer @ Leapfrog · AWS Community Builder",
  },
  {
    quote:
      "He is dependable, takes ownership of his work, and consistently delivers quality results. His technical skills, problem-solving ability, and positive attitude make him a valuable team member.",
    name: "Aashish Barme",
    title: "CEO · Co-Founder · Technical Lead",
  },
];

// Glass strip at the bottom of the hero.
export const heroCards = [
  {
    title: "Since 2024",
    text: "Building enterprise analytics platforms at Dlytica.",
  },
  {
    title: "IAM",
    text: "Multi-tenant SSO, hierarchical RBAC and fine-grained access governance.",
  },
  {
    title: "Platform",
    text: "Kubernetes, Infrastructure as Code, GitOps and CI/CD.",
  },
];

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
