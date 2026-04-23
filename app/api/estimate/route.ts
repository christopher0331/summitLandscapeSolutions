import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  zip?: string;
  propertyType?: string;
  serviceInterest?: string;
  timeline?: string;
  budget?: string;
  hearAboutUs?: string;
  message?: string;
  source?: string;
  // Honeypot — must remain empty
  website?: string;
};

const SERVICE_OPTIONS = new Set([
  "lawn-care-maintenance",
  "fertilization-weed-control",
  "aeration-overseeding",
  "seasonal-yard-cleanups",
  "paver-patios-walkways",
  "retaining-walls",
  "outdoor-living-features",
  "landscape-design",
  "planting-installation",
  "sod-turf-installation",
  "general-inquiry",
  "other",
]);

const TIMELINE_OPTIONS = new Set([
  "asap",
  "1-3-months",
  "3-6-months",
  "planning",
  "flexible",
]);

const PROPERTY_OPTIONS = new Set(["residential", "commercial", "hoa", "multi-family"]);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined) {
  if (!value || !value.trim()) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#0f172a;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;border:1px solid #e2e8f0;color:#334155;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let body: EstimatePayload;

  try {
    body = (await request.json()) as EstimatePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const address = body.address?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const zip = body.zip?.trim() ?? "";
  const propertyType = body.propertyType?.trim() ?? "";
  const serviceInterest = body.serviceInterest?.trim() ?? "";
  const timeline = body.timeline?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const hearAboutUs = body.hearAboutUs?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const source = body.source?.trim() ?? "Website";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phone) errors.phone = "Phone is required.";
  if (!message) errors.message = "Please share a few project details.";

  if (serviceInterest && !SERVICE_OPTIONS.has(serviceInterest)) {
    errors.serviceInterest = "Invalid service selection.";
  }
  if (timeline && !TIMELINE_OPTIONS.has(timeline)) {
    errors.timeline = "Invalid timeline selection.";
  }
  if (propertyType && !PROPERTY_OPTIONS.has(propertyType)) {
    errors.propertyType = "Invalid property type.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fieldErrors: errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail =
    process.env.ESTIMATE_TO_EMAIL || "jamarrhenaifesh@summitlandscapesolutions.co";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fullAddress = [address, city, zip].filter(Boolean).join(", ");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0f172a;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="padding:24px 28px;background:#047857;color:#ffffff;">
        <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.85;">New Estimate Request</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;">${escapeHtml(name)}</h1>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.9;">${escapeHtml(email)}${phone ? ` &middot; ${escapeHtml(phone)}` : ""}</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Property Address", fullAddress || undefined)}
          ${row("Property Type", propertyType)}
          ${row("Service Interest", serviceInterest)}
          ${row("Timeline", timeline)}
          ${row("Estimated Budget", budget)}
          ${row("How They Heard", hearAboutUs)}
          ${row("Submitted From", source)}
          ${row("Submitted At (PT)", submittedAt)}
        </table>
        <div style="margin-top:24px;padding:16px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
          <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#047857;font-weight:600;">Project Details</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#0f172a;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="margin:24px 0 0;font-size:12px;color:#64748b;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>
    </div>
  </body>
</html>`;

  const text = `New estimate request from Summit Landscape Solutions website

Name: ${name}
Email: ${email}
Phone: ${phone}
${fullAddress ? `Address: ${fullAddress}\n` : ""}${propertyType ? `Property type: ${propertyType}\n` : ""}${serviceInterest ? `Service interest: ${serviceInterest}\n` : ""}${timeline ? `Timeline: ${timeline}\n` : ""}${budget ? `Budget: ${budget}\n` : ""}${hearAboutUs ? `How they heard: ${hearAboutUs}\n` : ""}Submitted from: ${source}
Submitted at (PT): ${submittedAt}

Project details:
${message}
`;

  try {
    const { error } = await resend.emails.send({
      from: `Summit Landscape Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Estimate Request — ${name}${serviceInterest ? ` (${serviceInterest})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again or contact us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Estimate route exception:", err);
    return NextResponse.json(
      { error: "Unexpected server error. Please contact us directly." },
      { status: 500 },
    );
  }
}
