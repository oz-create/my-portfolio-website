import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import TiltedCard from "./TiltedCard";
import { SiMui, SiRedux, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


export default function Projects() {
    const projects = [
        {
            title: "Next.js Movie Website",
            description: "A movie website built with Next.js, featuring a sleek design and seamless navigation. Explore a vast collection of movies, view detailed information, and enjoy a user-friendly experience.",
            demoUrl: "https://next-js-movie-website-wyrh.vercel.app/",
            githubUrl: "https://github.com/oz-create/next.js-movie-website",
            imageUrl: "/next.js-movie-website.png",
            technologies: [<RiNextjsLine className="text-2xl"/>, <RiTailwindCssFill className="text-2xl" />, <SiTypescript className="text-2xl" />, <SiMui className="text-2xl" />, <SiRedux className="text-2xl" />]
        },
        {
            title: "React E-Commerce Website",
            description: "A movie website built with Next.js, featuring a sleek design and seamless navigation. Explore a vast collection of movies, view detailed information, and enjoy a user-friendly experience.",
            demoUrl: "https://react-ecommerce-website-chi.vercel.app/",
            githubUrl: "https://github.com/oz-create/react-ecommerce-website",
            imageUrl: "/react-ecommerce-website.png",
            technologies: [<FaReact className="text-2xl"/>, <RiTailwindCssFill className="text-2xl" />, <IoLogoJavascript className="text-2xl" />, <SiMui className="text-2xl" />, <SiRedux className="text-2xl" />]
        },
        {
            title: "HTML,CSS E-Commerce Website",
            description: "A movie website built with Next.js, featuring a sleek design and seamless navigation. Explore a vast collection of movies, view detailed information, and enjoy a user-friendly experience.",
            demoUrl: "https://e-commerce-web-site-design.vercel.app/",
            githubUrl: "https://github.com/oz-create/e-commerce-web-site-design",
            imageUrl: "/ecommerce-website.png",
            technologies: [<FaHtml5 className="text-2xl"/>, <FaCss3Alt className="text-2xl" />, <FaSass className="text-2xl" /> ]
        },
    ]
 
  return (
    <div id='projects' className="w-full flex flex-col justify-center items-center gap-10 mt-20 h-auto z-1 relative">
        <h1 className='text-white text-4xl text-left font-bold'>Projects</h1>
        <div className="flex items-center justify-center gap-10">
            {
                projects.map((project,index) => {
                    return (
                        <TiltedCard key={index}
                            imageSrc={project.imageUrl}
                            altText={project.description}
                            captionText={project.title}
                            containerHeight="30rem"
                            containerWidth="25rem"
                            imageHeight="30rem"
                            imageWidth="25rem"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <p className="tilted-card-demo-text font-bold text-base">
                                        {project.title}
                                    </p>
                                     <p className="tilted-card-demo-text text-xs">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-center gap-5">
                                        {
                                            project.technologies.map((icon) => {
                                                return icon
                                            })
                                        }
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <a href={project.demoUrl} target="_blank" className="bg-[#4D7DFE] p-3 block rounded-full w-[49%] text-center text-white border border-[#4D7DFE] hover:bg-transparent hover:text-[#4D7DFE] transition-all">Demo</a>
                                        <a href={project.githubUrl} target="_blank" className="bg-[#4D7DFE] p-3 block rounded-full w-[49%] text-center text-white border border-[#4D7DFE] hover:bg-transparent hover:text-[#4D7DFE] transition-all">Code</a>
                                    </div>
                                </div>
                               
                            }
                        />
                    )
                })
            }
           
        </div>
    </div>
   
  )
}
