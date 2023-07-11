import React from 'react';
import leetcode from "../assets/leet.png"
import gfg from "../assets/g4g.png";
import cf from "../assets/cf.jpeg";
import git from "../assets/git.png";

function CodingProfile() {
  return (
    <div>
        <p className=" lg:text-[6rem] text-[3rem] flex justify-center mt-[2rem] font-bold text-cyan-600" ><u>Coding Profile</u></p>
    
        <div className="flex gap-[150px] flex-wrap mt-[12rem] justify-center ">
            <div className=" flex flex-col bg-gray-100 shadow-2xl w-[400px] h-[400px] rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={leetcode}
                    className="rounded-full "/>
                    
                </div>
            <div className='mt-[40%] flex flex-col gap-2 mx-8'>
                <div className="flex content-center justify-center ">
                    <p className="text-[2rem] text-red-400 font-bold"><u>LeetCode</u></p>
                </div>
                    <div className="">
                        <p>I am 3* Coder At LeetCode ,i have Solved more than 450+ questions of Data Structures & Algorithm....</p>
                    </div>
            </div>
            <div className="flex mx-auto mt-10"> 
                <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1"><a className="text-gray-200 font-semibold " href="https://leetcode.com/looser8271/">View Profile</a></button>
            </div>
            
        </div>
            <div className=" flex flex-col bg-gray-100 shadow-2xl w-[400px] h-[400px] rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={gfg}
                    className="rounded-full "/>
                    
                </div>
            <div className='mt-[40%] flex flex-col gap-4 mx-7'>
                <div className="flex content-center justify-center ">
                    <p className="text-[2rem] text-red-400 font-bold"><u>GeeksForGeeks</u></p>
                </div>
                    <div className="">
                        <p>I have Solved more than 500+ question of Data Structure and Algorithm on GeeksForGeeks....</p>
                    </div>
            </div>
            <div className="flex mx-auto mt-12"> 
                <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1"><a className="text-gray-200 font-semibold " href="https://auth.geeksforgeeks.org/user/paritoshadarsh/practice">View Profile</a></button>
            </div>
            
            </div>
            <div className=" flex flex-col bg-gray-100 shadow-2xl w-[400px] h-[400px] rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src="https://www.financialexpress.com/wp-content/uploads/2023/05/APIS-and-NxtWave-image-37-3.jpg?w=350"
                    className="rounded-full "/>
                    
                </div>
            <div className='mt-[40%] flex flex-col gap-2 mx-7'>
                <div className="flex content-center justify-center ">
                    <p className="text-[2rem] text-red-400 font-bold"><u>CodeStudio</u></p>
                </div>
                    <div className="">
                        <p>I am Expert At CodeStudio ,i have Solved more than 650+ questions Including  Data Structures & Algorithm and MCQ....</p>
                    </div>
            </div>
            <div className="flex mx-auto mt-12"> 
                <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1"><a className="text-gray-200 font-semibold " href="https://www.codingninjas.com/studio/profile/Adarsh_7079">View Profile</a></button>
            </div>
            
            </div>
            
            <div className=" flex flex-col bg-gray-100 shadow-2xl w-[400px] h-[400px] rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-gray-300 rounded-full -mt-16 absolute shadow-2xl drop-shadow-2xl  mx-[25%]">
                    <img src={cf}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-7'>
                    <div className="flex content-center justify-center ">
                        <p className="text-[2rem] text-red-400 font-bold"><u>CodeChef</u></p>
                    </div>
                        <div className="">
                            <p>I am 2* Coder At CodeChef ,i have Solved more than 280+ question of Competative Programming...</p>
                        </div>
                </div>
                <div className="flex mx-auto mt-12"> 
                    <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1"><a className="text-gray-200 font-semibold " href="https://www.codechef.com/users/adarsh_7079">View Profile</a></button>
                </div>
            
            </div>
            <div className=" flex flex-col bg-gray-100 shadow-2xl w-[400px] h-[400px] rounded-xl relative drop-shadow-2xl transition duration-500 hover:scale-110" >
                <div className=" flex w-[200px] h-[200px] bg-white rounded-full -mt-16 absolute  mx-[25%]  shadow-2xl drop-shadow-2xl ">
                    <img src={git}
                    className="rounded-full "/>
                    
                </div>
                <div className='mt-[40%] flex flex-col gap-2 mx-7'>
                    <div className="flex content-center justify-center ">
                        <p className="text-[2rem] text-red-400 font-bold"><u>GitHub</u></p>
                    </div>
                        <div className="">
                            <p>I have created some project and uploaded solution of Data Structures & Algorithm on GitHub repo ....</p>
                        </div>
                </div>
                <div className="flex mx-auto mt-12"> 
                    <button className="bg-[#524e4e] w-[150px] h-[45px] rounded-md hover:drop-shadow-2xl shadow-2xl p-1"><a className="text-gray-200 font-semibold " href="https://github.com/Adarsh7079/">View Profile</a></button>
                </div>
                
            </div>
        </div>  
    </div>
  )
}

export default CodingProfile
