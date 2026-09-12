# RealEZ Phase 1 — Complete Planning Knowledge

A single-file export of everything in this repo. See the linked HTML pages for the same content
with tables, diagrams, and tabs — this file exists so the knowledge doesn't only live in a browser.

Founder/business planning notes, not product documentation — kept separate from the RealEZ app
repo on purpose. Figures throughout are planning estimates, not commitments.

---

## Contents

1. [Three scenarios](#three-scenarios)
2. [The team is now unified across all three scenarios](#the-team-is-now-unified-across-all-three-scenarios)
3. [The earnest-money custody risk, in detail](#the-earnest-money-custody-risk-in-detail)
4. [Scenario A — Full Scope](#scenario-a--full-scope)
5. [Scenario B — Lean Pilot](#scenario-b--lean-pilot)
6. [Scenario C — Foundations-First (recommended)](#scenario-c--foundations-first-recommended)
7. [Scope matrix](#scope-matrix)
8. [Timeline](#timeline)
9. [Dependencies](#dependencies)
10. [Team — who we actually need](#team--who-we-actually-need)
11. [Tech stack](#tech-stack)
12. [Engineering foundations, incl. multi-tenancy & white-label](#engineering-foundations)
13. [Cost](#cost)

---

## Three scenarios

| Scenario | Shape |
|---|---|
| **A — Full Scope** | 6 months, 2–3 states, in-house ESIGN-compliant e-signature, direct earnest-money custody |
| **B — Lean Pilot** | 5 months, 1 state, 3rd-party e-signature, no custody |
| **C — Foundations-First** | Identical team and cost to B — the difference is sequencing and discipline, not headcount |

**Recommendation: Scenario C.** Same team, same cost as B — QA starts a month earlier, and
engineering foundations are a required week-1 deliverable rather than something that happens if
there's time.

AI-native building with human-in-the-loop review is the default across all three scenarios, not a
distinguishing trait of any one of them. Every developer, in every scenario, has Claude coding
access — part of why the team below is as lean as it is.

## The team is now unified across all three scenarios

What used to differ by scenario (a Compliance Lead only in A, a Project Manager only in B/C, a
Founding Engineer/DevOps split in C) has collapsed into **one hiring plan used everywhere**:

- **4 new FTE hires:** Senior Backend Engineer #2 (the tech lead), QA/Automation Engineer, Project
  Manager, HR/Payroll/Admin
- **1 project-based engagement, not an FTE:** a UI/UX Designer, at a flat NPR 4,00,000 project fee
- **No Compliance & Trust Operations Lead anywhere** — even in Scenario A's direct-custody path,
  compliance is owned by other cofounders, not staffed inside the build team
- **No DevOps/Platform Engineer, no second mobile engineer** — a senior tech lead with AI-assisted
  IaC/CI scaffolding, and one Flutter engineer with AI-assisted development, cover this ground at
  this team size (see [Team](#team--who-we-actually-need))

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
| Money handling | RealEZ holds/moves earnest money directly (see the detailed risk above) |
| Timeline | 6 months |

### Team (4 new FTE hires + 1 project-based)
Existing: You (architect/AWS/backend/CTO, **hands-on**), 1 FTE Backend Engineer, 1 FTE Flutter
Engineer.

New:
1. **Senior Backend Engineer #2 — the tech lead**
2. **HR/Payroll/Admin**
3. **QA/Automation Engineer**
4. **Project Manager**
5. **UI/UX Designer** — project-based, NPR 4,00,000 flat, not an FTE

No dedicated GTM or Compliance hire — both owned by other cofounders, kept consistent across every
scenario including this one. No second mobile engineer either.

DevOps/Platform: covered by the founder's own AWS expertise (hands-on in this scenario), with
contract security-review help budgeted before pilot launch.

### Timeline shape
- **Months 1–2 — Foundation:** real auth + multi-tenancy, production AWS footprint, e-signature
  engine begins, jurisdiction rules design, trust-custody decision point, mobile app shell, hiring
  ramp.
- **Months 3–4 — Build:** e-sig legal review, jurisdiction rules + forms built, escrow-partner
  sandbox integration, marketplace productionized, mobile Agent+Client feature-complete, QA
  continuous, pilot brokerage sourced/contracted by GTM cofounders.
- **Months 5–6 — Harden & Launch:** pen test + remediation, counsel sign-off, app store submission,
  pilot onboarding, go/no-go.

### Exit criteria
- 10–20 real transactions closed end-to-end across the pilot brokerages
- E-signature engine reviewed and approved by outside counsel, no open exceptions
- Escrow-partner trust flow running with zero reconciliation discrepancies
- Native iOS + Android apps live for Agent and Client at minimum
- Jurisdiction rules validated for all pilot states by counsel/a domain expert
- Pen test complete, critical/high findings remediated

### Top risks
1. Money-transmitter/escrow licensing arriving late or being shortcut (see the detailed risk above)
2. Agent + Client native parity resting on one Flutter engineer, not two
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
| Timeline | 5 months, last two for testing/polish |

### Two product pillars
- **Transitional Document — the core deliverable.** A guided, structured record capturing a
  property's condition, inclusions, known issues, and history. Every disclosed gap seeds a
  marketplace recommendation.
- **Merchant Integration — the revenue engine.** Vendors onboard with real listings and pricing,
  surface through gap-driven recommendations, and get paid automatically through the platform.

### Team (4 new FTE hires + 1 project-based)
Existing: You (architect/CTO, non-coding), 1 FTE Backend Engineer, 1 FTE Flutter Engineer.

New:
1. **Senior Backend Engineer #2 — the tech lead**
2. **HR/Payroll/Admin**
3. **QA/Automation Engineer**
4. **Project Manager**
5. **UI/UX Designer** — project-based, NPR 4,00,000 flat, not an FTE

### Timeline shape
- **Month 1 — Foundation:** real auth + multi-tenancy + data model for the pilot brokerage,
  production AWS, jurisdiction rules narrowed to the one confirmed state, Transitional Document +
  Merchant Integration data model design, e-sig vendor sandbox wired up once contracted, Flutter
  app shell, all new hires land as early as possible.
- **Months 2–3 — Core Build:** Transitional Document full authoring/handoff flow built; Merchant
  Integration vendor onboarding + real payments + commission ledger built; e-sig wired end-to-end;
  Agent+Client mobile built out; QA builds coverage continuously from month 2; PM tracks velocity +
  dependency dates.
- **Months 4–5 — Test & Polish:** regression, security review/pen test, app store submission, UX
  polish pass, go/no-go readiness check.

### Exit criteria (build side)
- Transitional Document feature-complete and demoable end to end
- Merchant Integration live: vendor onboarding, real payment processing, accurate commission tracking
- 3rd-party e-signature fully wired into the transaction flow, signed documents stored/retrievable
- Jurisdiction rules validated for the single pilot state
- Native iOS + Android apps live for Agent and Client at minimum
- QA regression suite passing; pen-test critical/high findings remediated

### Top risks
1. Hiring four seniors fast enough — the whole 5-month timeline assumes all four land in month 1
2. E-sig vendor contracting delay blocking backend integration (owed by Compliance)
3. Testing compressed into the last two months
4. Agent + Client native parity resting on one Flutter engineer, not two

### Dependency checkpoints owed by GTM/Compliance cofounders
- Final pilot state confirmed — end of month 1
- E-signature vendor selected and contracted — end of month 1
- Pilot brokerage identified/contracted — by month 3–4

---

## Scenario C — Foundations-First (recommended)

### Objective
The same pilot-ready product as Scenario B, with engineering foundations treated as a required,
checked-off deliverable from week 1, and QA starting alongside them instead of a month later.

### The reasoning
It hires the **exact same roles as B, at the exact same cost.** The difference is entirely
sequencing and discipline:
- **QA starts in month 1**, not month 2.
- **The engineering-foundations checklist is a required deliverable in week 1** — jointly owned by
  the founder and the Senior Backend Engineer #2.

### Timeline shape
Month 1 splits into a parallel **Foundations** bar (CI/CD, IaC, security baseline, owned by the
tech lead and the founder, no dedicated platform hire) alongside pillar design work. Months 2–3
Core Build, Months 4–5 Test & Polish — same shape as B otherwise.

### Exit criteria
Everything in Scenario B's exit criteria, plus a CI pipeline enforcing lint/type-check/tests/
security scanning on every merge, infrastructure defined as code, and a written AI-usage policy.

### Top risks
1. Foundations work competing for the tech lead's time against feature deadlines
2. Review discipline eroding under deadline pressure
3. E-sig vendor contracting delay (same as B)
4. Agent + Client native parity resting on one Flutter engineer, not two (same as B)

---

## Scope matrix

| Dimension | A — Full Scope | B — Lean Pilot | C — Foundations-First (recommended) |
|---|---|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant | 3rd-party integration | 3rd-party integration |
| Money custody | Direct earnest-money custody (flagged high-risk) | None | None |
| Pilot geography | 2–3 states | 1 state | 1 state |
| Product focus | Full transaction lifecycle | Transitional Document + Merchant Integration | Transitional Document + Merchant Integration |
| Mobile | 1 Flutter engineer (flagged risk) | 1 Flutter engineer | 1 Flutter engineer |
| Founder's role | Hands-on | Non-coding | Non-coding |
| DevOps/Platform | Founder, hands-on | Tech lead + founder, no dedicated hire | Tech lead + founder, required checklist week 1 |
| QA timing | Month 3 | Month 2 | Month 1, with foundations |
| GTM ownership | Other cofounders | Other cofounders | Other cofounders |
| Compliance ownership | Other cofounders | Other cofounders | Other cofounders |
| Multi-tenancy | Row-level tenant isolation from month 1, all three | same | same |
| White-label | Architected for, not activated in Phase 1, all three | same | same |
| New hires | 4 FTE + 1 project-based | 4 FTE + 1 project-based | 4 FTE + 1 project-based |
| Timeline | 6 months | 5 months | 5 months |
| Est. build-team cost | ~$75,895 over 6 months | ~$64,550 over 5 months | ~$64,550 over 5 months |

---

## Timeline

### Scenario A (6 months)
Months 1–2 Foundation (auth/multi-tenancy/AWS/e-sig begins/jurisdiction design/hiring) → Months 3–4
Build (e-sig legal review, jurisdiction rules + forms, escrow-partner sandbox, marketplace, mobile
Agent+Client) → Months 5–6 Harden & Launch (pen test, counsel sign-off, app store, pilot
onboarding).

### Scenario B (5 months)
Month 1 Foundation (auth/multi-tenancy/single-state data model/AWS, e-sig vendor sandbox,
jurisdiction rules, hiring ramp) → Months 2–3 Core Build (both pillars, e-sig wired in,
Agent+Client mobile, QA continuous from month 2) → Months 4–5 Test & Polish (regression + pen
test, app store, UX polish, go/no-go).

### Scenario C (5 months)
Month 1 Foundations (CI/CD, IaC, secrets, security baseline — tech lead + HR/Admin land first; QA
starts here, not month 2) in parallel with Pillar design (data models, e-sig sandbox, PM lands,
Designer engaged) → Months 2–3 Core Build (both pillars, Agent+Client mobile, HITL review
continuous) → Months 4–5 Test & Polish (same as B).

---

## Dependencies

External, owed by other cofounders, in every scenario:
- **Pilot state confirmed** → gates jurisdiction rules engine work
- **E-signature vendor selected + contracted** → gates e-sig integration work
- **Pilot brokerage identified + contracted** → gates onboarding design and go-live

Internal, engineering-owned:
- In Scenario C: **CI/CD + IaC + security baseline** is a required week-1 deliverable for the
  founder and tech lead — Scenario B has the same underlying work, same owners, just without the
  "required in week 1" priority
- **Transitional Document → Merchant Integration** (gap-driven recommendations connect them)
- **QA + security review** both gate go/no-go, together with onboarding readiness

---

## Team — who we actually need

### The core idea
AI coding assistance means a small senior team can safely cover more ground than a same-size team
could before. A tech lead with Claude, using well-reviewed Terraform/CI templates, can stand up
solid infrastructure without a dedicated platform hire; one senior Flutter engineer can cover
Agent + Client native parity without a second. **That's why this team is leaner than a pre-AI plan
would be.** What doesn't shrink: review discipline and early testing.

### Already on the team
- You — Architect/CTO (hands-on in A, non-coding in B/C)
- FTE Backend Engineer — the developer already building today
- FTE Flutter Engineer — the developer already building today

### Hiring plan — tiered, same across A, B, and C

**Tier 1 — Week 1**
1. **Senior Backend Engineer #2 — the tech lead.** Co-owns architecture, primary reviewer of
   AI-generated code, stands up CI/CD/IaC/security baseline in week 1. The single highest-leverage
   hire, and the one place seniority is worth a premium (priced above the other new hires — see
   [Cost](#cost)).
2. **HR / Payroll / Admin.** In early on purpose — processes paperwork, payroll, onboarding for
   everyone else joining.

**Tier 2 — Weeks 2–4**
3. **QA / Verification Engineer.** Starts as early as the scenario allows.
4. **UI/UX Designer — project-based, not FTE.** One designer, NPR 4,00,000 flat project fee, not a
   monthly salary line. Covers both pillars' UX plus the mobile design system.

**Tier 3 — Month 2**
5. **Project Manager.** One PM, across all three scenarios. Earns its keep once there are 5+
   builders and real cross-team dependency dates to track.

### What I'd explicitly not hire
- A dedicated DevOps/Platform Engineer — the tech lead with AI-assisted IaC/CI scaffolding covers
  this at this team size
- A second mobile engineer — one senior Flutter engineer with AI assistance covers Agent + Client
  native parity; the tightest assumption in this plan, worth watching
- A Compliance & Trust Operations Lead — owned by other cofounders even in Scenario A's
  direct-custody path (see the detailed risk above)
- A dedicated AI-tooling specialist — a practice (a written AI-usage policy), not a role, yet
- A dedicated security engineer as an FTE — contract a pen test before pilot launch
- Any GTM hire on the build side

### How this compares across scenarios
| | A — Full Scope | B — Lean Pilot | C — Foundations-First |
|---|---|---|---|
| Founder | Hands-on | Non-coding | Non-coding |
| Tech lead | Senior Backend Engineer #2, all three | same | same |
| DevOps/Platform | Tech lead + founder, no dedicated hire, all three | same | same |
| Mobile | 1 Flutter engineer, all three | same | same |
| Designer | 1 project-based, NPR 4,00,000, all three | same | same |
| QA start | Month 3 | Month 2 | Month 1, with foundations |
| Compliance/GTM | Other cofounders, all three | same | same |
| New FTE hires | 4 + 1 project-based, all three | same | same |

Every FTE role assumes senior, self-directed hires — hiring junior to save money defeats the
reasoning entirely.

---

## Tech stack

### Backend language
**Recommendation: keep Python/FastAPI.** Already built and working, excellent AI-coding-assistant
support, fast to iterate, strong available talent including Nepal.

Also considered: **Django** (batteries-included, same talent pool, but a real migration for no
functional gain and less API-first-friendly), **Node.js/TypeScript** (strong typing, but a rewrite
with real async footguns), **Ruby/Rails** (mature but smaller Nepal talent pool, slowing momentum),
**Go** (great performance, but verbose for CRUD work and a smaller talent pool), **Rust**
(best-in-class safety/performance, but the steepest learning curve, smallest talent pool, and AI
code generation still lags Python/JS — a bad combination with the borrow checker for a lean, fast
team), **Java/Kotlin** (mature but the heaviest ceremony here).

### Mobile
**Recommendation: keep Flutter.** One codebase for iOS + Android — the only realistic way a single
senior mobile engineer, with AI-assisted development, covers Agent + Client native parity in a
5-month window.

### Web frontend
**Recommendation: keep server-rendered Jinja2 + HTMX + Bulma.** Already built, no build step,
simpler for AI to generate safely than a SPA framework. Revisit only if Merchant Integration's
marketplace browsing genuinely needs SPA-grade interactivity post-pilot.

### Infrastructure
AWS, continued — see [Cost](#cost) for the separated AWS line item. Infrastructure as code
(Terraform or AWS CDK) from week 1, owned jointly by the founder and the tech lead.

### How we build: AI-native with human-in-the-loop, everywhere
Every developer has Claude coding access, in every scenario. **Safe to AI-generate with light
review:** test scaffolding, CRUD boilerplate, UI screens matching the design system, documentation,
migrations following a known shape, refactors with full test coverage. **Always senior-authored or
line-by-line human-verified:** jurisdiction rules logic, commission/payment math, e-signature
webhook/callback handling, auth/permissions logic, the Transitional Document's gap-detection logic.
Enforced by mandatory PR review in CI — "AI wrote it and it looked fine" is not a merge criterion.

---

## Engineering foundations

Owned jointly by the founder and the tech lead (no dedicated platform hire), built in month 1
before either product pillar in Scenario C.

**Source control & review:** trunk-based development; no direct pushes to main; 1 senior approval
to merge, 2 for commission math/e-signature/jurisdiction rules/auth; PR template requires what
changed, why, how it was tested.

**CI pipeline:** lint, type-check (mypy/pyright, Dart analyzer), unit+integration tests with a
coverage floor on the two pillars, dependency/security scanning, both API and Flutter app must
build before merge.

**Infrastructure:** IaC (Terraform/CDK); separate staging/prod; secrets in AWS Secrets Manager;
IAM least-privilege from the start; automated backups with a *tested* restore process.

**Observability:** structured logging from day one; error tracking before the first real user;
uptime/health monitoring; alerting that reaches a human.

**Multi-tenancy & white-label:** row-level tenant isolation (a `brokerage_id` enforced at the query
layer) from month 1 — retrofitting this later is one of the most expensive mistakes to fix. Every
brokerage-scoped table carries the tenant key from the first migration; auth/permissions are
tenant-aware by construction. White-label is a real consideration given the competitive precedent
(Updater and MoveEasy are both white-labeled to brokerages) — not a Phase 1 feature, but branding
should be tenant-level configuration from the start so activating it later is a config change, not
a rebuild.

**Decisions & process:** lightweight ADRs for hard-to-reverse decisions; a written incident/
postmortem practice; a written AI-usage policy as part of onboarding.

**Why this is a required deliverable, not a hope:** if nobody's explicitly accountable for keeping
this list true, it gets skipped under deadline pressure or retrofitted later at several times the
cost, usually right after an incident forces the issue.

---

## Cost

Indicative planning figures, not a quote — verify current rates locally. Converted at roughly NPR
133/USD. Team cost is now identical across all three scenarios (only timeline length differs); AWS
and app-store/tooling costs are broken out as their own line items, not folded into a footnote.

### Team — rate assumptions (same in A, B, C)
| Role | Status | NPR/month | USD/month |
|---|---|---|---|
| Backend Engineer | Existing FTE | 180,000 | ~1,350 |
| Flutter Engineer | Existing FTE | 180,000 | ~1,350 |
| Senior Backend Engineer #2 — tech lead | New FTE | 200,000 | ~1,500 |
| QA/Automation Engineer | New FTE | 140,000 | ~1,050 |
| Project Manager | New FTE | 160,000 | ~1,200 |
| HR/Payroll/Admin *(generalist rate)* | New FTE | 90,000 | ~675 |
| **Gross FTE payroll, 6 people** | | **950,000** | **~7,145** |

UI/UX Designer is not an FTE — one designer, project-based, flat NPR 4,00,000, priced as a one-time
cost, not monthly payroll.

### Team monthly burn (identical in A, B, C)
| | NPR |
|---|---|
| Gross FTE payroll (6 people) | 950,000 |
| Employer statutory + benefits (~18%) | 171,000 |
| Office — coworking, 7 seats @ NPR 12,000 | 84,000 |
| Contingency (10%) | 120,500 |
| **Total team monthly burn** | **≈ 1,325,500 (~$9,965)** |

### Infrastructure (AWS) — separated
| Scenario | Why | USD/month |
|---|---|---|
| B, C | Staging+prod, small RDS, S3/CDN, backups, Secrets Manager, CloudWatch — 1 state, 3rd-party e-sig keeps this light | ~400 |
| A | Same, plus the in-house e-signature engine's storage/audit-trail needs and 2–3 states' worth of jurisdiction data | ~500 |

AWS bills in USD regardless of team location. Pre-launch, low-traffic estimate.

### Other Phase 1 costs
| Item | Cadence | USD |
|---|---|---|
| AI coding tool subscriptions (3 developer seats) | Monthly | ~300/mo |
| PM/comms tools (Linear/Jira, Slack) | Monthly | ~60/mo |
| Error tracking/monitoring | Monthly | ~20/mo |
| Apple Developer Program | Annual | 99/yr |
| Google Play Developer registration | One-time | 25 once |
| Domain + SSL (SSL via ACM is free) | Annual | ~20/yr |

Recurring monthly total: ~$380/month (~NPR 50,540). Annual/one-time items (~$144) fold into
one-time setup below.

### One-time setup (identical in A, B, C)
| | NPR |
|---|---|
| Hardware per new FTE hire (laptop NPR 200,000 + monitor + dongle/accessories) | 230,000 |
| 4 new FTE hires × NPR 230,000 | 920,000 |
| UI/UX Designer project fee | 400,000 |
| Office inverter/UPS (load-shedding backup) | 100,000 |
| App Store + Play Store + domain (first-year fees) | 19,150 (~$144) |
| **Total one-time setup** | **≈ 1,439,150 (~$10,820)** |

### Total Phase 1, by scenario
- **Scenario A (6 months):** team 1,325,500 + AWS 66,500 (~$500/mo) + tooling 50,540 = 1,442,540/mo
  × 6 = 8,655,240, + one-time 1,439,150 = **≈ NPR 10,094,390 (~$75,895)**
- **Scenario B (5 months):** team 1,325,500 + AWS 53,200 (~$400/mo) + tooling 50,540 = 1,429,240/mo
  × 5 = 7,146,200, + one-time 1,439,150 = **≈ NPR 8,585,350 (~$64,550)**
- **Scenario C (5 months):** identical to B — **≈ NPR 8,585,350 (~$64,550)**

**Excluded from every figure:** founder compensation, GTM and Compliance costs (owned by other
cofounders in all three, including A), e-signature vendor per-envelope fees (~$0.50–3/envelope,
negligible at pilot volume).

---

*Last generated alongside the HTML pages in this repo. Update both together when scope changes.*
