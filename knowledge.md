# RealEZ Phase 1 — Complete Planning Knowledge

A single-file export of everything in this repo. See the linked HTML pages for the same content
with tables, diagrams, and tabs — this file exists so the knowledge doesn't only live in a browser.

Founder/business planning notes, not product documentation — kept separate from the RealEZ app
repo on purpose. Figures throughout are planning estimates, not commitments.

**Note on this file:** the HTML site supports hiding pricing for external publishing (see
`assets/js/config.js`). This markdown file is static and always shows full detail, including cost
figures — don't share it externally if the version you're sharing should hide pricing.

---

## Contents

1. [Two scenarios](#two-scenarios)
2. [The team is unified across both scenarios](#the-team-is-unified-across-both-scenarios)
3. [The earnest-money custody risk, in detail](#the-earnest-money-custody-risk-in-detail)
4. [Multi-tenancy & white-label](#multi-tenancy--white-label)
5. [The 6-month plan: what ships, what doesn't](#the-6-month-plan-what-ships-what-doesnt)
6. [Full Pilot](#full-pilot)
7. [Lean Pilot](#lean-pilot)
8. [Scope matrix](#scope-matrix)
9. [Timeline](#timeline)
10. [Dependencies](#dependencies)
11. [Team — who we actually need](#team--who-we-actually-need)
12. [Job descriptions](#job-descriptions)
13. [Tech stack (greenfield assessment)](#tech-stack-greenfield-assessment)
14. [Cost](#cost)

---

## Two scenarios

| Scenario | Shape |
|---|---|
| **Full Pilot** | 6 months, 2–3 states, in-house ESIGN-compliant e-signature, direct earnest-money custody |
| **Lean Pilot** | 5 months, 1 state, 3rd-party e-signature, no custody |

Both scenarios now build with the same foundations-first discipline as standard practice — QA
starts month 1, CI/CD and infrastructure-as-code are a required week-1 deliverable — not a
separate option to choose between. What actually differs between the two is product/legal scope
and timeline, not process.

AI-native building with human-in-the-loop review is the default in both. Every developer has
Claude coding access. Native mobile apps for all 5 portals (Admin, Broker, Agent, Client, Vendor)
are required in both scenarios too — not just Agent + Client.

## The team is unified across both scenarios

**7 people total (4 new FTE hires + 2 existing), plus 1 project-based designer — the same roster in
both scenarios.** A confirmed 8–10 person budget headroom exists, but it stays mostly unspent:

- **4 new FTE hires:** Senior Backend Engineer #2 (the tech lead), QA/Automation Engineer, Project
  Manager, HR/Payroll/Admin
- **1 project-based engagement, not an FTE:** a UI/UX Designer, at a flat project fee (see
  [Cost](#cost))
- **No Compliance & Trust Operations Lead anywhere** — even in Full Pilot's direct-custody path,
  compliance is owned by other cofounders, not staffed inside the build team
- **No dedicated DevOps/Platform Engineer, no second mobile engineer** — both were tried on for
  size given the available headroom and cut back out: the tech lead covers infrastructure/CI/CD
  with AI-assisted scaffolding, and one Flutter engineer covers all 5 portals. Neither is cut for
  budget — both are judged genuinely sufficient at this team size, with the mobile bet now
  carrying more risk given it covers every persona, not just Agent + Client.

What still differs by scenario: product/legal scope (states, e-signature approach, money custody),
whether the founder is hands-on (Full Pilot) or not (Lean Pilot), and timeline length.

## The earnest-money custody risk, in detail

**What earnest money is:** a deposit (typically 1–3% of price) the buyer puts down at contract
signing to show good faith. It can't sit in RealEZ's own account — it must be held by a neutral
third party until closing (or until the deal falls through, with rules determining who gets it).

**Who's legally allowed to hold it, in the US:**
1. **A licensed title/escrow company** — regulated separately from real estate licensing (e.g.
   California's DRE issues a distinct escrow license), requiring a licensed escrow officer and a
   surety bond or minimum net worth (often $25K–$100K+), subject to state audit.
2. **A licensed real estate brokerage's trust account** — under a named **Broker of Record** who
   takes personal legal responsibility, with compliant trust accounting: a segregated bank account,
   no commingling with operating funds, mandated deposit timelines (often within 3 business days),
   and regular reconciliation subject to audit.
3. **An attorney's IOLTA/escrow account** — the norm in "attorney states," mostly Northeast US.

**Why 2–3 states in 6 months doesn't work:** neither path above is a quick registration.
- Becoming a licensed escrow company requires building compliance infrastructure *before* applying,
  then a review process commonly running 3–6+ months **per state**.
- Becoming (or partnering with) a licensed brokerage means recruiting a qualified Broker of Record
  and getting brokerage licensure — also state-specific, also months-long, with no general
  reciprocity between states.
- Most states also have separate **money-transmitter statutes**. Real estate escrow is usually
  exempt *if* done by a licensed title company, escrow agent, or broker acting within a real estate
  transaction — but the exact exemption language varies by state, and getting it wrong means being
  classified as an unlicensed money transmitter, a serious regulatory matter (criminal in most
  states), not a bug to fix later.

**The actual constraint is licensing timeline, not engineering.** A trust ledger is buildable in
weeks. Being legally authorized to be the party holding the money is not, across 2–3 states in 6
months.

**Recommendation:** partner with an already-licensed escrow/title company (or the pilot brokerage's
existing one) via API or manual reconciliation for Phase 1. RealEZ's software still owns the
*experience* — live status, reminders, timeline tracking — while the licensed partner holds actual
legal custody. Genuine self-custody is a Phase 2+ project, owned by the Compliance cofounder (not a
build-team hire): pick broker-trust vs. title-license, recruit the right licensed person, start
state applications, build audit-grade trust accounting, get counsel sign-off before touching a real
dollar.

---

## Multi-tenancy & white-label

**Do we pick this up in the first 6 months?** Multi-tenancy (data isolation): **yes, required,
month 1.** White-label (branding activated for a partner brokerage): **no, deferred, but
architected for now.**

### Multi-tenancy: not optional, not deferrable
Every brokerage in the pilot is a tenant, and Full Pilot explicitly targets 1–2 pilot brokerages —
this is real from the first real customer, not a hypothetical future need. Retrofitting tenant
isolation into a schema built without it is one of the most expensive mistakes to fix later in a
multi-customer SaaS product. Building it in from the first migration costs almost nothing extra.

- Row-level tenant isolation (a `brokerage_id` column enforced at the query layer, not just an
  application-level convention) rather than a separate database per brokerage
- Every brokerage-scoped table carries the tenant key from the first migration
- Auth and permissions are tenant-aware by construction
- Explicit week-1 scope for the tech lead, alongside the rest of the initial data model

### White-label: a real question, not a Phase 1 feature
Worth asking early because of the competitive landscape: Updater and MoveEasy — the closest
precedents to RealEZ's own marketplace model — are both white-labeled to brokerages as a
client-retention perk, and RealEZ's own revenue model (referral commission on post-closing
bookings) is loosely modeled on that same structure. It's not Phase 1 scope, though — the pilot
runs under RealEZ's own brand with 1–2 named pilot brokerages, and building a full white-label
activation flow before the core product is proven would trade time away from what does need
proving.

### What "architected for, not activated" concretely means
- Branding (logo, accent color, product name) lives as tenant-level configuration in the data model
  from the start, even with no UI yet to let a brokerage self-edit it
- Templates and emails reference tenant branding fields, falling back to RealEZ's own brand, rather
  than hardcoding "RealEZ" throughout the codebase
- No commitment to custom domains, branded sending infrastructure, or a self-serve config UI in
  Phase 1 — real work, deferred until there's an actual white-label customer to build it for

### Phase 2+ activation path
Turn the tenant-branding fields into a real settings UI, add custom domain/subdomain support, wire
branded email sending, and decide the commercial terms (does white-label change the revenue split).
None of this is a rebuild if the month-1 groundwork is done; all of it is a rebuild if it isn't.

---

## The 6-month plan: what ships, what doesn't

For Full Pilot specifically — the literal 6-month plan.

**Ships in 6 months:**
- Core transaction workflow (listing → offer → contract → closing) for 2–3 pilot states
- In-house ESIGN/UETA-compliant e-signature engine, reviewed by outside counsel
- Transitional Document: structured, personalized, gap-detection logic feeding the marketplace
- Merchant Integration marketplace: vendor onboarding, real payment processing, commission tracking
- Native iOS + Android apps for all 5 portals (Admin, Broker, Agent, Client, Vendor)
- Escrow-partner integration (orchestration, not direct custody) for earnest-money tracking
- Multi-tenant data architecture supporting multiple brokerages
- Jurisdiction rules engine covering the 2–3 pilot states' real forms and disclosure timing
- Basic Admin/Broker reporting and revenue analytics
- Pen test and remediation before pilot launch

**Explicitly not this phase:**
- Direct earnest-money custody (self-licensed escrow or broker-trust) — licensing timeline alone
  exceeds 6 months
- White-label branding activated for a partner brokerage — architected for, not turned on
- MLS/IDX integration — a real competitive gap, not attempted in Phase 1
- Expansion beyond the initial 2–3 pilot states
- Any LLM-backed client-facing chat or reasoning — the existing assistant stays scripted
- SOC 2 or similar formal certification — sound practices in place, not a certification
- International markets — domestic US pilot only

Lean Pilot runs the same list minus what's already off the table by design (1 state not 2–3,
3rd-party e-signature not in-house, no custody path to defer) — native mobile for all 5 portals
ships in both.

---

## Full Pilot

### Objective
Live pilot with 1–2 real brokerages across 2–3 states by month 6.

### Key inputs
| | |
|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant |
| Mobile | Native apps for all 5 portals |
| Pilot geography | 2–3 states |
| Money handling | RealEZ holds/moves earnest money directly (see the detailed risk above) |
| Timeline | 6 months |

### Team (4 new FTE hires + 1 project-based)
Existing: You (architect, AWS, backend — **hands-on**), 1 FTE Backend Engineer, 1 FTE Flutter
Engineer.

New: Senior Backend Engineer #2 (tech lead — also covers DevOps/foundations, no dedicated platform
hire), HR/Payroll/Admin, QA/Automation Engineer, Project Manager, plus UI/UX Designer
(project-based, not FTE). No GTM or Compliance hire — both cofounder-owned. No second mobile
engineer.

### Timeline shape
Months 1–2 Foundation (CI/CD, IaC, security baseline required week 1; QA starts immediately, not
month 3; auth, multi-tenancy, AWS prod; e-signature engine begins; jurisdiction rules design;
hiring ramp) → Months 3–4 Build (e-sig legal review, jurisdiction rules + forms, escrow-partner
sandbox, marketplace, native mobile build across all 5 portals) → Months 5–6 Harden & Launch (pen
test, counsel sign-off, app store, pilot onboarding).

### Exit criteria
10–20 real transactions closed end-to-end; e-signature engine approved by outside counsel;
escrow-partner trust flow with zero reconciliation discrepancies; native iOS + Android apps live
for all 5 portals; jurisdiction rules validated for all pilot states; pen test remediated.

### Top risks
1. Money-transmitter/escrow licensing arriving late or being shortcut
2. Native mobile apps for all 5 portals resting on one Flutter engineer — a much bigger ask than
   Agent + Client alone, and the risk most worth watching
3. Legal review as a bottleneck across e-sig, escrow-partner agreements, and 2–3 state pilot contracts
4. Jurisdiction-rules workload across 2–3 states may still warrant using more of the remaining
   headcount headroom

---

## Lean Pilot

### Objective
Product ready for a live pilot with 1–2 real brokerages in a single state, contingent on Compliance
and GTM (other cofounders) landing on a compatible timeline.

### Key inputs
| | |
|---|---|
| Your role | Team, vision, roadmap, architecture — not hands-on |
| E-signature | 3rd-party integration |
| Pilot geography | 1 state |
| Money handling | No direct earnest-money custody |
| Product focus | Transitional Document + Merchant Integration |
| Mobile | Native apps for all 5 portals |
| Timeline | 5 months (4 if hiring lands fast) |

### Two product pillars
- **Transitional Document — the core deliverable.** A guided, structured record capturing a
  property's condition, inclusions, known issues, and history. Every disclosed gap seeds a
  marketplace recommendation.
- **Merchant Integration — the revenue engine.** Vendors onboard with real listings and pricing,
  surface through gap-driven recommendations, and get paid automatically through the platform.

### Team (4 new FTE hires + 1 project-based)
Identical roster to Full Pilot, minus the founder being hands-on: Senior Backend Engineer #2 (tech
lead), HR/Payroll/Admin, QA/Automation Engineer, Project Manager, plus project-based UI/UX
Designer.

### Timeline shape
Month 1 Foundation (CI/CD, IaC, security baseline required week 1; QA starts immediately, not
month 2; auth, multi-tenancy, single-state data model, AWS; e-sig vendor sandbox; jurisdiction
rules for the one state) → Months 2–3 Core Build (both pillars, e-sig wired in, native mobile build
across all 5 portals, QA continuous throughout) → Months 4–5 Test & Polish (regression + pen test,
app store, UX polish, go/no-go).

### Exit criteria
Transitional Document feature-complete; Merchant Integration live with real payments and commission
tracking; 3rd-party e-signature wired in; jurisdiction rules validated for the pilot state; native
apps live for all 5 portals; QA suite passing, pen-test findings remediated.

### Top risks
1. Hiring four seniors fast enough to hit the 5-month window
2. E-sig vendor contracting delay blocking backend integration
3. Native mobile apps for all 5 portals resting on one Flutter engineer, on a tighter timeline than
   Full Pilot's 6 months
4. Testing compressed into the last two months, even with QA starting earlier

### Dependency checkpoints owed by GTM/Compliance cofounders
Final pilot state confirmed (end month 1); e-signature vendor selected/contracted (end month 1);
pilot brokerage identified/contracted (by month 3–4).

---

## Scope matrix

| Dimension | Full Pilot | Lean Pilot |
|---|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant | 3rd-party integration |
| Money custody | Direct earnest-money custody (flagged high-risk) | None |
| Pilot geography | 2–3 states | 1 state |
| Product focus | Full transaction lifecycle | Transitional Document + Merchant Integration |
| Mobile | Native apps for all 5 portals, 1 Flutter engineer (flagged risk) | same |
| Founder's role | Hands-on | Non-coding |
| DevOps/Platform | Tech lead + founder, no dedicated hire, required week 1 | same |
| QA timing | Month 1, with foundations | same |
| GTM / Compliance ownership | Other cofounders | same |
| Multi-tenancy | Row-level isolation from month 1 | same |
| White-label | Architected for, not activated | same |
| New hires | 4 FTE + 1 project-based (3–4 more fit within 8–10 headroom, left open) | same |
| Timeline | 6 months | 5 months |
| Est. build-team cost | See [Cost](#cost) | See [Cost](#cost) |

---

## Timeline

### Full Pilot (6 months)
Months 1–2 Foundation (foundations required week 1, QA from month 1) → Months 3–4 Build → Months
5–6 Harden & Launch.

### Lean Pilot (5 months)
Month 1 Foundation (foundations required week 1, QA from month 1) → Months 2–3 Core Build → Months
4–5 Test & Polish.

---

## Dependencies

External, owed by other cofounders, in both scenarios: pilot state confirmed (gates jurisdiction
rules); e-signature vendor contracted (gates e-sig integration); pilot brokerage contracted (gates
onboarding/go-live).

Internal: CI/CD + IaC + security baseline is a required week-1 deliverable for the tech lead and
founder, in both scenarios (this used to differ between plans — it doesn't anymore). Transitional
Document feeds Merchant Integration; QA + security review gate go/no-go together with onboarding
readiness. Full Pilot's mobile node covers all 5 portals over 2–3 states of jurisdiction rules;
Lean Pilot runs the same graph over 1 state — the dependency shape itself is identical.

---

## Team — who we actually need

### The core idea
AI coding assistance means a senior team covers more ground than the same size team could before.
A tech lead with Claude, using well-reviewed Terraform/CI templates, can stand up and maintain
solid infrastructure without a dedicated platform hire. One senior Flutter engineer, the same way,
is expected to cover native apps for all 5 portals without a second — a bigger ask than before, and
the risk most worth watching. Budget headroom exists, but it doesn't get spent just because it's
there — it stays open for a role that's actually justified when one comes up.

### Already on the team
You (hands-on in Full Pilot, non-coding in Lean Pilot), FTE Backend Engineer, FTE Flutter Engineer
— the two developers already building today.

### Hiring plan — tiered, same in both scenarios

**Tier 1 — Week 1:** Senior Backend Engineer #2 (tech lead — architecture, review, and
CI/CD/IaC/security baseline in week 1 via AI-assisted scaffolding; the highest-leverage hire); HR/
Payroll/Admin (onboards everyone else joining).

**Tier 2 — Weeks 2–4:** QA/Verification Engineer (starts month 1 in both scenarios now); UI/UX
Designer (project-based, not FTE).

**Tier 3 — Month 2:** Project Manager (once there are 5+ builders and real dependency dates to
track).

### 7 hired, headroom left fully open
4 new FTE + 2 existing + 1 project-based designer = 7 people against a confirmed 8–10 budget
headroom. That headroom stays unspent on purpose: neither DevOps/Platform nor a second mobile
engineer earned a seat on their own merits. If a real need shows up — a second backend engineer for
Full Pilot's 2–3-state jurisdiction workload, a security engineer once there's production traffic
to justify it, or a second mobile engineer if native apps for all 5 portals slip — the room is
there.

### What's not hired, and why
- A dedicated DevOps/Platform Engineer — the tech lead, with AI-assisted IaC/CI scaffolding, covers
  this at this team size. Not a budget call; revisit once there's real production traffic and
  on-call load to justify a dedicated owner.
- A second mobile engineer — one senior Flutter engineer with AI assistance is expected to cover
  native apps for all 5 portals. The tightest assumption in this plan, worth watching closely now
  that mobile scope covers every persona, not just Agent + Client.
- Compliance & Trust Operations Lead — not this team's job, in both scenarios, not a budget call.
- A dedicated AI-tooling specialist — a practice, not a role, at this size.
- A dedicated security engineer as an FTE — contract a pen test, unless the headroom above is used here.
- Any GTM hire on the build side.

---

## Job descriptions

Five open roles have full JDs, ready to post: Senior Backend Engineer (tech lead), QA/Automation
Engineer, Project Manager, HR/Payroll/Admin, and the project-based UI/UX Designer. Written in
Husig's own careers format (see `husig_hugo/themes/husig/content/careers/` for precedent): About
Husig + About RealEZ, a stack table, Must-Have/Nice-to-Have, First 90 Days, How to Apply.

See `jd.html` for the full text of each, and `jd/*.md` for Hugo-ready versions with matching
frontmatter that can be dropped directly into husig_hugo's careers content folder.

---

## Tech stack (greenfield assessment)

Assume nothing exists yet — every choice argued on its own merits for this specific product (a
document- and forms-heavy real-estate transaction platform, mobile app, 5 portal types, real legal/
financial exposure), not on what happens to already be running.

### Backend language
**Recommendation: Python (FastAPI).** Pydantic's validation model fits this product's deeply
nested, rules-heavy data; API-first design serves mobile and every web portal from one source of
truth; strong document/PDF and data-processing libraries relevant to the Transitional Document and
jurisdiction rules; excellent AI-assistant support and Nepal talent pool.

Also considered: **Django** (batteries-included, but its server-rendered-first design gives up most
of that advantage once used purely as a mobile API); **Node/TypeScript** (strong async I/O for
webhook-heavy integration, the closest real alternative, but a weaker document-processing
ecosystem); **Ruby/Rails** (a genuine CRUD-startup fit, smaller Nepal pool, slowing momentum);
**Go** (great performance the product doesn't need at pilot scale, verbose for CRUD work); **Rust**
(steepest learning curve, smallest talent pool, AI generation still lags for it); **Java/Kotlin**
(heaviest ceremony here).

### Database
**Recommendation: PostgreSQL, managed via RDS.** The product's actual shape — transactions,
parties, documents, jurisdiction rules, and the commission ledger, all deeply related, plus real
Broker/Admin reporting needs — is a relational problem. JSONB covers the parts that need schema
flexibility without giving up relational integrity elsewhere; row-level security pairs directly
with tenant isolation; RDS handles backups/patching/failover without a dedicated DBA.

Also considered: **DynamoDB** (scales horizontally with little ops effort, but forces awkward
modeling for deeply relational data with many access patterns and painful ad hoc reporting — wrong
shape for the system of record, though a legitimate secondary store later for something narrow like
an activity/audit-event log); **MySQL via RDS** (a legitimate relational alternative, but weaker
JSON/extensibility than Postgres with no offsetting advantage here); **self-hosted Postgres on EC2**
(marginally cheaper, but backups/patching/failover become the tech lead's manual burden for a
savings that isn't the actual constraint yet).

### Mobile
**Recommendation: Flutter.** One codebase rendered consistently (Skia/Impeller) across platforms —
a real advantage with one designer producing one set of screens for all 5 portals. React Native has
the larger talent pool but renders through native components that can drift subtly per platform, a
bigger design/QA burden without dedicated cross-platform QA. Native (Swift+Kotlin) is disqualified
by needing two codebases for a single mobile engineer covering every persona.

### Web frontend
**Recommendation: server-rendered (Jinja2 + HTMX).** No build step, simpler for AI to generate
safely, matches the actual UI shape (forms, tables, documents across 5 portals, not real-time
collaboration). An SPA framework (React/Vue) adds real ongoing complexity for interactivity this
product doesn't need yet — revisit only if Merchant Integration's marketplace browsing genuinely
needs it post-pilot.

### Infrastructure: AWS reference architecture
**AWS** — grounded in the founder's own hands-on expertise, a first-principles reason, not a
default. Concretely for Phase 1:

| | |
|---|---|
| Compute | ECS Fargate for the API — no server fleet to patch; App Runner is a lighter alternative, Fargate gives more VPC/networking control |
| Database | RDS PostgreSQL, Multi-AZ in prod, single-AZ in staging |
| Object storage | S3 — signed e-sig documents, Transitional Document attachments, vendor assets |
| CDN | CloudFront in front of S3 and static assets |
| Networking | VPC, private subnets for DB and app, public ALB for API ingress — the database is never directly internet-reachable |
| Secrets | Secrets Manager / Parameter Store |
| Observability | CloudWatch for logs/metrics, plus a dedicated error tracker for application-level errors |
| IaC | Terraform or AWS CDK from week 1, owned jointly by the founder and the tech lead |

Deliberately excluded from Phase 1: Kubernetes/EKS (real operational overhead a lean team doesn't
need at this scale) and multi-region deployment (one region is enough for a US pilot).

### How we build: AI-native with human-in-the-loop, everywhere
Every developer has Claude coding access, in both scenarios. **Safe to AI-generate with light
review:** test scaffolding, CRUD boilerplate, UI screens matching the design system, documentation,
migrations following a known shape, refactors with full test coverage. **Always senior-authored or
line-by-line human-verified:** jurisdiction rules logic, commission/payment math, e-signature
webhook/callback handling, auth/permissions logic, the Transitional Document's gap-detection logic.
Enforced by mandatory PR review (1 senior approval standard, 2 for the always-verified column) —
"AI wrote it and it looked fine" is not a merge criterion.

---

## Cost

Indicative planning figures, not a quote — verify current rates locally. Converted at roughly NPR
133/USD. Team cost is identical across both scenarios (7 people); only timeline length and AWS
differ.

**Publishing note:** the HTML site can hide everything in this section via `assets/js/config.js`
(`showPricing: false`) for external sharing, without deleting the underlying content. This markdown
file always shows full detail — don't share it externally if pricing should stay hidden.

### Team — rate assumptions
| Role | Status | NPR/month | USD/month |
|---|---|---|---|
| Backend Engineer | Existing FTE | 180,000 | ~1,350 |
| Flutter Engineer | Existing FTE | 180,000 | ~1,350 |
| Senior Backend Engineer #2 — tech lead | New FTE | 200,000 | ~1,500 |
| QA/Automation Engineer | New FTE | 140,000 | ~1,050 |
| Project Manager | New FTE | 160,000 | ~1,200 |
| HR/Payroll/Admin *(generalist rate)* | New FTE | 90,000 | ~675 |
| **Gross FTE payroll, 7 people** | | **1,130,000** | **~8,495** |

UI/UX Designer: not FTE — project-based, flat NPR 4,00,000, priced as a one-time cost.

### Team monthly burn (identical in both scenarios)
Payroll 1,130,000 + statutory/benefits ~18% (203,400) + office (8 seats @ 12,000 = 96,000) +
contingency 10% (142,940) = **≈ NPR 1,572,340/month (~$11,820)**.

### Infrastructure (AWS) — separated
Lean Pilot: ~$400/month (staging+prod, small RDS, S3/CDN, backups, Secrets Manager, CloudWatch — 1
state, 3rd-party e-sig keeps this light). Full Pilot: ~$500/month (same, plus in-house e-sig
storage/audit-trail and 2–3 states' jurisdiction data). AWS bills in USD regardless of team
location. See the reference architecture above.

### Other Phase 1 costs
AI coding tool subscriptions, 4 technical seats — 2 backend, 2 mobile (~$400/mo); PM/comms tools
(~$70/mo); error tracking/monitoring (~$20/mo); Apple Developer Program ($99/yr); Google Play
registration ($25 once); domain+SSL (~$20/yr, SSL via ACM is free). Recurring monthly total ~$490
(~NPR 65,170).

### One-time setup (identical in both scenarios)
| | NPR |
|---|---|
| Hardware, standard (laptop 200,000 + monitor + dongle) × 4 new hires (tech lead, QA, PM, HR/Admin) | 920,000 |
| Test device lab (1 iPhone + 2 Android phones, for testing across all 5 portals) | 180,000 |
| UI/UX Designer project fee | 400,000 |
| Office inverter/UPS (load-shedding backup) | 100,000 |
| App Store + Play Store + domain (first-year fees) | 19,150 (~$144) |
| **Total one-time setup** | **≈ 1,619,150 (~$12,175)** |

Assumes the 2 existing developers already have suitable machines, including the Flutter engineer's
Mac for iOS builds.

### Total Phase 1, by scenario
- **Full Pilot (6 months):** (1,572,340 + 66,500 + 65,170) × 6 = 10,224,060, + one-time 1,619,150 =
  **≈ NPR 11,843,210 (~$89,050)**
- **Lean Pilot (5 months):** (1,572,340 + 53,200 + 65,170) × 5 = 8,453,550, + one-time 1,619,150 =
  **≈ NPR 10,072,700 (~$75,735)**

**Excluded from every figure:** founder compensation, GTM and Compliance costs (owned by other
cofounders), e-signature vendor per-envelope fees. 3–4 more people fit within the stated 8–10
headroom without changing this budget's order of magnitude, left open rather than pre-committed to
a role.

---

*Last generated alongside the HTML pages in this repo. Update both together when scope changes.*
