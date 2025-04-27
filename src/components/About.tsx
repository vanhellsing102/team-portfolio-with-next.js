"use client"
import Image from 'next/image';
import React from 'react';
import { ourData, ourSkills } from '../libs/data';
import { motion } from 'motion/react';
const About = () => {
    return (
        <div id='about'>
            <h2 className='text-center text-4xl font-bold mb-3'>About us</h2>
            <div className='w-full xl:w-[80%] px-8 min-h-40 mx-auto  flex flex-col md:flex-row gap-4 justify-between ' >
            {ourData?.map((data)=> (
                <div key={data.name} className='w-full sm:w-[80%] px-8 mx-auto md:w-[50%] min-h-40 backdrop-blur-md shadow-xl ring-1 
                    rounded-lg py-4 ring-sky-500/20 bg-gradient-to-r from-sky-400/10 shadow-sky-400/10 hover:shadow-sky-400/20 transition-all duration-300 to-sky-800
                    hover:from-sky-400/15
                '>
                    <motion.div 
                        initial={{opacity:0,y:20 }}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, type:'spring', delay:0.2*data.id, bounce:0.3}}
                    >

                        <Image 
                            src={data.image} alt='dj' width={400} height={400}
                            className='w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mt-4'
                            />
                    </motion.div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-bold text-center'>{data.name}</h1>
                        <p className='text-center text-sm text-slate-900'>{data.bio}</p>
                    </div>
                    <div className='mt-4'>

                        <p className='text-sm text-slate-900'>{data.education}</p>
                    </div>
                    <div >
                        <a className='w-full cursor-pointer  flex justify-center bg-gradient-to-b from-sky-400/30  hover:from-sky-400/40   shadow-sky-400/10 hover:shadow-sky-400/20 transition-all duration-300 to-sky-800 rounded-lg py-2 mt-4' href='#skills' >Skills...</a>
                    </div>


                </div>
            ))}
         

          
            
        </div>
        </div>
    );
};

export default About;