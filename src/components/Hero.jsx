import React from 'react';
import bg from '../assets/illustration-devices.svg';

export const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse md:pt-[5rem]' id="hero-container">
        <div className='w-[30rem] m-auto md:w-[35rem]' id="right-side-hero">
            <img src={bg} alt="bg"/>
        </div>

        <div className='flex flex-col space-y-3 p-[4.3rem] w-[30rem] md:w-[35rem] m-auto' id="left-side-hero">
            <div className='flex flex-row space-x-4' id="header-container">
                <div id="button-icon" className='pointer-events-none h-[1.5rem] rounded-full text-white
                font-bold bg-verydarkb w-[3rem] flex justify-center items-center xl:h-[2.3rem] xl:w-[3.8rem]'>
                    NEW
                </div>

                <div className='flex items-center' id="button-right-text">
                    <h4 className='text-grayishb tracking-[.4rem] font-medium text-[.9rem] xl:text-[1.1rem]'>
                        MONOGRAPH DASHBOARD
                    </h4>
                </div>
            </div>

            <div className='flex flex-col' id="text-container">
                <h1 className='text-verydarkb font-bold text-[2.9rem] pb-2 xl:text-[3.3rem]'>
                    POWERFUL INSIGHTS INTO YOUR TEAM
                </h1>

                <p className='w-[17rem] text-[1.1rem] text-verydarkb font-sans pb-5 xl:text-[1.3rem]
                xl:w-[20rem] xl:pb-10'>
                    Project planning and time tracking for agile teams
                </p>
            </div>

            <div className='flex flex-row space-x-6' id="buttom-text-container">
                <div className='flex items-center' id="schedule-button">
                    <button className='bg-orange-700 rounded-md text-white w-[10.5rem] h-[2.4rem]
                    font-medium tracking-wide hover:opacity-70 duration-200 xl:text-[1.05rem]'>
                        SCHEDULE A DEMO
                    </button>
                </div>

                <div className='flex items-center' id="schedule-text">
                    <button className='tracking-[.2rem] text-grayishb text-sm font-medium xl:tracking-[.5rem]
                    xl:text-md'>
                        TO SEE A PREVIEW
                    </button>
                </div>
            </div>
        </div>

        <div id="right-side-hero">

        </div>
    </div>
  )
}