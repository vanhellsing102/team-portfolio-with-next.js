import React from "react";
import { ourData } from "../libs/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Introduction = () => {
  console.log(ourData);
  return (
    <div className="w-full min-h-96 ">
      <div className="w-full md:w-[80%] gap-2 min-h-96 md:flex   mx-auto">
        {Array(ourData.length)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="min-h-96 flex-col flex md:w-[50%]  backdrop-blur-3xl overflow-hidden rounded-xl p-4 shadow-slate-900/50">
              <div className="flex flex-col  h-full items-center w-full  text-2xl ">
                <Image
                  src={ourData[index].image}
                  alt="dj"
                  className="h-36 aspect-square w-36 rounded-full object-cover "
                  width={400}
                  height={400}
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">{ourData[index].name}</h1>
                <p className="text-sm text-slate-400">
                  {ourData[index].bio}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Introduction;
