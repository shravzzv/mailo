import { BackgroundLines } from '@/components/ui/background-lines'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <>
      <BackgroundLines>
        <main className='text-center space-y-5 min-h-screen flex flex-col items-center justify-center'>
          <h1 className='text-3xl px-6 font-black md:text-4xl lg:text-7xl lg:pb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Email conversations, now supercharged with AI.
          </h1>
          <p className='px-4'>
            Send a question. Get an intelligent reply. No logins. No apps. Just
            email magic powered by{' '}
            <strong className='text-yellow-300 text-shadow-xs'>Postmark</strong>{' '}
            and ChatGPT.
          </p>
          <Button variant={'outline'} asChild className='z-1'>
            <a
              href='mailto:246d8fbcfcf4085c30789eecd2cdb273@inbound.postmarkapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Try it out
            </a>
          </Button>
        </main>
      </BackgroundLines>

      <section className='mb-40 mt-80 md:mt-0 sm:px-4 md:px-0'>
        <h2 className='text-center text-3xl font-bold mb-6'>FAQ</h2>
        <div className='flex items-center justify-center'>
          <Accordion type='single' collapsible className='w-full max-w-2xl'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>How does Mailo work?</AccordionTrigger>
              <AccordionContent>
                Mailo lets you interact with an AI assistant entirely through
                email. Just send a question to the provided email address. After
                a few seconds, you&apos;ll get a smart reply powered by GPT — no
                login, no app needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger>
                What kind of questions can I ask?
              </AccordionTrigger>
              <AccordionContent>
                Anything you&apos;d ask a helpful assistant — from technical
                queries and summaries to travel tips and writing help. Keep the
                subject line short and use the body to give more context.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3'>
              <AccordionTrigger>
                Can I reply to the AI&apos;s email to continue the conversation?
              </AccordionTrigger>
              <AccordionContent>
                Not yet. Replying directly to continue the thread is a planned
                feature. For now, you&apos;ll need to start a new email for each
                question.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-4'>
              <AccordionTrigger>
                Do I need to create an account?
              </AccordionTrigger>
              <AccordionContent>
                Nope. There are no logins, accounts, or installations required.
                Just use your existing email client.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-5'>
              <AccordionTrigger>How fast will I get a reply?</AccordionTrigger>
              <AccordionContent>
                Typically within 10-20 seconds. If there&apos;s high demand or a
                temporary issue with the AI backend, it may take a bit longer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-6'>
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Yes. Only the email content is used to generate a reply. We
                don’t store your emails, and no data is used for training.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-7'>
              <AccordionTrigger>Can I send attachments?</AccordionTrigger>
              <AccordionContent>
                Mailo currently does not support handling file attachments. It
                only reads plain text from your email subject and body.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
