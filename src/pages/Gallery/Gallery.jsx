import React, { useState } from 'react'
import "./Gallery.css"

import aroosak from "./../../../public/imgs/aroosak.jpg"
import bahram from "./../../../public/imgs/bahram.jpg"
import pepeFootball from "./../../../public/imgs/pepe-football.jpg"
import pepe from "./../../../public/imgs/pepe.jpg"
import person from "./../../../public/imgs/person.jpg"
import shayea from "./../../../public/imgs/shayea.jpg"

const images = [
  { id: 1, imgSrc: aroosak },
  { id: 2, imgSrc: bahram },
  { id: 3, imgSrc: pepeFootball },
  { id: 4, imgSrc: pepe },
  { id: 5, imgSrc: person },
  { id: 6, imgSrc: shayea },
]

export default function Gallery() {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState('')

  function showModal(src) {
    setSrc(src)
    setModal(true)
  }

  function closeModal(event) {
    event.target.localName === 'div' && setModal(false)
  }

  return (
    <>
      <div className='container flex flex-col justify-center items-center px-3
        sm:p-0'>
        <div className="flex justify-center items-center gap-3">
          <svg className="stroke-blue-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h1 className='text-slate-700 text-3xl irsB flex justify-center items-center relative
          before:content-normal before:bg-blue-500 before:w-[110%] before:h-1/2 before:absolute before:-z-10 before:opacity-25'>گالری تصاویر</h1>
        </div>
        <div className="w-full columns-2 gap-3 mt-3
        lg:columns-3">
          {
            images.map(img => (
              <img className='shadow-sm shadow-slate-400 w-full mb-3 cursor-zoom-in hover:brightness-75'
                src={img.imgSrc} alt="gallery images" key={img.id} onClick={() => showModal(img.imgSrc)} />
            ))
          }
        </div>
        <div className={modal ? 'modal show-modal' : 'modal'} onClick={closeModal}>
          <img className='shadow-md h-1/3 max-w-full cursor-auto
            sm:h-1/2 lg:h-full' src={src} alt="imge in modal" />
        </div>
      </div>
    </>
  )
}
