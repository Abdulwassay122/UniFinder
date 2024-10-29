import React from 'react'
import spinner from './img/Iphone-spinner-2.gif'

export default function Loading () {
  return (
    <div className='text-center'>
      <img src={spinner.src} alt="Lonnading"/>
    </div>
  )
}
