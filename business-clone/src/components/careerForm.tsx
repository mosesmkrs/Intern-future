'use client'
import React, { useState } from 'react'

function CareerForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    post: 'Trainer',
    experience: '',
    details: '',
    resume: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    // Handle form submission logic here
  };
  return (
    <div className='bg-[#ffffff] text-center md:p-12 p-5'>
            <div className='inner_wrap w-fit mx-auto my-4'>
          <p className='md:text-4xl text-2xl text-[#002e5f] 
          '>
          Career
        </p>
        <span className='border_btm'></span>
        </div>
            <p className='text-md md:text-2xl text-[#333333]'>
              Job Opening in Campus2Career. Apply Now!
            </p>

              <div className="lg:max-w-screen-md mt-8 mx-auto p-4 md:p-8 bg-white customShadow rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Contact Number Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Post Selection */}
                <div className="mb-4">
                  <label className="text-gray-700 font-bold mb-2">Apply For Which Post?</label>
                  <div className="md:flex md:space-x-4">
                    {['Trainer', 'HR', 'Marketing & Sales', 'Operations', 'Developer'].map((post) => (
                      <label key={post} className="inline-flex items-center text-[#333333] p-2">
                        <input
                          type="radio"
                          name="post"
                          value={post}
                          checked={formData.post === post}
                          onChange={handleChange}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">{post}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Years of Experience Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years Of Experience"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Other Details */}
                <div className="mb-4">
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Other Details"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Resume Upload */}
                <div className="mb-4">
                  <label className="block w-fit text-gray-800 font-bold mb-2">Upload Your Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full text-gray-700"
                  />
                </div>

                {/* Submit Button */}
                <div className='w-fit'>
                  <button
                    type="submit"
                    className='py-1 my-4 px-8 rounded-full border border-blue-500 bg-slate-50 text-black hover:bg-blue-400 hover:text-white transition-all duration-300'
                  >
                    Submit
                  </button>
                </div>
              </form>
    </div>
    </div>
  )
}

export default CareerForm
