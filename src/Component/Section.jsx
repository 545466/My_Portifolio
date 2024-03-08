import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import images from "./Images"
import img6 from '../assets/images/Screenshot 2024-02-25 at 15-46-22 Vite React.png'
import img7 from '../assets/images/Screenshot 2024-02-26 at 11-40-26 Vite React.png'

const Section = () => {
  const skills = ["Html5", "Css3", "Javascript", "ReatJs", "Tailwind css", "Git/Github", "Responsive Design"];
  return (
    <div className=' text-left py-20 px-10 lg:px-20'>
      <div className='flex flex-col lg:flex-row '>
      <div className='lg:mr-10'>
      <h1 className=' text-Mid-Blue text-xl font-bold'>ABOUT ME</h1>
      <p className='pt-1 pb-5 lg:text-xl'>In this section you will find more information about me and my skills in programming</p>
      <p className='lg:text-xl'>I'm a Frontend Web Developer building the frontend of websites and web applications that brings about the success of the project. <br /> I'm open to job opportunities and collaboration where I can contribute, learn and grow. if you have a good opportunity that matches my skills then don't hesitate to contact me. <br /> Check outsome of my work in the projects section.</p>
      </div>
      <div className='flex flex-wrap '>
      <h1 className='text-Mid-Blue text-xl font-bold pt-10 lg:pt-0'>Skills</h1>
      <div className='flex flex-wrap'>
      {
        skills.map((skills)=>{
          return (
            <p className='text-White bg-Mid-Blue mt-5 mr-5 px-5 py-1 rounded-2xl lg:h-10'>{skills}</p>
          )
        })
      }
      </div>
      </div>
      </div>
      <h1 className='text-Mid-Blue text-xl font-bold pt-20 pb-5'>Projects</h1>
      <div className=' lg:wrap lg:justify-between'>
        {
          images.map((image)=>{
            return (
              <div className='flex lg:items-center flex-col bg-Mid-Blue text-White mb-12 p-5 rounded-xl border-Mid-Blue border-2 lg:flex-row' key={images.id} {...images}>
                <img className='rounded-xl lg:w-4/5' src={image.img}/>
                <div className='lg:pl-10'>
                <h1 className=' font-semibold pt-5 lg:text-2xl'>{image.head}</h1>
                <p  className='py-3 lg:text-xl'>{image.body}</p>
                <p  className='font-semibold'>{image.lang}</p>
                </div>
              </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default Section
