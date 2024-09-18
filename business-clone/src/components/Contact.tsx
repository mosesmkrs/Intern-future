import React from 'react'

function Contact() {
  const backgroundStyle = {
    backgroundImage: 'url(/images/intro.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    width: '100%',   
  };

  return (
    <div style={backgroundStyle} className='text-center p-4'>
      <p className='text-white md:text-3xl text-xl font-bold'>One-Stop Solution for Campus Training , Placement & Industry Connections</p>
      <br />
      <p className='text-white md:text-2xl text-lg'>
        Campus2Career!
      </p>
      <a href="#6">
        <button className='m-4 py-1 px-6 rounded-full border border-blue-500 bg-slate-50 text-black hover:bg-blue-400 hover:text-white transition-all duration-300'>Contact now</button>
      </a>
    </div>
  );
}

export default Contact
