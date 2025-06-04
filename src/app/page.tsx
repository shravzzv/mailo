import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
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
        <Button variant={'outline'} asChild>
          <a
            href='mailto:246d8fbcfcf4085c30789eecd2cdb273@inbound.postmarkapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Try it out
          </a>
        </Button>
      </main>
    </>
  )
}
