import React from 'react'
import Image from 'next/image'

function Team() {
  return (
    <div className='bg-[#222222] text-center p-16'>
        <p className='container text-4xl text-[#00bfff] m-6'>
              Our team
        </p>
     <div className='flex gap-4 items-center justify-center my-16'>
        <div className="bg-white p-4 rounded-lg shadow-lg relative overflow-hidden w-60 hover:-translate-y-4 z-10 transition-all duration-300">
          <div className="relative">
            <div className="relative mb-4 mt-8">
            <Image src={'/images/log.png'} alt='img' width={120} height={120} className='rounded-full shadow-lg border-white mx-auto border-4'/>
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00bfff] rounded-full transform translate-x-12 -translate-y-24 -z-10"></div>
            </div>
            <h2 className="text-center text-[#333333] text-lg font-semibold">Name</h2>
            <p className="text-center text-[#00bfff] mb-4">Role</p>
            <div className="flex justify-center space-x-4 mt-10">
              <a href={'/#'} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
                 width={20}
                 height={20}
                  alt="Twitter"
                />
              </a>
              <a href={'/#'} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                 width={20}
                 height={20}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full -translate-x-10 translate-y-10"></div>
    </div>
        <div className="bg-white p-4 rounded-lg shadow-lg relative overflow-hidden w-60 hover:-translate-y-4 z-10 transition-all duration-300">
          <div className="relative">
            <div className="relative mb-4 mt-8">
            <Image src={'/images/log.png'} alt='img' width={120} height={120} className='rounded-full shadow-lg border-white mx-auto border-4'/>
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00bfff] rounded-full transform translate-x-12 -translate-y-24 -z-10"></div>
            </div>
            <h2 className="text-center text-[#333333] text-lg font-semibold">Name</h2>
            <p className="text-center text-[#00bfff] mb-4">Role</p>
            <div className="flex justify-center space-x-4 mt-10">
              <a href={'/#'} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
                 width={20}
                 height={20}
                  alt="Twitter"
                />
              </a>
              <a href={'/#'} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                 width={20}
                 height={20}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full -translate-x-10 translate-y-10"></div>
    </div>

     </div>
    </div>
  )
}

export default Team
