"use client"
import React from "react";
import { ourData } from "../libs/data";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  // console.log(ourData);
  return (
    <div >
      <div className="w-full md:w-[80%] space-y-7 md:space-x-4 min-h-96 md:flex px-6 mx-auto">
        {Array(ourData.length)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="md:w-[50%]  relative  px-1">

            <div
              key={index}
              className="h-96 hover:shadow-sky-900 transition-all duration-300 pb-12 flex-col flex  shadow-xl shadow-sky-800/50 ring-1 ring-sky-900/50 backdrop-blur-lg overflow-hidden rounded-xl p-4 "
              >
              <div className="flex flex-col gap-1 h-full items-center w-full  text-2xl ">
                <Image
                  src={ourData[index].image}
                  alt="dj"
                  className="h-36 aspect-square w-36 rounded-full object-cover "
                  width={400}
                  height={400}
                  />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
                  {/* {ourData[index].name} */}
                  <span>Hi, {`I'm`}</span> <Typewriter
                    words={[`${ourData[index].name}`]}
                    loop={true}
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />                
                </h1>
                <p className="text-sm text-slate-400 text-center">
                  {ourData[index].bio}
                </p>
                <div className="flex gap-12 justify-center w-full  mt-12 ">
                  {ourData[index].socialLinks.map((link, index) => (
                    <Link
                    key={index}
                    href={link.link}
                    target="_blank"
                    className="text-slate-400 text-xl  shadow ring-1 ring-sky-500/50 rounded-full  hover:text-sky-400 transition-all duration-300"
                    >
                      <link.logo />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Introduction;
