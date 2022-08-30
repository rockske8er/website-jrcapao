import JuniorImage from './../assets/images/jr-capao.png'
import Image from 'next/image'
import { ButtonFill } from './ButtonFill'

import { Clipboard } from 'phosphor-react'

const Hero = () => {
  return (
    <section className={'w-full bg-lightprimary'}>
      <div className="flex max-w-5xl mx-auto md:flex-row flex-col gap-5 pt-12">
        <div className="flex-1 flex flex-col justify-center p-4 md:p-0">
          <div className="">
            <h1
              className="md:text-3xl font-krona tracking-wide md:leading-tight
          leading-snug"
            >
              CANDIDATO A DEPUTADO DISTRITAL
            </h1>
          </div>

          <div className="">
            <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you!
            </p>
          </div>

          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Fale conosco</ButtonFill>
          </div>
        </div>
        <div className="flex-1">
          <Image src={JuniorImage} alt="hero" className="h-2/3" />
        </div>
      </div>

      <div className="bg-rocket py-10">
        <div className="max-w-5xl mx-auto  flex md:flex-row flex-col md:mt-12 gap-4 md:p-4  rounded-md sm:p-4">
          <div
            className={
              'py-8 px-4 border-b-4 border-primary hover:bg-primary overflow-hidden rounded-xl sm:mx-4'
            }
          >
            <Clipboard className="h-12 w-12 text-white" />
            <h1 className="text-white font-semibold text-lg my-3">
              {'Candidato ficha limpa'}
            </h1>
            <p className="text-white text-sm leading-relaxed">
              {
                'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor'
              }
            </p>
          </div>

          <div
            className={
              'py-8 px-4 border-b-4 border-primary hover:bg-primary overflow-hidden rounded-xl sm:mx-4'
            }
          >
            <Clipboard className="h-12 w-12 text-primary" />
            <h1 className="text-white font-semibold text-lg my-3">
              {'Candidato ficha limpa'}
            </h1>
            <p className="text-white text-sm leading-relaxed">
              {
                'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor'
              }
            </p>
            <button className="text-rose-600 font-medium text-sm my-1">
              Read More
            </button>
          </div>

          <div
            className={
              'py-8 px-4 border-b-4 border-primary hover:bg-primary overflow-hidden rounded-xl sm:mx-4'
            }
          >
            <Clipboard className="h-12 w-12 text-primary hover:text-white" />
            <h1 className="text-white font-semibold text-lg my-3">
              {'Candidato ficha limpa'}
            </h1>
            <p className="text-white text-sm leading-relaxed">
              {
                'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor'
              }
            </p>
            <button className="text-rose-600 font-medium text-sm my-1">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
