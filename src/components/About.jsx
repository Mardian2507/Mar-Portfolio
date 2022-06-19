import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-[#293462] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full md:h-full pt-[100px] md:pt-0'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#cc9900]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-xl md:text-4xl font-bold text-[#8892b0] md:text-gray-300'>
              <p>I'm Mardian, nice to meet you. Please take a look around.</p>
            </div>
            <div className=' text-base md:text-sm text-[#8892b0] md:text-gray-300'>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding. 
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;