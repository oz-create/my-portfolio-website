import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoChevronDown } from "react-icons/io5";


export default function Experiences() {
  return (
       <div id='experience' className='flex flex-col items-center justify-center gap-10 z-1 relative'>
        <h1 className='text-white text-4xl text-left font-bold'>Work Experiences</h1>
        <div className='flex flex-col items-center gap-5 experience-cards-container'>
          <div className='relative w-full max-w-[70rem] accordion-container flex items-center justify-center'>
               <Accordion sx={{
                    background: "transparent",
                    border: "1px solid rgb(49, 21, 101)",
                    borderRadius: "1rem",
                    boxShadow: "none",
                    overflow: "hidden", 
                    '&::before': {
                      display: 'none', 
                    },
                  }} className='w-full custom-accordion'>
                  <AccordionSummary
                    expandIcon={<IoChevronDown className='text-white'/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <div>
                      <h1 className='text-white text-lg font-bold text-left'>Adcropper, Istanbul/Remote  - January 2022 – September 2025</h1>
                      <h2 className='text-white text-lg text-left'>Frontend Developer</h2>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
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
                  </AccordionDetails>
                </Accordion>
                <img src="/coding-render-3.png" className='w-[14rem] absolute bottom-[-14rem] left-15' alt="" />
                <img src="/coding-render-2.png" className='absolute w-[12rem] top-[-6rem] right-[-15rem]' alt="" />
          </div>
          <div className='relative w-full max-w-[70rem] accordion-container flex items-center justify-center'>
              <Accordion sx={{
                    background: "transparent",
                    border: "1px solid rgb(49, 21, 101)",
                    borderRadius: "1rem",
                    boxShadow: "none",
                    overflow: "hidden", 
                    '&::before': {
                      display: 'none', 
                    },
                  }} className='w-full custom-accordion'>
                  <AccordionSummary
                    expandIcon={<IoChevronDown className='text-white'/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                  <div>
                      <h1 className='text-white text-lg font-bold text-left'>Freelance Frontend Developer - 2022 – Present</h1>
                  </div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div className="flex flex-col gap-3">
                      <p className='text-white text-base text-left'>
                      <b>Website Development:</b> <br />
                        Developed a fully responsive website from scratch, ensuring it adapts
                        seamlessly to various screen sizes and devices, providing an optimal user
                        experience. <a className='underline' href="https://wallstreetturkish.com/">(https://wallstreetturkish.com/)</a>
                    </p>
                    <p className='text-white text-base text-left'>
                      <b>Frontend Development</b> <br />
                      Contributed to the frontend development of the website using HTML5, CSS3,
                      JavaScript, and React, implementing modern web design practices and a clean,
                      intuitive user interface.  
                    </p>
                    <p className='text-white text-base text-left'>
                      <b>Component-based Architecture:</b> <br />
                    Created reusable and modular components in React.js, focusing on maintainability and efficiency across the site.
                    </p>
                    <p className='text-white text-base text-left'>
                      <b>Bug Fixing & Optimization: </b> <br />
                        Identified and fixed bugs to improve site performance and stability. Conducted regular code reviews to ensure high-quality deliverables and optimal functionality.
                    </p>
                    <p className='text-white text-base text-left'>
                      <b>SEO & Performance Optimization:</b> <br />
                        Applied SEO best practices to improve site visibility, and optimized performance through techniques like image compression, minifying CSS/JS files, and leveraging caching mechanisms
                    </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
       
          </div>
       
          
          
            
        </div>
      </div>
  )
}
