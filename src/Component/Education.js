import React from 'react';
import bseb from "../assets/bseb.svg";
const education = () => {
  return (
    <div className= "w-full h-auto mb-20">
      <p className="lg:text-[3rem] md:text-[2.1rem] sm:text-[3rem] text-[1.7rem] sm:text-[2.3rem] flex justify-center mt-[2rem] font-bold text-cyan-600" ><u>My Education Details</u></p>
      <div className=' flex flex-col justify-center items-center'>
        <fieldset className="border border-solid border-red-500 rounded-3xl p-5 mt-[3rem] lg:w-[800px]">
          <legend className="flex gap-4 mx-auto items-center content-center place-content-center ">
            <img src="https://freesvg.org/img/Graduation-Cap-Icon.png"className='lg:w-[200px]  w-[100px]'/>
            <div className="lg:text-[2rem] text-[1.8rem] text-green-600 font-bold">Graduation</div>
            </legend>
           <div className="-mt-11 md:mx-8">
             <h1 className="lg:text-[1.7rem] text-[0.9rem] font-extrabold text-gray-600 md:font-bold">Punjab Technical University ,Punjab</h1>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold ">Course :</span> B.Tech</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Steam : </span>Computer Science & Engineering</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Batch : </span>2020-2024</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Board : </span>PTU</p>
           </div>
        </fieldset>
        <fieldset  className="border border-solid border-red-500 rounded-3xl p-5 mt-[3rem] lg:w-[800px]">
          <legend className="flex md:gap-4 gap-2 mx-auto items-center content-center place-content-center ">
            <img  src={bseb} className='lg:w-[200px]  w-[100px]'/>
            <div className="lg:text-[3rem] text-[2rem]  font-bold text-green-600">Intermediate</div>
            </legend>
           <div className="md:mx-8 md:mt-0 ">
             <h1 className="lg:text-[1.7rem] text-[0.9px] font-extrabold text-gray-600 md:font-bold">S.S School Basantpur Siwan(Bihar)</h1>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold ">Course :</span> 12 <sup>th</sup></p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Steam : </span>Physics,Chemistry & Maths</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Passing year : </span>2019</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Marks : </span>75%</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Board : </span>BSEB</p>
           </div>
        </fieldset>
        

        <fieldset  className="border border-solid border-red-500 rounded-3xl p-5 mt-[3rem] lg:w-[800px]">
          <legend className="flex md:gap-4 gap-2 mx-auto items-center content-center place-content-center ">
            <img  src={bseb} className='lg:w-[200px]  w-[100px]'/>
            <div className="lg:text-[3rem] text-[2rem]  font-bold text-green-600">Matriculation</div>
            </legend>
           <div className="md:mx-8 md:mt-0 ">
             <h1 className="lg:text-[1.7rem] text-[0.9px] font-extrabold text-gray-600 md:font-bold">S.S School Basantpur Siwan(Bihar)</h1>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold ">Course :</span> 10 <sup>th</sup></p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Steam : </span>Science & Social Science</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Passing year : </span>2017</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Marks : </span>70%</p>
             <p className="lg:text-[1.5rem] text-gray-500"><span className="font font-semibold">Board : </span>BSEB</p>
           </div>
        </fieldset>

      
        

      </div>

    </div>
  )
}

export default education
