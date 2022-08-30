import { WhatsappLogo } from 'phosphor-react'
import React from 'react'

const CallToAction = () => {
  return (
    <section className="w-full mt-12 mb-12 ">
      <div className=" md:flex flex-row flex-wrap max-w-5xl bg-primary mx-auto p-12 rounded-xl justify-center items-center">
        <div className="flex-1 sm:flex-wrap mb-8">
          <h2 className="font-krona text-white uppercase ">
            Faça parte desta mudança
          </h2>
          <p className="mt-2 font-poppins font-semibold text-rocket">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis laudantium libero molestias?
          </p>
        </div>
        <div className="flex-1">
          <button className="h-16 w-full flex justify-center items-center gap-4 bg-green-600 rounded-md hover:bg-green-400 text-white">
            <WhatsappLogo size={32} />
            Grupo de apoio
          </button>
        </div>
      </div>
    </section>
  )
}

export { CallToAction }
