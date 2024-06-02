import { useState } from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import property from "../assets/Property.jpg";
import propertyCode from "../assets/propertycode.jpg";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai';


const projects = [
    {
        img: project1,
        title: "project #1",
        description : "UI for frontend development using React.",
        links:{
            site : "#",
            github : "#"
        },
    },
    {
            img: project2,
            title: "project #2",
            description : "A fullstack application build with Node.js and MongoDB.",
            links:{
            site : "#",
            github : "#"
        },
    },
    {
            img: project3,
            title: "project #3",
            description : "A responsive website designed with modern CSS.",
            links:{
            site : "#",
            github : "#"
        },
    },
    {
            img: property,
            title: "project #4",
            description : "Buld A Fullstack Laravel and Database with mysql for final exams on campus.",
            links:{
            site : "#",
            github : "#"
        },
    },
    {
        img: propertyCode,
        title: "project #5",
        description : "Tamplating blade, make migration, seeder,.",
        links:{
        site : "#",
        github : "#"
    },
},
]

const Portofolio =() =>{

    const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className='my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6' id="portofolio">
        <div className='relative z-10 col-span-3 grid place-items-center grid-cols-1'>
            <p className='text-gray-200 font-bold text-4xl -skew-y-6'>Select Project</p>
            <img src={arrow} className='absolute w-[50px] top-10 right-0 md:right-12' />

            <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl'>
                {projects.map((project,index)=>(
                    <li key={index} onClick={() => setCurrentProject(index)}
                    className={`cursor-pointer text-gray-300 ${currentProject === index? 'active-project' : ''}`}> {project.title} </li>
                ))}
            </ul>
        </div>

        <div className='z-10 glass w-full col-span-5'>
            <div className='2-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} 
                className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>

            <div className='p-6'>
                <p className='text-gray-200 my-4'> {projects[currentProject].description} </p>
                <div className='flex space-x-4'>
                    <a href={projects[currentProject].links.site}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>Viwe Site</a>
                    <a href={projects[currentProject].links.github}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'><AiFillGithub/></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portofolio