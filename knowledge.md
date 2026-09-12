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
4. [Scenario C — AI-Native, Foundations-First (recommended)](#scenario-c--ai-native-foundations-first-recommended)
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
| **C — AI-Native, Foundations-First** | Same lean scope as B, rebuilt around AI-assisted development with HITL review and mandatory engineering foundations from week 1 |

**Recommendation: Scenario C.** Same cost and timeline ballpark as B, but the team and process are
shaped for how we're actually building this.

---

## Scenario A — Full Scope

### Objective
Live pilot with 1–2 real brokerages across 2–3 states by month 6: real agents, real clients, real
transactions, real legal and financial stakes.

### Key inputs
| | |
|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant |
| Mobile | Full native (iOS + Android) parity with web |
| Pilot geography | 2–3 states |
| Money handling | RealEZ holds/moves earnest money directly |
| Timeline | 6 months |

### Flagged risk
Direct earnest-money custody in 2–3 states inside 6 months is a **state-licensing problem, not an
engineering one** — broker trust accounts / escrow licenses are typically per-state and slow to
obtain properly. Getting it wrong is a regulatory and criminal-liability risk for the company, not
just a bug.

**Recommendation:** partner with a licensed escrow/title company for Phase 1 (RealEZ still looks
and feels like it's tracking the money, since the product experience — timeline, reminders,
tracking — lives in RealEZ regardless of who's the legal custodian). Treat true self-custody as a
Phase 2+ goal, with a Compliance hire spending part of Phase 1 laying groundwork (state licensing
research, a Broker-of-Record candidate search, trust-accounting procedure design) for later.

### Team (5 new hires, plus 2 existing + hands-on founder)
Existing: You (architect/AWS/backend/CTO, **hands-on**), 1 FTE backend dev, 1 FTE Flutter dev.

New hires, in priority order:
1. **Senior Backend Engineer #2** — highest-leverage engineering hire; one backend dev plus a CTO
   also doing architecture/AWS/leadership isn't enough bandwidth for the trust ledger, e-sig
   engine, jurisdiction rules, and marketplace/payments in parallel.
2. **Compliance & Trust Operations Lead** — real estate or fintech compliance background. Owns the
   escrow-partner relationship, works with outside counsel on e-signature and pilot-agreement
   review, RESPA/TRID/state-disclosure compliance, and lays groundwork for eventual direct custody.
3. **Product/UX Designer** — web + native mobile design system and onboarding flows.
4. **QA/Automation Engineer** — test automation plus compliance-critical suites (e-sig audit trail,
   trust-ledger reconciliation, jurisdiction-rule edge cases).
5. **Pilot/GTM Lead** — sources, pitches, contracts, and onboards the pilot brokerage(s); runs the
   feedback loop.

DevOps/SRE: covered by the founder's own AWS expertise in this scenario (hands-on), with contract
security-review help budgeted before pilot launch.

### Timeline shape
- **Months 1–2 — Foundation:** real auth + multi-tenancy, production AWS footprint, e-signature
  engine begins (highest legal exposure, started early for real counsel review), jurisdiction
  rules design, trust-custody decision point, mobile app shell, hiring ramp.
- **Months 3–4 — Build:** e-sig legal review, jurisdiction rules + forms built, escrow-partner
  sandbox integration, marketplace productionized, mobile Agent+Client feature-complete, QA builds
  compliance-critical test suites continuously, pilot brokerage sourced/contracted.
- **Months 5–6 — Harden & Launch:** pen test + remediation, counsel sign-off, app store submission
  (budget 2–4 weeks review lead time), pilot onboarding, rapid-iteration feedback loop, go/no-go.

### Exit criteria
- 10–20 real transactions closed end-to-end across the pilot brokerages
- E-signature engine reviewed and approved by outside counsel, no open exceptions
- Escrow-partner trust flow running with zero reconciliation discrepancies
- Native iOS + Android apps live for Agent and Client at minimum
- Jurisdiction rules validated for all pilot states by counsel/a domain expert
- Pen test complete, critical/high findings remediated
- Documented pilot feedback and a clear go/no-go recommendation for Phase 2

### Top risks
1. Money-transmitter/escrow licensing arriving late or being shortcut
2. Full native mobile parity across 5 portals with one Flutter engineer
3. Legal review as a bottleneck across e-sig, escrow-partner agreements, and 2–3 state pilot contracts
4. Founder bandwidth split across architecture, AWS, backend, and leadership

---

## Scenario B — Lean Pilot

### Objective
Have the product ready — technically and legally-reviewable — for a live pilot with 1–2 real
brokerages in a single state, contingent on Compliance and GTM (owned by other cofounders, staffed
and budgeted separately) landing their pieces on a compatible timeline.

### Key inputs
| | |
|---|---|
| Your role | Team, vision, roadmap, architecture — **not hands-on building** |
| AI access | All developers have Claude coding access |
| E-signature | 3rd-party integration for v1, not built in-house |
| Pilot geography | 1 state |
| Money handling | No direct earnest-money custody |
| Product focus | Transitional Document and Merchant Integration are the two priorities |
| Team location | Nepal-based, all senior |
| Timeline | 4–5 months, last two for testing/polish |

### Still a build-team problem, even off the compliance track
Direct earnest-money custody is a hard technical dependency, not just a licensing one — the
trust-ledger architecture is built differently depending on custodian. Engineering needs that
answer from Compliance by end of month 1; if it isn't in hand by then, this plan defaults to the
escrow-partner/orchestration model (lower engineering risk) and treats direct custody as a Phase 2+
migration.

### Two product pillars
Everything else (auth, e-sig integration, jurisdiction rules, dashboards) is necessary
infrastructure. These two get the concentrated senior engineering and design investment, because
they're also a pipeline: gaps disclosed in the Transitional Document are what drive bookings
through Merchant Integration.

- **Transitional Document — the core deliverable.** A guided, structured record — not a generic
  form — capturing a property's condition, inclusions, known issues, and history per room/system as
  the seller fills it out. The buyer receives a clean, organized handoff, and every disclosed gap
  seeds a marketplace recommendation. A two-sided authoring-and-consumption experience, and the
  artifact that differentiates RealEZ from a plain transaction-management tool.
- **Merchant Integration — the revenue engine.** Vendors (movers, inspectors, cleaners, warranty
  providers) onboard with real listings and pricing, surface through gap-driven recommendations,
  and get paid automatically through the platform: real payment processing, referral commission
  tracked accurately. Where the business model actually gets proven during the pilot.

### Team (5 new hires, plus 2 existing, founder non-coding)
Existing: You (architect/CTO — direction, hiring, architecture reviews, unblocking), 1 FTE senior
backend dev, 1 FTE senior Flutter dev.

Every developer has Claude coding access — factored into team size and timeline. Real speed on
well-specified work (CRUD flows, test scaffolding, boilerplate UI); doesn't replace senior judgment
on jurisdiction rules, e-sig integration correctness, or gap-detection logic.

New hires, in priority order:
1. **Senior Backend Engineer #2** — splits ownership of the two pillars with the existing backend dev.
2. **Second Mobile Engineer (Flutter)** — Agent and Client are the personas touching the pillars
   daily; native parity matters most for them. Broker/Admin/Vendor native work is what flexes first
   if time gets tight.
3. **Senior Product/UX Designer** — both pillars are genuinely hard UX problems, not just forms.
4. **Senior QA/Automation Engineer** — with only two months of dedicated testing at the end, test
   automation has to build continuously from month 2, not get saved for month 4.
5. **Project Manager (senior)** — seven people across two flagship workstreams, a compressed
   timeline, and three external dependency dates needs someone tracking all of it day to day.

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
- Transitional Document feature-complete and demoable end to end (seller fill-out → buyer handoff
  → gap-driven marketplace recommendation)
- Merchant Integration live: vendor onboarding, real payment processing, accurate commission tracking
- 3rd-party e-signature fully wired into the transaction flow, signed documents stored/retrievable
- Jurisdiction rules validated for the single pilot state
- Native iOS + Android apps live for Agent and Client at minimum
- QA regression suite passing; pen-test critical/high findings remediated
- Product genuinely ready to onboard real agents/clients the moment GTM has a contracted brokerage

### Top risks
1. Hiring five seniors fast enough — the whole 5-month timeline assumes all five land in month 1
2. E-sig vendor contracting delay blocking backend integration (owed by Compliance)
3. Testing compressed into the last two months
4. Mobile parity beyond Agent/Client is the piece most likely to slip into early Phase 2

### Dependency checkpoints owed by GTM/Compliance cofounders
- Final pilot state confirmed — end of month 1
- E-signature vendor selected and contracted — end of month 1
- Pilot brokerage identified/contracted — by month 3–4

---

## Scenario C — AI-Native, Foundations-First (recommended)

### Objective
The same pilot-ready product as Scenario B, built with AI-assisted development and human-in-the-loop
review, on engineering foundations that are load-bearing from week 1 rather than retrofitted once
something breaks.

### Key inputs
Same as B (1 state, 3rd-party e-sig, no custody, two pillars, Nepal-based senior team, non-coding
founder), plus:
| | |
|---|---|
| How we build | AI-native (Claude for every dev), mandatory human-in-the-loop review |
| Engineering foundations | CI/CD, IaC, security scanning, review discipline required from week 1 |
| Timeline | 5 months — slower to start, safer to finish, **not** faster (AI doesn't shorten the timeline here; it changes what the same timeline produces) |

### The reasoning (the most important part)
AI coding assistance amplifies whoever is directing it. A senior engineer with Claude ships fast
*and* correct. A junior engineer with Claude ships fast and confidently wrong — code that looks
right, passes a cursory read, and fails exactly where it's most expensive to fail: commission math,
e-signature callback handling, jurisdiction rules, anything determining who owes whom what. That
fact reshapes hiring:

1. **The team gets more senior, not larger, for pure feature work.** Raw typing speed stops being
   the bottleneck once everyone has Claude. What doesn't automate is judgment — does this design
   hold up, is this edge case handled, would this survive a legal audit.
2. **Review and verification capacity becomes the real constraint.** If code arrives faster than it
   can be properly reviewed, the team either slows for review (fine) or starts merging on trust
   (not fine, and it compounds silently until an incident forces the issue).
3. **Foundations have to exist before feature work, not alongside it.** A team moving fast with AI
   and no CI gates, no required review, no IaC, is moving fast toward a mess that's far more
   expensive to unwind later than to prevent in week 1 — and AI-assisted teams hit that wall faster
   because they generate volume faster.

Concretely, two things move that a "just add more engineers" plan wouldn't move:
- **DevOps/Platform Engineer becomes required, not optional** (Scenario B treated this as an
  optional 5th hire the founder could cover) — with the founder explicitly not hands-on, nobody
  else naturally owns infra, so foundations only happen if someone's actual job is to own them,
  built *before* either product pillar.
- **QA/Verification starts in month 1**, alongside foundations, not month 2 — AI-generated code
  needs adversarial verification from the start.

### Team (6 new hires, plus 2 existing, founder non-coding) — tiered

**Tier 1 — Week 1, before any feature work:**
1. **Founding/Staff Engineer** — not "Backend Engineer #2." The de facto tech lead day to day: co-owns
   architecture with the founder, is the primary reviewer of AI-generated code across the team. The
   single highest-leverage hire if only one is exceptional.
2. **DevOps/Platform Engineer** — first deliverables, before touching either pillar: CI pipeline
   with mandatory checks, infrastructure as code, secrets management, structured logging and error
   tracking.

**Tier 2 — Weeks 2–4:**
3. **QA/Verification Engineer** — owns the test pyramid from day one; deep adversarial testing on
   the two pillars and anything money-adjacent.
4. **Second Mobile/Flutter Engineer** — native UI work across two platforms is still real surface
   area regardless of AI assistance.
5. **Product/UX Designer** — dedicated senior designer, especially once two mobile engineers are
   producing screens in parallel.

**Tier 3 — Month 2:**
6. **Project Manager** — deliberately not week 1; earns its keep once there are 6+ builders and real
   cross-team dependency tracking to do. Earlier than that it mostly adds overhead to two technical
   co-leads who are more efficient talking directly while the team is small.

**Explicitly not hired yet:** a dedicated AI-tooling/prompt-engineering specialist (a practice, not
a role, at 9 people — see the AI-usage policy under Engineering Foundations); a second PM or any
pure-coordination role beyond the one; a full-time security engineer (contract a pen test instead);
any compliance/legal hire on the build side (owned by other cofounders in every scenario).

### How this compares to A and B
| | A — Full Scope | B — Lean Pilot | C — AI-Native |
|---|---|---|---|
| Founder | Hands-on backend + architecture | Non-coding | Non-coding |
| Tech lead | The founder | Backend Engineer #2, informally | Founding/Staff Engineer, explicitly |
| DevOps/Platform | Founder, hands-on | Optional 5th hire | Required, week 1 |
| QA start | Month 3 | Month 2 | Month 1, with foundations |
| Compliance/GTM roles | Staffed inside this plan (2 hires) | Owned by other cofounders | Owned by other cofounders |
| New hires | 5 | 5 | 6 |

### Timeline shape
Month 1 splits into a parallel **Foundations** bar (CI/CD, IaC, security baseline, owned by the
Founding Engineer + DevOps hires from day one) alongside pillar design work — that's the main
structural difference from Scenario B. Months 2–3 Core Build, Months 4–5 Test & Polish — same shape
as B otherwise.

### Exit criteria
Everything in Scenario B's exit criteria, plus:
- CI pipeline enforcing lint, type-check, tests, and security scanning on every merge
- Infrastructure defined as code, not hand-configured
- A written, followed AI-usage policy distinguishing AI-generate-freely from always-human-authored code

### Top risks
1. Hiring two strong technical co-leads (Founding Engineer + DevOps) fast enough to start month 1
   on foundations, not features
2. Review discipline eroding under deadline pressure — the whole model depends on HITL review
   actually happening on every merge, not just existing as policy
3. E-sig vendor contracting delay (same as B)
4. Mobile parity beyond Agent/Client sliding into Phase 2 (same as B)

---

## Scope matrix

| Dimension | A — Full Scope | B — Lean Pilot | C — AI-Native (recommended) |
|---|---|---|---|
| E-signature | Build in-house, ESIGN/UETA-compliant | 3rd-party integration | 3rd-party integration |
| Money custody | Direct earnest-money custody (flagged high-risk) | None — referral/redirect only | None — referral/redirect only |
| Pilot geography | 2–3 states | 1 state | 1 state |
| Product focus | Full transaction lifecycle, broadly | Transitional Document + Merchant Integration | Transitional Document + Merchant Integration |
| Mobile scope | Full native parity, all 5 portals | Native Agent+Client; web Broker/Admin/Vendor | Native Agent+Client; web Broker/Admin/Vendor |
| Founder's role | Hands-on: architecture, AWS, backend, CTO | Non-coding: team, vision, roadmap, architecture | Non-coding: team, vision, roadmap, architecture |
| DevOps/Platform ownership | Founder, hands-on | Optional 5th hire | Required hire, week 1 |
| QA timing | Continuous from month 3 | Continuous from month 2 | Continuous from month 1, with foundations |
| How we build | Traditional, human-authored | Traditional, human-authored | AI-native with mandatory HITL review |
| New hires | 5 | 5 | 6 |
| Total team (incl. founder) | 8 | 8 | 9 |
| Timeline | 6 months | 5 months (4 if smooth) | 5 months — slower start, safer finish |
| Est. build-team cost | ~$82,375 | ~$71,275 | ~$83,335 |

GTM and Compliance scope (pilot sourcing, legal, licensing) is intentionally excluded from this
matrix — owned by other cofounders in every scenario except A, which staffs Compliance and GTM
roles inside its own plan.

---

## Timeline

### Scenario A (6 months)
- **Months 1–2, Foundation:** auth/multi-tenancy/AWS prod; e-signature engine begins; jurisdiction
  rules design (2–3 states); hiring ramp.
- **Months 3–4, Build:** e-sig legal review; jurisdiction rules + forms built; escrow-partner
  sandbox integration; marketplace productionized; mobile Agent+Client feature-complete.
- **Months 5–6, Harden & Launch:** pen test + remediation; counsel sign-off; app store submission;
  pilot onboarding.

### Scenario B (5 months)
- **Month 1, Foundation:** auth/single-state data model/AWS; e-sig vendor sandbox wired up;
  jurisdiction rules (1 state) design; hiring ramp (5 hires).
- **Months 2–3, Core Build:** Transitional Document build; Merchant Integration build; e-sig wired
  into transaction flow; Agent+Client mobile build; QA automation continuous from month 2.
- **Months 4–5, Test & Polish:** regression + pen test; app store submission; UX polish pass; go/no-go.

### Scenario C (5 months)
- **Month 1, Foundations (parallel):** CI/CD, IaC, secrets, security baseline; Founding Engineer +
  DevOps hires land first (before the rest); QA/Verification starts here, not month 2.
- **Month 1, Pillar design (parallel):** Transitional Document data model; Merchant Integration data
  model; e-sig vendor sandbox wired up; remaining hires (Mobile #2, Designer, PM) land.
- **Months 2–3, Core Build:** Transitional Document build; Merchant Integration build; Agent+Client
  mobile build; HITL review on every merge, continuously.
- **Months 4–5, Test & Polish:** regression + pen test; app store submission; UX polish pass; go/no-go.

(See `timeline.html` for the rendered Gantt charts.)

---

## Dependencies

External, owed by other cofounders, in every scenario:
- **Pilot state confirmed** → gates jurisdiction rules engine work
- **E-signature vendor selected + contracted** → gates e-sig integration work
- **Pilot brokerage identified + contracted** → gates onboarding design and, ultimately, go-live

Internal, engineering-owned:
- In Scenario C: **CI/CD + IaC + security baseline** gates essentially everything else — jurisdiction
  rules, e-sig integration, both pillars, and mobile all depend on it existing first
- **Transitional Document → Merchant Integration** (gap-driven recommendations are the literal
  mechanism connecting them — build the Document slightly ahead, not in lockstep)
- **QA test pyramid + security review** both gate go/no-go, together with onboarding readiness —
  both have to be true, not either

(See `dependencies.html` for the rendered flowchart.)

---

## Team — who we actually need

*(Full reasoning under Scenario C above — restated compactly here.)*

The core idea: AI coding assistance amplifies whoever directs it. That reshapes hiring three ways —
more seniority for feature work, not more headcount; review/verification capacity becomes the real
constraint and needs to be staffed on purpose; foundations must exist before feature work, not
alongside it, or the team moves fast toward a mess that's expensive to unwind.

Every role in every scenario here assumes senior, self-directed hires — hiring junior to save money
defeats the reasoning entirely.

---

## Tech stack

### Backend language
**Recommendation: keep Python/FastAPI.** Already built and working, excellent AI-coding-assistant
support, fast to iterate, strong available talent including in Nepal. Node/TypeScript, Go, and
Java/Kotlin were considered — all would mean a rewrite of working code for no near-term functional
gain, which is the wrong trade before product-market fit. Add mypy/pyright to CI for real type
safety without a rewrite.

### Mobile
**Recommendation: keep Flutter.** Already built, one codebase for iOS + Android — critical with
only two mobile engineers. React Native and native Swift/Kotlin were considered; both cost a
rewrite (or two codebases, in native's case) with no functional gain right now.

### Web frontend
**Recommendation: keep server-rendered Jinja2 + HTMX + Bulma.** Already built across every portal,
no build step, simpler for AI to generate safely (less room for subtle client-state bugs) than a
SPA framework. Revisit only if Merchant Integration's marketplace browsing genuinely needs
SPA-grade interactivity post-pilot — don't pre-optimize for it now.

### Infrastructure
AWS, continued. The one real addition: infrastructure as code (Terraform or AWS CDK) from week 1,
owned by the DevOps/Platform hire, so environments are reproducible and reviewable instead of
hand-configured.

### How we build: AI-native with human-in-the-loop
Every developer has Claude coding access — a real velocity multiplier on well-specified work, and a
real risk on anything touching money or law without deliberate review discipline.

**Safe to AI-generate with light review:** test scaffolding following an established pattern, CRUD
boilerplate and UI screens matching the design system, documentation and migrations following a
known shape, refactors with full test coverage as a safety net.

**Always senior-authored or line-by-line human-verified:** jurisdiction rules logic (disclosure
timing, forms), commission/payment math and the Merchant Integration ledger, e-signature vendor
integration (especially webhook/callback handling), auth and permissions logic, the Transitional
Document's gap-detection logic (it drives real recommendations).

The mechanism that makes this real rather than aspirational: mandatory PR review enforced in CI.
"AI wrote it and it looked fine" is not a merge criterion.

---

## Engineering foundations

Concrete, checkable — not a value statement. Owned by the DevOps/Platform Engineer and the Founding
Engineer together, built in month 1 before either product pillar (Scenario C); a practice worth
adopting in any scenario.

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

**Why this is a hire, not a hope:** if nobody's job is explicitly "make sure this list stays true,"
it doesn't happen — it gets skipped under deadline pressure, or retrofitted later at several times
the cost, usually right after an incident forces the issue.

---

## Cost

All figures: indicative planning estimates based on general knowledge of the Nepali tech market,
not quotes — verify current rates locally. Converted at roughly NPR 133/USD. Same rate assumptions
and methodology across all three scenarios, so they're comparable to each other.

### Rate assumptions (senior, Nepal-based)
| Role | NPR/month | USD/month |
|---|---|---|
| Backend Engineer | 180,000 | ~1,350 |
| Mobile/Flutter Engineer | 180,000 | ~1,350 |
| Founding/Staff Engineer | 200,000 | ~1,500 |
| DevOps/Platform Engineer | 180,000 | ~1,350 |
| Compliance & Trust Ops Lead | 170,000 | ~1,275 |
| Product/UX Designer | 150,000 | ~1,125 |
| QA/Automation/Verification Engineer | 140,000 | ~1,050 |
| Project Manager | 160,000 | ~1,200 |
| Pilot/GTM Lead | 150,000 | ~1,125 |

### Scenario A (7 people, 6 months)
- Gross payroll: NPR 1,150,000/month
- Full monthly burn (payroll + 18% statutory/benefits + office + tools + admin + 10% contingency):
  **≈ NPR 1,686,300/month (~$12,680)**
- Total Phase 1 (6 months + hardware): **≈ NPR 10,955,800 (~$82,375)**

### Scenario B (7 people, 5 months)
- Gross payroll: NPR 1,170,000/month
- Full monthly burn: **≈ NPR 1,712,260/month (~$12,875)**
- Total Phase 1 (5 months + hardware): **≈ NPR 9,479,300 (~$71,275)**

### Scenario C (8 people, 5 months)
- Gross payroll: NPR 1,370,000/month
- Full monthly burn: **≈ NPR 1,990,560/month (~$14,965)**
- Total Phase 1 (5 months + hardware): **≈ NPR 11,083,300 (~$83,335)**
- Costs ~17% more than B for one extra hire (DevOps/Platform) and a slightly senior-weighted team —
  the trade made explicitly in Team: pay for foundations up front rather than an incident later.

**Excluded from every figure above:** founder compensation, GTM/Compliance costs where owned by
other cofounders (B and C), AWS/cloud infra (budget separately, ~$500–1,500/month pre-launch), and
e-signature vendor fees (~$0.50–3/envelope, negligible at pilot volume).

---

*Last generated alongside the HTML pages in this repo. Update both together when scope changes.*
