import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
    
  return (
    <div className="" id="container">
        <nav className='flex justify-between p-[3rem] px-[4rem]'>
            <div id="left-side">
                <img src={logo} alt="logo"/>
            </div>

            <div className={`flex-row items-center hidden lg:flex`} id="right-side">
                <ul>
                    <li className='flex flex-row space-x-10 text-verydarkb font-bold
                    tracking-wide text-[1.3rem]'>
                        <a href="#" className='hover:underline duration-150'>PRODUCT</a>
                        <a href="#" className='hover:underline duration-150'>FEATURES</a>
                        <a href="#" className='hover:underline duration-150'>PRICING</a>
                        <a href="#" className='font-bold relative top-[-.2rem] pointer-events-none
                        text-grayishb'>
                            .
                        </a>
                        <a href="#" className='text-grayishb hover:underline duration-150'>LOGIN</a>
                    </li>
                </ul>
            </div>

            <div className={`flex items-center lg:hidden`} id="menu-close">
                <button 
                className={`lg:hidden ${menuClicked ? 'hidden' : 'block'} duration-300`}
                onClick={() => setMenuClicked(true)}>
                    <img src={menu} alt="menu" className='w-[1.5rem]'/>
                </button>

                <button 
                className={`lg:hidden ${menuClicked ? 'block' : 'hidden'} duration-300`}
                onClick={() => setMenuClicked(false)}>
                    <img src={close} alt="close" className='w-[1.5rem]'/>
                </button>
            </div>
        </nav>

        <div className='relative w-[23rem] m-auto' id='navigation-container'>
        <div className={`${menuClicked ? 'opacity-100 h-[16rem] md:h-[18rem]' : 'opacity-0 pointer-events-none h-[2rem]'} 
        shadow-xl rounded-lg w-[23rem] m-auto duration-500 border-solid border-[#e7e7e7] border-[1px]
        lg:hidden bg-white absolute md:w-[26rem]`}
        id="navigation-menu">
            <ul className='p-[2rem]'>
                <li className='flex flex-col items-center justify-center text-verydarkb
                font-bold space-y-5 text-[1.3rem]'>
                    <a href="" className='hover:underline duration-150'>PRODUCT</a>
                    <a href="" className='hover:underline duration-150'>FEATURES</a>
                    <a href="" className='hover:underline duration-150'>PRICING</a>
                    <a href="" className='text-grayishb border-t-solid border-t-[1px] border-t-[#d8d7d7]
                    w-[18rem] m-auto flex justify-center pt-5 hover:underline'>
                        LOGIN
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
