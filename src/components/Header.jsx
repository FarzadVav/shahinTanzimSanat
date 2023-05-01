import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-500 container h-16 flex justify-between items-center px-3 mx-auto z-50
      mb:mt-3 mb:rounded-xl">
      <div className='h-16 flex items-center lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="stroke-white w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className="h-16 hidden items-center gap-5 lg:flex">
        <NavLink className="text-white h-full flex items-center">صفحه اصلی</NavLink>
        <NavLink className="text-white h-full flex justify-center items-center gap-1 group">
          مقالات
        </NavLink>
        <NavLink className="text-white h-full flex justify-center items-center gap-1 relative group">
          گالری
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-white w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-blue-500 shadow-[#efefef10] shadow-md w-max flex flex-col gap-3 p-3 rounded-br-md rounded-bl-md z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>تصاویر خدمات بالانس در محل</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس کارگاهی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس افقی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس عمودی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
        <NavLink className="text-white h-full flex justify-center items-center gap-1 group relative">
          افتخارات شاهین تنظیم
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-white w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-blue-500 shadow-[#efefef10] shadow-md w-max flex flex-col gap-3 p-3 rounded-br-md rounded-bl-md z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>تصاویر خدمات بالانس در محل</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس کارگاهی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس افقی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس عمودی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
        <NavLink className="text-white h-full flex justify-center items-center gap-1 group relative">
          درباره شرکت
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-white w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-blue-500 shadow-[#efefef10] shadow-md w-max flex flex-col gap-3 p-3 rounded-br-md rounded-bl-md z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>تصاویر خدمات بالانس در محل</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس کارگاهی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>قطعات بالانس افقی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس عمودی</li>
            <li className='text-white w-full py-2 px-4 rounded-md hover:bg-[#efefef25]'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <span className='text-2xl text-white irsB'>Logo</span>
        <Link className='bg-white text-blue-500 border border-white irsB py-2 px-5 rounded-md
        hover:bg-blue-500 hover:text-white'>همکاری با ما</Link>
      </div>
    </header>
  )
}
