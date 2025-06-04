import OpenAI from 'openai'

const token = process.env['GITHUB_TOKEN']
const endpoint = 'https://models.github.ai/inference'
const model = 'openai/gpt-4.1-mini'

const client = new OpenAI({
  apiKey: token,
  baseURL: endpoint,
})

export async function chat(subject: string, body: string) {
  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are Mailo, an AI-powered email assistant. Your job is to help users by replying to their questions or requests sent via email. Always respond in clear, natural language that reads like a well-written email — polite, professional, and helpful. Avoid unnecessary fluff or over-explaining. Keep it concise but informative. Do not include a greeting or sign-off unless specifically asked. Do not include a subject line — just provide the message body that will be sent as a reply. Do not mention that you are an AI or refer to yourself in the third person. Respond directly and helpfully, as if you were a knowledgeable human assistant handling email.`,
        },
        { role: 'user', content: `Subject: ${subject}\n\n${body}` },
      ],
      model,
      temperature: 1,
      top_p: 1,
    })

    const message = response.choices[0].message.content?.trim() || ''

    return {
      subject: `Re: ${subject}`,
      body: message,
    }
  } catch (err) {
    console.error('Error querying GPT:', err)
    return {
      subject: `Re: ${subject}`,
      body: `Hi,\n\nMailo is currently handling too many requests and can't process your message right now.\n\nWe're limited to 15 requests per minute and 150 per day. Please try again in a few minutes or later today.\n\nThanks for your patience!\n- Mailo ✉️`,
    }
  }
}
