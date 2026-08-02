# ModEX Website Agent Instructions

## Product direction
- ModEX is a professional financial modeling and strategic finance platform.
- Primary message: **Build Better Models. Make Better Decisions.**
- Main public journeys: **Build Your Finance Career** and **Build a Solution for Your Organization**.
- Public navigation: Programs, For Organizations, Community, Insights, About.

## Brand
- Primary navy: `#0B2447`
- Secondary navy: `#1A2C55`
- Text: `#0B1320`
- Light background: `#F5F7FA`
- Gold accent: `#E7B600`
- Teal accent: `#40A0AD`
- Accessible dark teal: `#216E78`
- Dark gold: `#765D00`
- English font: Inter or a compatible system fallback.
- Arabic font: IBM Plex Sans Arabic or a compatible system fallback.

## UX and accessibility
- All launch-critical experiences must work in English and Arabic.
- Arabic must use proper RTL layout, not visual mirroring hacks.
- Target WCAG 2.2 AA.
- Use semantic HTML, one H1 per page, keyboard-accessible controls, visible focus states, and meaningful labels.
- Prefer fast server-rendered pages and minimal client-side JavaScript.
- Mobile-first responsive behavior is mandatory.

## Content and claims
- Never invent statistics, rankings, client relationships, accreditations, partnerships, prices, dates, or outcomes.
- Mark unresolved claims with an internal placeholder; never expose placeholders publicly.
- Do not imply that ModEX owns external certifications.
- Do not promise employment, promotions, salaries, or investment outcomes.
- Keep Academy and organizational services clearly distinguished.

## Engineering
- Use TypeScript with strict mode.
- Use reusable components and clear data structures.
- Keep secrets in environment variables and never commit credentials.
- Run `npm run typecheck` and `npm run build` before proposing merge.
- Add tests for business-critical logic as it is introduced.
- Use branch names beginning with `agent/`.
- Keep pull requests focused and document validation performed.
