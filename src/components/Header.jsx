import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="container h-16 flex justify-between items-center px-3 mx-auto z-50
      mb:mt-3 mb:rounded-xl">
      <div className='h-16 flex items-center lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="stroke-blue-500 w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className="h-16 hidden items-center gap-5 lg:flex">
        <NavLink className="text-blue-500 h-full flex items-center">صفحه اصلی</NavLink>
        <NavLink className="text-blue-500 h-full flex justify-center items-center gap-1 group">
          مقالات
        </NavLink>
        <NavLink className="text-blue-500 h-full flex justify-center items-center gap-1 relative group">
          گالری
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-blue-500 w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-white shadow-[#25252535] shadow-lg w-max flex flex-col gap-3 p-3 rounded-xl z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>تصاویر خدمات بالانس در محل</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس کارگاهی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس افقی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس عمودی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
        <NavLink className="text-blue-500 h-full flex justify-center items-center gap-1 group relative">
          افتخارات شاهین تنظیم
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-blue-500 w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-white shadow-[#25252535] shadow-lg w-max flex flex-col gap-3 p-3 rounded-xl z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>تصاویر خدمات بالانس در محل</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس کارگاهی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس افقی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس عمودی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
        <NavLink className="text-blue-500 h-full flex justify-center items-center gap-1 group relative">
          درباره شرکت
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="stroke-blue-500 w-4 h-4 group-hover:rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <ul className='bg-white shadow-[#25252535] shadow-lg w-max flex flex-col gap-3 p-3 rounded-xl z-50
            absolute top-16 right-0 opacity-0 invisible -translate-y-2 scale-x-90
            group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0'>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>تصاویر خدمات بالانس در محل</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس کارگاهی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>قطعات بالانس افقی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس عمودی</li>
            <li className='text-blue-500 w-full py-2 px-4 rounded-md hover:bg-slate-100'>دستگاه های بالانس پرتابل و آنالیز حرفه ای</li>
          </ul>
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <span className='text-2xl text-blue-500 irsB'>Logo</span>
        <Link className='btn-outline-blue'>همکاری با ما</Link>
      </div>
    </header>
  )
}
