import JuniorImage from './../assets/images/jr-capao.png'
import Image from 'next/image'
import { ButtonFill } from './ButtonFill'
import { ButtonOutline } from './ButtonOutline'

import Icon1 from './../assets/images/icon-1.png'

const Hero = () => {
  const Info = [
    {
      icon: Icon1,
      title: 'Candidato ficha limpa',
      des: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: Icon1,
      title: 'Fundo partidario',
      des: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: Icon1,
      title: '1 Candidatura ao um cargo publico',
      des: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.',
    },
  ]
  return (
    <section className={'py-4 md:px-4'}>
      <div className="flex max-w-5xl mx-auto md:flex-row flex-col gap-5 pt-12">
        <div className="flex-1 flex flex-col justify-center p-4 md:p-0">
          <div className="">
            <h1
              className="md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight
          leading-snug"
            >
              Be prepared for the mountains and beyond.
            </h1>
          </div>

          <div className="">
            <p className="text-gray-600 md:w-2/3 md:py-4 py-2 leading-relaxed">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you!
            </p>
          </div>

          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div>
        </div>
        <div className="flex-1">
          <Image src={JuniorImage} alt="hero" className="h-2/3" />
        </div>
      </div>

      <div className="bg-white max-w-5xl mx-auto flex md:flex-row flex-col md:mt-12 gap-10 md:p-4 mt-5 rounded-md sm:p-4">
        {Info.map((info, i) => (
          <div
            key={i}
            className={
              'p-4 hover:bg-primary overflow-hidden rounded-xl sm:mx-4'
            }
          >
            <Image src={info.icon} alt="icon" className="h-12 w-12" />
            <h1 className="font-semibold text-lg my-3">{info.title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{info.des}</p>
            <button className="text-rose-600 font-medium text-sm my-1">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Hero }
