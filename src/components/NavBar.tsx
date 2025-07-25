import { useState } from 'react'
import clsx from 'clsx'
import MenuIcon from '@/assets/menu.svg'
import CloseIcon from '@/assets/close.svg'
import { Logo } from '@/components/Logo'

const navOptions = ['白頭翁的特性', '白頭翁的故事', '白頭翁的美照', '白頭翁的危機']

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between bg-white px-6 py-4">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="Menu" width={40} height={40} />
      </button>

      <h1 className="text-lg font-bold">白頭翁不吃小米</h1>

      <Logo />

      <div
        className={clsx(
          'absolute top-18 left-0 w-full overflow-hidden border-t border-gray-100 transition-[max-height] duration-300',
          isMenuOpen ? 'max-h-[220px]' : 'max-h-0'
        )}
      >
        <nav className="space-y-1 py-6">
          {navOptions.map((option, index) => (
            <div key={index} className="py-2 text-center text-base hover:font-bold hover:text-[#AA6666]">
              <span>{option}</span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
