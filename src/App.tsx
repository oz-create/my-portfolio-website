import './App.css'
import Aurora from './components/Aurora'
import BubbleMenu from './components/BubbleMenu';
import GooeyNav from './components/GooeyNav';
import ProfileCard from './components/ProfileCard';
import Ribbons from './components/Ribbons';
import SplashCursor from './components/SplashCursor'
import SplitText from './components/SplitText'
import StarBorder from './components/StarBorder';
import TextType from './components/TextType';
import logo from '/logo-oz.png'

function App() {
  const items = [
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'experience',
    href: '#experience',
    ariaLabel: 'Experience',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];


  return (
    <div className='relative w-full overflow-x-hidden'>
    {/* <SplashCursor /> */}

    <div className='w-full h-screen fixed top-0'>
      <Aurora 
        colorStops={["#7CFF67", "#B19EFF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
    
 
 
     
    <BubbleMenu
      logo={<img src="/logo-oz.png" alt="Logo" className="w-30 h-30 object-contain" />}
      items={items}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={false}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
    <div className='w-full flex flex-col justify-center items-center gap-20' style={{paddingTop: '8rem', paddingBottom: '4rem'}}>
      <div className='flex flex-col justify-center items-center gap-5'>
         <SplitText
            text="Hello, I'm Özlem Engin Sağır!"
            className="text-5xl font-semibold text-center text-white leading-15"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-500px"
            textAlign="center"
          />
          <TextType 
              text={["<I'm a Frontend Developer./>","<Nice to meet you!/>"]}
              className="text-4xl font-semibold text-center text-white z-1"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
      </div>
     
    <div className='flex items-center justify-center w-full max-w-[70rem] gap-20 mt-50 relative'>
      {/* <img src="/avatar.png" className='min-w-[20rem] w-[20rem] h-[20rem] rounded-full object-cover object-center relative z-1' alt="" /> */}
      <ProfileCard
        name=""
        title=""
        handle="ozlem-engin"
        status=""
        contactText="Contact Me"
        avatarUrl="/avatar2.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        iconUrl='/iconpattern.png'
        grainUrl='/grain.webp'
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
        color="#5227FF"
        speed="5s"
        href="/Ozlem_Engin_Sagir_Dev_CV.pdf"
        download={true}
      >
      Download Resume
      </StarBorder>
      </div>
      
    </div>
      <div id='experience' className='flex flex-col items-center justify-center gap-5 pt-20 z-1'>
        <h1 className='text-white text-4xl text-left'>Work Experiences</h1>
        <div>
          <StarBorder
              as="div"
              className="custom-class flex flex-col items-center justify-start"
              color="#5227FF"
              speed="5s"
            >
            <h1 className='text-white text-lg font-bold text-left'>Adcropper, Istanbul/Remote  - January 2022 – September 2025</h1>
            <h2 className='text-white text-lg text-left'>Frontend Developer</h2>
            <hr className='h-3.5'/>
            <div className="flex flex-col gap-3">
              <p className='text-white text-base text-left'>
              <b>Web Applications:</b> <br />
              Actively contributed to the frontend development of various web applications and developed modern,
              user-friendly interfaces. 
            </p>
            <p className='text-white text-base text-left'>
              <b>Landing Pages:</b> <br />
               I develop pixel-perfect, animated landing pages that are browser-friendly and suitable for responsive design.  
            </p>
             <p className='text-white text-base text-left'>
              <b>Responsive Design:</b> <br />
              Designed and implemented high-performance, responsive designs compatible with both mobile and desktop devices, ensuring seamless user experiences across all screen sizes.  
            </p>
            <p className='text-white text-base text-left'>
              <b>SEO Optimization:</b> <br />
                Applied SEO best practices to web applications, including the proper use of meta tags, semantic HTML, optimized image sizes, and clean URL structures, enhancing site visibility and search engine rankings. 
            </p>
            <p className='text-white text-base text-left'>
              <b> Performance Optimization:</b> <br />
                Optimized frontend performance by implementing techniques such as lazy loading, image compression, code splitting, and minification of CSS/JavaScript files, resulting in faster loading times and a more responsive user experience.
            </p>
            <p className='text-white text-base text-left'>
              <b>Email Development:</b> <br />
                 Coded professional email templates that are fully compatible with all major browsers, ensuring that the design and functionality remain consistent across different platforms and devices.
            </p>
            <p className='text-white text-base text-left'>
              <b>JavaScript Debugging:</b> <br />
                  Performed bug fixing and optimized the performance of JavaScript-based applications, resolving issues and enhancing the efficiency of client-side interactions.
            </p>
            <p className='text-white text-base text-left'>
              <b>Digital Advertising Banners:</b> <br />
                 Designed and developed digital advertising banners tailored to various platforms and campaigns, ensuring they were optimized for both visual appeal and fast loading times, contributing to increased ad performance and engagement.
            </p>
            </div>
            
            </StarBorder>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default App
