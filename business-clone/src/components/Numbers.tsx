import React from 'react';

function Numbers() {
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
      Numbers
    </div>
  );
}

export default Numbers;
