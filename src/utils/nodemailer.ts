import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
})

export async function sendEmail(to: string, subject: string, body: string) {
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text: body,
  })
}
