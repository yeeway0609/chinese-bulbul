import { useState } from 'react'
import clsx from 'clsx'
import MenuIcon from '@/assets/menu.svg'
import CloseIcon from '@/assets/close.svg'
import { Logo } from '@/components/Logo'

const navOptions = ['白頭翁的特性', '白頭翁的故事', '白頭翁的美照', '白頭翁的危機']

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative shrink-0 bg-white px-6 py-4 lg:p-12">
      <div className="flex items-center justify-between">
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="Menu" width={40} height={40} />
        </button>

        <h1 className="lg:lead-[36px] text-center text-lg font-bold lg:w-[269px] lg:text-[30px]">白頭翁不吃小米</h1>

        <Logo />
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'absolute top-18 left-0 w-full overflow-hidden border-t border-gray-100 transition-[max-height] duration-300 lg:hidden',
          isMenuOpen ? 'max-h-[220px]' : 'max-h-0'
        )}
      >
        <nav className="space-y-1 py-6">
          {navOptions.map((option, index) => (
            <div key={index} className="cursor-pointer py-2 text-center text-base hover:font-bold hover:text-[#AA6666]">
              <span>{option}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden space-y-1 py-12 lg:block">
        {navOptions.map((option, index) => (
          <div key={index} className="cursor-pointer py-2 text-center text-base hover:font-bold hover:text-[#AA6666]">
            <span>{option}</span>
          </div>
        ))}
      </nav>
    </header>
  )
}
