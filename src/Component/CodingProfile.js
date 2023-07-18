import React from 'react';
import leetcode from "../assets/leet.png"
import gfg from "../assets/g4g.png";
import cf from "../assets/cf.jpeg";
import git from "../assets/git.png";

function CodingProfile() {
  return (
    <div className='h-auto'>
        <p className=" lg:text-[4rem] text-[2.6rem] flex justify-center mt-[2rem] font-bold text-cyan-600nm" ><u>Coding Profile</u></p>
    
        <div className="flex gap-[150px] flex-wrap mt-[12rem] justify-center mb-11">
            <div className=" flex flex-col bg-gray-200 shadow-2xl w-[400px] h-auto rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={leetcode}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-8'>
                    <div className="flex flex-col content-center mx-auto">
                        <p className=" flex mx-auto text-[2rem] text-red-400 font-bold"><u>LeetCode</u></p>
                        <div className="">
                            <p>I am 3* Coder At LeetCode ,i have Solved more than 450+ questions of Data Structures & Algorithm....</p>
                        </div>
                        
                    </div>
                    <div className="flex mx-auto mt-2 mb-3"> 
                      <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1">
                        <a className="text-gray-200 font-semibold " href="https://leetcode.com/looser8271/">View Profile</a>
                      </button>
                    </div> 
                </div>
            </div>
          

          {/*  *********************profile 2 ********************************/}
          <div className=" flex flex-col bg-gray-200 shadow-2xl w-[400px] h-auto rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={leetcode}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-8'>
                    <div className="flex flex-col content-center mx-auto">
                        <p className=" flex mx-auto text-[2rem] text-red-400 font-bold"><u>LeetCode</u></p>
                        <div className="">
                            <p>I am 3* Coder At LeetCode ,i have Solved more than 450+ questions of Data Structures & Algorithm....</p>
                        </div>
                        
                    </div>
                    <div className="flex mx-auto mt-2 mb-3"> 
                      <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1">
                        <a className="text-gray-200 font-semibold " href="https://leetcode.com/looser8271/">View Profile</a>
                      </button>
                    </div> 
                </div>
            </div>

              {/*  *********************profile 3 ********************************/}
          <div className=" flex flex-col bg-gray-200 shadow-2xl w-[400px] h-auto rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={leetcode}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-8'>
                    <div className="flex flex-col content-center mx-auto">
                        <p className=" flex mx-auto text-[2rem] text-red-400 font-bold"><u>LeetCode</u></p>
                        <div className="">
                            <p>I am 3* Coder At LeetCode ,i have Solved more than 450+ questions of Data Structures & Algorithm....</p>
                        </div>
                        
                    </div>
                    <div className="flex mx-auto mt-2 mb-3"> 
                      <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1">
                        <a className="text-gray-200 font-semibold " href="https://leetcode.com/looser8271/">View Profile</a>
                      </button>
                    </div> 
                </div>
            </div>

              {/*  *********************profile 4 ********************************/}
          <div className=" flex flex-col bg-gray-200 shadow-2xl w-[400px] h-auto rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={leetcode}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-8'>
                    <div className="flex flex-col content-center mx-auto">
                        <p className=" flex mx-auto text-[2rem] text-red-400 font-bold"><u>LeetCode</u></p>
                        <div className="">
                            <p>I am 3* Coder At LeetCode ,i have Solved more than 450+ questions of Data Structures & Algorithm....</p>
                        </div>
                        
                    </div>
                    <div className="flex mx-auto mt-2 mb-3"> 
                      <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1">
                        <a className="text-gray-200 font-semibold " href="https://leetcode.com/looser8271/">View Profile</a>
                      </button>
                    </div> 
                </div>
            </div>
        </div>
        
           
          
    </div>
  )
}

export default CodingProfile
