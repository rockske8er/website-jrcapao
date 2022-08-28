import Image from 'next/image'
import { Menu } from './Menu'
import { X, List } from 'phosphor-react'

import LogoIcon from './../assets/images/logo.png'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="pr-10 bg-primary">
      <nav className="flex justify-between items-center">
        <Image src={LogoIcon} alt="logo" className="h-9 cursor-pointer" />
        <ul className="md:flex hidden items-center gap-10">
          <Menu />
        </ul>
        {/* Mobile Nav */}
        <ul
          className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? 'right-0' : 'right-[-100%]'}`}
        >
          <Menu />
        </ul>

        <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </div>
      </nav>
    </header>
  )
}

export { Header }
