import { WhatsappLogo } from 'phosphor-react'

const ButtonOutline = () => {
  return (
    <button
      className=" flex gap-3 items-center bg-transparent border border-primary text-primary rounded-full 
  font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
    >
      <WhatsappLogo size={24} /> Fale comigo
    </button>
  )
}

export { ButtonOutline }
