# RealEZ Phase 1 — Complete Planning Knowledge

A single-file export of everything in this repo. See the linked HTML pages for the same content
with tables, diagrams, and tabs — this file exists so the knowledge doesn't only live in a browser.

Founder/business planning notes, not product documentation — kept separate from the RealEZ app
repo on purpose. Figures throughout are planning estimates, not commitments.

---

## Contents

1. [Three scenarios](#three-scenarios)
2. [Scenario A — Full Scope](#scenario-a--full-scope)
3. [Scenario B — Lean Pilot](#scenario-b--lean-pilot)
4. [Scenario C — Foundations-First (recommended)](#scenario-c--foundations-first-recommended)
5. [Scope matrix](#scope-matrix)
6. [Timeline](#timeline)
7. [Dependencies](#dependencies)
8. [Team — who we actually need](#team--who-we-actually-need)
9. [Tech stack](#tech-stack)
10. [Engineering foundations](#engineering-foundations)
11. [Cost](#cost)

---

## Three scenarios

| Scenario | Shape |
|---|---|
| **A — Full Scope** | 6 months, 2–3 states, in-house ESIGN-compliant e-signature, direct earnest-money custody |
| **B — Lean Pilot** | 5 months, 1 state, 3rd-party e-signature, no custody, Nepal-costed team |
| **C — Foundations-First** | Identical team and cost to B — the difference is sequencing and discipline, not headcount |

**Recommendation: Scenario C.** Same team, same cost as B — QA starts a month earlier, and
engineering foundations are a required week-1 deliverable rather than something that happens if
there's time.

**AI-native building — with human-in-the-loop review — is the default across all three scenarios,
not a distinguishing trait of any one of them.** Every developer, in every scenario, has Claude
coding access. It's also a big part of *why* the teams below are as lean as they are: a senior
engineer with AI-assisted tooling covers more ground than the same person could before. See
[Tech stack](#tech-stack) and [Team](#team--who-we-actually-need).

---

## Scenario A — Full Scope

### Objective
Live pilot with 1–2 real brokerages across 2–3 states by month 6: real agents, real clients, real
transactions, real legal and financial stakes.

### Key inputs
| | |
|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant |
| Mobile | 1 Flutter engineer, no 2nd hire (flagged risk) |
| Pilot geography | 2–3 states |
| Money handling | RealEZ holds/moves earnest money directly |
| Timeline | 6 months |

### Flagged risk
Direct earnest-money custody in 2–3 states inside 6 months is a **state-licensing problem, not an
engineering one** — broker trust accounts / escrow licenses are typically per-state and slow to
obtain properly. Getting it wrong is a regulatory and criminal-liability risk for the company, not
just a bug.

**Recommendation:** partner with a licensed escrow/title company for Phase 1 (RealEZ still looks
and feels like it's tracking the money). Treat true self-custody as a Phase 2+ goal, with the
Compliance hire spending part of Phase 1 laying groundwork for it.

### Team (5 new hires, plus 2 existing + hands-on founder)
Existing: You (architect/AWS/backend/CTO, **hands-on**), 1 FTE backend dev, 1 FTE Flutter dev.

New hires:
1. **Senior Backend Engineer #2** — highest-leverage engineering hire.
2. **Compliance & Trust Operations Lead** — owns the escrow-partner relationship, works with
   outside counsel, RESPA/TRID/state-disclosure compliance, lays groundwork for eventual direct
   custody.
3. **Product/UX Designer** — web + native mobile design system and onboarding flows.
4. **QA/Automation Engineer** — test automation plus compliance-critical suites.
5. **HR/Payroll/Admin** — onboarding, payroll, and admin for the growing team.

No dedicated GTM hire — pilot brokerage sourcing is owned by other cofounders in every scenario,
kept consistent across the board. No second mobile engineer either — one senior Flutter engineer
with AI-assisted development is the default bet everywhere on this site.

DevOps/Platform: covered by the founder's own AWS expertise (hands-on in this scenario), with
contract security-review help budgeted before pilot launch.

### Timeline shape
- **Months 1–2 — Foundation:** real auth + multi-tenancy, production AWS footprint, e-signature
  engine begins, jurisdiction rules design, trust-custody decision point, mobile app shell, hiring
  ramp.
- **Months 3–4 — Build:** e-sig legal review, jurisdiction rules + forms built, escrow-partner
  sandbox integration, marketplace productionized, mobile Agent+Client feature-complete, QA builds
  compliance-critical test suites continuously, pilot brokerage sourced/contracted (by GTM
  cofounders).
- **Months 5–6 — Harden & Launch:** pen test + remediation, counsel sign-off, app store submission
  (budget 2–4 weeks review lead time), pilot onboarding, rapid-iteration feedback loop, go/no-go.

### Exit criteria
- 10–20 real transactions closed end-to-end across the pilot brokerages
- E-signature engine reviewed and approved by outside counsel, no open exceptions
- Escrow-partner trust flow running with zero reconciliation discrepancies
- Native iOS + Android apps live for Agent and Client at minimum
- Jurisdiction rules validated for all pilot states by counsel/a domain expert
- Pen test complete, critical/high findings remediated

### Top risks
1. Money-transmitter/escrow licensing arriving late or being shortcut
2. Agent + Client native parity resting on one senior Flutter engineer, not two
3. Legal review as a bottleneck across e-sig, escrow-partner agreements, and 2–3 state pilot contracts
4. Founder bandwidth split across architecture, AWS, backend, and leadership

---

## Scenario B — Lean Pilot

### Objective
Have the product ready — technically and legally-reviewable — for a live pilot with 1–2 real
brokerages in a single state, contingent on Compliance and GTM (owned by other cofounders) landing
their pieces on a compatible timeline.

### Key inputs
| | |
|---|---|
| Your role | Team, vision, roadmap, architecture — **not hands-on building** |
| How we build | AI-native, every developer has Claude coding access, mandatory HITL review |
| E-signature | 3rd-party integration for v1, not built in-house |
| Pilot geography | 1 state |
| Money handling | No direct earnest-money custody |
| Product focus | Transitional Document and Merchant Integration are the two priorities |
| Team location | Nepal-based, all senior |
| Timeline | 4–5 months, last two for testing/polish |

### Still a build-team problem, even off the compliance track
Direct earnest-money custody is a hard technical dependency, not just a licensing one. Engineering
needs that answer from Compliance by end of month 1; if it isn't in hand by then, this plan
defaults to the escrow-partner/orchestration model and treats direct custody as a Phase 2+
migration.

### Two product pillars
- **Transitional Document — the core deliverable.** A guided, structured record capturing a
  property's condition, inclusions, known issues, and history. Every disclosed gap seeds a
  marketplace recommendation.
- **Merchant Integration — the revenue engine.** Vendors onboard with real listings and pricing,
  surface through gap-driven recommendations, and get paid automatically through the platform.

### Team (5 new hires, plus 2 existing, founder non-coding)
Existing: You (architect/CTO — direction, hiring, architecture reviews, unblocking), 1 FTE senior
backend dev, 1 FTE senior Flutter dev.

New hires:
1. **Senior Backend Engineer #2** — splits ownership of the two pillars with the existing backend
   dev, and co-owns architecture/infrastructure setup with the founder.
2. **QA/Automation Engineer** — test automation building continuously from month 2.
3. **Product/UX Designer** — both pillars are genuinely hard UX problems.
4. **Project Manager** — tracks the two workstreams and the external dependency dates.
5. **HR/Payroll/Admin** — onboarding, payroll, and admin.

No dedicated DevOps/Platform hire and no second mobile engineer — see [Team](#team--who-we-actually-need)
for why a lean, senior, AI-assisted team covers this ground without them.

### Timeline shape
- **Month 1 — Foundation:** real auth + data model for the pilot brokerage, production AWS,
  jurisdiction rules narrowed to the one confirmed state, Transitional Document + Merchant
  Integration data model design, e-sig vendor sandbox wired up once contracted, Flutter app shell,
  all five new hires land as early as possible.
- **Months 2–3 — Core Build:** Transitional Document full authoring/handoff flow built; Merchant
  Integration vendor onboarding + real payments + commission ledger built; e-sig wired end-to-end;
  Agent+Client mobile built out; Broker/Admin/Vendor web brought to usable (not native) state; QA
  builds coverage continuously; PM tracks velocity + GTM/Compliance dependency dates.
- **Months 4–5 — Test & Polish:** Month 4 — full regression, security review/pen test, app store
  submission. Month 5 — UX polish pass, final performance pass, go/no-go readiness check.

### Exit criteria (build side)
- Transitional Document feature-complete and demoable end to end
- Merchant Integration live: vendor onboarding, real payment processing, accurate commission tracking
- 3rd-party e-signature fully wired into the transaction flow, signed documents stored/retrievable
- Jurisdiction rules validated for the single pilot state
- Native iOS + Android apps live for Agent and Client at minimum
- QA regression suite passing; pen-test critical/high findings remediated

### Top risks
1. Hiring five seniors fast enough — the whole 5-month timeline assumes all five land in month 1
2. E-sig vendor contracting delay blocking backend integration (owed by Compliance)
3. Testing compressed into the last two months
4. Agent + Client native parity resting on one senior Flutter engineer, not two — the tightest
   assumption in this plan

### Dependency checkpoints owed by GTM/Compliance cofounders
- Final pilot state confirmed — end of month 1
- E-signature vendor selected and contracted — end of month 1
- Pilot brokerage identified/contracted — by month 3–4

---

## Scenario C — Foundations-First (recommended)

### Objective
The same pilot-ready product as Scenario B, with engineering foundations treated as a required,
checked-off deliverable from week 1, and QA starting alongside them instead of a month later.

### Key inputs
Identical to B (1 state, 3rd-party e-sig, no custody, two pillars, Nepal-based senior team,
non-coding founder, AI-native building), plus:
| | |
|---|---|
| Engineering foundations | CI/CD, IaC, security scanning, and review discipline required from week 1 |
| Timeline | 5 months — slower to start, safer to finish, **not** faster |

### The reasoning
It hires the **exact same five roles as B, at the exact same cost.** The difference is entirely
sequencing and discipline:

- **QA starts in month 1**, not month 2 — AI-generated code needs adversarial checking from day
  one, not a testing pass bolted on later.
- **The engineering-foundations checklist is a required deliverable in week 1** — jointly owned by
  the founder and the Senior Backend Engineer #2 — rather than something that happens if there's
  time once feature work is underway.

No dedicated DevOps/Platform hire, no second mobile engineer — same reasoning as B (see
[Team](#team--who-we-actually-need)).

### Team (5 new hires — identical to B)
1. **Senior Backend Engineer #2** — co-owns architecture, sets up CI/CD/IaC/security baseline in
   week 1, using AI-assisted scaffolding rather than a dedicated platform hire.
2. **HR/Payroll/Admin** — in early, alongside #1, to onboard everyone else joining.
3. **QA/Verification Engineer** — starts alongside foundations, month 1, not month 2.
4. **Product/UX Designer**
5. **Project Manager** — joins month 2, once there's real coordination complexity.

### Timeline shape
Month 1 splits into a parallel **Foundations** bar (CI/CD, IaC, security baseline, owned by the
Senior Backend Engineer #2 and the founder from day one, no dedicated platform hire) alongside
pillar design work. Months 2–3 Core Build, Months 4–5 Test & Polish — same shape as B otherwise.

### Exit criteria
Everything in Scenario B's exit criteria, plus:
- CI pipeline enforcing lint, type-check, tests, and security scanning on every merge
- Infrastructure defined as code, not hand-configured
- A written, followed AI-usage policy distinguishing AI-generate-freely from always-human-authored code

### Top risks
1. Foundations work competing for the Senior Backend Engineer #2's time against feature deadlines,
   with no dedicated platform hire to absorb it
2. Review discipline eroding under deadline pressure — the whole model depends on HITL review
   actually happening on every merge
3. E-sig vendor contracting delay (same as B)
4. Agent + Client native parity resting on one senior Flutter engineer, not two (same as B)

---

## Scope matrix

| Dimension | A — Full Scope | B — Lean Pilot | C — Foundations-First (recommended) |
|---|---|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant | 3rd-party integration | 3rd-party integration |
| Money custody | Direct earnest-money custody (flagged high-risk) | None — referral/redirect only | None — referral/redirect only |
| Pilot geography | 2–3 states | 1 state | 1 state |
| Product focus | Full transaction lifecycle, broadly | Transitional Document + Merchant Integration | Transitional Document + Merchant Integration |
| Mobile scope | 1 Flutter engineer, no 2nd hire (flagged risk) | Native Agent+Client, web others — 1 Flutter engineer | Native Agent+Client, web others — 1 Flutter engineer |
| Founder's role | Hands-on: architecture, AWS, backend, CTO | Non-coding | Non-coding |
| DevOps/Platform ownership | Founder, hands-on | Senior Backend Eng #2 + founder, no dedicated hire | Senior Backend Eng #2 + founder, required checklist from week 1 |
| QA timing | Continuous from month 3 | Continuous from month 2 | Continuous from month 1, with foundations |
| GTM ownership | Other cofounders | Other cofounders | Other cofounders |
| New hires | 5 | 5 | 5 |
| Total team (incl. founder) | 8 | 8 | 8 |
| Timeline | 6 months | 5 months (4 if smooth) | 5 months — slower start, safer finish |
| Est. build-team cost | ~$80,470 over 6 months | ~$68,140 over 5 months | ~$68,140 over 5 months (identical to B) |

AI-native building with HITL review is the default across all three — it isn't a column that
differs. Compliance scope (legal, licensing) is staffed inside Scenario A only; GTM (pilot
sourcing) is owned by other cofounders in every scenario, including A.

---

## Timeline

### Scenario A (6 months)
Months 1–2 Foundation (auth/AWS/e-sig begins/jurisdiction design/hiring) → Months 3–4 Build (e-sig
legal review, jurisdiction rules + forms, escrow-partner sandbox, marketplace, mobile
Agent+Client) → Months 5–6 Harden & Launch (pen test, counsel sign-off, app store, pilot
onboarding).

### Scenario B (5 months)
Month 1 Foundation (auth/single-state data model/AWS, e-sig vendor sandbox, jurisdiction rules,
hiring ramp) → Months 2–3 Core Build (both pillars, e-sig wired in, Agent+Client mobile, QA
continuous from month 2) → Months 4–5 Test & Polish (regression + pen test, app store, UX polish,
go/no-go).

### Scenario C (5 months)
Month 1 Foundations (CI/CD, IaC, secrets, security baseline — Senior Backend Eng #2 + HR/Admin
land first; QA/Verification starts here, not month 2) running in parallel with Pillar design
(Transitional Document + Merchant Integration data models, e-sig vendor sandbox, remaining hires
— Designer, PM — land) → Months 2–3 Core Build (both pillars, Agent+Client mobile, HITL review on
every merge continuously) → Months 4–5 Test & Polish (same as B).

(See `timeline.html` for the rendered Gantt charts.)

---

## Dependencies

External, owed by other cofounders, in every scenario:
- **Pilot state confirmed** → gates jurisdiction rules engine work
- **E-signature vendor selected + contracted** → gates e-sig integration work
- **Pilot brokerage identified + contracted** → gates onboarding design and, ultimately, go-live

Internal, engineering-owned:
- In Scenario C: **CI/CD + IaC + security baseline** gates essentially everything else — this is a
  required week-1 deliverable for the founder and Senior Backend Engineer #2, not an afterthought.
  Scenario B has the same underlying work, owned by the same two people, just without the
  "required in week 1" priority.
- **Transitional Document → Merchant Integration** (gap-driven recommendations connect them — build
  the Document slightly ahead, not in lockstep)
- **QA + security review** both gate go/no-go, together with onboarding readiness

(See `dependencies.html` for the rendered flowchart.)

---

## Team — who we actually need

### The core idea
AI coding assistance means a small senior team can safely cover more ground than a same-size team
could before. A senior engineer with Claude, using well-reviewed Terraform/CI templates, can stand
up solid infrastructure without a dedicated platform hire; one senior Flutter engineer can cover
Agent + Client native parity without a second. **That's why this team is leaner than a pre-AI plan
would be.** What doesn't shrink: review discipline and early testing, because AI-generated code
still needs a human verifying the parts that touch money and law.

### What AI-native building actually changes here
1. **Fewer heads, not more.** Raw typing speed stops being the bottleneck once everyone has
   Claude, and each senior person's effective range widens. Headcount that would have been needed
   to cover ground is spent instead on seniority.
2. **Review and verification capacity is still the real constraint.** AI-generated code that looks
   right and quietly isn't is the actual risk — commission math, e-signature handling, jurisdiction
   rules. QA starting in month 1 instead of month 2, and mandatory review on every merge, are what
   keep a leaner team safe rather than just fast.
3. **Foundations still need to exist before feature work.** That doesn't go away just because
   there's no dedicated platform hire — it becomes a checklist the founder and Senior Backend
   Engineer #2 are explicitly accountable for in week 1.

### Hiring plan — tiered (Scenarios B and C; A swaps in Compliance instead of PM)

**Tier 1 — Week 1**
1. **Senior Backend Engineer #2** — co-owns architecture with the founder, primary reviewer of
   AI-generated code, and stands up CI/CD/IaC/security baseline in week 1 using AI-assisted
   scaffolding. The single highest-leverage hire on the list.
2. **HR / Payroll / Admin** — brought in early on purpose: processes paperwork, payroll, and
   onboarding for everyone else joining over the next few weeks.

**Tier 2 — Weeks 2–4**
3. **QA / Verification Engineer** — starts alongside foundations, owns the test pyramid from day
   one, deep adversarial testing on the two pillars and anything money-adjacent.
4. **Product / UX Designer** — the two pillars are genuinely hard UX problems, not just forms.

**Tier 3 — Month 2**
5. **Project Manager** (B and C) — earns its keep once there are 5+ builders and real cross-team
   dependency dates to track. In Scenario A, this slot is a **Compliance & Trust Operations Lead**
   instead, since A staffs compliance internally.

### What I'd explicitly not hire
- **A dedicated DevOps/Platform Engineer** — a senior backend engineer with AI-assisted IaC/CI
  scaffolding covers this at this team size. Revisit once there's real production traffic and
  on-call load to justify a dedicated owner.
- **A second mobile engineer** — one senior Flutter engineer with AI assistance can cover Agent +
  Client native parity. This is a tighter assumption than a two-person mobile team, and it's the
  risk most worth watching, but it's the right default bet.
- A dedicated AI-tooling/prompt-engineering specialist — a practice, not a role, at this team size
- A dedicated security engineer as an FTE — contract a pen test before pilot launch instead
- Any GTM hire on the build side — owned by other cofounders in every scenario

### Scenario B vs. Scenario C — same team, different discipline
B and C hire the exact same five roles, at the exact same cost. The difference is entirely
sequencing and discipline: in C, QA starts in month 1 instead of month 2, and the
engineering-foundations checklist is a required, checked-off deliverable from week 1 rather than
something that happens if there's time. Same team, same money, more disciplined order of
operations.

### How this compares across scenarios
| | A — Full Scope | B — Lean Pilot | C — Foundations-First |
|---|---|---|---|
| Founder | Hands-on backend + architecture | Non-coding | Non-coding |
| Backend #2 | Senior, feature-focused | Senior, co-owns architecture | Senior, co-owns architecture + foundations |
| DevOps/Platform | Founder, hands-on | Senior Backend Eng #2 + founder, no dedicated hire | Senior Backend Eng #2 + founder, required checklist week 1 |
| Mobile | 1 Flutter engineer (flagged risk) | 1 Flutter engineer | 1 Flutter engineer |
| QA start | Month 3 | Month 2 | Month 1, with foundations |
| 5th hire | Compliance & Trust Ops Lead | Project Manager | Project Manager |
| GTM ownership | Other cofounders | Other cofounders | Other cofounders |
| New hires | 5 | 5 | 5 |

Every role above assumes senior, self-directed hires — the whole plan depends on that. Hiring
junior to save money defeats the reasoning entirely.

---

## Tech stack

### Backend language
**Recommendation: keep Python/FastAPI.** Already built and working, excellent AI-coding-assistant
support, fast to iterate, strong available talent including Nepal.

Also considered:
- **Django (Python)** — batteries-included, same talent pool as FastAPI, but more monolithic and a
  real migration for no functional gain since FastAPI already works; less natural fit for an
  API-first architecture serving a mobile app.
- **Node.js / TypeScript** — strong typing, one language across backend and any future SPA, but a
  rewrite of working code for no near-term gain, plus real async footguns.
- **Ruby / Rails** — mature, fast for CRUD-heavy startups historically, but a smaller Nepal talent
  pool and slowing ecosystem momentum relative to Python/TypeScript.
- **Go** — excellent performance/concurrency, but verbose for CRUD-heavy product work and a
  smaller Nepal talent pool.
- **Rust** — best-in-class performance and memory safety, but the steepest learning curve here,
  smallest Nepal talent pool, and AI code generation still lags Python/JS — a bad combination with
  the borrow checker for a lean, fast-moving pilot team.
- **Java / Kotlin** — mature and strongly typed, but the heaviest ceremony of any option here.

Add mypy/pyright to CI for real type safety without a rewrite.

### Mobile
**Recommendation: keep Flutter.** Already built, one codebase for iOS + Android — the only
realistic way a single senior mobile engineer, with AI-assisted development, covers Agent + Client
native parity in a 5-month window. React Native and native Swift/Kotlin were considered; both cost
a rewrite (or two codebases, in native's case) with no functional gain right now.

### Web frontend
**Recommendation: keep server-rendered Jinja2 + HTMX + Bulma.** Already built across every portal,
no build step, simpler for AI to generate safely than a SPA framework. Revisit only if Merchant
Integration's marketplace browsing genuinely needs SPA-grade interactivity post-pilot.

### Infrastructure
AWS, continued. The one real addition: infrastructure as code (Terraform or AWS CDK) from week 1,
owned jointly by the founder and the Senior Backend Engineer #2 — no dedicated DevOps hire, but
AI-assisted scaffolding of IaC templates and CI config makes that realistic for two senior people.

### How we build: AI-native with human-in-the-loop, everywhere
This isn't one scenario's approach — it's the default across A, B, and C. Every developer has
Claude coding access. That's a real velocity multiplier on well-specified work, and part of why the
team can stay lean — but it's a real risk on anything touching money or law without deliberate
review discipline.

**Safe to AI-generate with light review:** test scaffolding following an established pattern, CRUD
boilerplate and UI screens matching the design system, documentation and migrations following a
known shape, refactors with full test coverage as a safety net.

**Always senior-authored or line-by-line human-verified:** jurisdiction rules logic, commission/
payment math and the Merchant Integration ledger, e-signature vendor integration (especially
webhook/callback handling), auth and permissions logic, the Transitional Document's gap-detection
logic.

The mechanism that makes this real, not aspirational: mandatory PR review enforced in CI. "AI
wrote it and it looked fine" is not a merge criterion.

---

## Engineering foundations

Concrete, checkable — not a value statement. Owned jointly by the founder and the Senior Backend
Engineer #2 (no dedicated platform hire), built in month 1 before either product pillar in
Scenario C; a practice worth adopting in any scenario.

**Source control & review**
- Trunk-based development, short-lived branches
- No direct pushes to main; every change through a pull request
- Minimum 1 senior approval to merge; **2 approvals** for commission math, e-signature integration,
  jurisdiction rules, or auth/permissions
- PR template requires what changed, why, and how it was tested — AI-authored or not

**CI pipeline — required to merge, not advisory**
- Lint fails the build, not just warns
- Type-check (mypy/pyright for Python, Dart's analyzer for Flutter)
- Unit + integration tests, with a defined coverage floor on the two pillars specifically
- Dependency/security scanning on every PR
- Both the API and the Flutter app must build successfully before merge

**Infrastructure**
- Infrastructure as code (Terraform or AWS CDK)
- Separate staging and production, same IaC deploying both
- Secrets in AWS Secrets Manager / Parameter Store — never in code or committed env files
- IAM least-privilege from the start
- Automated backups with a *tested* restore process

**Observability**
- Structured logging from day one
- Error tracking wired in before the first real user touches the system
- Basic uptime/health monitoring on every deployed service
- Alerting that reaches a human, not a dashboard nobody opens

**Decisions & process**
- Lightweight ADRs for hard-to-reverse decisions (schema, e-sig vendor choice, commission-ledger design)
- A written incident/postmortem practice, even at this size
- A written AI-usage policy (the safe/always-human-verified split above) as part of onboarding

**Why this is a required deliverable, not a hope:** if nobody's explicitly accountable for "make
sure this list stays true," it doesn't happen — it gets skipped under deadline pressure, or
retrofitted later at several times the cost, usually right after an incident forces the issue.

---

## Cost

All figures: indicative planning estimates based on general knowledge of the Nepali tech market,
not quotes — verify current rates locally. Converted at roughly NPR 133/USD. Same rate assumptions
and methodology across all three scenarios.

### Rate assumptions (senior, Nepal-based, unless noted)
| Role | NPR/month | USD/month |
|---|---|---|
| Backend Engineer | 180,000 | ~1,350 |
| Mobile/Flutter Engineer | 180,000 | ~1,350 |
| Compliance & Trust Ops Lead | 170,000 | ~1,275 |
| Product/UX Designer | 150,000 | ~1,125 |
| QA/Automation/Verification Engineer | 140,000 | ~1,050 |
| Project Manager | 160,000 | ~1,200 |
| HR/Payroll/Admin *(generalist/admin rate, not senior specialist)* | 90,000 | ~675 |

### One-time setup (every scenario, 5 new hires)
| | NPR |
|---|---|
| Hardware per new hire (laptop NPR 200,000 + monitor + dongle/accessories) | 230,000 |
| 5 new hires × NPR 230,000 | 1,150,000 |
| Office inverter/UPS (load-shedding backup, one-time, scales with office size) | 100,000 |
| **Total one-time setup** | **≈ NPR 1,250,000 (~$9,400)** |

### Scenario A (7 people, 6 months)
- Gross payroll: NPR 1,090,000/month
- Full monthly burn (payroll + 18% statutory/benefits + office (8 seats) + tools + 10%
  contingency): **≈ NPR 1,575,420/month (~$11,845)**
- Total Phase 1 (6 months + one-time setup): **≈ NPR 10,702,520 (~$80,470)**

### Scenario B (7 people, 5 months)
- Gross payroll: NPR 1,080,000/month
- Full monthly burn: **≈ NPR 1,562,440/month (~$11,750)**
- Total Phase 1 (5 months + one-time setup): **≈ NPR 9,062,200 (~$68,140)**

### Scenario C (7 people, 5 months)
- Identical roster and cost to Scenario B — same total: **≈ NPR 9,062,200 (~$68,140)**

**Excluded from every figure above:** founder compensation, GTM costs (owned by other cofounders
in all three) and Compliance costs (owned by other cofounders in B/C, staffed inside A), AWS/cloud
infra (budget separately, ~$500–1,500/month pre-launch), and e-signature vendor fees (~$0.50–3/
envelope, negligible at pilot volume).

---

*Last generated alongside the HTML pages in this repo. Update both together when scope changes.*
