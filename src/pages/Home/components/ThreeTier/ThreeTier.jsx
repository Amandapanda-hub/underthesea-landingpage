import React from 'react'

export default function ThreeTier() {
  return (
    <div className="w-full min-h-screen bg-center bg-cover flex flex-col items-center justify-center text-center bg-[#1A3141] pb-20 sm:pb-0">
        <h1 className="text-5xl text-white font-roboto-slab font-thin pb-10 mt-20 sm:pb-20 sm:mt-0">Fan Favorites</h1>
        <div className="flex flex-col sm:flex-row justify-around items-center w-full p-4">
            <div className="flex flex-col items-center p-4 space-y-12">
                <img src="https://images.unsplash.com/photo-1605431691380-0cb826f6c7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDY1fHxzaGVsbHxlbnwxfHx8fDE2OTA0ODcxMDB8MA&ixlib=rb-4.0.3&q=80&w=1000" 
                alt="description" className="w-full" />
                <h2 className="text-3xl text-white font-roboto-slab font-thin my-4">Title 1</h2>
                <button className="bg-[#A0A99A] hover:bg-[#969E90] text-white font-roboto-slab font-regular py-6 px-9 ">
                    Button
                </button>
            </div>

            <div className="flex flex-col items-center p-4 space-y-12">
                <img src="https://images.unsplash.com/photo-1589603471095-c49d04d15e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE4fHxzaGVsbHxlbnwxfHx8fDE2OTA0ODcxMDB8MA&ixlib=rb-4.0.3&q=80&w=1000" 
                alt="description" className="w-full" />
                <h2 className="text-3xl text-white font-roboto-slab font-thin my-4">Title 2</h2>
                <button className="bg-[#A0A99A] hover:bg-[#969E90] text-white font-roboto-slab font-regular py-6 px-9 ">
                    Button
                </button>
            </div>

            <div className="flex flex-col items-center p-4 space-y-12">
                <img src="https://images.unsplash.com/photo-1605431770498-3027cd24eddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDExNXx8c2hlbGx8ZW58MXx8fHwxNjkwNDg3MTQ5fDA&ixlib=rb-4.0.3&q=80&w=1000" 
                alt="description" className="w-full" />
                <h2 className="text-2xl text-white font-roboto-slab font-thin my-4">Title 3</h2>
                <button className="bg-[#A0A99A] hover:bg-[#969E90] text-white font-roboto-slab font-regular py-6 px-9 ">
                    Button
                </button>
            </div>
        </div>
    </div>
  )
}