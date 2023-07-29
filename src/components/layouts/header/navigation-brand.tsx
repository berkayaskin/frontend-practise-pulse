import Image from 'next/image'
import Link from 'next/link'

function NavigationBrand() {
  return (
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
  )
}
export default NavigationBrand
