'use client'
import React, { useState, useRef } from 'react';

type AccordionItem = {
  question: string;
  answer: string;
};
 const backgroundStyle = {
    backgroundImage: 'url(/images/faq.png)',
    backgroundSize: 'cover',
    height: 'screen',
    width: '100%',   
  };

const faqData: AccordionItem[] = [
  {
    question: 'What Services Does Campus2Career Offer?',
    answer: 'We Provide In-Campus Training Programs, Student Placement Assistance, And Industry Connections For Colleges, Students, And Companies.'
  },
  {
    question: 'How Can Students Benefit From Campus2Career?',
    answer: 'Students can enhance their skills through our training programs, receive placement support, and connect with top employers.'
  },
  {
    question: 'How Do Colleges Partner With Campus2Career?',
    answer: 'Colleges can integrate our training programs into their curriculum and use our platform for organizing placement drives and connecting with companies.'
  },
  {
    question: 'What Is The Process For Companies To Recruit?',
    answer: 'Companies can access our pool of trained candidates, participate in campus recruitment drives, and engage with students through various programs.'
  },
  {
    question: 'How Can I Contact Campus2Career For More Information?',
    answer: 'You can reach us via email at info@campus2career.in, by phone at +91 8889367841, or through our contact form on the website.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={backgroundStyle} className="flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-white">
         <div className='inner_wrapfaq w-fit mx-auto my-6'>
          <p className='md:text-4xl text-2xl text-[#00bfff] 
          '>
          FAQ
        </p>
        <span className='border_btmfaq'></span>
        </div>
        {faqData.map((item, index) => (
          <div key={index} className="mb-2 bg-gray-800 rounded-lg shadow-md">
            <div
              className="flex p-0 justify-start items-center bg-[#00bfff] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className='mr-5 bg-[#333333] px-5 py-2'
              style={{
           clipPath: 'polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)',

          }}>{openIndex === index ? '-' : '+'}</span>
              <p className="text-black text-sm md:text-[16px] ">{item.question}</p>
            </div>
            <div
              ref={contentRef}
              style={{
                maxHeight: openIndex === index ? `30rem` : '0px',
              }}
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out`}
            >
              <div className="p-4 bg-white text-gray-800">
                <p className='text:sm'>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
