# Better Auth Starter

A modern authentication starter built with [Next.js](https://nextjs.org/), [better-auth](https://github.com/your-org/better-auth) and [Drizzle ORM](https://orm.drizzle.team/). This project provides a ready-to-use authentication flow with Social login, PostgreSQL database integration, and a clean, extendable UI.

## Features

- 🔒 Social authentication with Microsoft (OAuth)
- 🗄️ PostgreSQL database via Drizzle ORM
- 🧩 Modular, extendable code structure
- 🎨 Styled with Tailwind CSS / ShadCN
- 🦄 Modern Next.js App Router (app directory)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd better-auth-starter
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following:

```env
# PostgreSQL connection string
DATABASE_URL=postgres://user:password@host:port/dbname

# Microsoft OAuth credentials
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
MICROSOFT_TENANT_ID=your-microsoft-tenant-id
```

### 4. Run database migrations

```bash
npx drizzle-kit push:pg
```

### 5. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Usage

- The home page (`/`) displays a Microsoft sign-in button.
- After signing in, users are redirected to the dashboard (`/dashboard`).
- User sessions and account data are stored in PostgreSQL.

## Tech Stack

- Next.js 15 (App Router)
- better-auth
- Drizzle ORM
- PostgreSQL
- Tailwind CSS
- TypeScript

## License

MIT
