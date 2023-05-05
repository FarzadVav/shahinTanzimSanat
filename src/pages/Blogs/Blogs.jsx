import React from 'react'
import { Link } from 'react-router-dom'
import Title from "./../../components/Title"

function BlogBox() {
  return (
    <div className='bg-slate-200 w-72 flex flex-col justify-center items-center gap-5 rounded-xl pb-3 px-3'>
      <div className="bg-slate-300 w-72 h-72 rounded-t-xl overflow-hidden"></div>
      <div className="w-full flex justify-center items-center h-12">
        <Link to='/single-blog' className='irsB text-center hover:text-blue-500'>چگونه دستگاه x را تهیه کنیم و آنرا نصب، سپس استفاده کنیم!</Link>
      </div>
      <div className="w-full h-5 flex justify-center items-center gap-3 select-none">
        <svg className="stroke-slate-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        <span className='text-slate-700 text-sm'>23 / 1 / 1402</span>
      </div>
    </div>
  )
}


export default function Blogs() {
  return (
    <div className='container mt-3 flex flex-col justify-center items-center px-3
    sm:p-0'>
      <Title
        svg={(
          <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        )}
        title='آرشیو مقالات'
      />
      <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-3">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </div>
  )
}