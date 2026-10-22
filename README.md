# Olyndra broker site (olyndra.com)

Broker-facing lender site for Olyndra. Built with the same stack as olyndra.ai:
Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS v4 with the same
shadcn-style theme tokens, Geist font, lucide-react icons, Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` — lender landing page for brokers (how it works, who we lend to, broker partnership form, founding team)
- `/sign-in` — placeholder customer sign-in (customer ID + password; the form does nothing yet)

## Deploy next to olyndra.ai (Vercel)

1. Push this folder to a new GitHub repo (e.g. `olyndra-brokers`).
2. In Vercel: **Add New → Project**, import the repo, keep the defaults (framework: Next.js) and deploy.
3. In the project's **Settings → Domains**, add `olyndra.com` and `www.olyndra.com`.
   Vercel shows the DNS records to add at your registrar (an `A` record for the apex
   and a `CNAME` for `www`, or nameservers if you prefer). Pick one as the redirect target.
4. The site uses the same Web3Forms key as olyndra.ai for the broker enquiry form, so
   enquiries land in the same inbox. Change `WEB3FORMS_ACCESS_KEY` in
   `components/partner-form.tsx` if you want a separate key.

## Things to edit

- Copy and section content: `app/page.tsx`
- Theme tokens (colours, radius): `app/globals.css`
- Header links / footer: `components/header.tsx`, `components/footer.tsx`
- Metadata (title, description, Open Graph): `app/layout.tsx`
