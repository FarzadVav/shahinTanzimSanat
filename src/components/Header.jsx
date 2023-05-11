import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  function toggleMobileMenu() {
    if (mobileMenu) setMobileMenu(false)
    else setMobileMenu(true)
  }

  return (
    <>
      <menu className={`bg-[#ffffffaa] backdrop-blur-md shadow-md w-[75vw] h-screen flex flex-col gap-3 fixed top-0 left-0
        z-50 lg:hidden p-5 ${mobileMenu ? 'opacity-100 visible scale-x-100 translate-x-0' : 'opacity-0 invisible scale-x-75 -translate-x-full'}`}>
        <Link to='/' className='text-blue-500 w-full text-center text-3xl irsB mb-3'
          onClick={toggleMobileMenu}>Logo</Link>
        <NavLink to='/' className={link => link.isActive ? 'mobile-menu__nav-link-active' : 'mobile-menu__nav-link'}
          onClick={toggleMobileMenu}>صفحه اصلی</NavLink>
        <NavLink to='/blogs' className={link => link.isActive ? 'mobile-menu__nav-link-active' : 'mobile-menu__nav-link'}
          onClick={toggleMobileMenu}>مقالات</NavLink>
        <NavLink to='/gallery' className={link => link.isActive ? 'mobile-menu__nav-link-active' : 'mobile-menu__nav-link'}
          onClick={toggleMobileMenu}>گالری</NavLink>
        <NavLink to='/about-us' className={link => link.isActive ? 'mobile-menu__nav-link-active' : 'mobile-menu__nav-link'}
          onClick={toggleMobileMenu}>درباره ما</NavLink>
      </menu>
      <header className="container h-16 flex justify-between items-center px-3 py-10 mx-auto z-50
        mb:rounded-xl">
        <div className='h-16 flex items-center relative
        lg:hidden' onClick={toggleMobileMenu}>
          {
            mobileMenu ? (
              <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </div>
        <div className="h-16 hidden items-center gap-7 lg:flex">
          <NavLink to='/' className={link => link.isActive ? 'nav-link-active' : 'nav-link'}>صفحه اصلی</NavLink>
          <NavLink to='/blogs' className={link => link.isActive ? 'nav-link-active' : 'nav-link'}>مقالات</NavLink>
          <NavLink to='/gallery' className={link => link.isActive ? 'nav-link-active' : 'nav-link'}>گالری</NavLink>
          <NavLink to='/about-us' className={link => link.isActive ? 'nav-link-active' : 'nav-link'}>درباره ما</NavLink>
        </div>
        <NavLink to='/contact' className={link => link.isActive ? 'btn-bg-blue' : 'btn-outline-blue'}>ارتباط / همکاری با ما</NavLink>
      </header>
    </>
  )
}
