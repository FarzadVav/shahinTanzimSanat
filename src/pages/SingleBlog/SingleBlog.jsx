import React from 'react'
import Title from "./../../components/Title"

export default function SingleBlog() {
  return (
    <div className='container mt-3 flex flex-col justify-center items-center px-3
      sm:p-0'>
      <Title
        svg={(
          <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
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
