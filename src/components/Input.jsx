import React from 'react'

export default function Input(props) {
  return (
      props.tag === 'input' ? (
        <input className={`text-blue-500 placeholder:text-blue-500 border border-blue-500 ${props.width}
          p-3 px-5 rounded-md focus:outline-0 focus:border-2`}
          type="text" placeholder={props.placeHolder} />
      ) : props.tag === 'textarea' ? (
        <textarea className={`text-blue-500 placeholder:text-blue-500 border border-blue-500 ${props.width} ${props.height}
          resize-none p-3 px-5 rounded-md focus:outline-0 focus:border-2`}
          placeholder={props.placeHolder}>
        </textarea>
      )  : ''
  )
}