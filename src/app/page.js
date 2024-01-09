'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router=useRouter();
  const handlerOnclick=()=>{
    router.push('/auth/importProducts')
  }
  return (
    

    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="flex flex-col items-center space-y-6 text-center">
      <div className="flex items-center">
       
        <h1 className="text-6xl font-semibold text-white drop-shadow-md ml-2">
          ZENTRADES
        </h1>
      </div>
      <p className="text-white text-lg py-2">Welcome to JSONfetcher by Avishake</p>
      <Button onClick={handlerOnclick}>Click to start</Button>
    </div>
    
    <div></div>
  </main>
 
  )
}

export default Home