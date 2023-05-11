import React from 'react'
import Title from '../../components/Title'

function HonorBox(props) {
  return (
    <div className="bg-blue-500 outline outline-1 outline-blue-500 w-full h-32 flex justify-between items-center px-3 mb-32
      group hover:bg-transparent hover:outline-offset-4 sm:w-8/12 sm:px-5 sm:rounded-l-md md:w-11/12 lg:w-10/12 lg:px-10 lg:mb-48">
      <h2 className="text-white w-1/2 hidden group-hover:text-blue-500 md:block">{props.title}</h2>
      <div className="bg-slate-200 main-shadow w-56 h-56 rounded-md z-10 lg:w-72 lg:h-72"></div>
      <a href={props.link} className='text-white border border-white text-xs flex justify-center items-center gap-2 py-2 px-3 rounded-full
        group-hover:border-blue-500 group-hover:text-blue-500 hover:bg-blue-500 group-hover:hover:text-white lg:text-base lg:px-7'>{props.linkTitle}</a>
    </div>
  )
}

export default function Honors() {
  return (
    <>
      <div className='container mt-3 flex flex-col justify-center px-3
      sm:p-0'>
        <Title
          svg={(
            <svg className='stroke-blue-500 w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.51974 13.5198L7.50977 20.8998C7.50977 21.7998 8.13977 22.2398 8.91977 21.8698L11.5998 20.5999C11.8198 20.4899 12.1898 20.4899 12.4098 20.5999L15.0998 21.8698C15.8698 22.2298 16.5098 21.7998 16.5098 20.8998V13.3398" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          )}
          title='افتخارات شاهین تنظیم صنعت'
        />
      </div>

      <div className="w-screen flex flex-col justify-center mt-16 lg:mt-24">
        <HonorBox
          title='مدرک بین المللی فلان مدرک بین المللی فلان مدرک بین المللی فلان مدرک بین المللی فلان مدرک بین المللی فلان مدرک بین المللی فلان'
          link='#'
          linkTitle='دانلود فایل مدرک'
        />
        <div className="w-full relative">
          <div className="bg-gradient-to-tr from-blue-500 to-green-500
            w-[50vw] h-[50vw] hidden absolute -top-72 -left-36 -z-10 rounded-full blur-[275px] opacity-50 md:block"></div>
          <HonorBox
            title='رزومه بین المللی فلان رزومه بین المللی فلان رزومه بین المللی فلان رزومه بین المللی فلان رزومه بین المللی فلان رزومه بین المللی فلان'
            link='#'
            linkTitle='دانلود فایل رزومه'
          />
        </div>
        <HonorBox
          title='کاتالوگ بین المللی فلان کاتالوگ بین المللی فلان کاتالوگ بین المللی فلان کاتالوگ بین المللی فلان کاتالوگ بین المللی فلان کاتالوگ بین المللی فلان'
          link='#'
          linkTitle='دانلود فایل کاتالوگ'
        />
      </div>

      <div className='w-max flex flex-col justify-center gap-3 px-3 mx-auto
      group sm:p-0 md:flex-row'>
        <div className="bg-slate-200 main-shadow flex flex-col justify-center items-center gap-3 w-72 h-96 rounded-md p-3
          group-hover:opacity-50 group-hover:scale-95 group-hover:hover:opacity-100 group-hover:hover:scale-100 md:mt-20">
          <svg className="stroke-blue-500 w-24 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
          <h2 className='text-xl irsB'>بهترین متریال استفاده شده</h2>
          <p className='text-slate-500 text-justify mt-3'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="bg-slate-200 main-shadow flex flex-col justify-center items-center gap-3 w-72 h-96 rounded-md p-3
          group-hover:opacity-50 group-hover:scale-95 group-hover:hover:opacity-100 group-hover:hover:scale-100">
          <svg className="stroke-blue-500 w-24 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
          <h2 className='text-xl irsB'>بهترین متریال استفاده شده</h2>
          <p className='text-slate-500 text-justify mt-3'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="bg-slate-200 main-shadow flex flex-col justify-center items-center gap-3 w-72 h-96 rounded-md p-3
          group-hover:opacity-50 group-hover:scale-95 group-hover:hover:opacity-100 group-hover:hover:scale-100 md:mt-20">
          <svg className="stroke-blue-500 w-24 h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
          <h2 className='text-xl irsB'>بهترین متریال استفاده شده</h2>
          <p className='text-slate-500 text-justify mt-3'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>
        </div>
      </div>
    </>
  )
}