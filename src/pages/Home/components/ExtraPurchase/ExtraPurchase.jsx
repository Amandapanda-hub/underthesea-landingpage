import React from 'react'

export default function ExtraPurchase() {
  return (
    <div className="w-full min-h-screen bg-center bg-cover flex flex-col items-center justify-center text-center bg-[#1A3141] text-white">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-x-20 md:space-y-0">
        <div className="w-3/4 sm:w-1/2 md:w-1/4 h-[16rem] md:h-[35rem] bg-cover bg-center" 
         style={{backgroundImage: `url(https://images.unsplash.com/photo-1575674421703-c025dc68a2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3MHx8c2hlbGx8ZW58MXx8fHwxNjkwNDg3MTc2fDA&ixlib=rb-4.0.3&q=80&w=1000)`}}
         alt="seashells">
        </div>
        <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center md:items-start text-center md:text-start justify-center p-4 md:p-8 space-y-4 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-thin">Gift the Grace of the Tides</h1>
          <p className="mb-4 sm:mb-6 md:mb-8 leading-6 sm:leading-7 md:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-[#A0A99A] hover:bg-[#969E90] text-white font-roboto-slab font-regular w-full sm:w-3/4 md:w-1/2 h-8 sm:h-[3rem] md:h-[4rem] capitalize">
            Purchase A Gift Card
          </button>
        </div>
      </div>
    </div>
  )
}
