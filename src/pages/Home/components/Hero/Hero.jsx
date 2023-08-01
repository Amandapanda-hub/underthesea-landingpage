import React from 'react'

export default function Hero() {
  return (
    <div 
    className="w-full h-screen bg-center bg-cover flex items-center justify-center" 
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE1fHxjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNjkwMzgxMzQzfDA&ixlib=rb-4.0.3&q=80&w=1000')"}}
>
    <div className="flex flex-col justify-center align-middle text-center">
        <h1 className="font-roboto-slab font-regular text-3xl sm:text-7xl text-white mb-4">Marine Mirage</h1>
        <h1 className="font-roboto-slab font-regular text-2xl sm:text-6xl text-white mb-4">Dive into a Sea of Wonder</h1>
        <button className="mx-auto bg-[#A0A99A] hover:bg-[#969E90] text-white font-bold py-5 px-10 ">
            Shop Now
        </button>
    </div>
</div>
  )
}
