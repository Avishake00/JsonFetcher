import Logout from '@/components/Button/Logout'
import ProductFetcher from '@/components/auth/ProductFetcher'
import { FaHome } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'
import { LuFileJson } from "react-icons/lu";



const page = () => {
  return (
    <div>
        <nav className='mb-8 flex justify-between p-4 bg-cyan-300 rounded-xl mt-2 ml-3 mr-3 '>
        <Link href={"/auth/importProducts"} className="flex items-center text-lg text-gray-700">
      <FaHome className="mr-2" />
      Home
    </Link>
        <p className='text-xl font-sans font-semibold flex items-center'>
            JSON Fetcher
            <LuFileJson className='ml-1' />
        </p>
      <Logout/>
        </nav>
        <div className="">
          
        <ProductFetcher/>
        </div>
    </div>
  )
}

export default page