const { Resend } = require("resend");

// ── Resend client ─────────────────────────────────────────────────────────────
//
// Setup:
//   1. Sign up at resend.com (free tier: 100 emails/day, 3,000/month).
//   2. Verify a sending domain (Resend → Domains → Add Domain) and add the
//      DNS records they give you. Until verified, you can only send from
//      onboarding@resend.dev and only TO your own Resend account email.
//   3. Resend → API Keys → Create API Key → paste into .env as RESEND_API_KEY.
//   4. Set EMAIL_FROM to an address on your verified domain, e.g.
//      "Portfolio <contact@yourdomain.com>".
const resend = new Resend(process.env.RESEND_API_KEY);

// ── Controller ────────────────────────────────────────────────────────────────
const submitContact = async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  try {
    // Email to portfolio owner
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: buildOwnerEmail({ name, email, phone, message }),
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thanks for reaching out!",
      html: buildAutoReplyEmail(name),
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent! I'll get back to you soon.",
    });
  } catch (err) {
    next(err);
  }
};

// ── Email templates ───────────────────────────────────────────────────────────
function buildOwnerEmail({ name, email, phone, message }) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#111827;margin-top:0;">New Portfolio Contact</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;font-weight:600;color:#374151;width:110px;">Name</td><td style="padding:8px 0;color:#111827;">${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Email</td><td style="padding:8px 0;color:#111827;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Phone</td><td style="padding:8px 0;color:#111827;">${phone || "—"}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
      <h3 style="color:#374151;margin:0 0 8px;">Message</h3>
      <p style="color:#111827;white-space:pre-wrap;margin:0;">${message}</p>
    </div>
  `;
}

function buildAutoReplyEmail(name) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#111827;margin-top:0;">Hey ${name}, thanks for reaching out!</h2>
      <p style="color:#374151;">I've received your message and will get back to you as soon as possible.</p>
      <p style="color:#374151;">In the meantime, feel free to connect with me on
        <a href="https://www.linkedin.com/in/kalyan-naicker-72624b208/" style="color:#2563eb;">LinkedIn</a>
        or check out my work on
        <a href="https://github.com/Kalyan0218" style="color:#2563eb;">GitHub</a>.
      </p>
      <p style="color:#6b7280;font-size:14px;margin-top:24px;">— Kalyan Naicker</p>
    </div>
  `;
}

module.exports = { submitContact };
