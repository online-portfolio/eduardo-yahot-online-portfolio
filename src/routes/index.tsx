import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Download,
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

import portraitPlaceholder from "@/assets/eduardo-portrait-placeholder.jpg";
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
  cvUrl: "", // Add a public CV file path here, for example: /eduardo-yahot-cv.pdf
  title: "Document Control | Office Administration | Project Coordination",
  headline: "28 Years of Experience in Document Control & Project Administration",
  summary:
    "Highly organized and adaptable professional with 28 years of extensive experience within multinational companies, specializing in document control, office administration, and project coordination.",
};

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
    period: "YYYY — YYYY",
    company: "[Company name]",
    role: "[Job title]",
    location: "[City, Country]",
    details: [
      "[Add a concise responsibility, contribution, or achievement from this role.]",
      "[Add the systems, document scope, or project teams supported.]",
    ],
  },
  {
    period: "YYYY — YYYY",
    company: "[Company name]",
    role: "[Job title]",
    location: "[City, Country]",
    details: [
      "[Add a concise responsibility, contribution, or achievement from this role.]",
      "[Add the systems, document scope, or project teams supported.]",
    ],
  },
  {
    period: "YYYY — YYYY",
    company: "[Company name]",
    role: "[Job title]",
    location: "[City, Country]",
    details: [
      "[Add a concise responsibility, contribution, or achievement from this role.]",
      "[Add the systems, document scope, or project teams supported.]",
    ],
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
  { name: "Canva", type: "canva", description: "Professional visual communication and presentations" },
  { name: "Microsoft Teams", type: "teams", description: "Cross-team communication and collaboration" },
  { name: "Zoom", type: "zoom", description: "Remote meetings and stakeholder coordination" },
  { name: "Google Workspace", type: "google", description: "Documents, spreadsheets, storage, and shared workflows" },
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
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
              28 Years of Experience in <span className="italic text-primary">Document Control</span> & Project Administration
            </h1>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/75">{PROFILE.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{PROFILE.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-none px-6">
                <a href="#experience">View Experience <ArrowDown /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-foreground/25 bg-transparent px-6">
                <a href={`mailto:${PROFILE.email}`}>Contact Me <Mail /></a>
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
            {/* Replace this imported placeholder with Eduardo's real portrait when supplied. */}
            <img
              src={portraitPlaceholder}
              alt="Generic corporate portrait placeholder—not Eduardo Yahot"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover object-top grayscale-[12%]"
            />
            <figcaption className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-border px-1 pt-3 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="min-w-0">Portrait placeholder — replace with Eduardo’s photo</span>
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
        <SectionTitle index="02" eyebrow="Professional Experience" title="A 28-year career, ready to document in full" intro="The framework below is intentionally ready for Eduardo’s exact LinkedIn history. No employer, title, date, location, or achievement has been invented." />
        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-primary/25 md:left-1/2" aria-hidden="true" />
          <ol className="space-y-10 md:space-y-0">
            {EXPERIENCE.map((job, index) => (
              <li key={index} className={`relative pl-12 md:grid md:grid-cols-2 md:pl-0 ${index > 0 ? "md:-mt-8" : ""}`}>
                <span className="absolute left-0 top-7 grid h-6 w-6 place-items-center border border-primary bg-beige md:left-1/2 md:-translate-x-1/2" aria-hidden="true"><span className="h-1.5 w-1.5 bg-primary" /></span>
                <Reveal className={`${index % 2 === 0 ? "md:col-start-1 md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                  <article className="border-t border-primary/40 bg-background p-6 shadow-editorial sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Editable entry {index + 1}</span>
                      <span className="text-xs text-muted-foreground">{job.period}</span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{job.role}</h3>
                    <p className="mt-1 font-medium text-primary">{job.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                    <ul className="mt-6 space-y-3 border-t border-border pt-5">
                      {job.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1 w-1 shrink-0 bg-primary" />{detail}</li>)}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="relative mt-12 flex items-center justify-center">
            <span className="relative border border-primary/30 bg-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Add earlier roles as needed</span>
          </div>
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
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">A representative document-control workflow illustrating the disciplined progression of information—not a proprietary process belonging to any specific employer.</p>
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

function ToolMark({ type, name }: { type: string; name: string }) {
  if (type === "canva") return <span className="font-display text-xl font-semibold italic text-canva">Canva</span>;
  if (type === "teams") return <span className="grid h-9 w-9 place-items-center rounded-sm bg-teams text-sm font-bold text-brand-foreground">T</span>;
  if (type === "zoom") return <span className="grid h-9 w-9 place-items-center rounded-full bg-zoom text-[0.62rem] font-bold uppercase text-brand-foreground">zoom</span>;
  if (type === "google") return <span className="grid grid-cols-2 gap-0.5" aria-label="Google Workspace mark"><i className="h-3 w-3 bg-google-blue" /><i className="h-3 w-3 bg-google-red" /><i className="h-3 w-3 bg-google-yellow" /><i className="h-3 w-3 bg-google-green" /></span>;
  return <span className="text-sm font-bold tracking-[0.08em] text-primary">{name === "Techniplanet" ? "TP" : "AIM"}</span>;
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle index="04" eyebrow="Tools & Systems" title="Practical fluency across daily platforms" intro="Recognizable brand marks are shown for established collaboration tools. AIM and Techniplanet remain labeled monograms until verified official assets are supplied." />
        <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <Reveal key={tool.name} className="group flex min-h-40 items-center gap-5 border-b border-r border-border bg-background p-6 transition-colors hover:bg-blue-tint sm:p-8">
              <div className="grid h-16 w-16 shrink-0 place-items-center border border-border bg-background shadow-sm"><ToolMark type={tool.type} name={tool.name} /></div>
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
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Technical systems matter. Their reliability depends on consistent judgment, disciplined habits, and respect for sensitive information.</p>
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
  return (
    <section id="contact" className="scroll-mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-powder"><span className="h-px w-12 bg-powder" />Let’s connect</div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.55fr)] lg:items-end">
            <div>
              <h2 className="font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">Experience you can rely on. <span className="italic text-powder">Let’s talk.</span></h2>
              <a href={`mailto:${PROFILE.email}`} className="mt-9 inline-block break-all border-b border-powder/45 pb-2 text-lg font-medium text-navy-foreground transition-colors hover:text-powder sm:text-2xl">{PROFILE.email}</a>
            </div>
            <div className="grid gap-3">
              <Button asChild size="lg" className="h-13 justify-between rounded-none bg-navy-foreground px-5 text-navy hover:bg-powder">
                <a href={`mailto:${PROFILE.email}`}>Send an email <Mail /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 justify-between rounded-none border-navy-foreground/30 bg-transparent px-5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin /></a>
              </Button>
              {PROFILE.cvUrl ? (
                <Button asChild variant="outline" size="lg" className="h-13 justify-between rounded-none border-navy-foreground/30 bg-transparent px-5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"><a href={PROFILE.cvUrl} download>Download CV <Download /></a></Button>
              ) : (
                <Button disabled variant="outline" size="lg" className="h-13 justify-between rounded-none border-navy-foreground/20 bg-transparent px-5 text-navy-foreground/55">CV available soon <Download /></Button>
              )}
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
          <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-powder">Email</a>
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