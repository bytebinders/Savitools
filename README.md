# SaviTools

**Professional developer infrastructure for the Stellar ecosystem.**

SaviTools is the foundational engineering layer of the [Savitura](https://savitura.com) ecosystem — a developer workstation for builders creating payment systems, wallets, settlement infrastructure, and fintech applications on Stellar.

> "Stripe + Vercel + Postman — for Stellar developers."

---

## Ecosystem

```
Savitura
├── Fluxa          — Payments API, checkout infrastructure, treasury
├── CrowdPay       — Crowdfunding and collaborative funding
└── SaviTools      — Developer tooling, wallet infra, simulators, webhooks
```

---

## Platform Modules

| Module | Description | Status |
|---|---|---|
| Transaction Inspector | Decode, visualize, and annotate Stellar transactions and XDR | MVP |
| Wallet Sandbox | Generate keypairs, fund testnet accounts, manage trustlines | MVP |
| Transaction Composer | Visual builder for multi-operation Stellar transactions | MVP |
| Webhook Infrastructure | Real-time Stellar event subscriptions with retry delivery | MVP |
| Payment Simulator | Simulate path payments, preview routing and fee estimates | Planned |
| Multi-Sig Builder | Signer configuration, threshold management, policy testing | Planned |
| Trustline Manager | Create/remove trustlines, asset discovery, limit management | Planned |
| Ledger Monitor | Operational observability, transaction streams, analytics | Planned |
| API Playground | Interactive Horizon query builder with response visualization | Planned |

---

## Tech Stack

### Frontend — `apps/web`
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI primitives)

### Backend — `apps/api`
- **NestJS** (Fastify adapter)
- **TypeORM** + **PostgreSQL**
- **BullMQ** + **Redis** (webhook job queue)
- **@stellar/stellar-sdk** (Horizon API)
- **Swagger** (OpenAPI docs at `/api/docs`)

### Infrastructure
- **Turborepo** monorepo
- **Docker Compose** (local Postgres + Redis)
- Railway (initial deploy) → DigitalOcean (scale)

---

## Project Structure

```
savitools/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   └── src/
│   │       ├── app/
│   │       │   ├── inspector/  # Transaction Inspector
│   │       │   ├── sandbox/    # Wallet Sandbox
│   │       │   ├── composer/   # Transaction Composer
│   │       │   └── webhooks/   # Webhook Infrastructure
│   │       ├── components/     # Shared UI components
│   │       └── lib/
│   │
│   └── api/                    # NestJS backend
│       └── src/
│           ├── modules/
│           │   ├── transaction/ # Transaction decoding & inspection
│           │   ├── wallet/      # Wallet generation & testnet provisioning
│           │   ├── webhook/     # Webhook subscriptions & delivery
│           │   └── simulator/   # Payment path simulation
│           ├── app.module.ts
│           └── main.ts
│
├── packages/                   # Shared packages (types, utilities)
├── docker-compose.yml
├── turbo.json
└── .env.example
```

---

## Getting Started

### Prerequisites
- Node.js >= 20
- Docker (for local Postgres + Redis)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your values
```

### 3. Start infrastructure

```bash
docker compose up -d
```

### 4. Run development servers

```bash
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| API | http://localhost:3001/api |
| Swagger Docs | http://localhost:3001/api/docs |

---

## API Overview

The REST API is versioned under `/api/v1/`. Full interactive documentation is available at `/api/docs` when the API server is running.

### Core Endpoints

```
GET  /api/v1/transactions/:hash     Inspect and decode a transaction
POST /api/v1/wallet/generate        Generate a new Stellar keypair
POST /api/v1/wallet/fund            Fund a testnet account via Friendbot
POST /api/v1/webhooks               Register a webhook endpoint
GET  /api/v1/webhooks               List registered webhooks
DELETE /api/v1/webhooks/:id         Remove a webhook
POST /api/v1/simulator/payment      Simulate a payment path
GET  /api/health                    Health check
```

### Webhook Events

```
payment.received
payment.sent
trustline.created
account.updated
asset.received
transaction.confirmed
```

---

## Development

### Run a single app

```bash
# Frontend only
cd apps/web && npm run dev

# Backend only
cd apps/api && npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

---

## Monetization Roadmap

| Phase | Model | Components |
|---|---|---|
| 1 — Adoption | Free | Inspector, Composer, Wallet Sandbox |
| 2 — Infrastructure | Usage-based | Webhook infra, hosted APIs, analytics |
| 3 — Enterprise | Subscription | Dedicated infra, SLAs, treasury tooling |

---

## Part of Savitura

SaviTools is not a standalone product — it is the engineering foundation powering:

- **Fluxa** — payment infrastructure and checkout
- **CrowdPay** — collaborative funding infrastructure

Everything built here strengthens the entire Savitura ecosystem.

---

## License

Private — Savitura. All rights reserved.
