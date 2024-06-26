import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoNavigateCircle } from "react-icons/io5";
import userPfp from './assets/userpfp.jpg'
import dcGroup from './assets/Smiling-Cat.jpg'
import kennyGroup from './assets/KENNYY.webp'
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
  
  const SideBarIcon = ({ icon, title }) => (
    <CustomTooltip title={title} arrow placement="right">
      <div className='sidebar-icon'>
        {icon}
      </div>
    </CustomTooltip>
  );

const Sidebar = () => {
  return (
    <>
    <div className="flex z-10 h-screen">
    <div className="bg-gray-900  w-[6rem] h-screen flex-col m-0 flex shadow-lg text-white items-center pt-5 font-sans"> 
    <p className='text-xl text-gray-500 font-bold'>Discord</p>
    <CustomTooltip title="Direct Messages" arrow placement="right">
      <img src={userPfp} alt="" className='rounded-[10rem] h-[4rem] w-[4rem] 
      relative mt-2 mb-2 mx-auto shadow-lg hover:rounded-2xl transition-all ease-in-out duration-200 cursor-pointer'/>
    </CustomTooltip>
    <hr className="my-4 border-t-2 h-1 rounded border-gray-600 w-16" />
    <CustomTooltip title="Sopa Epik Posa" arrow placement="right">
      <img src={dcGroup} alt="" className='rounded-[10rem] h-[4rem] w-[4rem] 
      relative mt-2 mb-2 mx-auto shadow-lg hover:rounded-2xl transition-all ease-in-out duration-200 cursor-pointer'/>
    </CustomTooltip>
    <CustomTooltip title="Sopa Epik Keni" arrow placement="right">
      <img src={kennyGroup} alt="" className='rounded-[10rem] h-[4rem] w-[4rem] 
      relative mt-2 mb-2 mx-auto shadow-lg hover:rounded-2xl transition-all ease-in-out duration-200 cursor-pointer'/>
    </CustomTooltip>
    <SideBarIcon icon={<FaPlus size='40' />} title="Add a Server" />
    <SideBarIcon icon={<IoNavigateCircle size='40' />} title="Explore Discoverable Servers" />
    </div>
   
    </div>   
    
    
     </>




 


  )
}

export default Sidebar
