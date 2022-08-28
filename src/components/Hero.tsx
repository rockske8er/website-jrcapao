import x from './../assets/images/jr.png'
import Image from 'next/image'
import { ButtonFill } from './ButtonFill'
import { ButtonOutline } from './ButtonOutline'

const Hero = () => {
  return (
    <section className={'py-4 md:px-24 px-4 bg-cover'}>
      <div className="flex md:flex-row flex-col gap-5 pt-20">
        <div className="flex-1">
          <h1
            className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
          >
            Be prepared for the mountains and beyond.
          </h1>
          <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you!
          </p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div>
        </div>
        <div className="flex-1 justify-center">
          <Image src={x} alt="hero" className="h-2/3" />
        </div>
      </div>
    </section>
  )
}

export { Hero }
