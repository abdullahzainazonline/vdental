import { NextResponse } from "next/server";
import { Resend } from "resend";

interface AppointmentRequest {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidPhone(value: string) {
  return /^[0-9+\-\s()]{8,15}$/.test(value);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as AppointmentRequest;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const date = (body.date || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !phone || !service || !date) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL || "V Dental <onboarding@resend.dev>";
    const to = process.env.APPOINTMENT_TO_EMAIL || "vdentaladm@gmail.com";

    const formattedDate = new Date(date).toLocaleDateString("en-MY", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeDate = escapeHtml(formattedDate);
    const safeMessage = escapeHtml(message || "-");

    await resend.emails.send({
      from,
      to,
      subject: `New Appointment Request - ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">New Appointment Request</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td style="padding: 8px; font-weight: 700; width: 150px;">Name</td><td style="padding: 8px;">${safeName}</td></tr>
            <tr><td style="padding: 8px; font-weight: 700;">Email</td><td style="padding: 8px;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px; font-weight: 700;">Phone</td><td style="padding: 8px;">${safePhone}</td></tr>
            <tr><td style="padding: 8px; font-weight: 700;">Service</td><td style="padding: 8px;">${safeService}</td></tr>
            <tr><td style="padding: 8px; font-weight: 700;">Preferred Date</td><td style="padding: 8px;">${safeDate}</td></tr>
            <tr><td style="padding: 8px; font-weight: 700; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${safeMessage}</td></tr>
          </table>
        </div>
      `,
      text: [
        "New Appointment Request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Preferred Date: ${formattedDate}`,
        `Message: ${message || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment email failed:", error);
    return NextResponse.json(
      { error: "Failed to submit appointment request. Please try again." },
      { status: 500 }
    );
  }
}
