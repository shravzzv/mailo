import { sendEmail } from '@/utils/nodemailer'
import { chat } from '@/utils/openai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()
    const fromEmail = payload.From
    const subject = payload.Subject
    const body = payload.TextBody || payload.HtmlBody || '(no content)'
    const response = await chat(subject, body)
    await sendEmail(fromEmail, response.subject, response.body)

    return NextResponse.json({ response })
  } catch (err) {
    console.error('Webhook error:', err)
    return new NextResponse('Webhook processing failed', { status: 500 })
  }
}
