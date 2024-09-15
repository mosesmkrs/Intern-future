import React from 'react'

function Contact() {
  const backgroundStyle = {
    backgroundImage: 'url(/images/bg.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '50vh', // Optional: Adjust height as needed
    width: '100%',   // Optional: Adjust width as needed
  };

  return (
    <div style={backgroundStyle}>
      Contact
    </div>
  );
}

export default Contact
