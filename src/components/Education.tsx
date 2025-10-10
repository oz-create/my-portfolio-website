

export default function Education() {
  return (
        <div id='education' className='flex flex-col w-full max-w-[70rem] items-center justify-center gap-10 lg:mt-20 z-1 px-10'>
            <h1 className='text-white text-4xl text-left font-bold'>Education</h1>
            <div className='flex flex-col gap-5 relative w-full'>
              <div className='border border-[#311565] rounded-2xl p-4 lg:mr-70 w-full lg:w-auto'>
                <h1 className='text-white text-lg'><b>Anadolu University</b> - Computer Programming</h1>
                <h2 className='text-white text-base'>Associate Degree (2025 - 2027)</h2>
              </div>
              <div className='border border-[#311565] rounded-2xl p-4 lg:ml-70 w-full lg:w-auto'>
                <h1 className='text-white text-lg'><b>Dokuz Eylül University</b> - City and Region Planning</h1>
                <h2 className='text-white text-base'>Bachelor’s Degree (2016 - 2020)</h2>
              </div>
              <img src="/education-render.png" className='w-[12rem] absolute right-10 top-[-3rem] lg:block hidden' alt="education" />
              <img src="/education-render-2.png" className='w-[15rem] absolute left-2 top-25 lg:block hidden' alt="education" />
            </div>
        </div>
  )
}
