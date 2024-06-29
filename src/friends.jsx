// FriendsTab.js
import React from 'react';
import { FaUserFriends } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { FaShop, FaPlus } from "react-icons/fa6";

const FriendsTab = () => {
  return (
    <div className='flex'>
      <div className="h-screen w-[17rem] bg-gray-800 text-white flex rounded-tl-2xl flex-col items-start">
        <div className='border-b-[0.5px] border-gray-1000 pb-3 w-full flex justify-center'>
          <div className="flex justify-start mt-4">
            <input
              type="text"
              className='w-[15rem] py-1 px-1 rounded shadow-sm text-sm focus:outline-none bg-gray-1000'
              placeholder="Find or start a conversation"
            />
          </div>
        </div>
        <PagesTab />
        <DirectMessages />
      </div>
    </div>
  );
}

export default FriendsTab;

const PagesTab = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="group flex items-center py-3 px-3 m-1 rounded-lg hover:bg-gray-700 cursor-pointer">
        <FaUserFriends className="text-2xl text-gray-500 mr-2 size-10 group-hover:text-gray-300" />
        <p className="text-lg text-gray-500 group-hover:text-gray-300">Friends</p>
      </span>
      <span className="group flex items-center py-3 px-3 m-1 rounded-lg hover:bg-gray-700 cursor-pointer">
        <IoSpeedometer className="text-2xl text-gray-500 mr-2 size-10 group-hover:text-gray-300" />
        <p className="text-lg text-gray-500 group-hover:text-gray-300">Nitro</p>
      </span>
      <span className="group flex items-center py-3 px-3 m-1 rounded-lg hover:bg-gray-700 cursor-pointer">
        <FaShop className="text-2xl text-gray-500 mr-2 size-10 group-hover:text-gray-300" />
        <p className="text-lg text-gray-500 group-hover:text-gray-300">Shop</p>
      </span>
    </div>
  );
}

const DirectMessages = () => {
  return (
    <div className="flex flex-col w-full p-3 ">
      <div className="flex items-center justify-between ">
        <p className='text-gray-500 font-medium'>DIRECT MESSAGES</p>
        <FaPlus className='mr-5 text-gray-500' />
      </div>
    </div>
  );
}
