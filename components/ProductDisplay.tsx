const ProductDisplay = () => {
  return (
    <section className='common-padding-xy'>
      <div className="flex flex-col gap-5 xl:gap-7 w-full screen-max-width">
        {/* First Sec */}
        <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
          {/* 1/2 */}
          <div className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[288px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
            <div className='absolute'>
              <img src="/images/story_behind_collection.jpg" alt="story behind collections" className='w-full h-full xl:h-[686px] object-cover' />
            </div>
            <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
              {/* Blur effect using a pseudo-element */}
              <div className='absolute inset-0 bg-black/50 blur-md'></div>
              <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                </div>
                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                  <span className='font-medium text-[12px] md:text-[1rem]'>The stroy behind the collection</span>
                  <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>A little help from BÄSINGEN </h2>
                </div>
              </div>
            </div>
          </div>
          {/* 2/2 */}
          <div className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[288px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
            <div className='absolute'>
              <img src="/images/tommorow_collectables.webp" alt="story behind collections" className='w-full h-[480px] xl:h-[686px] object-cover' />
            </div>
            <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
              {/* Blur effect using a pseudo-element */}
              <div className='absolute inset-0 bg-black/50 blur-md'></div>
              <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                </div>
                <div id="hero-text" className="flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                  <span className='font-medium text-[12px] md:text-[1rem]'>Tomorrow's collectables today</span>
                  <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>The STOCKHOLM 2025 collection </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Sec */}
        <div className="w-full flex flex-col md:flex-row gap-5 xl:gap-7">
          {/* 1/2 */}
          <div className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[288px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
            <div className='absolute'>
              <img src="/images/bathroom.webp" alt="story behind collections" className='w-full h-full xl:h-[686px] object-cover' />
            </div>
            <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
              {/* Blur effect using a pseudo-element */}
              <div className='absolute inset-0 bg-black/50 blur-md'></div>
              <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                </div>
                <div id="hero-text" className="xl:w-[550px] flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                  <span className='font-medium text-[12px] md:text-[1rem]'>Big on style and storage</span>
                  <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>A bathroom soaked in glamour </h2>
                </div>
              </div>
            </div>
          </div>
          {/* 2/2 */}
          <div className='w-full md:w-1/2 relative rounded-[.5rem] overflow-hidden group cursor-pointer h-[288px] md:h-[348px] lg:h-[476px] xl:h-[686px]'>
            <div className='absolute'>
              <img src="/images/natural_beauty_sweden.avif" alt="story behind collections" className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-0 right-0 left-0 h-[100px] md:h-[170px] flex lg:px-3 text-white'>
              {/* Blur effect using a pseudo-element */}
              <div className='absolute inset-0 bg-black/50 blur-md'></div>
              <div className='absolute bottom-0 opacity-[190%] cursor-pointer z-[1000] flex items-center pb-2'>
                <div id="hero-arrow" className="mt-2 translate-x-[-5rem] group-hover:px-2 group-hover:translate-0 transition-all duration-400 ease-in-out">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="svelte-mkzi11 left rotate-[180deg]"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"></path></svg>
                </div>
                <div id="hero-text" className="xl:w-[550px] flex flex-col justify-start gap-1 xl:gap-2 pb-1 lg:pb-2 transition-all duration-400 ease-out translate-x-[-2.5rem] xl:translate-x-[-2rem] group-hover:translate-0">
                  <span className='font-medium text-[12px] md:text-[1rem]'>Handmade rugs</span>
                  <h2 className='text-[20px] md:text-[25px] xl:text-[36px] font-bold sm:-mt-1 lg:-mt-2 leading-7 xl:leading-11'>The natural beauty of Sweden at your feet </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDisplay
