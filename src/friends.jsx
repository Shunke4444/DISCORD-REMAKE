import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";


const FriendsTab = () => {
  return (
    <div className='flex pt-6'>
        <div className="h-screen w-[17rem] bg-gray-900 text-white flex rounded-tl-2xl flex-col items-start">
           <div className='border-b-[0.5px] border-gray-1000 pb-3 w-full flex justify-center'>
            <div className="flex justify-start mt-4">
                <input
                type="text"
                className='w-[15rem] py-1 px-1 rounded shadow-sm text-sm focus:outline-none bg-gray-1000'
                placeholder="Find or start a conversation"/>
            </div>
           </div>
           <PagesTab/>
        </div>
      
    </div>
    
  )
}

export default FriendsTab


const PagesTab = () => {
    return (
        <div className="flex flex-col">
        <span className="flex items-center px-5 py-5  hover:bg-black">
          <FaUserFriends className="text-2xl text-gray-500 mr-2 size-10" />
          <p className="text-lg text-gray-500">Friends</p>
        </span>
  
        <span className="flex items-center">
          <IoSpeedometer className="text-2xl text-gray-500 mr-2 size-10" />
          <p className="text-lg text-gray-500">Nitro</p>
        </span>
  
        <span className="flex items-center">
          <FaShop className="text-2xl text-gray-500 mr-2 size-10"/>
          <p className="text-lg text-gray-500">Shop</p>
        </span>das
      </div>

    )
}  