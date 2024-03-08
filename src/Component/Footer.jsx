import React from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
      <div className='flex justify-center py-5 text-Mid-Blue'>
        <FaGithub onClick={"https://github.com/5454"} className=' text-2xl lg:text-3xl' />
        <FaLinkedin className=' text-2xl lg:text-3xl mx-10' />
        <FaPhone className=' text-2xl lg:text-3xl mr-10' />
        <FaWhatsapp className=' text-2xl lg:text-3xl' />
      </div>
      <div className=' m-auto w-1/4 h-1 rounded-xl bg-Mid-Blue'></div>
      <p className='lg:text-xl text-Mid-Blue font-semibold text-center py-5'>© Copyright 2024 . Made by Dev. Tony</p>
    </div>
  )
}

export default Footer
