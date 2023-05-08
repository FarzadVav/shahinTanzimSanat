import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Title from '../../components/Title'
import "./Home.css"

export default function Home() {
  const [resumeToggle, setResumeToggle] = useState(true)
  const [catalogToggle, setCatalogToggle] = useState(false)

  async function resumeToggleHandler(event) {
    setResumeToggle(true)
    setCatalogToggle(false)
  }

  async function catalogToggleHandler(event) {
    setResumeToggle(false)
    setCatalogToggle(true)

  }

  useEffect(() => {
    console.log("resume: ", resumeToggle);
    console.log("catalog: ", catalogToggle);
  })


  return (
    <>
      <div className='container px-3 sm:p-0'>
        <div id='hero-section' className='w-full flex flex-col gap-5 pt-16 pb-36 relative rounded-xl'>
          <div className="h-1/2 w-full flex flex-col justify-center items-center gap-3
            sm:gap-5">
            <h3 className='text-white text-3xl lg:text-5xl irsB text-center px-5 sm:p-0'>شرکت شاهین تنظیم صنعت</h3>
            <p className='text-white text-center px-5 mt-3 sm:px-24'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <Link className='btn-outline-white'>شروع همکاری</Link>
          </div>
          <div className="bg-white shadow-xl shadow-slate-300 w-11/12 flex flex-wrap gap-3 justify-evenly items-center p-3 rounded-xl
            absolute -bottom-48 left-1/2 -translate-x-1/2 md:-bottom-20">
            <div className='bg-green-200 main-shadow w-32 h-32 flex justify-center items-end rounded-xl relative overflow-hidden
              sm:w-36 sm:h-36'>
              <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
                <img className='drop-shadow-sm w-20 h-20 absolute -left-7 -bottom-3
                  sm:-left-9 sm:-bottom-4' src="./../../public/imgs/tick.png" alt="tick icon" />
              </div>
              <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
              <h3 className='text-green-700 irsB mb-3 z-10
                sm:mb-5'>تنطیم قطعات</h3>
            </div>
            <div className='bg-green-200 main-shadow w-32 h-32 flex justify-center items-end rounded-xl relative overflow-hidden
              sm:w-36 sm:h-36'>
              <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
                <img className='drop-shadow-sm w-20 h-20 absolute -left-7 -bottom-3
                  sm:-left-9 sm:-bottom-4' src="./../../public/imgs/tick.png" alt="tick icon" />
              </div>
              <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
              <h3 className='text-green-700 irsB mb-3 z-10
                sm:mb-5'>تنطیم قطعات</h3>
            </div>
            <div className='bg-green-200 main-shadow w-32 h-32 flex justify-center items-end rounded-xl relative overflow-hidden
              sm:w-36 sm:h-36'>
              <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
                <img className='drop-shadow-sm w-20 h-20 absolute -left-7 -bottom-3
                  sm:-left-9 sm:-bottom-4' src="./../../public/imgs/tick.png" alt="tick icon" />
              </div>
              <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
              <h3 className='text-green-700 irsB mb-3 z-10
                sm:mb-5'>تنطیم قطعات</h3>
            </div>
            <div className='bg-green-200 main-shadow w-32 h-32 flex justify-center items-end rounded-xl relative overflow-hidden
              sm:w-36 sm:h-36'>
              <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
                <img className='drop-shadow-sm w-20 h-20 absolute -left-7 -bottom-3
                  sm:-left-9 sm:-bottom-4' src="./../../public/imgs/tick.png" alt="tick icon" />
              </div>
              <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
              <h3 className='text-green-700 irsB mb-3 z-10
                sm:mb-5'>تنطیم قطعات</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-3 sm:p-0">
        <div className='bg-slate-200 main-shadow h-max flex flex-col justify-center items-center gap-5 mt-80 py-5 relative
          rounded-xl rounded-tr-none md:mt-48 sm:py-10'>
          <div className="h-12 flex absolute -top-12 right-0">
            <button className={`bg-slate-200 py-3 px-5 rounded-tr-md
          hover:opacity-100 ${!resumeToggle && `opacity-50`}`} onClick={resumeToggleHandler}>رزومه</button>
            <button className={`bg-slate-200 py-3 px-5 rounded-tl-md
          hover:opacity-100 ${!catalogToggle && `opacity-50`}`} onClick={catalogToggleHandler}>کاتالوگ</button>
          </div>
          <p className='w-11/12 text-center pb-2 border-b border-slate-300'>
            {
              resumeToggle ?
                `RESUME لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`
                : catalogToggle ?
                  `CATALOG لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`
                  : ''
            }
          </p>
          {
            resumeToggle ?
              (
                <a href="#" className='btn-outline-blue group'>دانلود رزومه
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="stroke-blue-500 w-5 h-5 duration-0 group-hover:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              )
              : catalogToggle ?
                (
                  <a href="#" className='bg-slate-200 text-blue-500 border border-blue-500
                flex justify-center items-center gap-3 py-2 px-7
                rounded-full hover:bg-blue-500 hover:text-white group'>دانلود کاتالوگ
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="stroke-blue-500 w-5 h-5 duration-0 group-hover:stroke-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                )
                : ''
          }
        </div>
      </div>

      <div className="container flex flex-col gap-12 px-3 mt-16 sm:p-0">
        <Title
          svg={(
            <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.82046 14.46L6.67359 18.9669C6.32924 20.3201 7.77673 21.4446 9.0659 20.8255L10.9987 19.8972C11.6296 19.5943 12.3704 19.5943 13.0013 19.8972L14.9341 20.8255C16.2233 21.4446 17.6708 20.3201 17.3264 18.9669L16.1795 14.4601C15.5991 14.874 14.9297 15.1787 14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439C9.0703 15.1787 8.40085 14.874 7.82046 14.46Z" fill="#3B82F6" fillOpacity="0.15" />
              <path d="M5.75486 7.16223C6.22538 5.21947 7.79162 3.70254 9.79753 3.24683C11.2462 2.91772 12.7538 2.91772 14.2025 3.24683C16.2084 3.70254 17.7746 5.21947 18.2451 7.16223C18.585 8.56527 18.585 10.0254 18.2451 11.4285C17.7746 13.3712 16.2084 14.8882 14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439C7.79162 14.8882 6.22538 13.3712 5.75486 11.4285C5.41505 10.0254 5.41505 8.56527 5.75486 7.16223Z" fill="#3B82F6" fillOpacity="0.15" />
              <path d="M14.2025 15.3439C14.9297 15.1787 15.5991 14.874 16.1795 14.4601L17.3264 18.9669C17.6708 20.3201 16.2233 21.4446 14.9341 20.8255L13.0013 19.8972C12.3704 19.5943 11.6296 19.5943 10.9987 19.8972L9.0659 20.8255C7.77673 21.4446 6.32924 20.3201 6.67359 18.9669L7.82046 14.46C8.40085 14.874 9.0703 15.1787 9.79754 15.3439M14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439M14.2025 15.3439C16.2084 14.8882 17.7746 13.3712 18.2451 11.4285C18.585 10.0254 18.585 8.56527 18.2451 7.16223C17.7746 5.21947 16.2084 3.70254 14.2025 3.24683C12.7538 2.91772 11.2462 2.91772 9.79753 3.24683C7.79162 3.70254 6.22538 5.21947 5.75486 7.16223C5.41505 8.56527 5.41505 10.0254 5.75486 11.4285C6.22538 13.3712 7.79162 14.8882 9.79754 15.3439" stroke="#3B82F6" strokeWidth="1.5" />
            </svg>
          )}
          title="افتخارآفرینان شاهین تنظیم صنعت"
        />
        <div className="w-full flex flex-wrap gap-x-24 gap-y-16 justify-center items-center">
          <div className="bg-slate-200 main-shadow w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          duration-500 group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 main-shadow w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-justify text-sm hidden pt-3 group-hover:block'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
            </p>
          </div>
          <div className="bg-slate-200 main-shadow w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          duration-500 group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 main-shadow w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-justify text-sm hidden pt-3 group-hover:block'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
            </p>
          </div>
          <div className="bg-slate-200 main-shadow w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          duration-500 group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 main-shadow w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-justify text-sm hidden pt-3 group-hover:block'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
            </p>
          </div>
        </div>
      </div>

      <div className="container flex justify-center items-center gap-4 mt-24
        sm:gap-16 lg:gap-32">
        <div className="bg-slate-200 main-shadow w-40 h-40 flex flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
        <div className="bg-slate-200 main-shadow w-40 h-40 flex flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
      </div>
      <div className="container flex justify-center items-center gap-16 mt-12
        md:mt-8 lg:gap-16">
        <div className="bg-slate-200 main-shadow w-40 h-40 hidden flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52 md:flex">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
        <div className="bg-slate-200 w-56 h-56 flex justify-center items-center rounded-full relative
          lg:w-72 lg:h-72">
          <img className='w-52' src="./../../public/imgs/logo-png.png" alt="logo" />
          <div className="bg-slate-200 w-[17rem] h-[17rem] rounded-full absolute -z-10 opacity-25
            lg:w-[22rem] lg:h-[22rem]"></div>
          <div className="bg-slate-200 w-[19rem] h-[19rem] rounded-full absolute -z-10 opacity-25
            lg:w-[20rem] lg:h-[20rem]"></div>
        </div>
        <div className="bg-slate-200 main-shadow w-40 h-40 hidden flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52 md:flex">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
      </div>
      <div className="container flex justify-center items-center gap-4 mt-12
        sm:gap-16 md:mt-8 lg:gap-32">
        <div className="bg-slate-200 main-shadow w-40 h-40 flex flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
        <div className="bg-slate-200 main-shadow w-40 h-40 flex flex-col justify-center items-center rounded-full
          lg:w-52 lg:h-52">
          <img className='w-20 drop-shadow-sm lg:w-28' src="./../../public/imgs/pen.png" alt="logo" />
          <h6 className='text-slate-500 w-1/2 text-sm text-center irsB lg:text-base'>نوشتن سناریو طراحی</h6>
        </div>
      </div>
    </>
  )
}