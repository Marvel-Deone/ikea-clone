import { navLists } from '@/constants'
import React from 'react'

const Navbar = () => {
    return (
        <header className='w-full bg-white py-4 sm:py-[28px] lg:py-[23px] px-4 sm:px-8 md:px-4 lg:px-6 flex justify-between items-center'>
            <nav className='flex gap-4 w-full screen-max-width'>
                <img src="/images/ikea.svg" alt="Ikea" width={88.64} height={36} />

                <div className='hidden lg:flex flex-1 max-sm:hidden mt-4'>
                    {navLists.map((nav) => (
                        <div key={nav} className='px-5 text-sm cursor-pointer text-[#111111] text-[16px] hover:text-black hover:font-bold transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className="flex w-full lg:hidden justify-end items-center">
                    <i className="fa-solid fa-bars text-[18px] "></i>
                </div>

                <button className="relative hidden lg:flex items-center bg-[#ffdb00] text-[#111111] pr-[.6rem] pl-[.85rem] py-[.4rem] outline-0 opacity-0 rounded-[8px] shadow-md cursor-pointer transition">
                    <span className='flex items-center gap-5 pr-4'>
                        <span>
                            Go shopping: <span className="font-bold">IKEA.pr</span> <span>(es)</span>
                        </span>
                        <svg
                            width="12"
                            height="6.75"
                            viewBox="0 0 16 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="ml-1 hover:mt-2 transition-all ease-in duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>

                    {/* Divider and Arrow */}
                    <span className="relative flex items-center ml-3"> {/* Added ml-3 for spacing */}
                        <span className="before:content-[''] before:w-[1px] before:h-14 before:bg-white before:-top-3 before:absolute before:-left-2"></span>
                        <span className="w-[35px] h-[35px] flex items-center justify-center bg-black text-white text-[20px] rounded-full ml-2">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 right rotate-180"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                        </span>
                    </span>
                </button>
            </nav>
        </header>
    )
}

export default Navbar
