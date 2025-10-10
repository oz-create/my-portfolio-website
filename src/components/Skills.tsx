import GlassIcons from './GlassIcons'
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaSass } from 'react-icons/fa';
import { SiJavascript, SiMui, SiReact, SiTypescript } from 'react-icons/si';
import { DiJqueryLogo } from "react-icons/di";
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
      { icon: <SiMui className='text-3xl' />, color: '#311565', label: 'Material UI' },
      { icon: <FaGithub className='text-3xl' />, color: '#311565', label: 'Git/Github' },
      { icon: <FaFigma className='text-3xl' />, color: '#311565', label: 'Figma' },
      { icon: <DiJqueryLogo className='text-3xl' />, color: '#311565', label: 'Jquery' },
    ];
  return (
    <div className='h-auto relative flex flex-col justify-center items-center px-10' >
        <h1 className='text-white text-2xl text-center'>The skills, tools and technologies I am really good at:</h1>
        <GlassIcons items={icons} className="custom-class text-white w-full max-w-[80rem] px-10"/>
        <img src="/tech-bg.png" className='w-full max-w-[50rem]' alt="" />
      </div>
  )
}
