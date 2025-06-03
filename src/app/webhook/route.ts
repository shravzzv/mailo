import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()

    const fromEmail = payload.From
    const subject = payload.Subject
    const body = payload.TextBody || payload.HtmlBody || '(no content)'

    console.log('Parsed email from Postmark:', {
      fromEmail,
      subject,
      body,
    })

    // Call your GPT model here (e.g., via OpenAI or GitHub)
    // const response = await runChatGPT(body)

    // Then send the response email using nodemailer
    // await sendReplyEmail(fromEmail, response)

    return NextResponse.json({ status: 'ok' })
  } catch (err) {
    console.error('Webhook error:', err)
    return new NextResponse('Webhook processing failed', { status: 500 })
  }
}
