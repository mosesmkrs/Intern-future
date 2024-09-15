
import React from 'react'
import Image from 'next/image'; 

function Services() {
  return (
    <div className='bg-[#f2f2f2] text-center p-12'>
      <section className='w-3/4 mx-auto'>
            <p className='container text-4xl text-[#002e5f] p-4'>
              Our Services
            </p>
            <p className='text-[#333333] text-xl p-4 leading-relaxed'>
              At Campus2Career, we offer a range of services designed to meet the needs of students, colleges, and companies.
            </p>
            <p className='text-[#333333] text-xl mt-5 font-bold'>
              For Students:
            </p>
            <p className='text-[#333333] text-xl leading-relaxed'>
              In-Campus Training Programs:- Skill development sessions covering technical and soft skills. Placement Assistance:- Resume building, interview preparation, and job matching.
            </p>
            <p className='text-[#333333] text-xl mt-5 font-bold'>
            For Colleges:
            </p>
            <p className='text-[#333333] text-xl leading-relaxed'>
              Curriculum Integration:- Aligning training programs with academic Curriculum. Placement Support:- Connecting students with top employers and organizing placement drives.
            </p>
            <p className='text-[#333333] text-xl mt-5 font-bold'>
              For Companies:
            </p>
            <p className='text-[#333333] text-xl leading-relaxed'>
              Talent Acquisition:- Access to a pool of well-trained, job-ready candidates. Campus Engagement:- Opportunities for campus recruitment and brand building.
            </p>
            </section>

            <section className='flex gap-6 p-6 text-black mt-16'>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>Students</p>
                <br />
                <p>
                we offer in-campus training programs that develop both technical and soft skills, alongside placement assistance with resume building, interview preparation, and job matching.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>Companies</p>
                <br />
                <p>
                  we facilitate talent acquisition by providing access to a pool of well-trained, job-ready candidates and offer campus engagement opportunities for recruitment and brand building.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <Image src="/images/intro.jpg" alt="img" height={64} width={64} className='rounded-full mx-auto m-4'/>
                <p className='text-xl'>Colleges</p>
                <br />
                <p>
                 we provide curriculum integration to align our training programs with academic goals and offer placement support by connecting students with top employers and organizing placement drives.
                </p>

              </div>
      </section>
     
    </div>
  )
}

export default Services
