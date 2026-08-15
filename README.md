# R&CH Transport Website

A bilingual marketing website for R&CH Transport, LLC, built with plain HTML, CSS, and JavaScript.

The site presents the company’s freight services, bilingual messaging, and a quote request flow built around a modal form that submits directly to Formspree.

## Features

- Responsive homepage for desktop, tablet, and mobile
- English and Spanish language toggle
- Bilingual messaging for transport and logistics services
- Quote CTA buttons that open a modal request form
- Direct Formspree submission for quote requests
- Static-site implementation with no build step required

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Formspree

## Project Structure

```text
R-and-CH/
├── index.html
├── styles.css
├── script.js
├── services.html
├── README.md
├── BRAND_SYSTEM.md
├── CUSTOMIZE.md
├── DAD_SERVICES_ADDED.md
├── IMAGE_GUIDE.md
├── LOGO_GUIDE.md
├── PHOTO_REPLACEMENT.md
├── SERVICES_SECTION.md
├── TURNSTILE_SETUP.md
├── CNAME
├── LICENSE
├── assets/
│   ├── rch-logo.svg
│   ├── hero-van.jpg
│   ├── service_01.png
│   ├── service_02.png
│   ├── service_03.png
│   ├── service_04.png
│   └── ...
└── .gitignore
```

## Local Development

From the project folder, run:

```bash
cd /Users/ilianacantu/Dev/R-and-CH
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is recommended because the quote form uses browser `fetch()` requests and should be tested from a local web server instead of by opening the file directly.

## Quote Flow

The current quote experience works like this:

1. User clicks a quote CTA from the top of the page or hero section.
2. A modal opens.
3. The user fills out the request form.
4. The form submits to Formspree.
5. The browser displays a success message or error alert.

Required fields include:

- name
- phone
- email
- shipment / quote details

The modal logic and submission handling live in `script.js`.

## Bilingual Support

The site includes an English / Spanish toggle.

Language strings are defined in the `translations` object in `script.js` and applied through the DOM. The selected language is stored in browser localStorage with:

```js
localStorage.setItem("rch-language", lang)
```

## Formspree Setup

The active form points to:

```html
action="https://formspree.io/f/xkjwzdyo"
```

Before publishing, verify:

- the Formspree form ID is valid
- the email endpoint is active
- the receiving email address is correct
- submissions are tested from a served site, not a bare file URL

## Styling and Assets

The main styling is located in:

- `styles.css`

Branding and imagery are stored in:

- `assets/`

The layout includes responsive behavior for different screen sizes and custom styled quote buttons and service blocks.

## Deployment Notes

Before going live:

- test both English and Spanish flows
- verify that quote submissions are received correctly
- check contact details and wording for accuracy
- confirm imagery is approved and high quality
- validate the site on mobile and desktop breakpoints

## Useful Reference Files

- `index.html` — main page structure and modal form markup
- `script.js` — language switch logic, modal behavior, and form submission logic
- `styles.css` — site styling and responsive design

## Screenshots

Add screenshots here when the site is ready for portfolio or client review.

## License

This project is licensed under the project’s included license file.

## Notes

This is a static website with no build process, making it easy to host on a simple static server or deployment platform.
