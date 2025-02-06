// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { message: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, userId } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Create a Nodemailer transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or "Outlook", "Yahoo", etc.
      auth: {
        user: process.env.EMAIL_USER, // e.g. "your-email@gmail.com"
        pass: process.env.EMAIL_PASS, // e.g. "your-email-password"
      },
    });

    // Prepare email content
    const mailOptions = {
      from: email, // The sender’s email
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // The owner's email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        User ID: ${userId || "N/A"}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
