# Olyndra Lending (olyndra.com)

Broker-facing lender site for Olyndra, with its own visual identity separate from olyndra.ai.
Stack: Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS v4, Google Fonts via next/font
(Instrument Serif, IBM Plex Sans, IBM Plex Mono), Vercel Analytics. No icon library.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` — landing page: hero with example decision log, facts strip, how it works, terms table,
  broker section with enquiry form, founders
- `/sign-in` — placeholder customer sign-in (customer ID + password; the form does nothing yet)

## Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. In Vercel: **Add New → Project**, import the repo, keep the defaults (framework: Next.js), deploy.
3. **Settings → Domains**: add `olyndra.com` and `www.olyndra.com` and set the DNS records Vercel shows.
4. The broker enquiry form uses the same Web3Forms key as olyndra.ai, so enquiries land in the
   same inbox. Change `WEB3FORMS_ACCESS_KEY` in `components/partner-form.tsx` for a separate one.

## Where things live

- Copy and sections: `app/page.tsx`
- Colours, fonts, utilities: `app/globals.css` (tokens) and `app/layout.tsx` (fonts)
- Logo mark: `components/wordmark.tsx` and `public/icon.svg`
- Header / footer: `components/topbar.tsx`, `components/footer.tsx`
- Example decision log in the hero: `components/decision-ticket.tsx`
