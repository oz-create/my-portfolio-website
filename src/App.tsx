import './App.css'
import Aurora from './components/Aurora'
import BubbleMenu from './components/BubbleMenu';
import SplashCursor from './components/SplashCursor'
import SplitText from './components/SplitText'
import TextType from './components/TextType';

function App() {
  const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

  return (
    <div className='relative h-screen overflow-y-auto'>
    <SplashCursor />
    <div className='w-full h-full fixed top-0'>
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
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
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
        className="text-4xl font-semibold text-center text-white"
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
     
    </div>
  )
}

export default App
