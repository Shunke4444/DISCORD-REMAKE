import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            onClick={() => setIsOpen(prev => !prev)}
            className='text-sm bg-buttonBg px-5 py-1 rounded-3xl active:bg-buttonBgClicked transition ease-in-out delay-75 flex items-center justify-center'
        >
            v2.14
            {isOpen ? (
                <IoIosArrowForward className='h-8'/>
            ) : (
                <IoIosArrowDown className='h-8'/>
            )}

        </button>
    );
}
export default Dropdown;

