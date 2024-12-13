
const Contact = () => {
  let content = {
    recipient: 'oloriotony@gmail.com',
    title: '',
    message: 'Hello Tony',
  };
  return (
    <div className='bg-Mid-Blue text-White py-10 text-xl lg:px-40 px-10 text-center grid mx-auto' >
        <h1 className='text-center text-White font-semibold text-2xl pb-10'>Contact Me</h1>
        {/* <p>Feel free to reach out anytime, my inbox is always open. I'm open to collaborations and part-time opportunities, and I'll make sure to respond as quickly as I can.</p> */}
        <p>My inbox is always open, and I’m more than happy to connect. Whether you're interested in collaborating on a project or offering an opportunity, I’m open to discussing new ideas and possibilities. I strive to be responsive and will do my best to get back to you as soon as possible. Please don’t hesitate to reach out, i look forward to hearing from you!</p>
        <a className="text-Mid-Blue bg-White rounded-full py-1 flex items-center px-5 w-max mx-auto mt-10" href={`mailto:${content.recipient}?subject=${content.title}&body=${content.message}`}>let's Talk</a>

      {/* <form className='flex flex-col rounded bg-White text-Dark_Blue lg:p-10 p-5 mx-10 lg:mx-80' action="">
        <label className='pb-3'>Name:</label>
        <input className='h-10 bg-lGray pl-5  text-Mid-Blue outline-none  rounded' placeholder='Name' type="text" />
        <label className='py-3'>Email:</label>
        <input className='h-10 bg-lGray pl-5 text-Mid-Blue  outline-none  rounded' placeholder='Email' type="email" />
        <label className="py-3">Message:</label>
        <textarea className='pb-10 bg-lGray h-20  text-Mid-Blue  px-5 outline-none  rounded pt-2' placeholder='Message' type="text" ></textarea>
        <button className='text-White font-bold bg-Mid-Blue mt-5 py-2 rounded'>Submit</button>
      </form> */}
    </div>
   
  )
}

export default Contact
