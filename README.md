# 📬 Mailo

**Mailo** is a lightweight AI-powered email assistant that works entirely over email. No apps. No logins. Just send an email and get smart, context-aware replies delivered straight to your inbox — powered by GPT.

> Built for the [dev.to Postmark Challenge: Inbox Innovators](https://dev.to/challenges/postmark).

## ✨ Features

- 📩 **Email-first Interface** — Just send an email to interact, no account needed.
- 🧠 **GPT-Powered Intelligence** — Smart, human-like responses tailored to your message.
- ⚡ **Fast & Lightweight** — No bloated UI, just good old email.
- 🛡️ **Privacy-first** — Only the message content is used to generate replies.

---

## 🛠️ Tech Stack

| Tech                           | Role                      |
| ------------------------------ | ------------------------- |
| **Next.js 15**                 | API routes + landing page |
| **Postmark**                   | Inbound email parsing     |
| **Nodemailer**                 | Sending reply emails      |
| **OpenAI (via GitHub Models)** | LLM backend               |
| **TypeScript**                 | Type safety               |

## 📦 Architecture

User → (sends email) to Postmark → Next.js Webhook → GPT-4.1 (GitHub) → Mailo Nodemailer → replies

## 🧪 Testing the App

1. Click the **Send Email** button on the landing page. 📧
2. Send an email to the pre-configured address with a clear subject (your question) and detailed body (extra info). 📝
3. Wait a few seconds. ⏳
4. Check your inbox—you’ll receive a helpful, AI-generated reply to your query! 📬

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/shravzzv/mailo.git
cd mailo
npm install
```

### 2. Setup Environment Variables

Create a `.env` file and add:

```env
GITHUB_TOKEN=your_github_models_token
MAIL_USER=your_email@gmail.com
MAIL_PASSWORD=your_email_app_password
```

### 3. Run Locally

```bash
npm run dev
```

## 📬 How It Works

1. A user sends an email to a Mailo-linked address.
2. Postmark parses it and hits a webhook hosted in your Next.js app.
3. The webhook extracts the subject + body, and sends it to GPT.
4. GPT generates a concise, email-style reply.
5. Nodemailer sends this reply back to the user.

## 💡 Rate Limit Handling

Mailo uses GitHub-hosted OpenAI models, which have a **15 requests/minute** and **150 requests/day** limit.

If the limit is hit:

- Users receive a graceful fallback response via email.
- Error is logged to the console, but doesn't crash the server.

## ✍️ Writing Style for GPT

The assistant is instructed to:

- Respond like a helpful human email assistant.
- Avoid greetings/sign-offs unless explicitly prompted.
- Be polite, concise, and helpful.
- Skip subject line formatting — that’s handled in code.

## 🛡️ Deployment & Hosting

- Deploy your app on **Vercel**
- Use **Postmark** for production-grade email parsing
- Enable **Gmail SMTP** (via App Passwords) for Nodemailer

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repo
2. Create a feature branch
3. Make changes
4. Submit a PR

## 📄 License

MIT License. Feel free to fork and modify Mailo for your own AI tools.
