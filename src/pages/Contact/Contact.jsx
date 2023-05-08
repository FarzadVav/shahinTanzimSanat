import React from 'react'
import Input from '../../components/Input'

export default function Contact() {
  return (
    <form className='container mt-3 flex flex-col justify-center items-center gap-3 px-3
    sm:p-0'>
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
  )
}
