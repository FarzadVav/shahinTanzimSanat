import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import "./Home.css"

export default function Home() {
  return (
    <>
      <div id='hero-section' className='container flex flex-col gap-5 mx-auto mt-5 pt-16 pb-36 relative mb:rounded-xl'>
        <div className="h-1/2 w-full flex flex-col justify-center items-center gap-5">
          <h3 className='text-white text-3xl lg:text-5xl irsB text-center'>شرکت شاهین تنظیم صنعت</h3>
          <p className='text-white text-center px-5 mt-3 sm:px-24'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
          </p>
          <Link className='text-white border border-white py-2 px-10 rounded-full
          hover:bg-white hover:text-blue-500'>شروع همکاری</Link>
        </div>
        <div className="bg-white shadow-xl shadow-slate-300 w-11/12 flex flex-wrap gap-3 justify-evenly items-center p-3 rounded-xl
        absolute -bottom-56 left-1/2 -translate-x-1/2 md:-bottom-20">
          <div className='bg-green-200 w-36 h-36 flex justify-center items-end rounded-xl relative overflow-hidden'>
            <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
              <svg className='absolute -left-5 bottom-0' width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.75">
                  <path className='stroke-green-900' d="M7.80078 13.8001V9.6001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path className='stroke-green-900' d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
            <h3 className='text-green-700 irsB mb-5 z-10'>تنطیم قطعات</h3>
          </div>
          <div className='bg-green-200 w-36 h-36 flex justify-center items-end rounded-xl relative overflow-hidden'>
            <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
              <svg className='absolute -left-5 bottom-0' width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.75">
                  <path className='stroke-green-900' d="M7.80078 13.8001V9.6001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path className='stroke-green-900' d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
            <h3 className='text-green-700 irsB mb-5 z-10'>تنطیم قطعات</h3>
          </div>
          <div className='bg-green-200 w-36 h-36 flex justify-center items-end rounded-xl relative overflow-hidden'>
            <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
              <svg className='absolute -left-5 bottom-0' width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.75">
                  <path className='stroke-green-900' d="M7.80078 13.8001V9.6001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path className='stroke-green-900' d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
            <h3 className='text-green-700 irsB mb-5 z-10'>تنطیم قطعات</h3>
          </div>
          <div className='bg-green-200 w-36 h-36 flex justify-center items-end rounded-xl relative overflow-hidden'>
            <div className="bg-green-300 w-24 h-24 rounded-full absolute -right-5 -top-5">
              <svg className='absolute -left-5 bottom-0' width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.75">
                  <path className='stroke-green-900' d="M7.80078 13.8001V9.6001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path className='stroke-green-900' d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path className='stroke-green-900' d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="bg-white w-24 h-24 rounded-full absolute -left-5 -bottom-5 z-0 opacity-50 blur-lg"></div>
            <h3 className='text-green-700 irsB mb-5 z-10'>تنطیم قطعات</h3>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-12 mx-auto mt-80 mb-32 md:mt-44">
        <Title
          svg={(
            <svg className='w-9 h-9 sm:w-12 sm:h-12' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.82046 14.46L6.67359 18.9669C6.32924 20.3201 7.77673 21.4446 9.0659 20.8255L10.9987 19.8972C11.6296 19.5943 12.3704 19.5943 13.0013 19.8972L14.9341 20.8255C16.2233 21.4446 17.6708 20.3201 17.3264 18.9669L16.1795 14.4601C15.5991 14.874 14.9297 15.1787 14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439C9.0703 15.1787 8.40085 14.874 7.82046 14.46Z" fill="#3B82F6" fill-opacity="0.15" />
              <path d="M5.75486 7.16223C6.22538 5.21947 7.79162 3.70254 9.79753 3.24683C11.2462 2.91772 12.7538 2.91772 14.2025 3.24683C16.2084 3.70254 17.7746 5.21947 18.2451 7.16223C18.585 8.56527 18.585 10.0254 18.2451 11.4285C17.7746 13.3712 16.2084 14.8882 14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439C7.79162 14.8882 6.22538 13.3712 5.75486 11.4285C5.41505 10.0254 5.41505 8.56527 5.75486 7.16223Z" fill="#3B82F6" fill-opacity="0.15" />
              <path d="M14.2025 15.3439C14.9297 15.1787 15.5991 14.874 16.1795 14.4601L17.3264 18.9669C17.6708 20.3201 16.2233 21.4446 14.9341 20.8255L13.0013 19.8972C12.3704 19.5943 11.6296 19.5943 10.9987 19.8972L9.0659 20.8255C7.77673 21.4446 6.32924 20.3201 6.67359 18.9669L7.82046 14.46C8.40085 14.874 9.0703 15.1787 9.79754 15.3439M14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439M14.2025 15.3439C16.2084 14.8882 17.7746 13.3712 18.2451 11.4285C18.585 10.0254 18.585 8.56527 18.2451 7.16223C17.7746 5.21947 16.2084 3.70254 14.2025 3.24683C12.7538 2.91772 11.2462 2.91772 9.79753 3.24683C7.79162 3.70254 6.22538 5.21947 5.75486 7.16223C5.41505 8.56527 5.41505 10.0254 5.75486 11.4285C6.22538 13.3712 7.79162 14.8882 9.79754 15.3439" stroke="#3B82F6" stroke-width="1.5" />
            </svg>
          )}
          title="افتخارآفرینان شاهین تنظیم صنعت"
        />
        <div className="w-full flex flex-wrap gap-x-24 gap-y-16 justify-center items-center">
          <div className="bg-slate-200 shadow-md shadow-slate-400 w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 shadow-sm shadow-slate-400 w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-sm hidden group-hover:block'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nobis! Alias quas, enim impedit culpa praesentium ratione cum temporibus eos quia minima harum.
            </p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-slate-400 w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 shadow-sm shadow-slate-400 w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-sm hidden group-hover:block'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nobis! Alias quas, enim impedit culpa praesentium ratione cum temporibus eos quia minima harum.
            </p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-slate-400 w-72 h-80 flex flex-col justify-end items-center rounded-xl p-3 relative
          group hover:h-[410px]">
            <div className="w-12 h-40 border-[1rem] border-dotted border-blue-500 absolute -right-6 top-5 opacity-25"></div>
            <div className="bg-slate-300 shadow-sm shadow-slate-400 w-64 h-64 rounded-xl absolute -left-5 -top-5"></div>
            <span className='text-slate-700 text-xl irsB mt-5'>فرزاد وحدتی نژاد</span>
            <span className='text-slate-600 w-full text-sm text-center border-t border-slate-300 pt-1 mt-2'>مدیر عامل فنی و امور تخصصی</span>
            <p className='text-slate-600 w-full text-sm hidden group-hover:block'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, nobis! Alias quas, enim impedit culpa praesentium ratione cum temporibus eos quia minima harum.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}