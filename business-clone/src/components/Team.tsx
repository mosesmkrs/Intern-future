import React from 'react'
import Image from 'next/image'
import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'

function Team() {
  return (
    <div className='bg-[#222222] text-center pt-12 pb-8 px-12 overflow-hidden'>
        <div className='inner_wrapfaq w-fit mx-auto'>
          <p className='md:text-4xl text-2xl text-[#00bfff] 
          '>
           Our Team
        </p>
        <span className='border_btmfaq'></span>
        </div>
     <div className='grid md:flex gap-4 items-center justify-center my-16'>
          <div className="bg-white p-4 rounded-lg shadow-lg relative overflow-hidden w-60 hover:-translate-y-4 z-10 transition-all duration-300 mb-16 md:mb-0 card">
                <div className="relative">
                    <div className="relative mb-4 mt-8">
                      <Image src={'/images/log.png'} alt='img' width={120} height={120} className='rounded-full shadow-lg border-white mx-auto border-4'/>
                        <div className="absolute top-0 right-0 w-36 h-36 bg-[#00bfff] rounded-full transform translate-x-12 -translate-y-24 -z-10"></div>
                      </div>
                    <h2 className="text-center text-[#333333] text-lg font-semibold">Gauri Yadav</h2>
                    <p className="text-center text-[#00bfff] mb-4">Founder</p>
                    <div className="flex justify-center space-x-3 mt-16">
                        <a href="/"><Twitter className=' text-[#333333] hover:text-[#00bfff] transition-all duration-300'/></a>
                        <a href="/"><LinkedIn className='text-[#333333] hover:text-[#00bfff] transition-all duration-300 '/></a>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full -translate-x-10 translate-y-10 -z-10"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg relative overflow-hidden w-60 hover:-translate-y-4 z-10 transition-all duration-300 card">
                <div className="relative">
                    <div className="relative mb-4 mt-8">
                      <Image src={'/images/log.png'} alt='img' width={120} height={120} className='rounded-full shadow-lg border-white mx-auto border-4'/>
                        <div className="absolute top-0 right-0 w-36 h-36 bg-[#00bfff] rounded-full transform translate-x-12 -translate-y-24 -z-10"></div>
                      </div>
                    <h2 className="text-center text-[#333333] text-lg font-semibold">Ritik Verma</h2>
                    <p className="text-center text-[#00bfff] mb-4">COO</p>
                    <div className="flex justify-center space-x-3 mt-16">
                        <a href="/"><Twitter className=' text-[#333333] hover:text-[#00bfff] transition-all duration-300'/></a>
                        <a href="/"><LinkedIn className='text-[#333333] hover:text-[#00bfff] transition-all duration-300 '/></a>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 rounded-full -translate-x-10 translate-y-10 -z-10"></div>
          </div>

     </div>
    </div>
  )
}

export default Team
