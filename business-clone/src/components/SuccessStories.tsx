import React from 'react'
import Contact from './Contact'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import StarsIcon from '@mui/icons-material/Stars';

function SuccessStories() {
  return (
    <div className='bg-[#ffffff] text-center py-16'>
      <section className='w-11/12  mx-auto'>
         <div className='inner_wrap w-fit mx-auto mb-4'>
          <p className='md:text-4xl text-2xl text-[#002e5f] 
          '>
          Our Success Stories
        </p>
        <span className='border_btm'></span>
        </div>
         <p className='text-[#333333] md:text-2xl text-lg leading-relaxed'>
              Discover how Campus2Career has transformed the career journeys of students and strengthened the Capabilities of colleges and companies. <br />
              Our portfolio showcases our success stories, case studies, and testimonials from our satisfied partners.
            </p>
      </section>

      {/* Responsive grid layout */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-black my-16'>
        <div className='text-center rounded-lg shadow-2xl p-8 bg-white border transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
            <StarsIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#006cff26] text-teal-500 p-2 hover:bg-slate-50'/>
          <p className='text-xl mt-3'>Successful Placements:-</p>
          <br />
          <p>
            We take pride in the numerous students we have successfully placed in reputable companies. Our tailored placement assistance programs have helped students land roles in various industries, matching their skills and aspirations with the right opportunities.
          </p>
        </div>

        <div className='text-center rounded-lg shadow-2xl p-8 bg-white border transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
           <UnarchiveIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#9227ff26] text-teal-500 p-2 hover:bg-slate-50'/>
          <p className='text-xl mt-3'>College Partnerships:-</p>
          <br />
          <p>
            We have established strong partnerships with numerous colleges, integrating our training programs into their curricula. These collaborations have resulted in improved student performance, higher placement rates, and enhanced institutional reputation.
          </p>
        </div>

        <div className='text-center rounded-lg shadow-2xl p-8 bg-white border transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
            <CameraAltIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#1727f626] text-teal-500 p-2 hover:bg-slate-50'/>
          <p className='text-xl mt-3'>Corporate Collaborations:-</p>
          <br />
          <p>
            Our collaborations with leading companies have created a seamless connection between academia and industry. We showcase success stories where companies have benefited from accessing a pool of well-trained, job-ready candidates through our platform, enhancing their recruitment efforts and workforce quality.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default SuccessStories
