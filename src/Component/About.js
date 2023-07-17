import React from 'react'
import photo from "../assets/adarsh.jpg";
import resume from "../assets/adarsh.jpeg"
import { Progress } from 'flowbite-react';
import { easeInOut, motion } from "framer-motion";

import { Line, Circle } from 'rc-progress';
import {IoLogoLinkedin,IoLogoInstagram,IoLogoGithub,IoMailUnreadOutline, IoLogInSharp} from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function About() {



  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('AdarshParitosh.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'AdarshParitosh Resume';
            alink.click();
        })
    })
}


  return (
    <div className= " h-auto z-0">
      {/* left */}
      <div className="lg:flex md:justify-between flex-wrap">
        <div className="lg:max-w-[60%] lg:mt-[6rem] mt-[3rem]">
          <p className="text-[2rem] font-boldtext-gray-600 ">Hello I'm</p> <br/>
          <p className=" text-[2rem] md:mt-2 lg:text-[3rem] font-bold lg:leading-9 text-green-400">
            Adarsh Paritosh
          </p>
          <div className="lg:mt-11">
            <p className="lg:text-[1.5rem] text-[1rem] lg:leading-9 text-gray-600">I am Final Year Student of Computer Science & Engineering from Punjab Technical University
            currently I am Student and I want to be a softwar Developer Engineer,I am intrested in Data Structures and Algorithm & MERN Stack Development,I am 3* Coder at LeetCode and Expert at CodeStudio..</p>
          </div>
        </div>
         {/* right */}
        <motion.div
         className="  mt-[4rem] bg-[rgba(220,202,197,0.83)] w-[400px] h-[380px] rounded-xl shadow-2xl shadow-[#496666d9]  mx-auto md:mx-0">
            <img src={photo} className="lg:w-96 w-[380px] h-[380px] flex mx-auto mt-3 rounded-xl mx-0"/>
        </motion.div>
      </div>
      <button onClick={onButtonClick }  className="btncv text-gray-900 font-semibold flex mx-auto justify-center items-center md:mx-0 ">Download CV</button>
      <div className="flex lg:gap-11 mt-[3rem] justify-center gap-10 lg:justify-start"> 
         <div className="rounded-full shadow-2xl ">
           <a  href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/" ><IoLogoLinkedin className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
         </div>
         <div  className="rounded-full">
           <a href="https://instagram.com/adarshparitosh?igshid=ZDdkNTZiNTM="><IoLogoInstagram  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
         </div>
         <div  className=" rounded-full">
           <a href='mailto:adarshk8271@gmail.com'><IoMailUnreadOutline   className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
         </div>
         <div  className=" rounded-full ">
           <a href="https://github.com/Adarsh7079"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
         </div>
      </div>
      <div className=""><p className=" lg:text-[4rem]  text-[2.3rem] opacity-25 font-bold">Adarsh Paritosh</p></div>
      <div className="w-full bg-red-400"><div className="w-1 h-1 rounded-2xl"></div></div>
      {/* techstack */}
      <div className="flex justify-center ">
        <p className="lg:text-[6rem] text-[4rem] font-bold text-red-400 ">
          <u>Tech Stack</u>
        </p>
      </div>
      <div className=" lg:flex w-full lg:justify-between flex-wrap ">
        
           
            {/* <div className=" flex max-w-[50%]">
                <img src="https://www.svgrepo.com/show/349402/html5.svg"
                  className="w-[200px]"/>
                
                    
                <img src="https://www.svgrepo.com/show/478223/css.svg" 
                  className="w-[200px]"/>
                <img src="https://www.svgrepo.com/show/376337/node-js.svg"
                className="w-[200px]"/>
                <img src={java} className="w-[200px]"/>
                <img src="https://www.svgrepo.com/show/452092/react.svg" 
                 className='w-[200px]'/>
                <img src="https://freepngimg.com/thumb/c++/2-2-c++-png-clipart.png "
                 className="w-[200px]"/>
                <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tailwind-css-icon.svg"
                  className="w-[200px]"/>
               

            </div> */}

            
             <div className="w-full lg:max-w-[50%] mt-[6rem] ">
                <div className='flex flex-col gap-7 '>
                  <div className="" >
                    <div> 
                      <p className="text-[1.5rem] font-bold text-gray-600">C++</p>
                    </div>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-red-400 w-4/5 rounded-full">75%</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[1.5rem] font-bold text-gray-600">Data Structures & Algorithms</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-green-500 w-3/4 rounded-full">70%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">html5</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-green-500 w-3/4 rounded-full">70%</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[1.5rem] font-bold text-gray-600">CSS</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-green-500 w-3/4 rounded-full">70%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">Tailwind</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-slate-800 w-2/4 rounded-full">50%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">JavaScript</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-green-500 w-3/4 rounded-full">70%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">React.Js</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-green-500 w-3/4 rounded-full">70%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">MongoDb</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-slate-800  w-2/4 rounded-full">50%</div>
                    </div>
                  </div>
                  <div className="" >
                    <p className="text-[1.5rem] font-bold text-gray-600">MySql</p>
                    <div class="w-full bg-gray-400 rounded-full shadow-xl drop-shadow-xl">
                      <div class="py-0.5 text-xs text-center text-white bg-slate-800  w-2/4 rounded-full">50%</div>
                    </div>
                  </div>
                </div>
             </div>
             
            <div className=" flex justify-center items-center rounded-full ">
                 <img className=" flex lg:w-[700px] lg:h-[500px] " src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png" />
            </div>
       
       
      </div>
       
    </div>
  )
}

export default About
