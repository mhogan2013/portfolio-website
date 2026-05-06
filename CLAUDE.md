# michael.pm — Portfolio Site

## Project Overview
Personal portfolio site for Michael Hogan, Product Manager. Dark, enterprise-feeling
design with a fixed left sidebar and five content pages. Showcases PM work, side
projects, and facilitates contact.

**Domain:** michael.pm
**Deployment:** Vercel
**Repo:** github.com/mhogan2013/portfolio

---

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Geist via `next/font/google`
- **Icons:** Lucide React
- **Analytics:** @vercel/analytics
- **Package manager:** pnpm

---

## Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| Background | #0a0a0a | Page background |
| Sidebar bg | #0f0f0f | Sidebar background |
| Card bg | rgba(255,255,255,0.03) | Card default |
| Card bg hover | rgba(255,255,255,0.06) | Card hover |
| Card border | rgba(255,255,255,0.08) | Card border default |
| Card border hover | rgba(255,255,255,0.16) | Card border hover |
| Text primary | #f5f5f5 | Headings, body |
| Text secondary | #a3a3a3 | Supporting text |
| Text muted | #525252 | Labels, meta |
| **Indigo (primary)** | **#6366f1** | Active nav, hero accent, CTAs, hover titles |
| **Teal (complementary)** | **#0d9488** | Metric values, status dot, experience periods |

### Typography
- **Font family:** Geist (sans), Geist Mono (mono — years, codes)
- **Hero:** `clamp(2.2rem, 4.5vw, 3.6rem)`, weight 500, tracking `-0.02em`
- **Section h2:** `2.2rem`, weight 500, tracking `-0.02em`
- **Body:** `1rem`, line-height `1.75`
- **Labels:** `0.65rem`, uppercase, letter-spacing `0.1em`

### Layout
- Sidebar: fixed, `240px` wide, full height, `border-right`
- Main: `margin-left: 240px`, `max-width: 920px`, padding `4rem 5rem`

### Component Patterns
- **Cards:** `border-radius: 1.25rem`, 1px border, subtle bg, hover brightens border
- **Pills/tags:** `border-radius: 9999px`
- **Btn primary:** Indigo bg, white text, full rounded
- **Btn secondary:** Transparent, indigo border + text, full rounded
- **Btn ghost:** Muted border + text, full rounded
- **Hover pattern:** border brightens → title color shifts to indigo

---

## File Structure
```
app/
  layout.tsx          # Root layout — Geist font, metadata, Vercel Analytics
  page.tsx            # Renders <Portfolio />
  globals.css         # Tailwind v4 @import, CSS vars
components/
  portfolio.tsx       # Full site — all pages as client component
public/
  resume.pdf          # Michael_Hogan_Resume.pdf
next.config.mjs       # Add images.unsplash.com to remotePatterns
```

---

## Navigation
Pages managed via `useState<Page>` — no separate route files.

```typescript
type Page = "home" | "work" | "videos" | "apps" | "contact"
```

Sidebar order: Home → Work → Videos → Apps → Contact

---

## Page Content

### HOME

**Status pill:**
- Dot color: teal (`#0d9488`)
- Text: "Open to new opportunities" (teal)

**Hero:**
```
Line 1 (white): "Building technology that adds"
Line 2 (indigo): "value, not friction."
```

**Bio:**
"Product Manager with experience in customer-facing roles across B2B2C SaaS and
enterprise healthcare. I focus on reducing friction for the people doing the work —
from sales reps to revenue cycle specialists."

**CTAs:**
- Primary (indigo): "View my work ↗" → navigate('work')
- Secondary (indigo outline): "Watch videos" → navigate('videos')
- Ghost: "Download resume ↓" → `<a href="/resume.pdf" download="Michael_Hogan_Resume.pdf">`

**Bento grid (3-column):**
```
[ Featured Project — span 2          ] [ Apps — span 1 ]
[ Videos — span 1 ] [ Experience — span 2              ]
```

Bento cards:
1. **Featured Project** (span 2, clickable → Work)
   - Title: "Billing Underpayments Platform"
   - Sub: "$715K annualized value · R1 RCM · 2023–2025"

2. **Apps** (span 1, clickable → Apps)
   - Title: "Tools I've built"
   - Sub: "1 live product"

3. **Videos** (span 1, clickable → Videos)
   - Title: "Video Library"
   - Sub: "Frameworks & more"

4. **Experience** (span 2, not clickable)
   - 3-column inner grid:
     - 2023–2025 / PM, Billing Underpayments / R1 RCM
     - 2022–2023 / PM, Acute Medical Coding / R1 RCM
     - 2020–2022 / Product Manager / Yesware
   - Period color: teal

---

### WORK

Header: "Selected Work" / "Projects I've led and shipped."

Project layout: `grid-template-columns: 1fr 1.4fr` (text | image)
Image: `aspect-ratio: 4/3`, rounded, low opacity lifting on hover

**Project 1 — Billing Underpayments Platform**
- Period: 2023–2025
- Company: R1 RCM · Enterprise Healthcare
- Description: Led a new product team to modernize a contract calculation engine
  that identifies insurance underpayments for health system clients. Aligned
  Operations, Engineering, and Release Management to drive iterative releases,
  standing up a full development team from scratch in 18 months.
- Metrics (teal value, muted label):
  - $715K — annualized value generated
  - 45% — reduction in customer implementation times
  - $435K — saved annually in Underpayments team labor
  - $213K — recovered via improved invoicing logic
- Tags: Enterprise, Healthcare Billing, Team Building, AI/Automation
- Image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop`

**Project 2 — Acute Medical Coding — Workflow Automation**
- Period: 2022–2023
- Company: R1 RCM · Enterprise Healthcare
- Description: Owned the work assignment tool for medical coders, ensuring accounts
  are routed by skill, urgency, and business priority before internal and external
  deadlines. Replaced manual processes with an exceptions-based automation and
  created cross-site operational standards.
- Metrics (teal value, muted label):
  - $96K — saved annually via workflow automation
  - $110K — projected savings from standardized operations
- Tags: Workflow, Healthcare Ops, Automation, Cross-functional
- Image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop`

**Project 3 — Outlook Growth & Microsoft Partnerships**
- Period: 2020–2022
- Company: Yesware · B2B/B2C SaaS
- Description: Managed the development relationship with Microsoft for Yesware's
  Outlook add-in, and led integrations with LinkedIn and Microsoft Teams. Drove
  feature delivery targeting Outlook users as a strategic growth area, with
  measurable impact on MRR, trial activation, and paid user retention.
- Metrics (teal value, muted label):
  - 23% — Outlook MRR increase over tenure
  - 30% — increase in retentive features among paid users
  - 18% — lift in trial users loading app within 5 minutes
- Tags: Partnerships, API, Growth, B2B2C
- Image: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop`

---

### VIDEOS

Header: "Video Library" / "Walkthroughs of my frameworks and processes."

Single Loom embed (full-width, 16:9, rounded, bordered):
```
https://www.loom.com/embed/8d5d9d80a2f44b07ad901081151e81b4
```

Data structure should be an array so grid expands as videos are added:
```typescript
const videos = [
  {
    title: "Example Walkthrough",
    embedUrl: "https://www.loom.com/embed/8d5d9d80a2f44b07ad901081151e81b4",
  },
]
```

When videos.length === 1: show as single full-width embed.
When videos.length > 1: show as responsive grid (md:grid-cols-2 lg:grid-cols-3).

---

### APPS

Header: "Apps & Tools" / "Things I've built and shipped."

**App cards (2-col grid):**

1. **Candidate Brief — Work History as Conversational AI**
   - Status: Live (green badge)
   - Description: Transforms a resume into an interactive Q&A experience for
     hiring teams.
   - URL: https://example-candidate-brief.vercel.app/
     *(placeholder — update before launch)*

2. **More coming soon**
   - Status: Coming Soon (muted badge)
   - Description: Additional tools currently in development.
   - No link

**Embedded preview** (below divider):
- Heading: "Live Preview: Candidate Brief"
- iframe: `https://example-candidate-brief.vercel.app/`
- Aspect ratio: 16/10, rounded, bordered

---

### CONTACT

Header: "Get in touch" / "Open to new opportunities, collaborations, and conversations."

2-column card grid:
1. Email — hogan.michael.james@gmail.com — `mailto:` link
2. LinkedIn — linkedin.com/in/hoganmj2013 — external link
3. GitHub — github.com/mhogan2013 — external link
4. Resume — "Download PDF" — `/resume.pdf` download

Each card: icon (accent teal) + label (muted uppercase) + value (white)

---

## Sidebar

**Brand:**
- Name: "Michael Hogan" (white, 1rem, weight 600)
- Title: "Product Manager" (teal, 0.75rem)

**Social links (bottom of sidebar):**
- LinkedIn: https://www.linkedin.com/in/hoganmj2013/
- GitHub: https://github.com/mhogan2013
- Email: hogan.michael.james@gmail.com
- Use Lucide icons: `<Linkedin />`, `<Github />`, `<Mail />`
- Default color: muted → hover: indigo

---

## Metadata
```typescript
export const metadata: Metadata = {
  title: 'Michael Hogan — Product Manager',
  description: 'Product Manager with experience in B2B2C SaaS and enterprise healthcare.',
}
```

---

## next.config.mjs
```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```

---

## Implementation Notes
- `portfolio.tsx` is a `"use client"` component
- All page switching via `useState` — no Next.js routing needed beyond `app/page.tsx`
- Indigo (`#6366f1`) = primary accent everywhere interactive
- Teal (`#0d9488`) = complementary: status dot, metric values, experience periods,
  contact icons, sidebar title
- Resume served from `/public/resume.pdf` with `download` attribute
- Loom iframe: add `allowFullScreen` and `title`
- Vercel Analytics: wrap in `process.env.NODE_ENV === 'production'` check
- No shadcn/ui components needed — all custom Tailwind
