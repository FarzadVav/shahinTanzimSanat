import React, { useState } from 'react'
import "./Gallery.css"
import Title from '../../components/Title'

import img from "./../../../public/imgs/gallery.jpg"

const images = [
  {
    id: 1,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. عروسک'
  },
  {
    id: 2,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
  },
  {
    id: 3,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
  },
  {
    id: 4,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
  },
  {
    id: 5,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
  },
  {
    id: 6,
    imgSrc: img,
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. شایع'
  },
]

export default function Gallery() {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState('')

  function showModal(src) {
    setSrc(src)
    setModal(true)
  }

  function closeModal(event) {
    event.target.dataset.close === 'true' && setModal(false)
  }

  return (
    <>
      <div className='container mt-3 flex flex-col justify-center items-center px-3
        sm:p-0'>
        <Title
          svg={(
            <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          )}
          title='گالری تصاویر'
        />
        <div className="w-full columns-2 gap-3 mt-3
        lg:columns-3">
          {
            images.map(img => (
              <img className='main-shadow w-full mb-3 cursor-zoom-in hover:brightness-75'
                src={img.imgSrc} alt="gallery images" key={img.id} onClick={() => showModal(img)} />
            ))
          }
        </div>
        <div className={modal ? 'modal show-modal' : 'modal'} data-close='true' onClick={closeModal}>
          <div className="bg-white w-full h-max cursor-auto p-3
            rounded-b-xl lg:rounded-none lg:rounded-r-xl
            sm:gap-5 sm:p-5 lg:w-64 lg:h-[75vh]">
            <p className='text-justify'>{src.desc}</p>
          </div>
          <img className='shadow-sm w-full cursor-auto
            rounded-t-xl lg:rounded-none lg:rounded-l-xl
            sm:w-max lg:h-[75vh]' src={src.imgSrc} alt="imge in modal" />
        </div>
      </div>
    </>
  )
}
