import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-slate-200 w-full flex flex-col justify-center items-center mt-16 relative
      md:pt-16 md:mt-28">
      <div className="bg-blue-500 h-32 hidden justify-between items-center gap-10 px-10
        absolute right-0 -top-16 rounded-md rounded-tr-none rounded-br-none md:flex">
          <h2 className="text-white text-xl irsB">
            اگر پیشنهاد همکاری دارید یا قصد دارید با ما در ارتباط باشید
            <br />
            ما مشتاق دریافت پیام شما هستیم
          </h2>
          <Link className="btn-outline-white">ارتباط با ما</Link>
        </div>
      <div className="w-full flex flex-col justify-between items-start gap-10 p-5 pt-10
        md:flex-row md:gap-5 lg:gap-10 lg:p-10">
        <div className="w-full flex flex-col-reverse justify-center items-center gap-5
          md:w-1/4 md:flex-col">
          <img className='w-1/2' src="./../../public/imgs/logo-png.png" alt="logo" />
          <a className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full
            hover:scale-110" href="#header">
            <svg className="stroke-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
          </a>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5
          md:w-1/4">
          <h6 className="text-blue-500 w-full text-3xl irsB text-center
            md:text-right">رسالت ما</h6>
          <p className="text-justify px-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5
          md:w-1/4">
          <h6 className="text-blue-500 w-full text-3xl irsB text-center
            md:text-right">لینک ها</h6>
          <Link className="underline decoration-slate-500 w-full text-center">گالری قطعات بالانس</Link>
          <Link className="underline decoration-slate-500 w-full text-center">گالری قطعات بالانس</Link>
          <Link className="underline decoration-slate-500 w-full text-center">گالری قطعات بالانس</Link>
          <Link className="underline decoration-slate-500 w-full text-center">گالری قطعات بالانس</Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5
          md:w-1/4">
          <h6 className="text-blue-500 w-full text-3xl irsB text-center md:text-right">خبرنامه</h6>
          <p className="text-justify px-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
          <div className="w-full h-12 relative">
            <input className="bg-slate-300 w-full h-full absolute left-0 top-0 p-3 rounded-md
            focus:outline-blue-500 ltr" type="text" placeholder="ایمیل" />
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
        <p className="text-slate-700 border-none border-slate-400 text-center pl-5
          md:border-l">تمام حقوق این وبسایت در اختیار
          <span className="text-slate-700 irsB px-1"> شاهین تنظیم صنعت </span>
          می باشد ©</p>
        <div className="text-slate-700 text-center flex justify-center items-center gap-2 pr-5">
          توسعه وبسایت توسط
          <a className="px-1 irsB flex justify-center items-center gap-2" href="#">فرزاد
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          و
          <a className="px-1 irsB flex justify-center items-center gap-2" href="#">شایان
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path className="fill-slate-700" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
