import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"] as const

const missingEnv = requiredEnv.filter((key) => !process.env[key])

if (missingEnv.length) {
  // Log once at startup to aid debugging without exposing secrets in responses
  console.error(`Missing required email environment variables: ${missingEnv.join(", ")}`)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, role, projectType, budget, message } = body ?? {}

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    if (missingEnv.length) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      role ? `Role: ${role}` : null,
      projectType ? `Project Type: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n")

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form submission failed", error)
    return NextResponse.json({ error: "Unable to send message right now. Please try again later." }, { status: 500 })
  }
}
