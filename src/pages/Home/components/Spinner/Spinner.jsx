import React from 'react';

export default function Spinner() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center text-center bg-[#456072] space-y-5 font-roboto-slab pt-0 pb-20 sm:pt-20 sm:pb-20'>

      <h1 className='pb-10 sm:pb-12 pt-20 sm:pt-0 text-4xl sm:text-5xl font-roboto-slab font-thin text-white'>Captain's Log</h1>

      <div className='flex flex-col md:flex-row justify-center gap-4 w-full md:w-3/4 h-full md:h-3/4 space-y-10 md:space-y-0 md:space-x-10'>
        <div className='flex flex-1 flex-col p-4 rounded items-center justify-between'>
          <div className='w-full h-0 pb-[75%] md:pb-[56.25%] relative'>
            <iframe src="https://giphy.com/embed/p6RVGDmsXrONHCYG3R" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} className="giphy-embed" allowFullScreen title="Giphy Embed"></iframe>
          </div>
          <h2 className='mb-10 mt-20 text-3xl sm:text-4xl font-regular text-white'>What is it you're after?</h2>
          <p className='mb-10 text-white text-2xl font-thin'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='mx-auto bg-[#A0A99A] hover:bg-[#969E90] text-white font-bold py-5 px-10'>Your button 1</button>
        </div>

        <div className='flex flex-1 flex-col p-4 rounded items-center justify-between'>
          <div className='w-full h-0 pb-[75%] md:pb-[56.25%] relative'>
            <iframe src="https://giphy.com/embed/6Nh0MSV3umQOBYHuvT" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} allowFullScreen title="Giphy Embed"></iframe>
          </div>
          <h2 className='mb-10 mt-20 text-3xl sm:text-4xl font-regular text-white'>Is it the vast ocean you seek?</h2>
          <p className='mb-10 text-white text-2xl font-thin'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='mx-auto bg-[#A0A99A] hover:bg-[#969E90] text-white font-bold py-5 px-10'>Your button 2</button>
        </div>
      </div>
    </div>
  )
}
