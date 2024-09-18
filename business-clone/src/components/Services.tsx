
import React from 'react' 
import LaptopIcon from '@mui/icons-material/Laptop';
import AdbIcon from '@mui/icons-material/Adb';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function Services() {
  return (
    <div className='bg-[#f2f2f2] text-center p-12'>
      <section className='md:w-3/4 mx-auto'>
             <div className='inner_wrap w-fit mx-auto'>
          <p className='md:text-4xl text-2xl text-[#002e5f] 
          '>
          Our Services
        </p>
        <span className='border_btm'></span>
        </div>
            <p className='text-[#333333] md:text-xl text-md md:p-4 p-2 leading-relaxed'>
              At Campus2Career, we offer a range of services designed to meet the needs of students, colleges, and companies.
            </p>
            <p className='text-[#333333] md:text-xl text-md mt-5 font-bold'>
              For Students:
            </p>
            <p className='text-[#333333] md:text-xl text-md leading-relaxed'>
              In-Campus Training Programs:- Skill development sessions covering technical and soft skills. Placement Assistance:- Resume building, interview preparation, and job matching.
            </p>
            <p className='text-[#333333] md:text-xl text-md mt-5 font-bold'>
            For Colleges:
            </p>
            <p className='text-[#333333] md:text-xl text-md leading-relaxed'>
              Curriculum Integration:- Aligning training programs with academic Curriculum. Placement Support:- Connecting students with top employers and organizing placement drives.
            </p>
            <p className='text-[#333333] md:text-xl text-md mt-5 font-bold'>
              For Companies:
            </p>
            <p className='text-[#333333] md:text-xl text-md leading-relaxed'>
              Talent Acquisition:- Access to a pool of well-trained, job-ready candidates. Campus Engagement:- Opportunities for campus recruitment and brand building.
            </p>
            </section>

            <section className='grid md:flex gap-6 md:p-6 text-black mt-16'>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                <LaptopIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#f7c60533] text-teal-500 p-2 hover:bg-slate-50'/>
                <p className='text-xl mt-3'>Students</p>
                <br />
                <p>
                we offer in-campus training programs that develop both technical and soft skills, alongside placement assistance with resume building, interview preparation, and job matching.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                  <AdbIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#ff4d1c26] text-teal-500 p-2 hover:bg-slate-50'/>
                <p className='text-xl mt-3'>Companies</p>
                <br />
                <p>
                  we facilitate talent acquisition by providing access to a pool of well-trained, job-ready candidates and offer campus engagement opportunities for recruitment and brand building.
                </p>

              </div>
              <div className='text-center rounded-lg shadow-2xl p-8 bg-white transition-shadow duration-1000 hover:shadow-none hover:bg-gradient-to-br from-[#66ffcc] to-[#ffccff]'>
                  <AutoFixHighIcon style={{ fontSize: '48px' }} className='rounded-lg hover:rounded-2xl bg-[#00932626] text-teal-500 p-2 hover:bg-slate-50'/>
                <p className='text-xl mt-3'>Colleges</p>
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
