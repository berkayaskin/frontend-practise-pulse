import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/data/pricing-page'

const Faq = () => {
  return (
    <section className="container pb-8 pt-12 lg:pb-20 lg:pt-24">
      <h2 className="h2 mb-4 leading-tight">FAQ</h2>
      <div className="-mx-4 flex flex-wrap">
        {faq.map((item, index) => (
          <Accordion
            type="single"
            key={index}
            collapsible
            className="w-full px-4 py-6"
          >
            <AccordionItem value="index">
              <AccordionTrigger className="h4 mb-2 font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-normal">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
export default Faq
