---
title: "QA / Automation Engineer, RealEZ"
date: 2026-09-13
draft: true
type: "job"
department: "Engineering & Quality"
location: "Kathmandu, Nepal"
workType: "Onsite"
employmentType: "Full-time"
hideTOC: true
excerpt: "Own test automation and adversarial verification for RealEZ's two flagship product pillars and everything money-adjacent, from month 1."
---

## About Husig & RealEZ

Husig (Human Signal Pvt. Ltd.) is an AI and data solutions consultancy based in Kathmandu, Nepal. This role sits on the team building **RealEZ**, a Husig product: a full transaction OS for real estate, built by a small, senior, AI-native team where every developer uses Claude for day-to-day development.

**Team:** RealEZ Engineering · **Reports to:** the RealEZ tech lead

## Why This Role Exists

AI-generated code that looks right and quietly isn't is the real risk on this build — specifically in commission math, e-signature callback handling, and jurisdiction rules. This role starts as early as the scenario allows (month 1 in the Foundations-First plan, not bolted on in month 4) and owns adversarial verification of exactly those surfaces, not just "does the feature run."

## The Stack You'll Be Testing

| Layer | Tech | Testing Today |
|---|---|---|
| **Backend** | Python, FastAPI, PostgreSQL | pytest (unit/integration) |
| **Mobile** | Flutter (Agent + Client apps) | flutter_test / integration_test |
| **CI** | GitHub Actions (or equivalent) | Required checks on every PR |
| **High-stakes surfaces** | Merchant Integration commission ledger, e-signature webhook/callback handling, jurisdiction-rule edge cases | — |

## Key Responsibilities

### Test Pyramid & CI Gates (40%)
- Build and maintain unit/integration coverage floors, specifically on the two product pillars
- Wire tests into CI as required merge gates; own flake control

### Adversarial / Money-Adjacent Testing (35%)
- Deep, adversarial testing on the Transitional Document's gap-detection logic
- The Merchant Integration commission ledger and e-signature webhook/callback handling
- Jurisdiction-rule edge cases for the pilot state(s)

### Mobile & Cross-Platform QA (15%)
- Agent + Client app testing across iOS/Android using the team's test device lab

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
