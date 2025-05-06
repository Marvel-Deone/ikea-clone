import React from 'react'

const CelebratingHandcraft = () => {
    return (
        <section className='common-spacing mb-2'>
        <a href='https://www.ikea.com/global/en/stories/ideas-inspiration/spring-painterly-patterns-bedroom-style-report-250305/' target='_blank' className="flex flex-col md:flex-row gap-[1.35rem] md:gap-5 xl:gap-20 w-full screen-max-width relative overflow-hidden bg-[#e08db6] h-[409px] md:h-[399px] lg:h-[532px] xl:h-[720px] px-10 md:px-0 py-[5rem] md:py-[2rem] md:rounded-[.5rem] cursor-pointer group">
            {/* <div className="flex gap-10"> */}
                <div className='w-full md:w-[32%] xl:w-[26%] opacity-[190%] cursor-pointer md:flex justify-center items-center'>
                    <div id="hero-arrow" className="mt-[-5rem] translate-x-[-6rem] group-hover:px-2 group-hover:pl-[3rem] group-hover:translate-0 transition-all duration-400 ease-in-out">
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                    </div>
                    <div id="hero-text" className="xl:w-[550px] flex flex-col justify-center gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out xl:translate-x-[1rem] group-hover:translate-0">
                        <span className='font-medium text-[12px] md:text-[1rem]'>The MÄVINN collection</span>
                        <h2 className='text-[25px] md:text-[28px] lg:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 lg:leading-10 xl:leading-11'>Celebrating handcraft and creating jobs </h2>
                    </div>
                </div>
                <div className="w-full md:w-[72%] xl:w-[78%] flex-1 flex justify-end items-center pb-20 md:pr-10 xl:pr-14 md:py-24 md:mt-[5rem] lg:mt-[4rem]">
                    <img src="/images/celebrating_handcraft.webp" alt="story behind collections" className='w-full h-[212px] md:h-[291px] lg:h-[471px] xl:h-[540px] rounded-[.5rem] mb-20' />
                </div>
        </a>
    </section>
        // <section className='common-padding-y'>
        //     <a href='https://www.ikea.com/global/en/stories/design/mavinn-collection-handcraft-social-enterprises-240822/' target='_blank' className="flex flex-col md:flex-row gap-[1.35rem] md:gap-5 xl:gap-20 w-full screen-max-width relative overflow-hidden bg-[#e08db6] h-[409px] md:h-[399px] lg:h-[644px] xl:h-[720px] py-[5rem] md:py-[5.5rem] md:rounded-[.5rem] cursor-pointer group">
        //         {/* <div className="flex gap-10"> */}
        //         <div className='w-full md:w-[32%] xl:w-[26%] opacity-[190%] cursor-pointer md:flex justify-center items-center'>
        //             <div id="hero-arrow" className="mt-[-5rem] translate-x-[-6rem] group-hover:px-2 group-hover:pl-[3rem] group-hover:translate-0 transition-all duration-400 ease-in-out">
        //                 <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
        //             </div>
        //             <div id="hero-text" className="xl:w-[550px] flex flex-col justify-center gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out xl:translate-x-[1rem] group-hover:translate-0">
        //                 <span className='font-medium text-[12px] md:text-[1rem]'>The MÄVINN collection</span>
        //                 <h2 className='text-[25px] md:text-[30px] lg:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 md:leading-8 lg:leading-10 xl:leading-11'>Celebrating handcraft and creating jobs </h2>
        //             </div>
        //         </div>
        //         <div className="w-full flex-1 flex items-center md:pr-12 xl:pr-14 md:py-24 md:mt-[3rem] lg:mt-[4rem] ">
        //             <img src="/images/celebrating_handcraft.webp" alt="story behind collections" className='h-[212px] md:h-[291px] lg:h-[471] xl:h-[540px] w-full rounded-[.5rem] mb-14' />
        //         </div>
        //     </a>
        // </section>
    )
}

export default CelebratingHandcraft
