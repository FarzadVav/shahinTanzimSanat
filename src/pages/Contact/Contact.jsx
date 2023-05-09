import React from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'

export default function Contact() {
  return (
    <div className='container mt-3 flex flex-col justify-center items-center gap-6 px-3
      sm:p-0'>
      <Title
        svg={(
          <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
        title='ارتباط و همکاری با ما'
      />
      <div className="bg-green-100 w-full h-44 flex justify-between items-center gap-3 rounded-md overflow-hidden">
        <p className="w-2/3 h-full p-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        <div className="bg-green-200 w-1/3 h-44"></div>
      </div>
      <form className='w-full flex flex-col justify-center items-center gap-3'>
        <div className="w-full flex flex-col justify-between items-center gap-3
          sm:flex-row">
          <Input
            tag='input'
            width='w-full sm:w-1/3'
            placeHolder='نام و نام خانوادگی'
          />
          <Input
            tag='input'
            width='w-full sm:w-1/3'
            placeHolder='شماره موبایل'
          />
          <Input
            tag='input'
            width='w-full sm:w-1/3'
            placeHolder='ایمیل'
          />
        </div>
        <Input
          tag='textarea'
          width='w-full'
          height='h-96'
          placeHolder='پیشنهاد ها و انتقاد های خودتان را بنویسید...'
        />
        <button className='btn-outline-blue w-full
          sm:w-1/3'>ثبت</button>
      </form>
    </div>
  )
}
