# RealEZ Phase 1 — Complete Planning Knowledge

A single-file export of everything in this repo. See the linked HTML pages for the same content
with tables, diagrams, and tabs — this file exists so the knowledge doesn't only live in a browser.

Founder/business planning notes, not product documentation — kept separate from the RealEZ app
repo on purpose. Figures throughout are planning estimates, not commitments.

---

## Contents

1. [Three scenarios](#three-scenarios)
2. [The team is unified across all three scenarios](#the-team-is-unified-across-all-three-scenarios)
3. [The earnest-money custody risk, in detail](#the-earnest-money-custody-risk-in-detail)
4. [Multi-tenancy & white-label](#multi-tenancy--white-label)
5. [The 6-month plan: what ships, what doesn't](#the-6-month-plan-what-ships-what-doesnt)
6. [Scenario A — Full Scope](#scenario-a--full-scope)
7. [Scenario B — Lean Pilot](#scenario-b--lean-pilot)
8. [Scenario C — Foundations-First (recommended)](#scenario-c--foundations-first-recommended)
9. [Scope matrix](#scope-matrix)
10. [Timeline](#timeline)
11. [Dependencies](#dependencies)
12. [Team — who we actually need](#team--who-we-actually-need)
13. [Tech stack (greenfield assessment)](#tech-stack-greenfield-assessment)
14. [Cost](#cost)

---

## Three scenarios

| Scenario | Shape |
|---|---|
| **A — Full Scope** | 6 months, 2–3 states, in-house ESIGN-compliant e-signature, direct earnest-money custody |
| **B — Lean Pilot** | 5 months, 1 state, 3rd-party e-signature, no custody |
| **C — Foundations-First** | Identical team and cost to B — the difference is sequencing and discipline, not headcount |

**Recommendation: Scenario C.** Same team, same cost as B — QA starts a month earlier, and
engineering foundations are the DevOps/Platform Engineer's required week-1 deliverable rather than
ad hoc.

AI-native building with human-in-the-loop review is the default across all three scenarios, not a
distinguishing trait of any one of them. Every developer has Claude coding access.

## The team is unified across all three scenarios

**8 people total (6 new FTE hires + 2 existing), plus 1 project-based designer — the same roster in
A, B, and C.** This is the low end of a confirmed 8–10 person budget headroom that costs nothing
extra to use:

- **6 new FTE hires:** Senior Backend Engineer #2 (the tech lead), DevOps/Platform Engineer, Second
  Mobile/Flutter Engineer, QA/Automation Engineer, Project Manager, HR/Payroll/Admin
- **1 project-based engagement, not an FTE:** a UI/UX Designer, at a flat NPR 4,00,000 project fee
- **No Compliance & Trust Operations Lead anywhere** — even in Scenario A's direct-custody path,
  compliance is owned by other cofounders, not staffed inside the build team
- **DevOps/Platform Engineer and a second mobile engineer are back in**, having been cut in an
  earlier, budget-constrained pass — they were cut for cost discipline, not because the work wasn't
  real, and the budget headroom removes that constraint

What still differs by scenario: product/legal scope (states, e-signature approach, money custody),
whether the founder is hands-on (A) or not (B, C), and QA timing (month 3 in A, month 2 in B, month
1 in C).

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
Every brokerage in the pilot is a tenant, and Scenario A explicitly targets 1–2 pilot brokerages —
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

For Scenario A specifically — the literal 6-month plan. Same timeline as before; the extra
headcount (8 FTE instead of 6) buys robustness within this scope, not more scope.

**Ships in 6 months:**
- Core transaction workflow (listing → offer → contract → closing) for 2–3 pilot states
- In-house ESIGN/UETA-compliant e-signature engine, reviewed by outside counsel
- Transitional Document: structured, personalized, gap-detection logic feeding the marketplace
- Merchant Integration marketplace: vendor onboarding, real payment processing, commission tracking
- Native iOS + Android apps for Agent and Client
- Escrow-partner integration (orchestration, not direct custody) for earnest-money tracking
- Broker/Admin/Vendor as responsive web portals (not native)
- Multi-tenant data architecture supporting multiple brokerages
- Jurisdiction rules engine covering the 2–3 pilot states' real forms and disclosure timing
- Basic Admin/Broker reporting and revenue analytics
- Pen test and remediation before pilot launch

**Explicitly not this phase:**
- Direct earnest-money custody (self-licensed escrow or broker-trust) — licensing timeline alone
  exceeds 6 months
- Native mobile apps for Broker/Admin/Vendor — web-only in Phase 1
- White-label branding activated for a partner brokerage — architected for, not turned on
- MLS/IDX integration — a real competitive gap, not attempted in Phase 1
- Expansion beyond the initial 2–3 pilot states
- Any LLM-backed client-facing chat or reasoning — the existing assistant stays scripted
- SOC 2 or similar formal certification — sound practices in place, not a certification
- International markets — domestic US pilot only

B and C run the same list minus what's already off the table by design (1 state not 2–3,
3rd-party e-signature not in-house, no custody path to defer).

---

## Scenario A — Full Scope

### Objective
Live pilot with 1–2 real brokerages across 2–3 states by month 6.

### Key inputs
| | |
|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant |
| Mobile | 2 Flutter engineers — native Agent + Client |
| Pilot geography | 2–3 states |
| Money handling | RealEZ holds/moves earnest money directly (see the detailed risk above) |
| Timeline | 6 months |

### Team (6 new FTE hires + 1 project-based)
Existing: You (architect/AWS/backend/CTO, **hands-on**), 1 FTE Backend Engineer, 1 FTE Flutter
Engineer.

New: Senior Backend Engineer #2 (tech lead), DevOps/Platform Engineer, HR/Payroll/Admin, Second
Mobile/Flutter Engineer, QA/Automation Engineer, Project Manager, plus UI/UX Designer (project-based,
NPR 4,00,000, not FTE). No GTM or Compliance hire — both cofounder-owned.

### Timeline shape
Months 1–2 Foundation (auth, multi-tenancy, AWS prod, e-signature engine begins, jurisdiction rules
design, hiring ramp) → Months 3–4 Build (e-sig legal review, jurisdiction rules + forms,
escrow-partner sandbox, marketplace, mobile Agent+Client feature-complete) → Months 5–6 Harden &
Launch (pen test, counsel sign-off, app store, pilot onboarding).

### Exit criteria
10–20 real transactions closed end-to-end; e-signature engine approved by outside counsel;
escrow-partner trust flow with zero reconciliation discrepancies; native iOS + Android for Agent and
Client; jurisdiction rules validated for all pilot states; pen test remediated.

### Top risks
1. Money-transmitter/escrow licensing arriving late or being shortcut
2. Legal review as a bottleneck across e-sig, escrow-partner agreements, and 2–3 state pilot contracts
3. Founder bandwidth split across architecture, AWS, backend, and leadership
4. Jurisdiction-rules workload across 2–3 states may still warrant using more of the remaining
   headcount headroom

---

## Scenario B — Lean Pilot

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
| Timeline | 5 months, last two for testing/polish |

### Two product pillars
- **Transitional Document — the core deliverable.** A guided, structured record capturing a
  property's condition, inclusions, known issues, and history. Every disclosed gap seeds a
  marketplace recommendation.
- **Merchant Integration — the revenue engine.** Vendors onboard with real listings and pricing,
  surface through gap-driven recommendations, and get paid automatically through the platform.

### Team (6 new FTE hires + 1 project-based)
Same roster as Scenario A minus the founder being hands-on: Senior Backend Engineer #2 (tech lead),
DevOps/Platform Engineer, HR/Payroll/Admin, Second Mobile/Flutter Engineer, QA/Automation Engineer,
Project Manager, plus project-based UI/UX Designer.

### Timeline shape
Month 1 Foundation (auth, multi-tenancy, single-state data model, AWS, e-sig vendor sandbox,
jurisdiction rules, hiring ramp) → Months 2–3 Core Build (both pillars, e-sig wired in, Agent+Client
mobile, QA continuous from month 2) → Months 4–5 Test & Polish (regression + pen test, app store,
UX polish, go/no-go).

### Exit criteria
Transitional Document feature-complete; Merchant Integration live with real payments and commission
tracking; 3rd-party e-signature wired in; jurisdiction rules validated for the pilot state; native
Agent + Client apps; QA suite passing, pen-test findings remediated.

### Top risks
1. Hiring six seniors fast enough to hit the 5-month window
2. E-sig vendor contracting delay blocking backend integration
3. Testing compressed into the last two months

### Dependency checkpoints owed by GTM/Compliance cofounders
Final pilot state confirmed (end month 1); e-signature vendor selected/contracted (end month 1);
pilot brokerage identified/contracted (by month 3–4).

---

## Scenario C — Foundations-First (recommended)

### Objective
The same pilot-ready product as Scenario B, with engineering foundations as the DevOps/Platform
Engineer's required, checked-off week-1 deliverable, and QA starting alongside them instead of a
month later.

### The reasoning
Hires the exact same roles as B, at the exact same cost. The difference is entirely sequencing and
discipline: QA starts month 1 not month 2, and foundations (CI/CD, IaC, security baseline) are
required in week 1, not built ad hoc alongside features.

### Timeline shape
Month 1 splits into a parallel Foundations bar (the DevOps/Platform Engineer's required week-1
deliverable) alongside pillar design led by the tech lead. Months 2–3 Core Build, Months 4–5 Test &
Polish — same shape as B otherwise.

### Exit criteria
Everything in B's exit criteria, plus a CI pipeline enforcing lint/type-check/tests/security
scanning on every merge, infrastructure as code, and a written AI-usage policy.

### Top risks
1. Review discipline eroding under deadline pressure
2. E-sig vendor contracting delay (same as B)

---

## Scope matrix

| Dimension | A — Full Scope | B — Lean Pilot | C — Foundations-First (recommended) |
|---|---|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant | 3rd-party integration | 3rd-party integration |
| Money custody | Direct earnest-money custody (flagged high-risk) | None | None |
| Pilot geography | 2–3 states | 1 state | 1 state |
| Product focus | Full transaction lifecycle | Transitional Document + Merchant Integration | same |
| Mobile | 2 Flutter engineers, all three | same | same |
| Founder's role | Hands-on | Non-coding | Non-coding |
| DevOps/Platform | Dedicated FTE, ad hoc priority | same | Dedicated FTE, required week 1 |
| QA timing | Month 3 | Month 2 | Month 1, with foundations |
| GTM / Compliance ownership | Other cofounders, all three | same | same |
| Multi-tenancy | Row-level isolation from month 1, all three | same | same |
| White-label | Architected for, not activated, all three | same | same |
| New hires | 6 FTE + 1 project-based, all three (room for 2 more within 8–10) | same | same |
| Timeline | 6 months | 5 months | 5 months |
| Est. build-team cost | ~$105,000 over 6 months | ~$89,725 over 5 months | ~$89,725 over 5 months |

---

## Timeline

### Scenario A (6 months)
Months 1–2 Foundation → Months 3–4 Build → Months 5–6 Harden & Launch.

### Scenario B (5 months)
Month 1 Foundation → Months 2–3 Core Build → Months 4–5 Test & Polish.

### Scenario C (5 months)
Month 1 Foundations (tech lead + DevOps + HR/Admin land first; QA starts here, not month 2) in
parallel with Pillar design (2nd Mobile Eng, QA, PM land; Designer engaged) → Months 2–3 Core Build
→ Months 4–5 Test & Polish (same as B).

---

## Dependencies

External, owed by other cofounders: pilot state confirmed (gates jurisdiction rules); e-signature
vendor contracted (gates e-sig integration); pilot brokerage contracted (gates onboarding/go-live).

Internal: in Scenario C, CI/CD + IaC + security baseline is the DevOps/Platform Engineer's required
week-1 deliverable (same work, same owner in B, without the "required in week 1" priority);
Transitional Document feeds Merchant Integration; QA + security review gate go/no-go together with
onboarding readiness.

---

## Team — who we actually need

### The core idea
AI coding assistance means a senior team covers more ground than the same size team could before —
that's what made a lean team *viable*. It doesn't mean a dedicated platform owner or a second
mobile engineer stop being real risk reduction; it means a lean team could survive without them.
With budget headroom for 8–10 people, there's no reason to keep carrying that risk.

### Already on the team
You (hands-on in A, non-coding in B/C), FTE Backend Engineer, FTE Flutter Engineer — the two
developers already building today.

### Hiring plan — tiered, same across A, B, C

**Tier 1 — Week 1:** Senior Backend Engineer #2 (tech lead — architecture, review, the highest-
leverage hire); DevOps/Platform Engineer (CI/CD, IaC, security baseline as an actual job); HR/
Payroll/Admin (onboards everyone else joining).

**Tier 2 — Weeks 2–4:** Second Mobile/Flutter Engineer (native parity no longer rests on one
person); QA/Verification Engineer (starts as early as the scenario allows); UI/UX Designer
(project-based, NPR 4,00,000, not FTE).

**Tier 3 — Month 2:** Project Manager (once there are 6+ builders and real dependency dates to
track).

### 8 hired, room for up to 2 more
6 new FTE + 2 existing = 8, the low end of the 8–10 headroom. Real, uncommitted headroom: a second
backend engineer if Scenario A's 2–3-state jurisdiction workload needs it, or a security-focused
engineer once real production traffic justifies it over a contract pen test.

### What's still not hired, and why
- Compliance & Trust Operations Lead — not this team's job, in every scenario, not a budget call
- A dedicated AI-tooling specialist — a practice, not a role, at this size
- A dedicated security engineer as an FTE — contract a pen test, unless the headroom above is used here
- Any GTM hire on the build side

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
flexibility (jurisdiction-specific fields, the Transitional Document's variable structure) without
giving up relational integrity everywhere else; row-level security pairs directly with tenant
isolation; RDS handles backups/patching/failover without a dedicated DBA.

Also considered: **DynamoDB** (scales horizontally with little ops effort, but forces awkward
modeling for deeply relational data with many access patterns and painful ad hoc reporting — wrong
shape for the system of record, though a legitimate secondary store later for something narrow like
an activity/audit-event log); **MySQL via RDS** (a legitimate relational alternative, but weaker
JSON/extensibility than Postgres with no offsetting advantage here); **self-hosted Postgres on EC2**
(marginally cheaper, but backups/patching/failover become the DevOps engineer's manual burden for a
savings that isn't the actual constraint yet).

### Mobile
**Recommendation: Flutter.** One codebase rendered consistently (Skia/Impeller) across platforms —
a real advantage with one designer producing one set of screens for both. React Native has the
larger talent pool but renders through native components that can drift subtly per platform, a
bigger design/QA burden without dedicated cross-platform QA. Native (Swift+Kotlin) is disqualified
by needing two codebases for a small mobile team.

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
| IaC | Terraform or AWS CDK from week 1, owned jointly by the founder and the DevOps/Platform Engineer |

Deliberately excluded from Phase 1: Kubernetes/EKS (real operational overhead a lean team doesn't
need at this scale) and multi-region deployment (one region is enough for a US pilot).

### How we build: AI-native with human-in-the-loop, everywhere
Every developer has Claude coding access, in every scenario. **Safe to AI-generate with light
review:** test scaffolding, CRUD boilerplate, UI screens matching the design system, documentation,
migrations, refactors with full test coverage. **Always senior-authored or line-by-line
human-verified:** jurisdiction rules logic, commission/payment math, e-signature webhook/callback
handling, auth/permissions logic, the Transitional Document's gap-detection logic. Enforced by
mandatory PR review (1 senior approval standard, 2 for the always-verified column) — "AI wrote it
and it looked fine" is not a merge criterion.

---

## Cost

Indicative planning figures, not a quote — verify current rates locally. Converted at roughly NPR
133/USD. Team cost is identical across A, B, C (8 people); only timeline length and AWS differ.

### Team — rate assumptions
| Role | Status | NPR/month | USD/month |
|---|---|---|---|
| Backend Engineer | Existing FTE | 180,000 | ~1,350 |
| Flutter Engineer | Existing FTE | 180,000 | ~1,350 |
| Senior Backend Engineer #2 — tech lead | New FTE | 200,000 | ~1,500 |
| DevOps/Platform Engineer | New FTE | 180,000 | ~1,350 |
| Second Mobile/Flutter Engineer | New FTE | 180,000 | ~1,350 |
| QA/Automation Engineer | New FTE | 140,000 | ~1,050 |
| Project Manager | New FTE | 160,000 | ~1,200 |
| HR/Payroll/Admin *(generalist rate)* | New FTE | 90,000 | ~675 |
| **Gross FTE payroll, 8 people** | | **1,310,000** | **~9,850** |

UI/UX Designer: not FTE — project-based, flat NPR 4,00,000, priced as a one-time cost.

### Team monthly burn (identical in A, B, C)
Payroll 1,310,000 + statutory/benefits ~18% (235,800) + office (9 seats @ 12,000 = 108,000) +
contingency 10% (165,380) = **≈ NPR 1,819,180/month (~$13,680)**.

### Infrastructure (AWS) — separated
B, C: ~$400/month (staging+prod, small RDS, S3/CDN, backups, Secrets Manager, CloudWatch — 1 state,
3rd-party e-sig keeps this light). A: ~$500/month (same, plus in-house e-sig storage/audit-trail
and 2–3 states' jurisdiction data). AWS bills in USD regardless of team location.

### Other Phase 1 costs
AI coding tool subscriptions, 5 technical seats (~$500/mo); PM/comms tools (~$70/mo); error
tracking/monitoring (~$20/mo); Apple Developer Program ($99/yr); Google Play registration ($25
once); domain+SSL (~$20/yr, SSL via ACM is free). Recurring monthly total ~$590 (~NPR 78,470).

### One-time setup (identical in A, B, C)
| | NPR |
|---|---|
| Hardware, standard (laptop 200,000 + monitor + dongle) × 5 new hires | 1,150,000 |
| Hardware, premium — 2nd Mobile Engineer (Mac for iOS builds: 300,000 laptop + accessories) | 330,000 |
| Test device lab (1 iPhone + 2 Android phones) | 180,000 |
| UI/UX Designer project fee | 400,000 |
| Office inverter/UPS (load-shedding backup) | 100,000 |
| App Store + Play Store + domain (first-year fees) | 19,150 (~$144) |
| **Total one-time setup** | **≈ 2,179,150 (~$16,385)** |

### Total Phase 1, by scenario
- **A (6 months):** (1,819,180 + 66,500 + 78,470) × 6 = 11,784,900, + one-time 2,179,150 =
  **≈ NPR 13,964,050 (~$105,000)**
- **B (5 months):** (1,819,180 + 53,200 + 78,470) × 5 = 9,754,250, + one-time 2,179,150 =
  **≈ NPR 11,933,400 (~$89,725)**
- **C (5 months):** identical to B — **≈ NPR 11,933,400 (~$89,725)**

**Excluded from every figure:** founder compensation, GTM and Compliance costs (owned by other
cofounders in all three, including A), e-signature vendor per-envelope fees. 2 more people fit
within the stated 8–10 headroom without changing this budget's order of magnitude.

---

*Last generated alongside the HTML pages in this repo. Update both together when scope changes.*
