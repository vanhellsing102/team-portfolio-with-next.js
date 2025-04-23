import React from 'react';
import { projectsData } from '../libs/data';
import Image from 'next/image';
import Link from 'next/link';

type ProjectsData = {
    id: number;
    title: string;
    image: string;
    link: string;
}
const Projects = () => {
    return (
        <div className='w-full md:w-[80%] px-4 flex flex-col md:flex-row gap-4 justify-between mx-auto py-12 group '>
            <h2 className='text-xl absolute font-bold'>Projects</h2>
            {
                projectsData.map((project:ProjectsData , index:number) => (
                    <Link href={project.link} target='_blank' key={index}
                     className=' px-4 py-2  hover:-translate-y-6 hover:scale-105 hover:shadow-sky-700 duration-500
                     flex flex-col  gap-2 items-center backdrop-blur-2xl rounded-2xl shadow-2xl justify-between my-8'>
                        <h1 className='text-xl font-bold'>{project.title}</h1>
                        <Image className='text-sm rounded-md grayscale-50 blur-[1px] hover:blur-[0px] hover:grayscale-0' src={project.image} alt={project.title} width={400} height={400}/>
                    </Link>
                ))
            }
        </div>
    );
};

export default Projects;