import Image from 'next/image'
import Link from 'next/link'
import NavigationView from './navigation-view'

function DesktopNavigation() {
  return (
    <div className="container py-4 max-md:bg-white md:py-12">
      <nav className="flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="mr-10 flex shrink-0 items-center text-pulse-gray-400"
        >
          <Image
            src="/assets/pulse-logo.svg"
            className="h-auto max-w-full"
            width={119}
            height={49}
            alt="Pulse Logo"
            aria-hidden="true"
          />
          <span className="sr-only">Pulse</span>
        </Link>
        <div className="block md:hidden">
          <button className="flex items-center text-green-400 hover:text-green-300">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 35 22">
              <title>Menu - Open</title>
              <path d="M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z" />
            </svg>
            <svg
              className="hidden h-6 w-6 fill-current"
              viewBox="0 0 27 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu - Close</title>
              <path d="M1.833.918l24.749 24.749-1.414 1.414L.418 2.332z"></path>
              <path d="M25.167.919l1.414 1.414L1.833 27.08.419 25.667z"></path>
            </svg>
          </button>
        </div>

        <NavigationView className="list-reset hidden w-full flex-grow md:flex md:w-auto md:flex-grow-0 md:items-center md:gap-10" />
      </nav>
    </div>
  )
}
export default DesktopNavigation
