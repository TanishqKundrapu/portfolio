# Portfolio Redesign — "Engineering Journal"

Status: approved by user (2026-09-11), pending implementation plan.

## 1. Why this exists

The previous two rounds of work (kinetic hero + GSAP polish, then a
reference-site-inspired restyle) were incremental and, per direct user
feedback, ended up reading as templated — a custom cursor nobody liked, a
splash-adjacent gimmick, floating logo badges and numbered "01 // X"
eyebrows lifted from a specific reference portfolio, stacking cards copied
from the same source. The user asked for a complete ground-up redesign,
explicitly rejecting incremental polish, and asked that the design not be
derived from any reference site.

This document is the single source of truth for that redesign. It
replaces the visual system, not just the styling values, of every page.

## 2. Ground truth content (no fabrication)

Sourced from `public/Resume.pdf` and cross-checked against
`src/data/*.ts`:

- **Education**: B.Tech CSE, GITAM University, 2024–Present, CGPA 9.85.
- **Experience**: Technical Head, Inframiq Solutions Pvt. Ltd. (2026–Present)
  — led technical execution across 5 production applications, 2–3
  simultaneously, dev through deployment; backend features + automation
  workflows.
- **Leadership**: Secretary, Meta Developer Communities – GITAM (2026–Present)
  — documentation/ops for a 300+ member community. Prior: Competitive
  Programming Domain Lead (2024–2025).
- **Competitive programming**: 100+ LeetCode problems across core DSA.
  Winner, TechSprint (GDGoC state-level hackathon). Participant, Smart
  India Hackathon (offline SOS system).
- **Resume-verified projects** (3): Career Copilot (live), OdTect
  (GitHub), Disk Monitor (GitHub).
- **Additional shipped-outside-resume projects** (2, `fromResume: false`):
  Simulyn, Mail Shield — presented as secondary/exploratory, not equal
  billing with resume-verified work.
- **Skills**: Programming (Python, C, Java, JavaScript); Cloud & Systems
  (Linux, Bash, Git, GitHub, Cron, Shell Automation, VS Code); Web/DB
  (HTML, CSS, SQL, Supabase); Core CS (DSA, OOP, DBMS, OS, ML,
  Explainable AI, Grad-CAM).

No cloud-platform (AWS/GCP/Azure) or container (Docker/K8s) experience is
present anywhere in source content — the identity is systems-minded
backend/full-stack engineering, Linux/automation, and applied
explainable AI, not "cloud/DevOps." Nothing in this spec invents
companies, metrics, or technologies beyond this list.

## 3. Concept

**"Engineering Journal."** The site reads as an authored technical
document, not an assembled template: large confident editorial
typography carries identity, hairline rules and deliberate margins carry
structure, and hand-built SVG schematics carry the "this person actually
engineers things" proof. No terminal-window cosplay, no floating logo
badges, no numbered "01 // X" eyebrows, no wall of identical cards, no
custom cursor.

## 4. Visual system

**Color** — near-black ink background `#0B0B0C`, raised surface
`#131315`, warm paper-white text `#F3EFE8` (not pure white — avoids the
cold SaaS look), muted ink `#9A968C` / faint `#6E6A62` for secondary
text, hairline border `#232320`. One accent: warm signal amber `#F5A623`,
used sparingly (links, the one underline, diagram highlights) — never as
a background fill or glow.

**Type** — three families, each with a job:
- **Space Grotesk** (display/headings) — geometric, technical, confident
  at large sizes.
- **Inter** (body copy, UI labels) — neutral workhorse.
- **Fraunces** (serif, used sparingly) — pull-quotes, section intros,
  the opening statement on Home. This pairing (grotesk + serif) is the
  single biggest signal that this was designed, not templated.
- **JetBrains Mono** (already loaded) — retained, but restricted to
  actual data: dates, stats, tags, diagram labels. Never decorative.

Add Space Grotesk + Fraunces + Inter via the existing Google Fonts
`<link>` pattern in `index.html` (same mechanism already used for
JetBrains Mono — no new tooling).

**Spacing & grid** — an 8px-based scale (already partially present as
`--space-*` tokens; extend, don't replace). Section rhythm is
deliberate: major section transitions get generous vertical space
(`clamp(6rem, 12vw, 10rem)` between major sections), not a uniform
`padding: 7rem 0` repeated everywhere. Container is asymmetric where it
helps editorial layouts — a wide content column plus a narrower margin
column for annotations/meta, rather than everything centered at one
fixed width.

**Components** — cards are used only where a card is the right
container (a stat, a spec-sheet block), never as the default wrapper for
every section. Radii are small (4–8px) or zero (sharp), never the
`--radius-lg: 20px` pill-everything look from before. Borders are
hairline (1px, low-contrast), no glows, no gradient blobs, no
glassmorphism.

## 5. Information architecture

Real routes (React Router, already in place — kept):

1. `/` **Home** — editorial opener, site index strip, 2–3 curated
   project highlights, "Currently" strip (Inframiq + leadership), footer.
2. `/about` **About** — editorial bio, photo-as-figure, education as a
   citation block.
3. `/work` **Work** (renamed from `/projects`) — project index as a
   numbered technical index, not a card grid.
4. `/work/:slug` **Project detail** (renamed from `/projects/:slug`) —
   Problem → Architecture → Decisions → Outcome, spec-sheet sidebar,
   schematic diagram for Career Copilot and OdTect.
5. `/experience` **Experience** — Inframiq + leadership + competitive
   programming merged into one technical timeline/changelog.
6. `/engineering` **Engineering** (renamed from `/skills`) — structured
   capabilities reference, not a tag cloud or icon grid.
7. `/contact` **Contact** — direct, minimal, no card-form.

Old paths `/projects` and `/projects/:slug` redirect to `/work` and
`/work/:slug` (React Router `<Navigate>`) so the existing deep link in
`profile.resumeUrl`/any external references doesn't 404. `/skills`
redirects to `/engineering`.

Nav links update to: Home · About · Work · Experience · Engineering ·
Contact.

## 6. Photo treatment

Documentary/figure treatment, not a hero glamour shot or rounded
avatar: sharp corners, small, captioned ("Fig. 01 — Visakhapatnam,
India"), placed asymmetrically near the Home opening statement (not
centered opposite the headline). Same treatment, adapted size, on
About. The existing `profile.photoUrl` (`/photo.jpeg`) is reused as-is.

## 7. Page-by-page layout spec

### Home
- Opening statement: large Space Grotesk headline (not "Hi, I'm
  Tanishq" / not "Student developer") — an assertion about what he
  builds, grounded in real content (full-stack products + AI systems +
  automation, led as Technical Head). Fraunces sub-line for a short
  editorial gloss. Photo-as-figure placed asymmetrically to one side.
- Site-index strip: a thin horizontal list of the other five sections
  with mono page-style labels (e.g. `002 About`, `003 Work`) — replaces
  both the discarded numbered eyebrows and functions as real in-page
  navigation affordance, not decoration.
- Highlighted work: 2–3 resume-verified projects in an asymmetric
  editorial layout (large title + short outcome line + link), not
  identical cards, not a stacking-scroll gimmick.
- "Currently" strip: Inframiq role + community leadership, compact,
  factual, dated.
- Footer: standard, restrained (kept from before, no giant name — user
  explicitly rejected that in the prior round).

### About
- Editorial two-column: wide copy column + narrow margin column for
  photo-as-figure and the education citation block.
- Bio copy retained largely as-is from current `About.tsx` (already
  resume-grounded), restyled into the new type system.

### Work (index)
- Numbered technical index list (mono index numbers `01`–`05`), each
  row: project name (Space Grotesk, large), one-line outcome, status
  tag (Live/GitHub/In progress), tech list (text, not logo icons — logo
  soup was explicitly rejected). Resume-verified projects listed first,
  then a visually distinct "Also built" sub-list for Simulyn/Mail
  Shield.
- No grid of equal-weight cards, no stacking pinned-scroll animation.

### Project detail
- Header: project name, one-line tagline, status, links.
- Spec-sheet sidebar (sticky on desktop, stacked on mobile): status,
  tech stack (mono list), links — the one place a bordered "card-like"
  block is justified, since it's genuinely reference material.
- Body, in order: Problem → Architecture (with schematic diagram for
  Career Copilot and OdTect only — see §8) → Key decisions → Outcome/
  features.
- Other three projects keep the same body structure minus the diagram
  (not every project needs one — forcing one everywhere would be the
  "fake dashboard" anti-pattern).

### Experience
- Single chronological technical timeline merging `journey.ts` entries
  (already includes Work/Leadership/Hackathon/Academics kinds) with the
  competitive-programming facts folded in as timeline entries rather
  than a separate bolted-on card.
- Presented as a changelog/index list (mono dates + Space Grotesk
  titles + short description), hairline-divided rows — not a vertical
  line-and-dot track, not the boxed-card-grid tried in the prior round.

### Engineering (skills)
- Structured reference, grouped exactly as the resume groups them
  (Programming / Cloud & Systems / Web & Databases / Core CS), rendered
  as a clean multi-column reference list (mono category labels, Inter
  skill names) — no brand-logo icons, no tag pills, no hover-glow tags.

### Contact
- Direct, editorial: a short direct line + email/phone/location as
  plain high-contrast text links, socials as a simple text row (not
  icon circles). Form kept (existing mailto-based submit logic in
  `Contact.tsx` is retained functionally) but restyled to match —
  underline-style inputs instead of a bordered card-in-a-card.

## 8. Technical diagrams (DrawSVG)

Two hand-authored SVG schematics, kept intentionally simple
(boxes + connecting lines + mono labels, not an attempt at a literal
architecture diagram):

- **Career Copilot**: 4 boxes (Company Intel → JD Analysis → Semantic
  Mapping → Resume Rewrite) with connecting lines, async note.
- **OdTect**: pipeline boxes (Preprocessing → EfficientNet-B2 →
  Grad-CAM → Precision/Recall/F1) with connecting lines.

On scroll into view, GSAP `DrawSVGPlugin` animates the connecting-line
strokes from 0% to 100% while the boxes fade/scale in with a short
stagger (`ScrollTrigger`, `once: true`, respects
`prefers-reduced-motion` by snapping to the finished state instantly,
same pattern already used in `SplitHeading.tsx`).

## 9. Animation strategy

- **GSAP ScrollSmoother** replaces plain browser scroll site-wide for
  inertia smoothing, wired to the existing `ScrollTrigger` usage.
  Requires wrapping `#smooth-wrapper > #smooth-content` around the
  router outlet in `Layout.tsx`. Disabled under
  `prefers-reduced-motion` and on touch devices (native scroll feels
  better than simulated inertia on mobile).
- **GSAP DrawSVG** — diagram stroke reveals (§8) only. Not used
  decoratively elsewhere.
- **GSAP Flip** — one deliberate use: the Work index row's title
  block morphing into the Project detail page's header block on
  navigation, so the transition feels continuous rather than a hard
  page cut. Falls back to the existing `PageTransition` fade/slide if
  `Flip` state can't be captured (e.g. direct URL load).
- **SplitHeading (GSAP SplitText)** — retained from the previous round,
  restyled for the new type system; used for major headings only, not
  every heading on every page (previous round over-applied it).
- **Framer Motion** — retained for page transitions, magnetic buttons,
  small UI micro-interactions (form focus states, nav underline).
- Explicitly removed: idle-floating badge animation, cursor-follow
  spotlight glow, stacking-card pin/scale effect, custom cursor.

## 10. Component inventory

**Discard entirely**: `CustomCursor` (already removed),
`TerminalPanel` + its module CSS, `HeroBadges` + `useHeroSpotlight`,
`Capabilities` (Home), `StackProjects`, the numbered-eyebrow prop on
`SectionHeading` (component itself is replaced), `techIcons.tsx`
logo-mapping (Engineering page no longer uses brand icons).

**Keep, restyle**: `PageTransition`, `Reveal`, `MagneticButton`,
`ScrollToTop`, `Navbar` (restyled + new links), `Footer` (restyled,
still no giant name), `ProjectCard` → replaced by the new index-row
component, `SplitHeading` (restyled).

**New**: `SiteIndexStrip` (Home), `FigurePhoto` (photo-as-figure,
shared by Home/About), `CurrentlyStrip` (Home), `WorkIndexRow` (Work
page), `SpecSheet` (Project detail sidebar), `SchematicDiagram` (Career
Copilot + OdTect only, takes a small typed diagram-spec prop so it's
one component, two data payloads, not two bespoke components),
`TimelineRow` (Experience), `EngineeringTable` (Engineering page).

## 11. Data changes

- `src/data/projects.ts`: no content changes; add an optional
  `diagram?: DiagramSpec` field populated only for `career-copilot` and
  `odtect`.
- `src/data/journey.ts`: fold `competitiveProgramming` facts into two
  additional `journey` entries (kind: `'Hackathon'`/new kind
  `'Competitive'` if needed) so Experience is one real list instead of
  a list plus a bolted-on stat card. No factual changes, just
  structural.
- `src/data/profile.ts`, `src/data/skills.ts`: unchanged.

## 12. Responsive strategy

Each redesigned layout gets an explicit mobile composition, not a
naive collapse:
- Home: site-index strip becomes a vertical stack; the asymmetric
  photo placement moves below the opening statement, not squeezed
  beside it.
- Work index: rows stay single-column at all sizes (already
  list-shaped, no grid to collapse).
- Project detail: spec-sheet sidebar moves from sticky-aside to a
  stacked block above the body on mobile/tablet.
- Engineering: multi-column reference collapses to a single column
  with category headers acting as dividers.
- ScrollSmoother and DrawSVG scroll-triggers are disabled under
  `prefers-reduced-motion`; ScrollSmoother is also disabled on touch
  viewports (`pointer: coarse`) in favor of native scroll.

## 13. Performance

- No new npm dependencies (GSAP bonus plugins are already in the
  installed `gsap` package; Google Fonts added via existing `<link>`
  pattern with `preconnect` already in place).
- `photo.jpeg` should be checked for reasonable size/compression as
  part of implementation (currently used at small display sizes on
  both Home and About).
- Route-level code-splitting via `React.lazy` for page components,
  addressing the existing build warning about the >500KB main chunk
  (noted during the prior round's build, not previously acted on).

## 14. Explicitly out of scope

- No content fabrication (companies, metrics, cloud platforms not on
  the resume).
- No new backend/CMS — content stays in `src/data/*.ts`.
- No dark/light theme toggle (site is intentionally single-theme, near-
  black — not part of this request).
