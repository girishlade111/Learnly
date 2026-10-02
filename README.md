# Learnly

A modern, animated **online-learning landing page** built with Next.js — dark cinematic design with smooth scroll-triggered animations, course sections, and an FAQ. Ships with a Prisma/SQLite data layer and a demo API route so it can grow into a full course platform.

## ✨ Features

- **Animated marketing site** — framer-motion scroll reveals, sticky blurred navbar, mobile menu
- **Course / FAQ sections** — landing-page structure for an online-learning product
- **Demo API route** — `src/app/api/route.ts` returns a sample JSON payload
- **Prisma + SQLite** — `User` and `Post` models wired via `src/lib/db.ts` (DB file at `db/custom.db`)
- **Component library** — full shadcn/ui set (`src/components/ui`), custom `use-toast` / `use-mobile` hooks

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Framer Motion](https://motion.dev/)
- [Prisma](https://www.prisma.io/) with SQLite
- [next-auth](https://next-auth.js.org/), [next-intl](https://next-intl.dev/) (dependencies available, not yet wired in)

## 🚀 Quick Start

```sh
npm install
npm run db:generate     # generate the Prisma client
npm run dev             # starts on http://localhost:3000
```

## 🔑 Environment Variables

```sh
DATABASE_URL="file:./db/custom.db"
```

Only needed if you use the Prisma data layer (`src/lib/db.ts`).

## 📦 Build & Deploy

```sh
npm run build           # builds a standalone server (.next/standalone)
npm run start           # runs the standalone server with bun
```

The production deployment runs the Next.js **standalone server** behind Caddy (see `Caddyfile`, reverse proxy to `localhost:3000`).

> **Static variant:** this repo is statically exported to [https://girishlade111.github.io/Learnly/](https://girishlade111.github.io/Learnly/) — the live build removes the demo `/api` route and ships `output: "export"`; the source here keeps the full server-capable app.

## 📁 Project Structure

```
src/
  app/           # App Router pages (landing page + demo API route)
  components/ui/ # shadcn/ui components
  hooks/         # use-mobile, use-toast
  lib/           # db.ts (Prisma client), utils.ts
prisma/          # schema.prisma (SQLite: User, Post)
db/              # committed SQLite dev database
public/          # logo.svg, robots.txt
```

## 👤 Author

Built by Girish Lade — [ladestack.in](https://ladestack.in)
