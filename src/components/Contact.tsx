import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import DotGrid from './DotGrid'

export default function Contact() {
  return (
    <div id='contact' className='mt-20 z-1 w-full h-[30rem] relative flex items-center justify-center'>
        <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={150}
            shockRadius={200}
            shockStrength={5}
            resistance={1050}
            returnDuration={1.5}
            className='absolute top-0'
        />
        <div className='absolute flex items-center justify-center gap-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-white text-4xl text-left font-bold'>Contact Me!</h1>
                <div className='flex items-center justify-center gap-15 mt-20'>
                    <a href="https://github.com/oz-create" className='cursor-pointer' target="_blank" rel="noreferrer">
                        <FaGithub className='text-6xl text-white hover:scale-120 transition-all duration-500'/>
                    </a>
                    <a href="https://www.linkedin.com/in/ozlem-engin" className='cursor-pointer' target="_blank" rel="noreferrer">
                        <FaLinkedin className='text-6xl text-white hover:scale-120 transition-all duration-500'/>
                    </a>
                    <a href="mailto:ozlemengin4542@gmail.com" className='cursor-pointer' target="_blank" rel="noreferrer">
                        <IoIosMail className='text-7xl text-white hover:scale-120 transition-all duration-500'/>
                    </a>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}
