import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const ADMIN_EMAIL = "Ghassenmans@gmail.com";

function asText(value: FormDataEntryValue | null | undefined) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function yesNo(value: FormDataEntryValue | null | undefined) {
  return value ? "Yes" : "No";
}

function listValue(values: FormDataEntryValue[]) {
  return values
    .map((value) => (typeof value === "string" ? value.trim() : ""))
    .filter(Boolean)
    .join(", ");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const gmailUser = process.env.GMAIL_USER || ADMIN_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const mailTo = process.env.MAIL_TO || ADMIN_EMAIL;

    if (!gmailAppPassword) {
      return NextResponse.json(
        { ok: false, error: "Missing GMAIL_APP_PASSWORD" },
        { status: 500 }
      );
    }

    const requesterName = asText(formData.get("name")) || "Client";
    const requesterEmail = asText(formData.get("email"));
    const requesterPhoneCode = asText(formData.get("phoneCountryCode"));
    const requesterPhone = asText(formData.get("phoneNumber"));
    const activities = listValue(formData.getAll("activities"));

    const adminText = `
New request received

Requester
- Who: ${asText(formData.get("who"))}
- Role: ${asText(formData.get("role"))}
- Name: ${requesterName}
- Phone country code: ${requesterPhoneCode}
- Phone number: ${requesterPhone}
- Email: ${requesterEmail}
- Preferred language: ${asText(formData.get("lang"))}
- Municipality: ${asText(formData.get("municipality"))}
- ZIP: ${asText(formData.get("zip"))}

Assisted profile
- Type: ${asText(formData.get("type"))}
- Age: ${asText(formData.get("age"))}
- Autonomy: ${asText(formData.get("autonomy"))}
- Activities: ${activities}
- Description: ${asText(formData.get("description"))}

Logistics
- Days: ${asText(formData.get("days"))}
- Hours: ${asText(formData.get("hours"))}
- Slot: ${asText(formData.get("slot"))}
- Night type: ${asText(formData.get("night-type"))}
- Start date: ${asText(formData.get("start-date"))}

Duration
- Duration: ${asText(formData.get("duration"))}
- Previous professionals: ${asText(formData.get("previous"))}
- Source: ${asText(formData.get("source"))}
- Urgency: ${asText(formData.get("urgency"))}

Consent
- GDPR: ${yesNo(formData.get("gdpr-consent"))}
- Terms: ${yesNo(formData.get("terms-consent"))}
    `.trim();

    const clientText = `
Hello ${requesterName},

Thank you for contacting us.
We have received your request successfully and it is now being reviewed.

You will receive a response within 24 hours maximum.

Best regards,
Ghassen Mansouri
    `.trim();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Accanto Home Care" <${gmailUser}>`,
      to: mailTo,
      replyTo: requesterEmail || gmailUser,
      subject: `New request from ${requesterName}`,
      text: adminText,
    });

    if (requesterEmail) {
      await transporter.sendMail({
        from: `"Accanto Home Care" <${gmailUser}>`,
        to: requesterEmail,
        subject: "We received your request",
        text: clientText,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Request email error:", error);

    const message = error instanceof Error ? error.message : "Unknown email error";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}