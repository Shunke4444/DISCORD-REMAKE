import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoNavigateCircle } from "react-icons/io5";
import dcGroup from './assets/Wiki.webp'

import userPfp from './assets/userpfp.jpg'


const GroupIcons = ({icon}) => {
  return (
    <div className='group-icon'>
        {/* <img src= {userPfp} alt="" />
        <img src= {dcGroup} /> */}
        < FaPlus className='' />
        <IoNavigateCircle className=''/>
    </div>
  )
}

export default GroupIcons