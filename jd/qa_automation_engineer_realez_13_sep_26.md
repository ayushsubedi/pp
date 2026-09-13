---
title: "QA / Automation Engineer"
date: 2026-09-13
draft: true
type: "job"
department: "Engineering & Quality"
location: "Kathmandu, Nepal"
workType: "Onsite"
employmentType: "Full-time"
hideTOC: true
excerpt: "Own test automation and adversarial verification for the two flagship product pillars and everything money-adjacent, from month 1."
---

**Start date:** available from Mangsir 1 (November 17, 2026)

## About Husig

Husig (Human Signal Pvt. Ltd.) is an AI and data solutions consultancy based in Kathmandu, Nepal. This role sits on the team building one of Husig's own products: a full transaction OS for real estate, built by a small, senior, AI-native team where every developer uses Claude for day-to-day development.

**Team:** Product Engineering · **Reports to:** the tech lead

## Why This Role Exists

AI-generated code that looks right and quietly isn't is the real risk on this build — specifically in commission math, e-signature callback handling, and jurisdiction rules. This role starts in month 1 in both scenarios, not bolted on in month 4, and owns adversarial verification of exactly those surfaces, not just "does the feature run."

## The Stack You'll Be Testing

| Layer | Tech | Testing Today |
|---|---|---|
| **Backend** | Python, FastAPI, PostgreSQL | pytest (unit/integration) |
| **Mobile** | Flutter (all 5 portals) | flutter_test / integration_test |
| **CI** | GitHub Actions (or equivalent) | Required checks on every PR |
| **High-stakes surfaces** | Commission ledger, e-signature webhook/callback handling, jurisdiction-rule edge cases | — |

## Key Responsibilities

### Test Pyramid & CI Gates (40%)
- Build and maintain unit/integration coverage floors, specifically on the two product pillars
- Wire tests into CI as required merge gates; own flake control

### Adversarial / Money-Adjacent Testing (35%)
- Deep, adversarial testing on the property-handoff document's gap-detection logic
- The marketplace's commission ledger and e-signature webhook/callback handling
- Jurisdiction-rule edge cases for the pilot state(s)

### Mobile & Cross-Platform QA (15%)
- App testing across all 5 portals on iOS/Android using the team's test device lab

### Release Quality (10%)
- Pre-pilot regression passes, bug triage, clear repros for the tech lead

## Must-Have

- 3+ years in QA/test automation, ideally with a Python backend and a mobile app in scope
- Comfortable writing real test code (pytest or equivalent), not just manual test cases
- CI/CD experience
- An adversarial mindset — specifically comfortable reviewing AI-generated code and features for what could quietly be wrong, not just whether it runs
- Professional English

## Nice-to-Have

- Flutter `integration_test` or mobile device-cloud testing experience
- Experience testing payment- or webhook-heavy systems
- Experience in a regulated or compliance-adjacent domain

## First 90 Days

- **30 days:** test pyramid and CI gates live
- **60 days:** adversarial suites covering both pillars in place
- **90 days:** mobile QA running on the device lab; pre-pilot regression process defined

## How to Apply

Send your CV plus a short note on a test suite or framework you built — what you chose, why, and what it caught.

Please submit to **[careers@husig.ai]**. Also include your salary expectations.

---

*Last Updated: September 2026*
