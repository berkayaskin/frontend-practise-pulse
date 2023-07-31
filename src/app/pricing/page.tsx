import type { NextPage } from 'next'

const Pricing: NextPage = () => {
  return (
    <div className="border-b bg-pulse-green-100">
      <div className="container pb-4 max-md:pt-8 lg:mb-10 lg:flex lg:justify-center lg:pb-10">
        <div className="w-full md:max-w-[600px] lg:text-center">
          <h1 className="h1 max-md:text-4xl">
            Try Pulse free for
            <br className="hidden md:inline-block" /> 30 days.
          </h1>
          <p className="text-pulse-gray-800">
            See why Pulse is the best way to monitor your cash flow. Sign up for
            any plan and try Pulse absolutely free for 30 days.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Pricing
