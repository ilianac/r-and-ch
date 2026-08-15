/**
 * Cloudflare Pages Function
 * Route: POST /api/whatsapp
 *
 * Required variables:
 * TURNSTILE_SECRET_KEY
 * WHATSAPP_NUMBER   e.g. 19563330261
 *
 * Optional:
 * EXPECTED_HOSTNAME
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.TURNSTILE_SECRET_KEY || !env.WHATSAPP_NUMBER) {
    return json({ error: "Server configuration is incomplete." }, 500);
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!body?.token) {
    return json({ error: "Missing verification token." }, 400);
  }

  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", body.token);

  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) formData.append("remoteip", ip);

  let verification;

  try {
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData
      }
    );

    verification = await verifyResponse.json();
  } catch {
    return json({ error: "Verification service unavailable." }, 502);
  }

  if (!verification.success) {
    return json({ error: "Human verification failed." }, 403);
  }

  if (env.EXPECTED_HOSTNAME && verification.hostname !== env.EXPECTED_HOSTNAME) {
    return json({ error: "Hostname verification failed." }, 403);
  }

  const language = body.language === "es" ? "es" : "en";

  const message = language === "es"
    ? "Hola R&CH Transport, me gustaría solicitar una cotización para un envío."
    : "Hello R&CH Transport, I would like to request a freight quote.";

  const number = String(env.WHATSAPP_NUMBER).replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return json(
    { url },
    200,
    {
      "Cache-Control": "no-store, private",
      "Referrer-Policy": "no-referrer"
    }
  );
}

export async function onRequest(context) {
  return json({ error: "Method not allowed." }, 405, { Allow: "POST" });
}

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders
    }
  });
}
