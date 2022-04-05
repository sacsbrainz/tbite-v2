import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className="pt-2">
      <footer className=" bg-white pt-3 pb-4  text-[#0db683ee] dark:bg-black">
        <div className="flex items-center justify-between px-5 ">
          {/* <span className="footer-title uppercase font-extrabold sm:text-lg md:text-2xl lg:text-2xl">COMPANY</span> */}
          <a
            className="link link-hover text-xs md:text-base lg:text-base"
            href="/"
          >
            Home
          </a>
          <a
            className="link link-hover text-xs md:text-base lg:text-base"
            href="/about"
          >
            About
          </a>
          <a
            className="link link-hover text-xs md:text-base lg:text-base"
            href="/menu"
          >
            Our Menu
          </a>
          <a
            className="link link-hover text-xs md:text-base lg:text-base"
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className="link link-hover text-xs md:text-base lg:text-base"
            href="/contacts"
          >
            Contacts
          </a>
        </div>
      </footer>
      <footer className="footer border-base-300 border-t bg-white px-10 pt-3 text-black dark:bg-black dark:text-white">
        <div className="grid-flow-col items-center">
          <p className="py-3 text-center">
            Copyright &copy; 2022{' '}
            <span className="text-[#0d6efd]">
              <a href="https://github.com/sacsbrainz">SACS INC</a>.
            </span>{' '}
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
