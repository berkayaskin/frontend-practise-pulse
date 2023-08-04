import { clientFeedback } from '@/data/pricing-page'
import Image from 'next/image'

const ClientFeedback = () => {
  return (
    <section className="container flex justify-center py-12 lg:py-24">
      <div className="w-2/3 text-center">
        <Image
          src={clientFeedback.image}
          alt={`client-${clientFeedback.client}`}
          className="mx-auto"
          width={80}
          height={80}
        />
        <div className="py-4 text-2xl text-pulse-gray-800">
          {clientFeedback.feedback}
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-pulse-green-400">
          {clientFeedback.client}
        </div>
      </div>
    </section>
  )
}
export default ClientFeedback
