'use client'
import React from 'react'
import { Button } from '../ui/button'
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router=useRouter();

    const handleonclick=()=>{
        router.push('/')
    }
  return (
    <Button onClick={handleonclick}>logout
        <MdOutlineLogout className='mx-1'/>
    </Button>
  )
}

export default Logout