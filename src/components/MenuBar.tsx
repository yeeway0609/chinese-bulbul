import { useState } from 'react'
import { MenuIcon } from '../assets/icons'
import { Logo } from './Logo'
import clsx from 'clsx'

const links = ['白頭翁的特性', '白頭翁的故事', '白頭翁的美照', '白頭翁的危機']

export function MenuBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="shadow-[0px_4px_20px_0px_#00000014] lg:w-[365px] lg:shrink-0 lg:pt-12 lg:shadow-none">
      <div className={clsx('relative flex items-center justify-between bg-white px-6 py-4 lg:h-20 lg:justify-center')}>
        <MenuIcon className="cursor-pointer lg:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
        <p className="text-center align-middle text-lg leading-[40px] font-bold lg:text-[30px]">白頭翁不吃小米</p>
        <Logo />
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'overflow-hidden bg-white transition-all duration-300 lg:hidden',
          isMobileMenuOpen ? 'max-h-[300px]' : 'max-h-0'
        )}
      >
        <div className="h-px w-full bg-[#E6E7E8]" />
        <div className="flex flex-col items-center gap-1 py-6">
          {links.map((link, index) => (
            <LinkItem key={index} title={link} />
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="mt-12 hidden flex-col items-center gap-1 lg:flex">
        {links.map((link, index) => (
          <LinkItem key={index} title={link} />
        ))}
      </div>
    </div>
  )
}

function LinkItem({ title }: { title: string }) {
  return (
    <button className="group relative py-2 hover:cursor-pointer hover:text-[#AA6666]">
      <span className="text-base leading-[23px]">{title}</span>
      <div className="absolute bottom-[4.5px] h-0.5 w-full group-hover:bg-[#AA6666]" />
    </button>
  )
}
