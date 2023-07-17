import React, { useState } from 'react'
import {motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';
import "../App.css";


function NavBar() {
    
    const [isShow,setShow]=useState(false);
  return (
    <nav className=" fixed w-full shadow-2xl bg-gray-200 z-50">
        <div className="hidden md:flex w-full h-[65px] p-3 px-4 md:p-6 md:px-16 items-center lg:justify-end" >
            <div className='flex gap-6 lg:justify-between'>
                <NavLink  to="/about"className="md:text-[16px]   lg:text-[18px] mt-2 text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400  font-semibold  ">About Me</NavLink>
                <NavLink to="/codingprofile" className="md:text-[16px] lg:text-[18px] mt-2 text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400 font-semibold">Coding Profile</NavLink>
                <NavLink  to="/projects" className="md:text-[16px] lg:text-[18px] mt-2 text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400  font-semibold">Projects</NavLink>
                <NavLink to="/education" className="md:text-[16px] lg:text-[18px] mt-2  text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400  font-semibold ">Education </NavLink>
                <NavLink  to="/contact" className="md:text-[16px] lg:text-[18px] bg-red-400 w-[150px] h-[40px] rounded-lg mb-2 text-xl text-[#515151] shadow-xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  "><p className="flex items-center justify-center font-semibold ">Contact Me</p></NavLink> 
            </div>
            
        </div>
        <div className="md:hidden flex flex-col w-full h-[65px]" >
           <div className="flex justify-between">
            <div className="flex mx-auto justify-center items-center"><p className=" text-[2rem] text-red-400 font-bold">My Portfolio</p></div>
            <div className="text-5xl px-7" onClick={()=>setShow(!isShow)}> &#8801;</div>
           </div>
           {
            isShow&& <motion.div 
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
             className="w-40 bg-gray-200 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
            <div className="flex flex-col justify-center px-2">
            <NavLink  to="/about"className=" text-lg text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-pink-600  font-semibold ">About Me</NavLink>
            <NavLink  to="/codingprofile" className="text-lg text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400 font-semibold">Coding Profile</NavLink>
            <NavLink to="/projects" className="text-lg text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400  font-semibold">Projects</NavLink>
            <NavLink to="/education"  className="text-lg text-[#515151] hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:text-red-400 font-semibold ">Education </NavLink>
            <NavLink to="/contact"  className=" bg-red-400 rounded-lg mb-2 text-xl text-[#515151]  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  "><p className="flex justify-center  font-semibold">Contact Me</p></NavLink>
            
            </div>
        </motion.div>
           }
            
        </div>
    </nav>
  )
}

export default NavBar;
