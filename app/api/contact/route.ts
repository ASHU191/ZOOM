import { NextResponse } from 'next/server'
// If ESModule import gives error, use require like this:
const nodemailer = require('nodemailer')

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Message`, // Simple static subject
      text: `Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
