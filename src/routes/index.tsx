import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Pel Scofield — Document Control | Office Administration | Project Coordination",
      },
      {
        name: "description",
        content:
          "Portfolio of Pel Scofield — a highly organized professional with 28 years of experience in document control, office administration, and project coordination within multinational companies.",
      },
      {
        property: "og:title",
        content: "Pel Scofield — Document Control | Office Administration | Project Coordination",
      },
      {
        property: "og:description",
        content:
          "28 years of multinational experience in document control, office administration, and project coordination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* Replace these three values with the real details when ready.        */
/* ------------------------------------------------------------------ */
const EMAIL = "pel.scofield@email.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
const CV_URL = "/resume.pdf"; // add resume.pdf to the /public folder

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    title: "Document Control Management",
    description:
      "Full lifecycle control of project and corporate documentation — numbering, revisions, review cycles, and audit-ready accuracy.",
  },
  {
    title: "Electronic Document Management Systems (EDMS)",
    description:
      "Administration and day-to-day operation of EDMS platforms across large multinational teams and disciplines.",
  },
  {
    title: "Quality Assurance & Distribution Matrices",
    description:
      "Maintaining QA standards and controlled distribution matrices so the right people receive the right revision, every time.",
  },
  {
    title: "Project Administration & Coordination",
    description:
      "Supporting project teams with scheduling, correspondence, meetings, minutes, and follow-up across departments and time zones.",
  },
  {
    title: "Information Management & Archiving",
    description:
      "Structured management of hardcopy and digital archives — organized, searchable, and compliant with retention requirements.",
  },
  {
    title: "Record Keeping",
    description:
      "Precise, consistent records that stand up to internal audits and external review at any point in a document's life.",
  },
  {
    title: "Contract Documentation Support",
    description:
      "Preparing, tracking, and controlling contract documentation alongside legal and project stakeholders.",
  },
];

const TOOLS = [
  { name: "AIM", label: "Document control platform" },
  { name: "Techniplanet", label: "Engineering document management" },
  { name: "Canva", label: "Presentations & visual materials" },
  { name: "Microsoft Teams", label: "Collaboration & communication" },
  { name: "Zoom", label: "Remote meetings & coordination" },
  { name: "Google Workspace", label: "Docs, Sheets, Drive & more" },
];

/*
 * Employment history — replace the placeholder entries below with the real
 * positions. Each entry supports: company, position, period, location,
 * and a list of responsibilities or achievements.
 */
const EXPERIENCE = [
  {
    company: "Company Name",
    position: "Position Title",
    period: "20XX – 20XX",
    location: "City, Country",
    responsibilities: [
      "Describe a key responsibility or achievement.",
      "Describe another area you owned or improved.",
      "Add a third point if relevant.",
    ],
  },
  {
    company: "Company Name",
    position: "Position Title",
    period: "20XX – 20XX",
    location: "City, Country",
    responsibilities: [
      "Describe a key responsibility or achievement.",
      "Describe another area you owned or improved.",
    ],
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-primary/30" />
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}

function Monogram({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-20 w-20 text-2xl" : "h-11 w-11 text-sm";
  return (
    <div
      className={`${dims} grid shrink-0 place-items-center rounded-full bg-primary font-display font-semibold text-primary-foreground`}
    >
      PS
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <Monogram />
          <span className="truncate font-display text-lg font-semibold tracking-tight text-foreground">
            Pel Scofield
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {open ? (
          <nav
            aria-label="Mobile"
            className="col-span-2 flex flex-col border-t border-border/70 pb-3 pt-2 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
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
    <section id="home" className="scroll-mt-20 bg-beige">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <Reveal>
          <div className="relative mx-auto h-36 w-36">
            {/* Placeholder profile photo — replace this block with:
                <img src="/profile.jpg" alt="Pel Scofield" className="h-36 w-36 rounded-full object-cover border-4 border-background shadow-md" /> */}
            <div className="grid h-36 w-36 place-items-center rounded-full border border-primary/20 bg-blue-tint shadow-sm">
              <span className="font-display text-4xl font-semibold text-primary">PS</span>
            </div>
            <span className="absolute inset-0 -z-10 translate-y-1.5 rounded-full border border-primary/15" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pel Scofield
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary sm:text-base">
            Document Control&nbsp;|&nbsp;Office Administration&nbsp;|&nbsp;Project Coordination
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Highly organized and adaptable professional with 28 years of extensive experience
            within multinational companies, specializing in document control, office
            administration, and project coordination.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Experience
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    "28 years of multinational corporate experience",
    "Reliability and consistency across every assignment",
    "Meticulous organization and documentation accuracy",
    "Adaptable to teams, systems, and time zones",
    "Clear coordination between departments and stakeholders",
    "Calm, methodical approach under pressure",
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="A career built on order, accuracy, and trust"
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              For 28 years I have worked within multinational companies, where documentation is
              the backbone of every project and administration is what keeps teams moving. I have
              built my career on being the person colleagues rely on for accuracy, structure, and
              follow-through.
            </p>
            <p>
              From document control and EDMS administration to project coordination and archiving,
              I bring the same standard to every task: complete, correct, and on time. Working
              across cultures, departments, and time zones has taught me to adapt quickly while
              never compromising on precision.
            </p>
            <p>
              I take pride in calm, dependable work — the kind that makes audits uneventful and
              handovers effortless.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3 rounded-2xl border border-border bg-beige p-6 shadow-sm sm:p-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-beige py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Employment history"
          intro="A chronological overview of roles across multinational companies. Positions will be added here as the timeline is completed."
        />

        <div className="relative mt-14">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-primary/20 sm:left-[15px]" aria-hidden="true" />

          <ol className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <li key={i} className="relative pl-10 sm:pl-14">
                <span
                  className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-primary/30 bg-background sm:h-8 sm:w-8"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <Reveal>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {job.company}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">{job.position}</p>
                      </div>
                      <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
                          {job.period}
                        </span>
                        <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Core Competencies & Skills"
          title="What I bring to a team"
          intro="Decades of hands-on practice across the full documentation and administration lifecycle."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {i === 0 && <path d="M4 7V4h16v3M9 20h6M12 4v16M8 8h.01M8 12h.01M8 16h.01M16 8h.01M16 12h.01M16 16h.01" />}
                    {i === 1 && <path d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Zm0 0v12c0 1.1 3.6 2 8 2s8-.9 8-2V6" />}
                    {i === 2 && <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />}
                    {i === 3 && <path d="M3 3h18v18H3zM3 9h18M9 21V9" />}
                    {i === 4 && <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11Z" />}
                    {i === 5 && <path d="M3 12a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3M3 12v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H3" />}
                    {i === 6 && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6ZM14 2v6h6M9 13h6M9 17h6" />}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 bg-blue-tint py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tools & Systems"
          title="Platforms I work with daily"
          intro="Systems used across document control, coordination, and day-to-day administration."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={(i % 3) * 90}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {i === 0 && <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.5-8.5-2.8 2.8M7.3 16.7l-2.8 2.8m0-15 2.8 2.8m9.4 9.4 2.8 2.8M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />}
                    {i === 1 && <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7Zm-4 21h8" />}
                    {i === 2 && <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.2 4 5.4 4 9s-1.5 6.8-4 9m0-18c-2.5 2.2-4 5.4-4 9s1.5 6.8 4 9M3.5 9h17m-17 6h17" />}
                    {i === 3 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />}
                    {i === 4 && <path d="M15 10l5.5-3.5v11L15 14v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3Z" />}
                    {i === 5 && <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-foreground">{tool.name}</h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{tool.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          intro="Available for discussion regarding document control, office administration, or project coordination opportunities."
        />

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-border bg-beige p-8 shadow-sm sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-primary shadow-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="mt-1 text-sm font-medium text-foreground">+00 000 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-background text-primary shadow-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16v16H4zM4 7l8 6 8-6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-1 break-words text-sm font-medium text-foreground">{EMAIL}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Me
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={CV_URL}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-beige py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <Monogram size="md" />
        <p className="mt-2 text-sm font-medium text-foreground">Pel Scofield</p>
        <p className="text-xs text-muted-foreground">
          Document Control | Office Administration | Project Coordination
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pel Scofield. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
