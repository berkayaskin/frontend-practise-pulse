import { Button } from '@/components/ui/button'
import { footer } from '@/data/footer'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-pulse-gray-800">
      <div className="container">
        <div className="pb-4 pt-8 md:pb-24 md:pt-24">
          <div className="-mx-4 lg:flex">
            <div className="mb-6 px-4 text-center md:mb-12 lg:mb-0 lg:w-1/2 lg:text-left">
              <p className="mb-4 lg:mb-12">
                <Link href="/" className="inline-block">
                  <Image
                    src="/assets/pulse-logo.svg"
                    className="h-auto w-32 md:w-40"
                    width={160}
                    height={65}
                    alt="Pulse Logo"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Pulse Logo</span>
                </Link>
              </p>
              <Button variant="link" asChild>
                <Link
                  href="/signup/plus"
                  className="animated-button px-8 py-4 hover:no-underline"
                >
                  Sign Up for a Free 30-day Trial
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap text-lg leading-snug sm:leading-normal lg:w-1/2">
              {footer.map((item) => {
                return (
                  <ul
                    className="w-1/2 p-4 xs:w-1/3 md:w-1/3 md:py-0"
                    key={item.title}
                  >
                    <h3 className="mb-2 font-bold text-white lg:mb-4">
                      {item.title}
                    </h3>
                    {item.navigation.map((link) => {
                      return (
                        <li key={link.title} className="mb-2 lg:mb-4">
                          <Link
                            href={link.href}
                            className="font-normal text-pulse-green-300 no-underline hover:text-white"
                          >
                            {link.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-8 pt-3 text-pulse-gray-600 md:pb-3">
        <p className="text-xs text-pulse-gray-500">
          {'©'}
          {new Date().getFullYear()}
          <Link
            href="https://berkayaskin.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-pulse-gray-500 hover:text-pulse-gray-400"
          >
            {' '}
            berkayaskin.dev
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
