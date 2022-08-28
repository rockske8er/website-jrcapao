import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ButtonFill = ({ children }: Props) => {
  return (
    <button
      className="bg-primary text-white rounded-full shadow-sm
    shadow-primary font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
    >
      {children}
    </button>
  )
}

export { ButtonFill }
