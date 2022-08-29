import JuniorImage from './../assets/images/jrcapao-vote.png'
import Image from 'next/image'

import { ButtonOutline } from './ButtonOutline'

const About = () => {
  return (
    <section id="sobre" className={'w-full'}>
      <div className="flex max-w-5xl mx-auto md:flex-row flex-col   ap-5 pt-12">
        <div className="flex-1 ">
          <Image src={JuniorImage} alt="hero" className="h-2/6" />
        </div>

        <div className="flex-1 md:flex w-full flex-col justify-center items-center p-4">
          <div className="">
            <h1
              className="md:text-2xl text-center text-4xl uppercase font-krona tracking-wide md:leading-tight
          leading-snug"
            >
              Um pouco da minha historia
            </h1>
          </div>

          <div className="">
            <p className="md:font-poppins font-semibold text-center text-gray-600 md:p-4  leading-relaxed">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you! Are you looking for amazing hiking travel? Don’t worry!
              We got it for you! Are you looking for amazing hiking travel?
              Don’t worry! We got it for you! Are you looking for amazing hiking
              travel? Don’t worry! We got it for you! Are you looking for
              amazing hiking travel? Don’t worry! We got it for you!
            </p>
          </div>

          <div className="flex md:flex-wrap justify-center">
            <ButtonOutline />
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
