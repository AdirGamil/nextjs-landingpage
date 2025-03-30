'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

const navLinks = [
  {
    id: 1,
    url: '#',
    label: 'Home',
  },
  {
    id: 2,
    url: '#',
    label: 'About',
  },
  {
    id: 3,
    url: '#',
    label: 'Features',
  },
  {
    id: 4,
    url: '#',
    label: 'Testimonials',
  },
  {
    id: 5,
    url: '#',
    label: 'Blog',
  },
  {
    id: 6,
    url: '#',
    label: 'Contact',
  },
]

const Nav = () => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      } else {
        setNavBg(false)
      }
    }
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-white shadow-md' : ''} w-full transition-all duration-200 h-[12vh] z-[100]`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl md:text-4xl text-red-700">A</span>dir
        </h1>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-800 transition-all duration-200 rounded-full">
            Join Now
          </button>
          {/* BurgerMenu */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Nav
