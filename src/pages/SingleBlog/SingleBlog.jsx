import React from 'react'
import Title from "./../../components/Title"

export default function SingleBlog() {
  return (
    <div className='container mt-3 flex flex-col justify-center items-center px-3
      sm:p-0'>
      <Title
        svg={(
          <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        )}
        title='چگونه دستگاه x را تهیه کنیم و آنرا نصب، سپس استفاده کنیم!'
      />
      <div className="w-full flex justify-center items-center mt-3">
        <div className="w-1/2 h-96"></div>
        <div className="w-1/2 h-96 flex justify-end items-center">
          <div className="bg-slate-300 w-96 h-96 rounded-xl relative
            before:content-normal before:bg-slate-200 before:w-full before:h-full before:rounded-xl before:-z-10
            before:absolute before:-right-7 before:-bottom-7"></div>
        </div>
      </div>
    </div>
  )
}
