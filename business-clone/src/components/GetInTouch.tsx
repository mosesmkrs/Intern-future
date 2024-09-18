import React from 'react'

function GetInTouch() {
  return (
       <div className='bg-[#ffffff] text-center md:p-8 pb-4'>
         <div className='inner_wrap w-fit mx-auto'>
          <p className='md:text-4xl text-2xl text-[#002e5f] 
          '>
          Get In Touch
        </p>
        <span className='border_btm'></span>
        </div>

      <div className="flex customShadow mx-2  md:w-3/4 md:mx-auto mt-10 rounded-xl p-2">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.461991362992!2d90.37123991469985!3d23.80843989284954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c6ebdb2c81%3A0x7ff4a620b93e1f6!2sIndia!5e0!3m2!1sen!2sin!4v1614691169034!5m2!1sen!2sin"
            width="100%"
            height="100%"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white p-2">
          <form>
            <div className="mb-4">
              <input
                className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 outline-none "
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 outline-none"
                id="contact"
                type="text"
                placeholder="Contact Number"
              />
            </div>
            <div className="mb-4">
              <input
                className=" appearance-none border rounded-full w-full py-2 px-3 text-gray-700 outline-none"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className=" appearance-none border rounded-lg w-full py-2 px-3 text-gray-700  outline-none"
                id="message"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className='w-fit'>
              <button
                className="hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-8 rounded-3xl focus:outline-none focus:shadow-outline transition-all duration-300 border"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
