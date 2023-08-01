import { faq } from '@/data/pricing-page'

const Faq = () => {
  return (
    <div className="container pb-8 pt-12 lg:pb-20 lg:pt-24">
      <h2 className="h2 mb-4 leading-tight">FAQ</h2>
      <div className="-mx-4 flex flex-wrap">
        {faq.map((item, index) => (
          <div className="px-4 py-6 md:w-1/2" key={index}>
            <div className="h4 mb-2">{item.question}</div>
            <p className="leading-normal">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Faq
