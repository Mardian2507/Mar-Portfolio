import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJs from '../assets/reactjs.png';
import VueJs from '../assets/vuejs.png';
import Bootstrap from '../assets/bootstrap.png';
import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full lg:h-screen bg-[#293462] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full pt-[100px]'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#cc9900] '>Skills</p>
              <p className='py-4 text-sm md:text-base'>* These are the technologies I've worked with :</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-3'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={ReactJs} alt="HTML icon" />
                  <p className='my-4'>REACT JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={VueJs} alt="HTML icon" />
                  <p className='my-4'>VUE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  pt-5' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;