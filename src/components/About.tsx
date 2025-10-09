import React from 'react'
import ProfileCard from './ProfileCard'
import StarBorder from './StarBorder'

export default function About() {
  return (
    <div className='flex items-center justify-center w-full max-w-[70rem] gap-20 mt-50 relative'>
      <ProfileCard
        name=""
        title="Frontend Developer"
        handle="ozlem-engin"
        status=""
        contactText="Contact Me"
        avatarUrl="/avatar.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        iconUrl='/iconpattern.png'
        grainUrl='/grain.webp'
        behindGradient='linear-gradient(135deg, #4D7DFE, #7C5DA0,#311565)'
        onContactClick={() => window.open('https://www.linkedin.com/in/ozlem-engin', '_blank')}
      />
      <div className="flex flex-col justify-center items-start gap-10">
        <p className='text-white text-xl'> I am an experienced Frontend Developer about 4 years of expertise in creating responsive and user
      friendly web applications. I specialize in HTML, CSS, JavaScript, React.js and Next.js have a proven
      track record of delivering high-quality projects on time. I excel at collaborating with cross-functional
      teams to design and implement innovative solutions that enhance user experience.</p>
      <StarBorder
        as="a"
        className="custom-class cursor-pointer hover:brightness-200 transition-all duration-500"
        color="#4D7DFE"
        speed="3s"
        href="/Ozlem_Engin_Sagir_Dev_CV.pdf"
        download={true}
        thickness={3}
      >
      Download Resume
      </StarBorder>
      </div>
    
    </div>
  )
}
