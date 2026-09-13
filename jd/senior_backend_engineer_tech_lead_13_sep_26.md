---
title: "Senior Backend Engineer — Tech Lead, RealEZ"
date: 2026-09-13
draft: true
type: "job"
department: "Engineering"
location: "Kathmandu, Nepal"
workType: "Onsite"
employmentType: "Full-time"
hideTOC: true
excerpt: "Be the day-to-day technical lead for RealEZ, Husig's real estate transaction platform — architecture, AI-code review, and infrastructure from week 1."
---

## About Husig

Husig (Human Signal Pvt. Ltd.) is an AI and data solutions consultancy based in Kathmandu, Nepal, building products and engineering teams for clients and its own ventures across compliance automation, conversational AI, data annotation, and real estate AI. This role sits on the team building **RealEZ**, one of Husig's own products.

## About RealEZ

RealEZ is a full transaction OS for real estate: e-signature workflow, a structured seller-to-buyer "Transitional Document" handoff, and a post-closing marketplace connecting movers, inspectors, and other service providers to a deal's actual condition. Phase 1 is a real pilot with 1–2 brokerages, not a demo, built by a small, senior, AI-native team — every developer uses Claude for day-to-day development, with mandatory human review on anything touching money or law.

**Team:** RealEZ Engineering (a Husig product team) · **Reports to:** RealEZ's founder/CTO

## Why This Role Exists

The founder has stepped back from hands-on coding to focus on architecture, hiring, and roadmap — this hire is the day-to-day technical lead. Not a second peer to the existing backend engineer: this person co-owns architecture, is the primary reviewer of every AI-generated pull request, and stands up CI/CD, infrastructure-as-code, and the security baseline in week 1. There is no dedicated DevOps/Platform Engineer on this team — that ground is covered by this role, using AI-assisted scaffolding rather than a separate hire.

## The Stack

| Layer | Tech |
|---|---|
| **Backend** | Python, FastAPI, Pydantic, PostgreSQL (RDS) |
| **Infra** | AWS (ECS Fargate, RDS, S3, CloudFront, Secrets Manager, VPC), Terraform or AWS CDK |
| **Mobile (consumed, not authored)** | Flutter, via the same API surface |
| **CI/CD** | GitHub Actions (or equivalent) — lint, type-check, tests, security scanning required on every merge |

## Key Responsibilities

### Architecture & Technical Leadership (35%)
- Co-own architecture with the founder, including the two-pillar data model (Transitional Document + Merchant Integration)
- Design multi-tenant, row-level tenant isolation from day one
- Own the jurisdiction-rules-engine design for the pilot state(s)

### Foundations & Infrastructure (30%)
- Stand up CI/CD with required checks (lint, type-check, tests, security scanning) in week 1
- Infrastructure as code (Terraform/CDK) for the AWS reference architecture
- Secrets management and observability (structured logging, error tracking) from day one

### Code Review & AI-Native Practice (20%)
- Primary reviewer of AI-generated code across the team
- Enforce the safe-to-AI-generate vs. always-human-verified split (jurisdiction rules, commission math, e-signature webhooks, auth)
- 2-approval rule on anything money- or legal-adjacent

### Integration Work (15%)
- 3rd-party e-signature vendor integration, including webhook/callback handling
- Merchant Integration's payment and commission-ledger logic

## Must-Have

- 5+ years backend engineering, including real ownership of architecture decisions, not just feature delivery
- Deep Python + FastAPI (or a directly transferable async Python framework) experience, comfortable with Pydantic-style validation for deeply nested data
- Hands-on AWS experience (RDS, S3, container-based compute, IAM, Secrets Manager) and infrastructure as code
- Comfortable directing AI coding tools (Claude Code or similar) as a daily practice, with the judgment to review AI-generated code critically, not rubber-stamp it
- Experience with relational schema design for multi-tenant SaaS
- Professional English; comfortable being the primary technical decision-maker day to day

## Nice-to-Have

- Experience with e-signature or payment-webhook integrations
- Experience in real estate, fintech, or another compliance-adjacent vertical
- Prior tech-lead or staff-engineer experience at an early-stage startup
- Flutter/Dart familiarity, to review mobile code even if not authoring it

## First 90 Days

- **30 days:** CI/CD live with required checks; IaC deployed for staging + prod; multi-tenant schema and tenant-aware auth in place
- **60 days:** Transitional Document and Merchant Integration data models built; e-signature vendor integrated in sandbox
- **90 days:** both pillars feature-complete for the pilot state; review discipline running smoothly on every PR

## What We Offer

- The highest-leverage technical role on a small, senior, AI-native team — real architectural ownership, not a ticket queue
- Competitive compensation commensurate with the scope of this role
- Direct line to the founder on every major technical decision

## How to Apply

Send your CV plus a short note on a system you architected from scratch — what you chose, why, and what you'd do differently. Links to code (GitHub) welcome.

Please submit to **[careers@husig.ai]**. Also include your salary expectations.

---

*Last Updated: September 2026*
