import React from 'react'

const Contact = () => {
  return (
    <div className='bg-Mid-Blue py-10' >
        <h1 className='text-center text-White font-semibold text-2xl pb-10'>Contact Me</h1>
      <form className='flex flex-col rounded-xl bg-White text-Dark_Blue p-10 mx-10 lg:mx-80' action="">
        <label className='pb-3'>Name:</label>
        <input className='h-10 bg-lGray pl-5  text-Mid-Blue outline-none  rounded-xl' placeholder='Name' type="text" />
        <label className='pb-3'>Email:</label>
        <input className='h-10 bg-lGray pl-5 text-Mid-Blue  outline-none  rounded-xl' placeholder='Email' type="email" />
        <label className='pb-3'>Message:</label>
        <textarea className='pb-10 bg-lGray h-20  text-Mid-Blue  px-5 outline-none  rounded-xl' placeholder='Message' type="text" /> <textarea/>
        <button className='text-White font-bold bg-Mid-Blue mt-5 py-2 rounded-3xl'>Submit</button>
      </form>
    </div>
   
  )
}

export default Contact
