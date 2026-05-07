"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Download, ExternalLink, Menu, X } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

type Page = "home" | "work" | "videos" | "apps" | "contact";

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "videos", label: "Videos" },
  { id: "apps", label: "Apps" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Billing Underpayments Platform",
    period: "2023–2025",
    company: "R1 RCM · Enterprise Healthcare",
    description:
      "Led a new product team to modernize a contract calculation engine that identifies insurance underpayments for health system clients. Aligned Operations, Engineering, and Release Management to drive iterative releases, standing up a full development team from scratch in 18 months.",
    metrics: [
      { value: "$715K", label: "annualized value generated" },
      { value: "45%", label: "reduction in customer implementation times" },
      { value: "$435K", label: "saved annually in Underpayments team labor" },
      { value: "$213K", label: "recovered via improved invoicing logic" },
    ],
    tags: ["Enterprise", "Healthcare Billing", "Team Building", "AI/Automation"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop",
  },
  {
    title: "Acute Medical Coding — Workflow Automation",
    period: "2022–2023",
    company: "R1 RCM · Enterprise Healthcare",
    description:
      "Owned the work assignment tool for medical coders, ensuring accounts are routed by skill, urgency, and business priority before internal and external deadlines. Replaced manual processes with an exceptions-based automation and created cross-site operational standards.",
    metrics: [
      { value: "$96K", label: "saved annually via workflow automation" },
      { value: "$110K", label: "projected savings from standardized operations" },
    ],
    tags: ["Workflow", "Healthcare Ops", "Automation", "Cross-functional"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop",
  },
  {
    title: "Outlook Growth & Microsoft Partnerships",
    period: "2020–2022",
    company: "Yesware · B2B/B2C SaaS",
    description:
      "Managed the development relationship with Microsoft for Yesware's Outlook add-in, and led integrations with LinkedIn and Microsoft Teams. Drove feature delivery targeting Outlook users as a strategic growth area, with measurable impact on MRR, trial activation, and paid user retention.",
    metrics: [
      { value: "23%", label: "Outlook MRR increase over tenure" },
      { value: "30%", label: "increase in retentive features among paid users" },
      { value: "18%", label: "lift in trial users loading app within 5 minutes" },
    ],
    tags: ["Partnerships", "API", "Growth", "B2B2C"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop",
  },
];

const videoList = [
  {
    title: "Example Walkthrough",
    embedUrl: "https://www.loom.com/embed/8d5d9d80a2f44b07ad901081151e81b4",
  },
];

const experienceItems = [
  { period: "2023–2025", title: "PM, Billing Underpayments", company: "R1 RCM" },
  { period: "2022–2023", title: "PM, Acute Medical Coding", company: "R1 RCM" },
  { period: "2020–2022", title: "Product Manager", company: "Yesware" },
];

const appItems = [
  {
    title: "Candidate Brief — Work History as Conversational AI",
    status: "live" as const,
    description:
      "Transforms a resume into an interactive Q&A experience for hiring teams.",
    url: "https://example-candidate-brief.vercel.app/",
  },
  {
    title: "More coming soon",
    status: "coming-soon" as const,
    description: "Additional tools currently in development.",
    url: null,
  },
];

// ─── Shared style constants ───────────────────────────────────────────────────

const cardBase =
  "rounded-[1.25rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]";
const cardHover =
  "hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)] transition-all duration-200";

// ─── Mobile nav ───────────────────────────────────────────────────────────────

function MobileNav({
  page,
  navigate,
}: {
  page: Page;
  navigate: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (p: Page) => {
    navigate(p);
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[60px] bg-[#0f0f0f] border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between px-6 z-20">
        <p className="text-[#f5f5f5] font-semibold text-base">Michael Hogan</p>
        <button
          onClick={() => setOpen(!open)}
          className="text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors duration-150 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Slide-down menu */}
      {open && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-[#0f0f0f] border-b border-[rgba(255,255,255,0.08)] z-20">
          <nav className="p-4 space-y-0.5">
            {navItems.map((item) => {
              const active = page === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-colors duration-150 ${
                    active
                      ? "text-[#0d9488] bg-[rgba(13,148,136,0.08)]"
                      : "text-[#8a8a8a] hover:text-[#a3a3a3] hover:bg-[rgba(255,255,255,0.03)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="px-7 py-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/hoganmj2013/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mhogan2013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:hogan.michael.james@gmail.com"
              className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({
  page,
  navigate,
}: {
  page: Page;
  navigate: (p: Page) => void;
}) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-60 bg-[#0f0f0f] border-r border-[rgba(255,255,255,0.08)] flex-col z-10">
      {/* Brand */}
      <div className="px-6 py-7 border-b border-[rgba(255,255,255,0.08)]">
        <p className="text-[#f5f5f5] font-semibold text-base leading-tight">
          Michael Hogan
        </p>
        <p className="text-[#0d9488] text-[0.75rem] mt-0.5">Product Manager</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-0.5">
        {navItems.map((item) => {
          const active = page === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                active
                  ? "text-[#0d9488] bg-[rgba(13,148,136,0.08)]"
                  : "text-[#8a8a8a] hover:text-[#a3a3a3] hover:bg-[rgba(255,255,255,0.03)]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Social links */}
      <div className="px-6 py-5 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/hoganmj2013/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/mhogan2013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
          aria-label="GitHub"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="mailto:hogan.michael.james@gmail.com"
          className="text-[#8a8a8a] hover:text-[#0d9488] transition-colors duration-150"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
}

// ─── Page header ─────────────────────────────────────────────────────────────

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <h2
        className="text-[#f5f5f5]"
        style={{ fontSize: "2.2rem", fontWeight: 500, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <p className="text-[#a3a3a3] mt-2 text-base">{subtitle}</p>
    </div>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="space-y-12">
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
        <span className="w-2 h-2 rounded-full bg-[#0d9488] shrink-0" />
        <span className="text-[#0d9488] text-sm">Open to new opportunities</span>
      </div>

      {/* Hero */}
      <div className="space-y-5">
        <h1
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          <span className="text-[#f5f5f5]">Building technology that adds</span>
          <br />
          <span className="text-[#0d9488]">value, not friction.</span>
        </h1>

        <p className="text-[#a3a3a3] text-base leading-[1.75] max-w-xl">
          Product Manager with experience in customer-facing roles across B2B2C
          SaaS and enterprise healthcare. I focus on reducing friction for the
          people doing the work — from sales reps to revenue cycle specialists.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <button
            onClick={() => navigate("work")}
            className="px-5 py-2.5 bg-[#0d9488] text-white rounded-full text-sm font-medium hover:bg-[#0b8377] transition-colors duration-150"
          >
            View my work
          </button>
          <button
            onClick={() => navigate("videos")}
            className="px-5 py-2.5 border border-[#0d9488] text-[#0d9488] rounded-full text-sm font-medium hover:bg-[rgba(13,148,136,0.08)] transition-colors duration-150"
          >
            Watch videos
          </button>
          <a
            href="/M.Hogan__Resume.pdf"
            download="Michael_Hogan_Resume.pdf"
            className="px-5 py-2.5 border border-[#0d9488] text-[#0d9488] rounded-full text-sm font-medium hover:bg-[rgba(13,148,136,0.08)] transition-colors duration-150"
          >
            Download resume ↓
          </a>
        </div>
      </div>

      {/* Bento grid — 1 col on mobile, 3 col on desktop */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Featured Project — full width mobile, span-2 desktop */}
        <button
          onClick={() => navigate("work")}
          className={`md:col-span-2 ${cardBase} ${cardHover} p-6 text-left group`}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">
            Featured Project
          </p>
          <h3 className="text-[#f5f5f5] font-medium group-hover:text-[#0d9488] transition-colors duration-150">
            Billing Underpayments Platform
          </h3>
          <p className="text-[#8a8a8a] text-sm mt-1">
            $715K annualized value · R1 RCM · 2023–2025
          </p>
        </button>

        {/* Apps */}
        <button
          onClick={() => navigate("apps")}
          className={`${cardBase} ${cardHover} p-6 text-left group`}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">
            Apps
          </p>
          <h3 className="text-[#f5f5f5] font-medium group-hover:text-[#0d9488] transition-colors duration-150">
            Tools I&apos;ve built
          </h3>
          <p className="text-[#8a8a8a] text-sm mt-1">1 live product</p>
        </button>

        {/* Videos */}
        <button
          onClick={() => navigate("videos")}
          className={`${cardBase} ${cardHover} p-6 text-left group`}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">
            Videos
          </p>
          <h3 className="text-[#f5f5f5] font-medium group-hover:text-[#0d9488] transition-colors duration-150">
            Video Library
          </h3>
          <p className="text-[#8a8a8a] text-sm mt-1">Frameworks &amp; more</p>
        </button>

        {/* Experience — full width mobile, span-2 desktop */}
        <div className={`md:col-span-2 ${cardBase} p-6`}>
          <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">
            Experience
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {experienceItems.map((exp) => (
              <div key={exp.period}>
                <p className="font-mono text-[#0d9488] text-xs">{exp.period}</p>
                <p className="text-[#f5f5f5] text-sm mt-1 leading-snug">
                  {exp.title}
                </p>
                <p className="text-[#8a8a8a] text-xs mt-0.5">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WORK ────────────────────────────────────────────────────────────────────

function WorkPage() {
  return (
    <div>
      <PageHeader title="Selected Work" subtitle="Projects I've led and shipped." />

      <div className="space-y-20">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid gap-10 grid-cols-1 md:grid-cols-[1fr_1.4fr]"
          >
            {/* Text */}
            <div>
              <p className="font-mono text-[#0d9488] text-xs">{project.period}</p>
              <h3
                className="text-[#f5f5f5] text-xl mt-2"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                {project.title}
              </h3>
              <p className="text-[#8a8a8a] text-sm mt-1">{project.company}</p>
              <p className="text-[#a3a3a3] text-sm leading-[1.75] mt-4">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-7">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-[#0d9488] font-medium text-base">{m.value}</p>
                    <p className="text-[#8a8a8a] text-xs mt-0.5 leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-[rgba(255,255,255,0.08)] text-[#8a8a8a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image — stacks below text on mobile */}
            <div
              className="relative rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── VIDEOS ──────────────────────────────────────────────────────────────────

function VideosPage() {
  return (
    <div>
      <PageHeader
        title="Video Library"
        subtitle="Walkthroughs of my frameworks and processes."
      />

      {videoList.length === 1 ? (
        <div
          className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src={videoList[0].embedUrl}
            title={videoList[0].title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoList.map((v) => (
            <div
              key={v.embedUrl}
              className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={v.embedUrl}
                title={v.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── APPS ────────────────────────────────────────────────────────────────────

function AppsPage() {
  return (
    <div>
      <PageHeader title="Apps & Tools" subtitle="Things I've built and shipped." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {appItems.map((app) => (
          <div key={app.title} className={`${cardBase} p-6`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[#f5f5f5] font-medium text-sm leading-snug">
                {app.title}
              </h3>
              {app.status === "live" ? (
                <span className="shrink-0 px-2 py-0.5 text-xs rounded-full bg-[rgba(34,197,94,0.08)] text-green-400 border border-[rgba(34,197,94,0.2)]">
                  Live
                </span>
              ) : (
                <span className="shrink-0 px-2 py-0.5 text-xs rounded-full bg-[rgba(255,255,255,0.05)] text-[#8a8a8a] border border-[rgba(255,255,255,0.08)]">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-[#a3a3a3] text-sm leading-[1.75] mt-3">
              {app.description}
            </p>
            {app.url && (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-[#0d9488] hover:text-[#0b8377] transition-colors duration-150"
              >
                Visit app <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.08)]">
        <h3 className="text-[#f5f5f5] font-medium mb-6">
          Live Preview: Candidate Brief
        </h3>
        <div
          className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]"
          style={{ aspectRatio: "16/10" }}
        >
          <iframe
            src="https://example-candidate-brief.vercel.app/"
            title="Candidate Brief"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function ContactPage() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5 text-[#0d9488]" />,
      label: "Email",
      value: "hogan.michael.james@gmail.com",
      href: "mailto:hogan.michael.james@gmail.com",
      external: false,
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-[#0d9488]" />,
      label: "LinkedIn",
      value: "linkedin.com/in/hoganmj2013",
      href: "https://linkedin.com/in/hoganmj2013",
      external: true,
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-[#0d9488]" />,
      label: "GitHub",
      value: "github.com/mhogan2013",
      href: "https://github.com/mhogan2013",
      external: true,
    },
    {
      icon: <Download className="w-5 h-5 text-[#0d9488]" />,
      label: "Resume",
      value: "Download PDF",
      href: "/M.Hogan__Resume.pdf",
      download: "Michael_Hogan_Resume.pdf",
      external: false,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Get in touch"
        subtitle="Open to new opportunities, collaborations, and conversations."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...("download" in c && c.download ? { download: c.download } : {})}
            className={`${cardBase} ${cardHover} p-6 block`}
          >
            {c.icon}
            <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#8a8a8a] mt-3">
              {c.label}
            </p>
            <p className="text-[#f5f5f5] text-sm mt-1">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <MobileNav page={page} navigate={setPage} />
      <Sidebar page={page} navigate={setPage} />
      <main className="md:ml-60 pt-[60px] md:pt-0">
        <div className="max-w-[920px] px-6 py-8 md:px-20 md:py-16">
          {page === "home" && <HomePage navigate={setPage} />}
          {page === "work" && <WorkPage />}
          {page === "videos" && <VideosPage />}
          {page === "apps" && <AppsPage />}
          {page === "contact" && <ContactPage />}
        </div>
      </main>
    </div>
  );
}
