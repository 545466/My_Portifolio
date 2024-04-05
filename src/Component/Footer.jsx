import React from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
      <div className='flex justify-center py-5 text-Mid-Blue'>
        <a href="https://github.com/545466"><FaGithub className=' text-xl lg:text-2xl' /></a>
        <a href="https://www.linkedin.com/in/Tony-Oloriogun-b2261025a"><FaLinkedin className=' text-xl lg:text-2xl mx-10' /></a>
        <a href="tel:+2349157560956"><FaPhone className=' text-xl lg:text-2xl mr-10' /></a>
        <a href=""><FaWhatsapp className=' text-xl lg:text-2xl ' /></a>
      </div>
      <div className=' m-auto w-1/4 h-1 rounded-xl bg-Mid-Blue'></div>
      <p className='lg:text-xl text-Mid-Blue font-semibold text-center py-5'>© Copyright 2024 . Made by Dev. Tony</p>
    </div>
  )
}

export default Footer
