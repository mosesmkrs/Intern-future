import React from 'react'

function Contact() {
  const backgroundStyle = {
    backgroundImage: 'url(/images/intro.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '30vh',
    width: '100%',   
  };

  return (
    <div style={backgroundStyle} >
      Contact
    </div>
  );
}

export default Contact
