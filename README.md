# R&CH Transport Bilingual Website

This package recreates the approved R&CH Transport website direction in working HTML/CSS/JavaScript.

## Included

- Responsive homepage
- English / Spanish language toggle
- Language preference saved in the browser
- R&CH heritage logo concept
- Hero image based on the approved design
- Fleet cards and vehicle imagery
- Hot shot / nationwide / local / team-driver business information
- Contact section
- Cloudflare Turnstile protected WhatsApp quote button
- Cloudflare Pages Function for server-side verification
- Mobile navigation

## Files

```text
index.html
styles.css
script.js
assets/
  rch-logo.svg
  hero-van.jpg
  unit-01.jpg
  unit-02.jpg
  unit-03.jpg
  approved-design-reference.png
functions/
  api/
    whatsapp.js
TURNSTILE_SETUP.md
IMAGE_GUIDE.md
.dev.vars.example
```

## Preview locally

For the visual site:

```bash
python3 -m http.server 8000
```

Visit:

```text
http://localhost:8000
```

The Turnstile/WhatsApp backend will not work through the basic Python server because it requires a serverless runtime.

## Language switching

The entire page is one HTML file.

The `EN / ES` toggle changes text through the translation dictionary in `script.js`.

The selected language is stored in:

```text
localStorage["rch-language"]
```

The WhatsApp starter message is also localized.

## Before launch

1. Confirm the WhatsApp number.
2. Create a real Cloudflare Turnstile widget.
3. Replace the Turnstile development sitekey in `index.html`.
4. Configure the production secrets described in `TURNSTILE_SETUP.md`.
5. Replace any temporary/generated vehicle photography with high-resolution originals when available.
6. Confirm all vehicle dimensions and capacities before publishing.


## v2 visual update

This version uses the selected heritage logo:
- serif `R&CH`
- navy highway bar
- high-visibility lime lane markings
- right-facing highway arrow
- letterspaced `TRANSPORT, LLC`

The hero crop and header proportions were also updated to match the cleaner approved website concept.


## v3 responsive update

The site now adapts across:
- large desktop monitors
- laptops
- tablets
- large phones
- small phones

Responsive updates include:
- fluid header spacing and typography
- collapsible mobile navigation
- responsive EN / ES controls
- hero layout that stacks cleanly on tablet/mobile
- corrected image scaling and cropping
- 4 → 2 → 1 column service/benefit layouts
- 3 → 2 → 1 column fleet layouts
- mobile-friendly buttons and contact cards
- prevention of horizontal overflow from angled design elements


## v4 mobile-first update

The phone experience is now intentionally designed rather than simply collapsed from desktop.

Mobile improvements include:
- sticky header
- animated hamburger menu
- full-width mobile navigation
- larger touch targets
- phone-friendly EN / ES controls
- stacked hero with a less aggressive image crop
- full-width quote and services buttons
- compact benefit rows
- mobile product-style fleet cards
- improved mobile typography and spacing
- touch-friendly contact card
- responsive Turnstile modal
- layouts for 430px, 350px, and other small phone widths


## v5 mobile menu cleanup

This version fixes the oversized mobile menu shown in testing.

Changes:
- compact dropdown instead of a near full-screen takeover
- left-aligned mobile navigation
- tighter vertical spacing
- smaller EN / ES controls
- smaller mobile quote button
- subtle background dimming while the menu is open
- reduced overlap with the hero section


## v6 modern mobile header

The mobile header was redesigned to follow a more contemporary navigation pattern:

- compact sticky white header
- smaller logo
- rounded hamburger button
- floating menu card anchored to the upper-right
- compact navigation rows instead of a full-screen navy block
- EN / ES controls integrated into the dropdown
- outlined WhatsApp quote CTA
- subtle background dimming
- click-outside and Escape-to-close behavior


## v7 stable desktop hero

The desktop hero image now preserves the full approved van composition when:
- resizing the browser
- zooming in or out
- using different laptop/desktop aspect ratios

Desktop uses `object-fit: contain` rather than `cover`, so the van is not arbitrarily cropped or pushed off-center.

The separate mobile hero behavior is preserved because phones benefit from a tighter crop.

## v9 updates

- Desktop header is more resilient at 110%+ browser zoom.
- Navigation spacing and typography scale before clipping.
- Spanish hero headline is smaller and now emphasizes years of national/international transport experience and urgent freight.
- Quote form now opens a pre-filled email instead of WhatsApp.
- Contact/quote card sizing was cleaned up.
- Mobile header behavior remains intact.

## v11 visual hierarchy
- Increased the desktop R&CH logo size in the upper-left.
- Reduced the hero headline size for a cleaner balance.
- Kept zoom-safe header behavior.
- Preserved the compact mobile header.

## v15 responsive overhaul
- Fluid header sizing and zoom-safe navigation
- Responsive logo scaling without growing its white container
- Hero adapts across desktop, laptop, tablet and mobile
- Benefits, services and fleet use 4/3/2/1-column responsive layouts
- Contact/about/commitment sections stack cleanly
- Mobile nav remains compact and modern
- Improved browser zoom behavior and horizontal-overflow protection

## v16 header cleanup
- Removed the accumulated overlapping header triangles.
- Rebuilt the desktop white logo panel with one clean clipped shape.
- Reduced the actual desktop logo by about 10%.
- Preserved responsive navigation and mobile header behavior.

## v23 logo/header layering fix
- Restored the full large logo.
- Logo is no longer clipped by the diagonal header shape.
- White diagonal is now a separate background layer.
- Removed the rectangular white overlap.

## v26 corrected services section
- Hero/header preserved from v23.
- Original commitments section preserved.
- Fleet and About sections removed.
- Service image crops corrected to eliminate black areas.
- Service rows shortened and better balanced.
- Emoji icons replaced with clean line SVG icons.
- Service images remain relevant to each offering.
- Responsive desktop/tablet/mobile behavior added only to services section.

## v27 service image balance
- Reduced service image zoom.
- Centered trucks more consistently.
- Added breathing room around service imagery.
- Slightly reduced the diagonal overlap into images.
- Preserved all other sections and responsive behavior.

## v29 clean faded service images
- Reverted to the clean service photographs from v27.
- Removed mockup-derived image crops that contained baked-in text.
- Left-side fade is now CSS-only.
- Right side remains fully crisp.
- Vehicles are shifted farther right in-frame.
- Hero/header and commitments section remain unchanged.

## v31 — approved full-vehicle service framing
- Service trucks/van/forklift are kept fully in frame instead of cropped with `object-fit: cover`.
- Photos are anchored to the right side to match the approved mockup.
- A wider, softer fade is applied only on the left edge of each image.
- The right side remains fully crisp.
- Desktop, zoomed desktop, tablet, and mobile rules are included.
- All other approved sections remain unchanged.
