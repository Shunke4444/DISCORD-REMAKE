import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";
import { SiRobloxstudio } from "react-icons/si";
import { IoChatbubbles } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: '#111214',
    color: '#edeef0',
    boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
    fontSize: '20px',
    padding: '10px 15px',
    height: '50px',
  },
  [`& .MuiTooltip-arrow`]: {
    color: '#111214',
  },
});


const NavBarIcon = ({ navIcon, title }) => (
  <CustomTooltip title={title} arrow placement="bottom">
    <div className='friendStatusIcons'>
      {navIcon}
    </div>
  </CustomTooltip>
);


const FriendStatus = () => {
  return (
<div className='w-full bg-gray-700'>
<div className='flex justify-center items-center '>
      <div className='border-b-[0.5px] border-gray-1000 pb-2 w-full flex'>
        <div className="flex mt-3">
          <div className="my-[2px] flex items-center space-x-5 px-5">
            <span className='flex items-center space-x-1 friendstatus-test'>
              <FaUserFriends className='size-[1.50rem]'/>
              <p>Friends</p>
            </span>
            <VerticalLine/>
            <a href="#" className='friendstatus-test'>Online</a>
            <a href="#" className='friendstatus-test'>All</a>
            <a href="#" className='friendstatus-test'>Pending</a>
            <a href="#" className='friendstatus-test'>Blocked</a>
            <button className='text-gray-200 font-medium bg-discordGreen px-2 py-0.5 rounded-md hover:cursor-pointer'>Add Friend</button>
          </div>
        </div>
    
        <div className='ml-auto flex items-center pr-5 space-x-5 pt-3'>
        <NavBarIcon navIcon={<IoChatbubbles size='1.75rem'/>} title='New Group DM'/>
        <VerticalLine/>
        <NavBarIcon navIcon={<SiRoblox size='1.75rem'/>} title='Inbox'/>
        <NavBarIcon navIcon={<SiRobloxstudio size='1.75rem'/>} title='Help'/>
        </div>
      </div>
    </div>
</div>
  ) 
}




const VerticalLine = () => {
  return (
    <div>
      <div className="w-[0.1px] h-6 bg-gray-600"></div>
    </div>
  )
}



export default FriendStatus
