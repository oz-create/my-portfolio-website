import GlassIcons from './GlassIcons'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaSass } from 'react-icons/fa';
import { SiJavascript, SiMui, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';

export default function Skills() {
    const icons = [
      { icon: <FaHtml5 className='text-3xl'/>, color: '#311565', label: 'HTML5' },
      { icon: <FaCss3Alt className='text-3xl' />, color: '#311565', label: 'CSS3' },
      { icon: <SiJavascript className='text-3xl' />, color: '#311565', label: 'JavaScript' },
      { icon: <SiTypescript className='text-3xl' />, color: '#311565', label: 'TypeScript' },
      { icon: <SiReact className='text-3xl' />, color: '#311565', label: 'React.js' },
      { icon: <TbBrandNextjs className='text-3xl' />, color: '#311565', label: 'Next.js' },
      { icon: <RiTailwindCssFill className='text-3xl' />, color: '#311565', label: 'TailwindCSS' },
      { icon: <FaBootstrap className='text-3xl' />, color: '#311565', label: 'Bootstrap' },
      { icon: <FaSass className='text-3xl' />, color: '#311565', label: 'Sass/Scss' },
      { icon: <SiMui className='text-3xl' />, color: '#311565', label: 'Material UI' },
    ];
  return (
    <div className='h-auto relative flex flex-col justify-center items-center' >
        <h1 className='text-white text-2xl'>The skills, tools and technologies I am really good at:</h1>
        <GlassIcons items={icons} className="custom-class text-white"/>
        <img src="/tech-bg.png" alt="" />
      </div>
  )
}
