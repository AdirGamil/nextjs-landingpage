import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean
    closeNav: () => void
}

const MobileNav = ({showNav, closeNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0' : '-translate-x-full'

  return (
    <div className='relative'>
      {/* overlay */}
      <div className={`fixed inset-0 transform transition-all duration-500 z-[10000] bg-black
      opacity-70 w-full h-screen ${navOpen}`}>

      </div>
      <div className={`text-white fixed justify-center flex flex-col h-full transform 
      transition-all duration-500 delay-500 w-[60%] md:w-[80%] bg-indigo-900 space-y-6 z-[10006] ${navOpen}`}>
                  {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav__link text-white md:text-[20px] ml-12 border-b-[1px] pb-1 border-white text-[30px]">{link.label}</p>
            </Link>
          ))}
      {/* Close icon */}
      <CgClose onClick={closeNav} className='absolute cursor-pointer hover:scale-110 top-[0.7rem] right-[1.4rem] w-8 h-8' />
      </div>
    </div>
  )
}

export default MobileNav
