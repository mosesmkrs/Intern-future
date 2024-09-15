import React from 'react'
import Image from 'next/image'

function SuccessStories() {
  return (
    <div className='bg-[#ffffff] text-center p-12'>
      <section className='w-3/4 mx-auto'>
            <p className='container text-4xl text-[#002e5f] p-4'>
              Our Success Stories
            </p>
            <p className='text-[#333333] text-xl leading-relaxed'>
              Discover how Campus2Career has transformed the career journeys of students and strengthened the capabilities of colleges and companies. <br />
              Our portfolio showcases our success stories, case studies, and testimonials from our satisfied partners.
            </p>
            </section>

            <section className='flex gap-6 p-6 text-black mt-16'>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>Successful Placements:-</p>
                <br />
                <p>
               We take pride in the numerous students we have successfully placed in reputable companies. Our tailored placement assistance programs have helped students land roles in various industries, matching their skills and aspirations with the right opportunities.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>College Partnerships:-</p>
                <br />
                <p>
                  We have established strong partnerships with numerous colleges, integrating our training programs into their curricula. These collaborations have resulted in improved student performance , higher placement rates, and enhanced institutional reputation.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>Corporate Collaborations:-</p>
                <br />
                <p>
                 Our collaborations with leading companies have created a seamless connection between academia and industry. We showcase success stories where companies have benefited from accessing a pool of well-trained, job-ready candidates through our platform, enhancing their recruitment efforts and workforce quality.

                </p>

              </div>
      </section>
     
    </div>
  )
}

export default SuccessStories
