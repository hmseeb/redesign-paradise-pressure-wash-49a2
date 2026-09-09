# Paradise Pressure Washing — Website Redesign

A complete, from-scratch redesign of the Paradise Pressure Washing website — a local,
family-owned exterior cleaning business serving New Smyrna Beach and Volusia County, Florida.

Built with vanilla HTML, CSS and JavaScript. No build step, no dependencies, no external APIs.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Entry point — all page sections, meta tags and JSON-LD structured data |
| `styles.css` | Design system (custom properties), layout, components, responsive rules |
| `main.js` | Mobile nav, sticky header, scroll reveal, scroll-spy, quote form |
| `favicon.svg` | Favicon placeholder (water droplet mark) |
| `site.webmanifest` | PWA manifest |

## Design

Modern, clean and professional. Deep ocean navy paired with a fresh aqua accent and a warm
sun highlight over sand neutrals — a palette drawn from the coastal Florida service area.
Bold display typography (Sora) over a highly legible body face (Plus Jakarta Sans), with
generous whitespace and a card-driven layout.

Sections: hero, service pillars, about, roof/algae feature band, six-card services grid,
why-choose-us, testimonials, contact (details + quote form), closing CTA, footer.

There is no FAQ section because the source content contained no FAQ material.

## Business content

All copy, services, testimonials and contact details come from the existing site:

- **Phone:** (386) 643-3339
- **Email:** JC@Paradise-Pressure-Washing.com
- **Service area:** New Smyrna Beach & surrounding Volusia County, Florida
- **Services:** Roof Soft Washing · Natural Stone & Paver Cleaning & Sealing ·
  Driveway, Sidewalk & Walkway · Pool Decks & Lanais · House & Building Exterior Washing ·
  Commercial Pressure Washing

## Images

Authentic photography from the original site was preserved wherever it showed the
business's own work — the roof, paver patio, driveway and pool deck job photos are all
original, as is the logo. The remaining images (about, roof algae close-up, pool deck,
house washing and commercial cards) are sourced from Pexels and matched to the specific
subject of the section they appear in. All images carry descriptive, business-specific
alt text.

## Accessibility & SEO

Semantic landmarks, a skip link, labelled form controls, visible focus states,
`prefers-reduced-motion` support, and a no-JS fallback so scroll-reveal content is never
hidden. Includes Open Graph/Twitter cards and `HomeAndConstructionBusiness` JSON-LD.

## Notes

The quote form composes a pre-filled email via `mailto:` — there is no backend, and no
environment variables or third-party services are used at runtime.
