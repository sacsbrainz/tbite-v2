import React, { useEffect, useState } from 'react'
// import Logo from
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'

import { MoonIcon, SunIcon } from '@heroicons/react/solid'

function Header() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()
  const rendeThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }
  return (
    // <div>
    <header className="sticky top-0 z-50 bg-white dark:border-gray-700 dark:bg-black dark:text-white">
      <nav className="flex flex-wrap items-center  p-1 dark:border-gray-700 dark:text-white ">
        <Link href="/">
          <a className="mr-4 inline-flex items-center px-4 ">
            <Image
              src="/logo.png"
              alt="logo"
              className="lazyloaded object-contain sm:object-scale-down md:object-scale-down lg:object-fill"
              data-ll-status="loaded"
              width={30}
              height={30}
            />
            <span className="px-4 font-extrabold uppercase tracking-wide dark:border-gray-700 dark:text-white sm:text-sm md:text-lg lg:text-xl">
              Tbite
            </span>
          </a>
        </Link>
        <div className="flex  flex-1 flex-col items-end justify-end">
          {rendeThemeChanger()}
        </div>
        <button
          className=" ml-auto inline-flex rounded p-3 outline-none hover:bg-[#fe8b52] dark:border-gray-700 dark:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold hover:bg-[#fe8b52] dark:text-white lg:inline-flex lg:w-auto  ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold hover:bg-[#fe8b52] dark:text-white lg:inline-flex lg:w-auto ">
                About
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold hover:bg-[#fe8b52] dark:text-white lg:inline-flex lg:w-auto ">
                Our Menu
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold hover:bg-[#fe8b52] dark:text-white lg:inline-flex lg:w-auto">
                Gallery
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-bold hover:bg-[#fe8b52] dark:text-white lg:inline-flex lg:w-auto ">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
