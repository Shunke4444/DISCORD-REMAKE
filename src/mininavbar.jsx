import React, { useState } from 'react'
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeRestore } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";


const MiniNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col top-0 z-1 absolute">
      <div className='w-screen h-6 bg-gray-900 flex items-center justify-end top-0 pr-3 space-x-2'>
      <VscChromeMinimize className='h-20 text-white hover:cursor-pointer'/>

      <div onClick={() => setIsOpen(prev => !prev)}>
        {isOpen? (
        <VscChromeRestore className='h-20 text-white hover:cursor-pointer'/>
    ) : (
        <VscChromeMaximize className='h-20 text-white hover:cursor-pointer'/> 
    )}
      </div>
    <p className='text-m text-white hover:cursor-pointer'>X</p>
    </div>


    </div>
 

    
  ) 
}


export default MiniNavBar
