import React from 'react';

export default function Email() {
  return (
    <div 
      className="w-full h-auto md:h-[20rem] lg:h-[30rem] bg-center bg-cover flex items-center justify-center bg-[#1A3141]"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1449709861192-5fbaa595db43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDMyMHx8b2NlYW4lMjBqZXdsZXJ5fGVufDF8fHx8MTY5MDQ5OTE4Mnww&ixlib=rb-4.0.3&q=80&w=1000')"}}
    >
      <div className='flex flex-col items-center justify-center text-center font-roboto-slab p-4 md:p-8 space-y-6'>
          <h1 className='text-white text-2xl sm:text-3xl md:text-4xl'>The Sea Is So Vast</h1>
          <p className='text-white text-lg md:text-xl font-regular'>Don’t miss a thing. Sign up to receive news and updates.</p>
          <input 
            type='email' 
            id='email' 
            className='w-3/4 md:w-1/2 p-2 text-center border-2 border-white rounded' 
            placeholder='Enter your email...'
          />
      </div>
    </div>
  );
}
