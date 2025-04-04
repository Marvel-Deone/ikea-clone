'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero-text', { duration: 6, delay: 3, ease: 'power1.out' });
    }, []);


    return (
        <section className='common-padding-x'>
            <div className='flex flex-col md:flex-row sm:gap-5 lg:gap-7 w-full screen-max-width'>
                <div className='w-full relative sm:w-[65%] lg:w-[65%] h-[458px] lg:h-[840px] rounded-[.5rem] overflow-hidden group cursor-pointer'>
                    <div className='absolute'>
                        <img src="/images/hero_1.webp" alt="hero" className='w-full h-full object-cover' />
                    </div>
                    <div className='absolute bottom-0 right-0 left-0 h-[170px] flex lg:px-3 text-white'>
                        {/* Blur effect using a pseudo-element */}
                        <div className='absolute inset-0 bg-black/50 blur-md'></div>
                        <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                            <div id="hero-arrow" className="mt-2 translate-x-[-5rem]  group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                            </div>
                            <div id="hero-text" className="flex flex-col justify-start pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] group-hover:translate-0">
                                <span className='font-medium text-[1rem]'>The IKEA Life at Home Report 2024</span>
                                <h1 className='sm:text-[25px] lg:text-[51px] font-bold sm:-mt-1 lg:-mt-2'>Bringing joy home</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-[38%] lg:w-[32%] bg-[#ffdb00] rounded-[.5rem] lg:pt-[4.6rem] flex flex-col justify-center h-[458px] lg:h-[840px] cursor-pointer'>
                    <div className="flex flex-col justify-between h-full">
                        <a href='https://www.ikea.pr/puertorico/es/' target='_blank' className='flex justify-between items-center outline-0 font-bold sm:py-[10rem] lg:py-[17rem] sm:px-[1.2rem] lg:px-[3.2rem]'>
                            <span className='sm:text-[25px] lg:text-[36px]'>Go shopping</span>
                            <span className="sm:w-[38px] lg:w-[40px] sm:h-[38px] lg:h-[40px] flex items-center justify-center bg-black text-white text-[20px] rounded-full ml-2 cursor-pointer lg:mt-2 hover:bg-black/85 transition-all ease-in duration-200">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 right rotate-180"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                            </span>
                        </a>
                        <button className='flex items-center border-t-[.0625rem] border-[#fffefb] rounded-b-[.5rem] min-h-[6.25rem] cursor-pointer hover:bg-white/60 transition-all ease-in duration-200'>
                            <div className='sm:px-[1.2rem] lg:px-[3.2rem] w-full flex justify-between items-center'>
                                <span>
                                    Store: <span className="font-bold">IKEA.pr</span> <span>(es)</span>
                                </span>
                                <span className="chevron svelte-w1on6e"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svelte-1qa1uiw use-transition up rotate-180"><path fillRule="evenodd" clipRule="evenodd" d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z" fill="currentColor"></path></svg></span>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
