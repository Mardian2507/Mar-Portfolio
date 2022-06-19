import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full lg:h-screen bg-[#293462]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center md:h-full pt-[100px]'>
        <p className='text-[#cc9900]'> Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mardian Suherman
        </h1>
        <h2 className='text-3xl md:text-6xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-base md:text-2xl'>
          I’m a Frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cc9900] hover:border-[#cc9900]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;