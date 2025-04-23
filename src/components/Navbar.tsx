"use client"
import { navData } from '../libs/data';
import { CgMenuLeft } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='text-slate-500 font-bold px-4 md:px-12 py-8 w-full flex justify-between items-center '>
            <div>
                <a href={'#'} className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#0C7CBA] to-[#1F516C] font-bold'>TeamP</a>
            </div>
            <div className='border backdrop-blur-sm py-2 px-5 rounded-lg fixed right-12 hidden md:block z-10'>
                <ul className='flex gap-3'>
                    {
                        navData.map(navItem =>
                            <li className='hover:bg-blue-500 px-2 text-slate-200 rounded-lg py-1' key={navItem.id}>
                                <a href={navItem.link}>{navItem.title}</a>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* responsive navbar */}
            <div className='md:hidden block fixed right-12 z-10'>
                <div className='relative' >
                    <CgMenuLeft onClick={() => setOpenMenu(!openMenu)} className='text-2xl text-white'></CgMenuLeft>
                    {
                        openMenu && <ul className='absolute top-6 right-0 border backdrop-blur-sm rounded-lg'>
                            {
                                navData.map(navItem =>
                                    <li onClick={() =>setOpenMenu(false)} className='hover:bg-blue-500 px-2 text-slate-200 rounded-lg py-1' key={navItem.id}>
                                        <a href={navItem.link}>{navItem.title}</a>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;