import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, userId } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY || "",
    });

    const domain = process.env.MAILGUN_DOMAIN || "";
    const recipientEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "shazil.akn@gmail.com"; // Your email

    // Email Content
    const emailData = {
      from: `Website Contact Form <noreply@${domain}>`,
      to: recipientEmail,
      subject: `New Contact Form Submission - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\nUser ID: ${userId || "N/A"}`,
    };

    await mg.messages.create(domain, emailData);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailgun Error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
