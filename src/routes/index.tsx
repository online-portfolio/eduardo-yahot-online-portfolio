import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType, type FormEvent, type ReactNode } from "react";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Eye,
  FileArchive,
  FileCheck2,
  FileInput,
  FileSearch,
  Files,
  FolderKanban,
  Linkedin,
  ListChecks,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  PenLine,
  Send,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Eduardo Yahot — Document Control & Project Administration Professional",
      },
      {
        name: "description",
        content:
          "Executive portfolio of Eduardo Yahot, a document control, office administration, and project coordination professional with 28 years of multinational experience.",
      },
      {
        property: "og:title",
        content: "Eduardo Yahot — Document Control & Project Administration Professional",
      },
      {
        property: "og:description",
        content:
          "28 years of multinational experience in document control, office administration, and project coordination.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://seasoned-professional-portfolio.lovable.app/",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://seasoned-professional-portfolio.lovable.app/",
      },
    ],
  }),
  component: Portfolio,
});

/* All editable portfolio content is centralized here. */
const PROFILE = {
  name: "Eduardo Yahot",
  initials: "EY",
  email: "eduardoyahot.va@gmail.com",
  linkedin: "https://www.linkedin.com/in/eduardo-y-2a6930400/",
  title: "Document Control | Office Administration | Project Coordination",
  headline: "Experienced Document Controller and Project Support Specialist with nearly three decades in multinational environments, now expanding into virtual assistance.",
  summary:
    "Highly organized and adaptable professional with 28 years of extensive experience within multinational companies, specializing in document control, office administration, and project coordination.",
};

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Tools", href: "#tools", id: "tools" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const SNAPSHOT = [
  { value: "28+", label: "Years of experience" },
  { value: "Global", label: "Multinational environments" },
  { value: "End-to-end", label: "Document control" },
  { value: "Cross-team", label: "Project coordination" },
];

const EXPERIENCE = [
  {
    period: "Feb 2019 — Jan 2026 · 7 yrs",
    company: "TTSJV",
    role: "Document Controller",
    location: "Bahrain · On-site",
    responsibilities: [
      "Quality-check and distribute documents produced at site and at Headquarters, as well as documents received from Subcontractors.",
      "Distribute documentation according to matrices established by the Site Manager, Field Engineering Manager, and Construction Manager to internal users, Subcontractors, and the Client as appropriate.",
    ],
    achievements: ["Maintained controlled document flow across site, Headquarters, Subcontractors, internal users, and Client stakeholders."],
    tools: ["AIM", "Techniplanet", "Electronic Document Management System (EDMS)"],
  },
  {
    period: "Jan 2016 — Jan 2019 · 3 yrs 1 mo",
    company: "Nass Contracting",
    role: "Document Controller",
    location: "Manama, Capital Governorate, Bahrain · On-site",
    responsibilities: [],
    achievements: [],
    tools: [],
  },
  {
    period: "Apr 2009 — Apr 2014 · 5 yrs 1 mo",
    company: "Al Yamama Company",
    role: "Document Controller",
    location: "Riyadh, Saudi Arabia · On-site",
    responsibilities: [],
    achievements: [],
    tools: [],
  }, 
];

const EXPERTISE: Array<{
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}> = [
  {
    number: "01",
    title: "Document Control Management",
    description: "Controlled numbering, revision, review, approval, transmittal, and traceable closeout across the full document lifecycle.",
    icon: Files,
  },
  {
    number: "02",
    title: "Electronic Document Management Systems",
    description: "Disciplined EDMS administration that keeps project information current, searchable, secure, and available to the right stakeholders.",
    icon: Database,
  },
  {
    number: "03",
    title: "Quality Assurance & Distribution Matrices",
    description: "Accurate checks and controlled distribution practices that protect document integrity and prevent superseded information from circulating.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Project Administration & Coordination",
    description: "Reliable coordination of correspondence, meetings, registers, follow-ups, and team requirements across disciplines and time zones.",
    icon: FolderKanban,
  },
  {
    number: "05",
    title: "Information Management",
    description: "Clear structures for naming, classification, retrieval, access, and continuity throughout active projects and corporate operations.",
    icon: Network,
  },
  {
    number: "06",
    title: "Hardcopy & Digital Archiving",
    description: "Orderly, retention-aware archives designed for efficient retrieval, handover, audit, and long-term reference.",
    icon: FileArchive,
  },
  {
    number: "07",
    title: "Record Keeping",
    description: "Consistent registers and dependable records that create a clear, verifiable trail of decisions, submissions, and status.",
    icon: ListChecks,
  },
  {
    number: "08",
    title: "Contract Documentation Support",
    description: "Structured document support for contract packages, formal correspondence, submissions, and stakeholder review cycles.",
    icon: FileCheck2,
  },
];

const WORKFLOW = [
  { label: "Receive", description: "Capture incoming documents", icon: FileInput },
  { label: "Review", description: "Check quality and completeness", icon: FileSearch },
  { label: "Register", description: "Log metadata and status", icon: PenLine },
  { label: "Distribute", description: "Route controlled copies", icon: Send },
  { label: "Track", description: "Monitor actions and revisions", icon: Eye },
  { label: "Archive", description: "Preserve the final record", icon: Archive },
];

const TOOLS = [
  { name: "AIM", type: "monogram", description: "Document and information management platform" },
  { name: "Techniplanet", type: "monogram", description: "Engineering document management system" },
  { name: "Canva", type: "brand", fallback: "Canva", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg", description: "Professional visual communication and presentations" },
  { name: "Microsoft Teams", type: "brand", fallback: "Teams", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoftteams.svg", description: "Cross-team communication and collaboration" },
  { name: "Zoom", type: "brand", fallback: "zoom", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/zoom.svg", description: "Remote meetings and stakeholder coordination" },
  { name: "Google Workspace", type: "brand", fallback: "Google", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googleworkspace.svg", description: "Documents, spreadsheets, storage, and shared workflows" },
];

const STRENGTHS = [
  "Organization",
  "Accuracy",
  "Adaptability",
  "Coordination",
  "Information Management",
  "Confidentiality",
  "Attention to Detail",
  "Process Discipline",
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="grid gap-5 border-t border-border pt-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10">
      <div className="flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/40" />
      </div>
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">{title}</h2>
        {intro ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p> : null}
      </div>
    </Reveal>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between sm:px-8 lg:px-12">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Eduardo Yahot, home">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary bg-primary text-xs font-semibold text-primary-foreground">EY</span>
          <span className="truncate font-display text-xl font-semibold text-foreground">Eduardo Yahot</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${active === link.id ? "is-active" : ""}`}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="shrink-0 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
        {open ? (
          <nav className="col-span-2 grid border-t border-border py-3 sm:absolute sm:left-0 sm:right-0 sm:top-18 sm:bg-background sm:px-8 lg:hidden" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0">
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-ivory">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.72fr)] md:py-20 lg:gap-24 lg:px-12">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-12 bg-primary" />
              Executive professional portfolio
            </div>
            <p className="mt-8 font-display text-2xl font-medium text-primary sm:text-3xl">{PROFILE.name}</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              {PROFILE.headline}
            </h1>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/75">{PROFILE.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{PROFILE.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-6">
                <a href="#experience">View Experience <ArrowDown /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-foreground/25 bg-transparent px-6">
                <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">Contact Me <Mail /></a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 rounded-none px-5">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin /></a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -left-6 top-8 h-[82%] w-full border border-primary/20 bg-blue-tint" aria-hidden="true" />
          <figure className="relative border border-border bg-background p-3 shadow-editorial">
            <img
              src="/id.jpg"
              alt="Eduardo Yahot"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover object-top mix-blend-multiply"
            />
            <figcaption className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-border px-1 pt-3 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="min-w-0">Eduardo Yahot · professional profile</span>
              <span className="shrink-0 text-primary">01 / Profile</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <a href="#about" className="absolute bottom-6 right-5 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary md:flex">
          Continue <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Snapshot() {
  return (
    <section aria-label="Career snapshot" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {SNAPSHOT.map((item, index) => (
          <div key={item.label} className="border-b border-primary-foreground/15 px-6 py-7 sm:border-r sm:px-8 lg:border-b-0 lg:px-9 last:border-r-0">
            <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary-foreground/55">0{index + 1}</span>
            <p className="mt-3 font-display text-2xl font-semibold">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.13em] text-primary-foreground/70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="01" eyebrow="About Eduardo" title="Steady expertise behind complex operations" />
        <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 lg:ml-[11.5rem]">
          <Reveal>
            <blockquote className="border-l-2 border-primary pl-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
              “Clear records, accurate information, and dependable follow-through create the foundation for confident project decisions.”
            </blockquote>
          </Reveal>
          <Reveal className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>Eduardo brings nearly three decades of experience supporting structured multinational corporate environments where accuracy, confidentiality, and document integrity are essential.</p>
            <p>His professional approach combines disciplined document control with adaptable office and project administration. He understands how reliable information flow supports teams, reduces risk, and keeps complex work moving across departments, disciplines, and time zones.</p>
            <p>Known for organization and consistency, Eduardo approaches every register, archive, distribution cycle, and coordination task with care—protecting both the detail and the larger project objective.</p>
            <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
              {["Multinational experience", "Document integrity", "Cross-team coordination", "Structured environments"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="02" eyebrow="Professional Experience" title="A 28-year career in controlled information and project support" />
        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-primary/25 md:left-1/2" aria-hidden="true" />
          <ol className="space-y-10 md:space-y-0">
            {EXPERIENCE.map((job, index) => (
              <li key={index} className={`relative pl-12 md:grid md:grid-cols-2 md:pl-0 ${index > 0 ? "md:-mt-8" : ""}`}>
                <span className="absolute left-0 top-7 grid h-6 w-6 place-items-center border border-primary bg-beige md:left-1/2 md:-translate-x-1/2" aria-hidden="true"><span className="h-1.5 w-1.5 bg-primary" /></span>
                <Reveal className={`${index % 2 === 0 ? "md:col-start-1 md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                  <article className="border-t border-primary/40 bg-background p-6 shadow-editorial sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Role {index + 1}</span>
                      <span className="text-xs text-muted-foreground">{job.period}</span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{job.role}</h3>
                    <p className="mt-1 font-medium text-primary">{job.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                    {job.responsibilities.length || job.achievements.length ? (
                      <div className="mt-6 grid gap-6 border-t border-border pt-5 sm:grid-cols-2">
                        {job.responsibilities.length ? <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">Responsibilities</p>
                          <ul className="mt-3 space-y-2">
                            {job.responsibilities.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1 w-1 shrink-0 bg-primary" />{item}</li>)}
                          </ul>
                        </div> : null}
                        {job.achievements.length ? <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">Achievements</p>
                          <ul className="mt-3 space-y-2">
                            {job.achievements.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1 w-1 shrink-0 bg-primary" />{item}</li>)}
                          </ul>
                        </div> : null}
                      </div>
                    ) : null}
                    {job.tools.length ? <p className="mt-6 border-t border-border pt-4 text-xs leading-5 text-muted-foreground"><span className="font-semibold uppercase tracking-[0.12em] text-foreground">Tools / systems:</span> {job.tools.join(" · ")}</p> : null}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="03" eyebrow="Core Expertise" title="Depth across the information lifecycle" intro="A connected practice spanning controlled documentation, reliable administration, and precise project support." />
        <div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="group border-b border-r border-border bg-background p-6 transition-colors hover:bg-blue-tint sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-display text-2xl text-border transition-colors group-hover:text-primary/35">{item.number}</span>
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="bg-blue-tint py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Document lifecycle</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">From receipt to reliable record</h2>
          </div>
        </Reveal>
        <ol className="relative mt-14 grid gap-0 border border-border bg-background md:grid-cols-3 lg:grid-cols-6">
          {WORKFLOW.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.label} className="group relative grid min-h-44 grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border p-5 last:border-b-0 md:block md:border-b md:border-r md:last:border-r-0 lg:border-b-0 lg:p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></div>
                <div className="md:mt-9">
                  <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground">0{index + 1}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{step.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.description}</p>
                </div>
                {index < WORKFLOW.length - 1 ? <ArrowRight className="absolute -right-3 top-5 z-10 hidden h-5 w-5 bg-background text-primary lg:block" /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function ToolMark({ type, name, iconUrl, fallback }: { type: string; name: string; iconUrl?: string | undefined; fallback?: string | undefined }) {
  if (type === "brand" && iconUrl) {
    return (
      <span className="relative grid h-11 min-w-11 place-items-center">
        <img
          src={iconUrl}
          alt={`${name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add("hidden");
            event.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        <span className="hidden text-center text-[0.62rem] font-bold uppercase tracking-[0.06em] text-primary">{fallback ?? name}</span>
      </span>
    );
  }
  return <span className="text-center text-[0.65rem] font-bold uppercase tracking-[0.08em] text-primary">{name === "Techniplanet" ? "TP" : "AIM"}</span>;
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="04" eyebrow="Tools & Systems" title="Practical fluency across daily platforms" />
        <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <Reveal key={tool.name} className="group flex min-h-40 items-center gap-5 border-b border-r border-border bg-background p-6 transition-colors hover:bg-blue-tint sm:p-8">
              <div className="grid h-16 w-16 shrink-0 place-items-center border border-border bg-background shadow-sm"><ToolMark type={tool.type} name={tool.name} iconUrl={tool.iconUrl} fallback={tool.fallback} /></div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold text-foreground">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground opacity-80 transition-opacity group-hover:opacity-100">{tool.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  const icons = [ListChecks, CheckCircle2, ArrowRight, UsersRound, Database, LockKeyhole, Eye, ClipboardCheck];
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Professional strengths</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">The qualities that protect the work</h2>
          </Reveal>
          <div className="border-t border-border">
            {STRENGTHS.map((strength, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <Reveal key={strength} className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center border-b border-border py-5 sm:grid-cols-[5rem_minmax(0,1fr)_auto]">
                  <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{strength}</h3>
                  <Icon className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const details = String(form.get("details") ?? "");
    const body = [`Name: ${name}`, `Email: ${email}`, "", details].join("\n");
    const gmailUrl = `${GMAIL_COMPOSE_URL}&su=${encodeURIComponent(subject || "Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-powder"><span className="h-px w-12 bg-powder" />Let’s connect</div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.55fr)] lg:items-end">
            <div>
              <h2 className="font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">Experience you can rely on. <span className="italic text-powder">Let’s talk.</span></h2>
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-block break-all border-b border-powder/45 pb-2 text-lg font-medium text-navy-foreground transition-colors hover:text-powder sm:text-2xl">{PROFILE.email}</a>
            </div>
            <div className="grid gap-3">
              <form onSubmit={handleSubmit} className="grid gap-3" aria-label="Contact Eduardo Yahot">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="contact-name">Your name</label>
                  <input id="contact-name" name="name" required placeholder="Your name" className="h-13 rounded-none border border-navy-foreground/30 bg-navy-foreground px-4 text-sm text-navy outline-none placeholder:text-navy/45 focus:ring-2 focus:ring-powder" />
                  <label className="sr-only" htmlFor="contact-email">Email address</label>
                  <input id="contact-email" name="email" type="email" required placeholder="Email address" className="h-13 rounded-none border border-navy-foreground/30 bg-navy-foreground px-4 text-sm text-navy outline-none placeholder:text-navy/45 focus:ring-2 focus:ring-powder" />
                </div>
                <label className="sr-only" htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" placeholder="Subject" className="h-13 rounded-none border border-navy-foreground/30 bg-navy-foreground px-4 text-sm text-navy outline-none placeholder:text-navy/45 focus:ring-2 focus:ring-powder" />
                <label className="sr-only" htmlFor="contact-details">Details</label>
                <textarea id="contact-details" name="details" required rows={5} placeholder="Tell Eduardo a little about your project or enquiry..." className="resize-y rounded-none border border-navy-foreground/30 bg-navy-foreground px-4 py-3 text-sm text-navy outline-none placeholder:text-navy/45 focus:ring-2 focus:ring-powder" />
                <Button type="submit" size="lg" className="h-13 justify-between rounded-none bg-powder px-5 text-navy hover:bg-navy-foreground">{submitted ? "Email draft opened" : "Send an email"} <Mail /></Button>
              </form>
              <Button asChild variant="outline" size="lg" className="h-13 justify-between rounded-none border-navy-foreground/30 bg-transparent px-5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin /></a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-foreground/15 bg-navy py-7 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 text-xs sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-8 lg:px-12">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
          <p className="mt-1 text-navy-foreground/55">{PROFILE.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-navy-foreground/70">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-powder">LinkedIn</a>
          <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-powder">Email</a>
          <span>© {new Date().getFullYear()} Eduardo Yahot</span>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Experience />
        <Expertise />
        <Workflow />
        <Tools />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}