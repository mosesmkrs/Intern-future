import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RedeemIcon from '@mui/icons-material/Redeem';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Numbers() {
  const backgroundStyle = {
    backgroundImage: 'url(/images/bg.jpg)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    width: '100%',
  };

  return (
    <div style={backgroundStyle} className='grid grid-cols-2 sm:flex justify-around p-6'>
      <div className='text-center justify-center p-4 sm:border-none border-b m-2'>
        <div>
         <AccessTimeIcon className='md:w-12 w-10 h-10  md:h-12 text-white' />
        </div>
         <p className='text-2xl md:text-4xl text-white my-3'>10000</p>
         <p className='font-bold text-lg'>Students</p>
      </div>
      <div className='text-center justify-center p-4 sm:border-none border-b m-2 border-w'>
         <RedeemIcon fontSize='large' className='text-white' />
         <p className='text-2xl md:text-4xl text-white my-3'>35</p>
         <p className='font-bold text-lg'>Colleges</p>
      </div>
      <div className='text-center justify-center p-4'>
         <GroupsIcon fontSize='large' className='text-white' />
         <p className='text-2xl md:text-4xl text-white my-3'>18</p>
         <p className='font-bold text-lg'>Companies Tie-up</p>
      </div>
      <div className='text-center justify-center p-4'>
         <WorkspacePremiumIcon fontSize='large' className=' text-white' />
         <p className='text-2xl md:text-4xl text-white my-3'>95</p>
         <p className='font-bold text-lg'>Workshops</p>
      </div>
    </div>
  );
}

export default Numbers;
