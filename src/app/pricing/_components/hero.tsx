import { hero } from '@/data/pricing-page'

const Hero = () => {
  const title = hero.title.split('\n')

  return (
    <article className="container pb-4 max-md:pt-8 lg:mb-10 lg:flex lg:justify-center lg:pb-10">
      <div className="w-full md:max-w-[600px] lg:text-center">
        <h1 className="h1 max-md:text-4xl">
          {title[0]}
          <br className="hidden md:inline-block" /> {title[1]}
        </h1>
        <p className="text-pulse-gray-800">{hero.subtitle}</p>
      </div>
    </article>
  )
}

export default Hero
