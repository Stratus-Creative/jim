import { NextResponse } from "next/server";
import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const TO_EMAIL = process.env.CONTACT_EMAIL || "contact@jimboltmusic.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const { error } = await getResend().emails.send({
      from: "Jim Bolt Website <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject
        ? `[Website] ${subject}`
        : `[Website] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          <hr style="border: none; border-top: 1px solid #eee;" />
          <h3 style="color: #555;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">
            Sent from jimboltmusic.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
