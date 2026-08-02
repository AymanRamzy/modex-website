# ModEX Learning Hub — Stage 1

A separate Next.js application for secure ModEX learning delivery.

## Stage 1 scope

Implemented in this foundation:

- Secure credentials login with signed, HTTP-only sessions.
- Separate administrator and student roles.
- Student dashboard with enrolled programs and progress.
- Program, cohort, module, and lesson structure.
- Google Drive-compatible lesson video slots.
- Downloadable lesson-resource structure.
- Administrator overview.
- PostgreSQL schema for users, programs, cohorts, enrollments, modules, lessons, resources, and progress.
- GitHub Actions typecheck and production-build validation.

The current interface uses demonstration content while PostgreSQL is being provisioned. The next slice replaces the demonstration data with persistent admin forms and database queries.

## Local or VPS setup

```bash
cd learning-hub
npm install
cp .env.example .env.local
```

Generate an administrator password hash:

```bash
npm run password:hash -- "Choose-a-strong-admin-password"
```

Generate a student password hash the same way. Copy the generated values into `.env.local`.

Create a session secret:

```bash
openssl rand -hex 32
```

Copy it into `SESSION_SECRET` in `.env.local`.

Validate and build:

```bash
npm run typecheck
npm run build
```

Start on the dedicated LMS port:

```bash
npm start
```

The application listens on `127.0.0.1:3002`.

## Intended VPS routing

```text
learn.financialmodex.com -> Nginx -> 127.0.0.1:3002
```

This remains separate from:

```text
exam.financialmodex.com    -> 127.0.0.1:3000
preview.financialmodex.com -> 127.0.0.1:3001
```

## PostgreSQL foundation

The schema is stored in:

```text
database/schema.sql
```

Do not expose PostgreSQL publicly. Bind it locally and use a dedicated database user with access only to the Learning Hub database.

## Google Drive lesson videos

Lessons accept a Drive preview URL in this format:

```text
https://drive.google.com/file/d/FILE_ID/preview
```

The platform protects access to the lesson page. Google Drive permissions must also be configured appropriately; an embedded link alone is not a substitute for Drive file permissions.

## Security notes

- Never commit `.env.local`, passwords, session secrets, database passwords, or Drive service credentials.
- Use HTTPS before testing real student accounts.
- The first production database connection must include backups and restricted network access.
- Stage 2 will add assignments, submissions, grading, deadlines, and feedback.
