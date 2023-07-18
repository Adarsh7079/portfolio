import React from 'react';
import tick from "../assets/ticktack.png";
import movie from "../assets/movie.png";
import parallex from "../assets/parallax.png";
import food from "../assets/food.png";
import voice from "../assets/text.png";

import {IoLogoGithub} from "react-icons/io5";
import weather from "../assets/weather.png";


function Projects() {
  return (
    <div className= "w-full h-auto">
  
      <p className=" lg:text-[4rem] text-[2rem] sm:text-[2.5rem] flex justify-center mt-[2rem] font-bold text-cyan-600" ><u>Personal Projects</u></p>
      <div className=" lg:flex  gap-[3rem] lg:flex-wrap place-content-center md:justify-center mt-[3rem]">
        <div className="drop-shadow-2xl transition duration-500 hover:scale-105 sm:flex sm:justify-center">
          <img
              src={food}
              className="md:w-[700px] w-[500px] md:h-[400px] rounded-xl"
          />
        </div>
        <div className="">
             <p className=" max-w-[800px] lg:text-[1.2rem] mt-[2rem] lg:mt-[3rem] md:mt-[3rem]">Create Food Delivery WebSite By Using <spam className="font-bold">MERN Stack</spam> user Can select their food and add it to cart after 
                            that user can placed their food admin can access all data like place items,ordered items ,i have use the concept of <spam className="font-bold">UseState Hook ,useEffect,mongoose,express ,react Icons ,jwt ,bcrypt ,Google Authentication</spam> 
             </p>
            <div className="flex mx-auto justify-center mt-1">
               <a href="https://github.com/Adarsh7079/food-"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
            </div>
        </div>
     </div>

     {/* ********************  project 2 ***************** */}
     <div className=" lg:flex  gap-[3rem] lg:flex-wrap place-content-center md:justify-center mt-[3rem]">
        <div className="">
             <p className=" max-w-[800px] lg:text-[1.2rem] mt-[2rem] lg:mt-[3rem] md:mt-[3rem]">Create Weather Detection WebSite By Using <spam className="font-bold">HTML,CSS & JavaScript</spam> user Can select their live location and get weather details 
                concept use as  <spam className="font-bold">OpenWeather API ,sync & async, fetch api </spam> etc...
              </p>
            <div className="flex mx-auto justify-center mt-1">
               <a href="https://github.com/Adarsh7079/weather"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
            </div>
        </div>
        <div className="drop-shadow-2xl transition duration-500 hover:scale-105 sm:flex sm:justify-center">
          <img
              src={weather}
              className="md:w-[700px] w-[500px] md:h-[400px] rounded-xl"
          />
        </div>
     </div>

     {/* ***************Project 3*************** */}
     <div className=" lg:flex  gap-[3rem] lg:flex-wrap place-content-center md:justify-center mt-[3rem]">
        <div className="drop-shadow-2xl transition duration-500 hover:scale-105 sm:flex sm:justify-center">
          <img
              src={movie}
              className="md:w-[700px] w-[500px] md:h-[400px] rounded-xl"
          />
        </div>
        <div className="">
             <p className=" max-w-[800px] lg:text-[1.2rem] mt-[2rem] lg:mt-[3rem] md:mt-[3rem]">Create Movie Recommandation WebSite By Using <spam className="font-bold">React.Js & Tailwid CSS</spam> user Can serch about any movie 
                  it have responsive UI which is user friendly <spam className="font-bold">UseState Hook ,useEffect,IMDB API </spam> library...
              </p>
            <div className="flex mx-auto justify-center mt-1">
               <a href="https://github.com/Adarsh7079/movieapp"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
            </div>
        </div>
     </div>


         {/* ********************  project 4 ***************** */}
         <div className=" lg:flex  gap-[3rem] lg:flex-wrap place-content-center md:justify-center mt-[3rem]">
        <div className="">
             <p className=" max-w-[800px] lg:text-[1.2rem] mt-[2rem] lg:mt-[3rem] md:mt-[3rem]">
                Create Voice a parallax WebSite By Using <spam className="font-bold">HTML,CSS and JavaScript</spam> 
                a WebSite have parallex effect good user friendly UI
              </p>
            <div className="flex mx-auto justify-center mt-1">
               <a href="https://github.com/Adarsh7079/food-"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
            </div>
        </div>
        <div className="drop-shadow-2xl transition duration-500 hover:scale-105 sm:flex sm:justify-center">
          <img
              src={voice}
              className="md:w-[700px] w-[500px] md:h-[400px] rounded-xl"
          />
        </div>
     </div>


        {/* ***************Project 5*************** */}
        <div className=" lg:flex  gap-[3rem] lg:flex-wrap place-content-center md:justify-center mt-[3rem]">
        <div className="drop-shadow-2xl transition duration-500 hover:scale-105 sm:flex sm:justify-center">
          <img
              src={parallex}
              className="md:w-[700px] w-[500px] md:h-[400px] rounded-xl"
          />
        </div>
        <div className="">
             <p className=" max-w-[800px] lg:text-[1.2rem] mt-[2rem] lg:mt-[3rem] md:mt-[3rem]">
              Create a parallax WebSite By Using <spam className="font-bold">HTML,CSS and JavaScript</spam> 
              a WebSite have parallex effect good user friendly UI
             </p>
            <div className="flex mx-auto justify-center mt-1">
               <a href="https://github.com/Adarsh7079/movieapp"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
            </div>
        </div>
     </div>

     {/*
       
     

           
       <div className="md:flex  flex-wrap gap-11 mt-[5rem]">
          <div className="flex mx-auto  drop-shadow-2xl transition duration-500 hover:scale-110 ">
            <img
                  src={tick}
                  className="md:w-[800px] w-[500px] md:h-[400px] rounded-xl"
                />
          </div>
          
          
          <div className="">
              <p className=" max-w-[800px] lg:text-[1.5rem] mt-[2rem] lg:mt-[7rem] md:mt-[3rem]">Create Tic Tac Toe Game By using  <spam className="font-bold">HTML ,CSS & JavaScript</spam> user Can play and restart Game
              </p>
              <div className="flex mx-auto justify-center mt-1">
                <a href="https://github.com/Adarsh7079"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
          
              </div>
          </div>
       </div>
       <div className="md:flex  flex-wrap gap-11 mt-[5rem]">
          <div className="">
              <p className=" max-w-[800px] lg:text-[1.5rem] mt-[2rem] lg:mt-[7rem] md:mt-[3rem]">Create Voice a parallax WebSite By Using <spam className="font-bold">HTML,CSS and JavaScript</spam> 
              a WebSite have parallex effect good user friendly UI </p>
              <div className="flex mx-auto justify-center mt-1">
                <a href="https://github.com/Adarsh7079/food-"><IoLogoGithub  className="text-[3rem] rounded-full text-blue-800 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-300 hover:text-red-600"/></a>
          
              </div>
          </div>
          <div className="flex mx-auto  drop-shadow-2xl transition duration-500 hover:scale-110 ">
                <img
                  src={parallex}
                  className="md:w-[800px] w-[500px] md:h-[400px] rounded-xl"
                />
          </div>
     
        </div>
      </div> */}
    </div>
  )
}

export default Projects
