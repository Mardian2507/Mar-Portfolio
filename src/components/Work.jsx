import React from 'react';
import Work1 from '../assets/work1.png';
import Work2 from '../assets/work2.png';
import Work3 from '../assets/work3.png';
import Work4 from '../assets/work4.png';

const Work = () => {
  return (
    <div name='work' className='w-full lg:h-screen text-gray-300 bg-[#293462]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full md:h-full pt-[100px]'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#cc9900]'>
            Work
          </p>
          <p className='py-4 text-sm md:text-base'>* Check out some of my recent work :</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                HTML, CSS, JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mardianmoz.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                HTML, CSS, JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://moztracker.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Work3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Vue JS, SPA Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://marrimacafe.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Work4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Vue JS, SPA/PWA Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://degozhop.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>        
          
        </div>
      </div>
    </div>
  );
};

export default Work;