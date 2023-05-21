import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-slate-200 border-t border-blue-500 w-full flex flex-col justify-center items-center mt-16 relative
      md:border-none md:pt-16 md:mt-28">
      <div className="bg-blue-500 h-32 hidden justify-between items-center gap-10 px-10
        absolute right-0 -top-16 rounded-md rounded-tr-none rounded-br-none md:flex">
        <h2 className="text-white text-xl irsB">
          اگر پیشنهاد همکاری دارید یا قصد دارید با ما در ارتباط باشید
          <br />
          ما مشتاق دریافت پیام شما هستیم
        </h2>
        <NavLink to='/contact' className="btn-outline-white">ارتباط با ما</NavLink>
      </div>
      <div className="w-full flex flex-col justify-between items-center gap-10 p-5
        md:flex-row md:gap-5 lg:gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-5
          md:w-1/3">
          <img className='w-1/2'
            src="https://github.com/FarzadVav/shahinTanzimSanat/blob/master/public/imgs/logo-png.png?raw=true" alt="logo" />
          <span className="flex justify-center items-center gap-2">example@gnail.com
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </span>
          <span className="flex justify-center items-center gap-2">0910450250
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </span>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-5
          md:w-1/3">
          <h6 className="text-blue-500 w-full text-3xl irsB text-center
            md:text-right">رسالت ما</h6>
          <p className="text-justify px-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-5
          md:w-1/3">
          <h6 className="text-blue-500 w-full text-3xl irsB text-center md:text-right">خبرنامه</h6>
          <p className="text-justify px-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
          <div className="w-full h-12 relative">
            <input className="bg-slate-300 w-full h-full absolute left-0 top-0 p-3 rounded-md
            focus:outline-blue-500 ltr" type="email" placeholder="ایمیل" />
            <button className="bg-blue-500 w-12 h-12 flex justify-center items-center
              rounded-md rounded-tl-none rounded-bl-none absolute right-0 top-0">
              <svg className="stroke-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 w-full flex flex-col gap-3 justify-center items-center p-5
        md:flex-row md:gap-0">
        <p className="text-slate-700 border-none border-slate-400 text-center
          md:pl-5 md:border-l">تمام حقوق این وبسایت در اختیار
          <span className="text-slate-700 irsB px-1"> شاهین تنظیم صنعت </span>
          می باشد ©</p>
        <div className="text-slate-700 text-center flex justify-center items-center gap-2
        md:pr-5">
          توسعه وبسایت توسط:
          <a className="px-1 irsB flex justify-center items-center gap-2" href="https://github.com/FarzadVav">فرزاد
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          و
          <a className="px-1 irsB flex justify-center items-center gap-2" href="#">شایان
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
