'use client'

import { useEffect, useRef, useState } from 'react'

const BustingSleep = () => {
    // Store video refs for multiple videos
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    // State to track each video's playing state (using index for multiple videos)
    const [isPlaying, setIsPlaying] = useState<boolean[]>([]);

    // Initialize the state for all videos (true for autoplay by default)
    const initializeVideoStates = () => {
        if (videoRefs.current.length > 0) {
            setIsPlaying(videoRefs.current.map(() => true));  // Set videos to play initially
        }
    };

    const toggleVideoPlayback = (index: number) => {
        if (!videoRefs.current[index]) return;

        const newIsPlaying = [...isPlaying];
        if (newIsPlaying[index]) {
            videoRefs.current[index]?.pause();  // Pause the video
        } else {
            videoRefs.current[index]?.play();  // Play the video
        }

        newIsPlaying[index] = !newIsPlaying[index];  // Toggle the playing state
        setIsPlaying(newIsPlaying);
    };

    // This will run once on mount to initialize video states
    useEffect(() => {
        initializeVideoStates();

        // Auto-play the videos after initialization
        videoRefs.current.forEach((video, index) => {
            if (video) {
                video.play();
            }
        });

    }, []);

    return (
        <section className='common-padding-xy'>
            <div className="flex flex-col gap-5 xl:gap-7 w-full screen-max-width">
                {/* First Sec */}
                <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
                    {/* 1/2 */}
                    <a href='https://www.ikea.com/global/en/stories/design/mattress-myths-250212/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <video
                            playsInline
                            muted
                            autoPlay
                            loop
                            preload="none"
                            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover block rounded-[.5rem]" ref={(el) => { videoRefs.current[0] = el; }}
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <source src="/videos/myths_about_mattress.mp4" type="video/mp4" />
                        </video>

                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            {/* Arrow */}
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                {/* Title */}
                                <div className="flex justify-start lg:gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out pr-4 lg:pr-7">
                                    <div className="w-full flex flex-col translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0 transition-all duration-400 ease-out">
                                        <span className='font-medium text-[12px] md:text-[1rem]'>Sweet dreams</span>
                                        <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11'>Busting the myths about mattresses </h2>
                                    </div>
                                    {/* Play/Pause btn */}
                                    <button onClick={() => toggleVideoPlayback(0)} className="w-[38px] lg:w-[40px] h-[38px] lg:h-[40px] p-7 lg:p-7 flex items-center justify-center bg-black text-white text-[20px] rounded-full ml-2 cursor-pointer lg:mt-2 hover:bg-black/85 transition-all ease-in duration-200 md:translate-y-[1rem] xl:translate-y-[2rem]">
                                        {isPlaying[0] ?
                                            <div className="button-text svelte-qxztj4">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0H4V14H0V0Z" fill="currentColor"></path><path d="M8 0H12V14H8V0Z" fill="currentColor"></path></svg> <span className="sr-only">Pause video</span>
                                            </div> :
                                            <div className="button-text svelte-qxztj4"><svg className="play-button svelte-qxztj4" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 7L0 14L6.1196e-07 0L12 7Z" fill="currentColor"></path></svg> <span className="sr-only">Play video</span></div>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* 2/2 */}
                    <div className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <div className='absolute'>
                            <img src="/images/sleep_uncovered.webp" alt="story behind collections" className='w-full h-[480px] xl:h-[686px] object-cover' />
                        </div>
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>IKEA Sleep Report 2025</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11'>Sleep uncovered! </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second sec */}
                <a href='https://www.ikea.com/global/en/stories/life-at-home/ikea-sleep-report-2025-250210/' target='_blank' className='w-full relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                    <div className='absolute'>
                        <img src="/images/nytilverkad_collection.avif" alt="story behind collections" className='w-full h-[393px] md:h-full object-cover' />
                    </div>
                    <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                        {/* Blur effect using a pseudo-element */}
                        <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                        <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                            <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                            </div>
                            <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem]  lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                <span className='font-medium text-[12px] md:text-[1rem]'>More news from the IKEA archives!</span>
                                <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>Nytillverkad collection </h2>
                            </div>
                        </div>
                    </div>
                </a>
                {/* Third Sec */}
                <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
                    {/* 1/2 */}
                    <a href='https://www.ikea.com/global/en/stories/ikea-around-the-world/co-workers-20-plus-club-250127/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <video
                            playsInline
                            muted
                            autoPlay
                            loop
                            preload="none"
                            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover block rounded-[.5rem]" ref={(el) => { videoRefs.current[1] = el; }}
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <source src="/videos/years_ikea_counting.mp4" type="video/mp4" />
                        </video>

                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2 w-full'>
                                {/* Arrow */}
                                <span id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </span>
                                {/* Title */}
                                <div className="w-full  flex justify-start lg:gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out pr-4 lg:pr-7">
                                    <div className="w-full flex flex-col translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0 transition-all duration-400 ease-out">
                                        <span className='font-medium text-[12px] md:text-[1rem]'>Meet our co-workers</span>
                                        <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11 max-w-[16ch]'>20+ years at IKEA and counting </h2>
                                    </div>
                                    {/* Play/Pause btn */}
                                    <button onClick={() => toggleVideoPlayback(1)} className="w-[38px] lg:w-[40px] h-[38px] lg:h-[40px] p-7 lg:p-7 flex items-center justify-center bg-white text-black text-[20px] rounded-full ml-2 cursor-pointer lg:mt-2 hover:bg-white/85 transition-all ease-in duration-200 md:translate-y-[1rem] xl:translate-y-[2rem]">
                                        {isPlaying[1] ?
                                            <div className="button-text svelte-qxztj4">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0H4V14H0V0Z" fill="currentColor"></path><path d="M8 0H12V14H8V0Z" fill="currentColor"></path></svg> <span className="sr-only">Pause video</span>
                                            </div> :
                                            <div className="button-text svelte-qxztj4"><svg className="play-button svelte-qxztj4" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 7L0 14L6.1196e-07 0L12 7Z" fill="currentColor"></path></svg> <span className="sr-only">Play video</span></div>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* 2/2 */}
                    <a href='https://www.ikea.com/global/en/stories/our-roots/1965-time-capsule-250117/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <img
                            src="/images/peek_at_home.avif"
                            alt="story behind collections"
                            className="absolute inset-0 w-full h-full object-cover object-top scale-[1.2]"
                        />

                        {/* Text Overlay */}
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>Time capsule</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11 max-w-[20ch]'>
                                        A peek at home furnishing in 1965
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Fourth sec */}
                <a href='https://www.ikea.com/global/en/stories/ideas-inspiration/shared-toddler-bedroom-for-sleep-play-241119/' target='_blank' className='w-full relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                    <div className='absolute'>
                        <img src="/images/toddler_room.webp" alt="story behind collections" className='w-full h-[393px] md:h-full object-cover' />
                    </div>
                    <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                        {/* Blur effect using a pseudo-element */}
                        <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                        <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                            <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                            </div>
                            <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem]  lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                <span className='font-medium text-[12px] md:text-[1rem]'>Plenty of space for fun and rest</span>
                                <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>A toddler room for two </h2>
                            </div>
                        </div>
                    </div>
                </a>
                {/* Fifth Sec */}
                <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
                    {/* 1/2 */}
                    <a href='https://www.ikea.com/global/en/stories/design/ikea-home-smart-for-better-sleep-241210/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <img
                            src="/images/improve_sleep_space.avif"
                            alt="story behind collections"
                            className="absolute inset-0 w-full h-full object-cover object-top scale-[1.2]"
                        />

                        {/* Text Overlay */}
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>IKEA Home smart</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11 max-w-[25ch]'>
                                        Improve your sleep space with the touch of a button
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* 2/2 */}
                    <a href='https://www.ikea.com/global/en/stories/ikea-around-the-world/yearbook-2024-241223/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px] bg-[#ebebeb]'>
                        <img
                            src="/images/Yearbook_Poster_Desktop.avif"
                            alt="story behind collections"
                            className="absolute inset-0 w-full h-full object-cover object-top scale-[1.2]"
                        />

                        {/* Text Overlay */}
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-[#111111]'>
                            {/* <div className='absolute inset-0 bg-black/60 blur-2xl'></div> */}
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>The 2024 IKEA Yearbook</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[51px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11 max-w-[20ch]'>
                                        What a year!
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Sixth Sec */}
                <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
                    {/* 1/2 */}
                    <a href='https://www.ikea.com/global/en/stories/design/glamberget-series-241204/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <div className='absolute w-full'>
                            <img src="/images/smart_simple_pieces.avif" alt="story behind collections" className='w-full h-full xl:h-[686px] object-cover' />
                        </div>
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/50 blur-md'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="xl:w-[550px] flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>The GLAMBERGET series</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11 max-w-[24ch]'>Smart, simple pieces in pine </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* 2/2 */}
                    <a href='https://www.ikea.com/global/en/stories/design/skogsduva-collection-childrens-toys-240923/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <div className='absolute h-full'>
                            <img src="/images/swedish_forest.webp" alt="story behind collections" className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/50 blur-md'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="xl:w-[550px] flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>The SKOGSDUVA collection</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11 max-w-[20ch]'>A Swedish forest adventure! </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Seventh sec */}
                <a href='https://www.ikea.com/global/en/stories/ideas-inspiration/style-swap-241127/' target='_blank' className='w-full relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                    <div className='absolute'>
                        <img src="/images/one_bedroom.webp" alt="story behind collections" className='w-full h-[393px] md:h-full object-cover' />
                    </div>
                    <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                        {/* Blur effect using a pseudo-element */}
                        <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                        <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                            <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                            </div>
                            <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem]  lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                <span className='font-medium text-[12px] md:text-[1rem]'>Swap the style</span>
                                <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>One bedroom, two very different looks </h2>
                            </div>
                        </div>
                    </div>
                </a>
                {/* eighth Sec */}
                <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
                    {/* 1/2 */}
                    <a href='https://www.ikea.com/global/en/stories/sustainability/cotton-bedlinen-journey-and-quiz-241106/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <div className='absolute w-full'>
                            <img src="/images/fantastic_texile.avif" alt="story behind collections" className='w-full h-full xl:h-[686px] object-cover' />
                        </div>
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            {/* Blur effect using a pseudo-element */}
                            <div className='absolute inset-0 bg-black/50 blur-md'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="xl:w-[550px] flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>Cotton at IKEA</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11 max-w-[24ch]'>How we work with this fantastic textile </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* 2/2 */}
                    <a href='https://www.ikea.com/global/en/stories/ideas-inspiration/rustic-yellow-and-red-style-report-241113/' target='_blank' className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[393px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
                        <img
                            src="/images/snug_rustic.avif"
                            alt="story behind collections"
                            className="absolute inset-0 w-full h-full object-cover object-top scale-[1.2]"
                        />

                        {/* Text Overlay */}
                        <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
                            <div className='absolute inset-0 bg-black/60 blur-2xl'></div>
                            <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                                </div>
                                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2rem] lg:translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                                    <span className='font-medium text-[12px] md:text-[1rem]'>Style report</span>
                                    <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-8 xl:leading-11 max-w-[20ch]'>
                                        Snug and rustic
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BustingSleep
