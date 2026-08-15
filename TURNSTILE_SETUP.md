# Cloudflare Turnstile Setup

## Current development configuration

The website currently uses Cloudflare's development sitekey:

```text
1x00000000000000000000AA
```

The matching test secret is:

```text
1x0000000000000000000000000000000AA
```

Do not use test credentials in production.

## Production setup

Create a Turnstile widget for the site's real domain.

Replace this value in `index.html`:

```html
data-sitekey="1x00000000000000000000AA"
```

with the production sitekey.

Then set these server environment variables:

```text
TURNSTILE_SECRET_KEY=YOUR_REAL_SECRET
WHATSAPP_NUMBER=19563330261
EXPECTED_HOSTNAME=yourdomain.com
```

`EXPECTED_HOSTNAME` is optional but recommended.

The phone number should contain country code + number only, with no spaces or punctuation.

## WhatsApp behavior

The public page does not contain the `wa.me` destination.

After Turnstile validates the customer, the Pages Function creates the WhatsApp URL on the server.

English users receive:

```text
Hello R&CH Transport, I would like to request a freight quote.
```

Spanish users receive:

```text
Hola R&CH Transport, me gustaría solicitar una cotización para un envío.
```

## Deploying to Cloudflare Pages

The directory:

```text
functions/api/whatsapp.js
```

automatically maps to:

```text
/api/whatsapp
```

when deployed using Cloudflare Pages Functions.
