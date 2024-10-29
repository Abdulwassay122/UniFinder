import React from "react";
import logo from './img/graduation.png'
import facebool from './img/facebook.png'
import instagram from './img/instagram.png'
import linkdun from './img/linkedin.png'
import github from './img/github.png'
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="bg-[#127533] grid grid-cols-3 gap-3 ">
        <div className="m-5 ml-16 flex">
            <img className="h-8  mr-2 " src={logo.src} alt="" />
            <Link  className="text-2xl font-semibold text-white" href="/">UniFinder</Link>
        </div>
        <div></div>
          <div className="flex items-center cursor-pointer ml-80 ">
          <div className='flex flex-row justify-end '>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-6 mx-2' src={facebool} alt="" /></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-6 mx-2' src={linkdun} alt="" /></Link>
            <Link target="_blank" href="https://www.instagram.com/wassay122/"><img className='h-6 mx-2' src={instagram} alt="" /></Link>
            <Link target="_blank" href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-6 mx-2' src={github} alt="" /></Link>
        </div>
          </div>
      </header>
    </>
  );
}
