import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/CV-Mardian-Suherman.pdf'

const Contact = () => {
  

  return (
    <div name='contact' className='w-full  bg-[#293462] flex justify-center items-center p-4'>
        <form  method='POST' action="https://getform.io/f/4986e683-7d49-4f12-94e1-2e5cd581586c" className='flex flex-col max-w-[600px] w-full pt-[100px]'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#cc9900] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-base'>* Submit the form below or shoot me an email - mardian.2507@gmail.com</p>
            </div>
            <input  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
            <input  className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea  className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button  className='text-white border-2 hover:bg-[#cc9900] hover:border-[#cc9900] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

            <div className='lg:hidden flex justify-center text-center pt-20 '>
              <a
                className=' w-1/4 text-gray-300'
                href='https://www.linkedin.com/in/mardian-suherman-6a054a183/'
              >
                Linkedin <FaLinkedin size={30} className='mx-auto' />
              </a>
              <a
                className=' w-1/4 text-gray-300'
                href='https://github.com/Mardian2507'
              >
                Github <FaGithub size={30} className='mx-auto'/>
              </a>
              <a
                className=' w-1/4 text-gray-300'
                href='whatsapp://send?text=Hello&phone=+6285659467422'
              >
                Whatsapp <FaWhatsapp size={30} className='mx-auto'/>
              </a>
              <a
                className=' w-1/4 text-gray-300'
                href={ Resume }
                download>
                Resume <BsFillPersonLinesFill size={30} className='mx-auto'/>
              </a>
            </div>
        </form>
    </div>
    
  )
}

export default Contact