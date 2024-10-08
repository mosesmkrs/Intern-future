import React from 'react'

function AboutUs() {
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      className='translate-y-12 mywave'
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z"
        />
      </defs>
      <g className="waves">
        <use
          href="#gentle-wave"
          x="60"
          y="10"
          fill="#ffffff"
          fill-opacity=".2"
        />
        <use
          href="#gentle-wave"
          x="40"
          y="3"
          fill="#ffffff"
          fill-opacity=".6"
        />
        <use
          href="#gentle-wave"
          x="200"
          y="2"
          fill="#ffffff"
          fill-opacity=".8"
        />
        <use
          href="#gentle-wave"
          x="10"
          y="1"
          fill="#ffffff"
          fill-opacity="1"
        />
      </g>
    </svg>
    <div className='bg-[#ffffff] text-center md:p-8 p-4 pt-8'>
        <div className='inner_wrap w-fit mx-auto'>
          <p className='md:text-4xl text-2xl text-[#002e5f] 
          '>
          About Us
        </p>
        <span className='border_btm'></span>
        </div>
        <p className='md:text-3xl text-xl text-[#000000] md:p-4 p-2'>
          campus2career was founded with a vision to bridge the gap between education and employment.
        </p>
        <p className='text-[#333333] md:text-xl text-lg md:p-4 p-2  leading-relaxed'>
            We partner with colleges to provide students with <span className='font-bold'>industry-relevant training</span>
            <br />
            and connect them with top companies for placement opportunities. <br />
            Our holistic approach ensures that every student is well-prepared to enter the workforce.
        </p>
        <p className='text-[#333333] md:text-xl text:md md:p-4 p-1 font-bold'>
          At Campus2Career, we offer a range of services designed to meet the needs of students, colleges, and companies.
        </p>
        <p className='text-[#333333] md:text-xl text-md md:p-4 p-1 leading-relaxed'>
          we facilitate talent acquisition by providing access to a pool of well-trained, job-ready candidates and offer campus engagement opportunities for recruitment and brand building.
        </p>
        <button className='py-2 text-[#212529] px-6 rounded-2xl transition-colors duration-300 hover:text-white hover:font-bold hover:bg-[#002e5f] border'><a href="#">Read more</a></button>
    </div>
    </>
  )
}

export default AboutUs
