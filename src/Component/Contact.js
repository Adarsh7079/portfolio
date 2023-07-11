import React, { useState } from 'react';
import {toast} from "react-hot-toast";
import {HiOutlineEnvelope,HiMiniPhone} from "react-icons/hi2";
import {IoLogoLinkedin,IoLogoInstagram,IoLogoGithub,IoMailUnreadOutline, IoLogInSharp} from "react-icons/io5";

const Contact = () => {
  const [formData,setData]=useState({
    name:"",email:"",mobile:"" ,purpose:"",message:""
  });


  function send(event)
  {
    event.preventDefault();
    if(formData.name.length==0 || formData.email.length==0 || formData.mobile.length==0 || formData.purpose.length==0 || formData.message.length==0)
    {
      toast.error("Please entr all dtails");
    }
    else{
      toast.success("message send to Adarsh Successfully");
    }
  }
  function changeHandler(event)
  {
    setData(prevData=>{
      return{
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
  }

  return (
    <div className="">
      <div className="flex mx-auto justify-center">
        <p className=" lg:text-[6rem] text-[2.5rem] flex justify-center mt-[2rem] font-bold text-cyan-600  lg:justify-between" >
          <u>Contact me</u>
        </p>
      </div>

      <div className="  flex lg:gap-[35rem] flex-wrap">
         <div className="lg:max-w-[60%] lg:w-[600px] flex flex-col mx-auto md:mx-0">
            <p className="lg:text-[4rem] text-[2rem] uppercase mt-[8rem] text-cyan-600">Contact Info</p>

              <div className="flex flex-col gap-3 mt-[3rem]">
                  <div className="flex gap-3 items-center">
                      <HiOutlineEnvelope className="lg:text-[3rem] text-[1.8rem] text-gray-600"/>
                      <a href="mailto:adarshk8271@gmail.com" className="lg:text-[1.8rem] text-[1rem] text-gray-600 hover:text-gray-900 transition duration-1000">  adarshk8271@gail.com</a>
                  </div>
                  <div className="flex gap-3 items-center">
                      <HiMiniPhone className="lg:text-[3rem] text-[1.8rem] text-gray-600"/>
                      <a href="tel:7079429676" className="lg:text-[1.8rem] text-[1rem] text-gray-600 hover:text-gray-900  transition duration-1000">+91-707942XXXX</a>
                  </div>
                  <div className="flex gap-3 items-center">
                      <IoLogoLinkedin className="lg:text-[3rem] text-[1.8rem] text-gray-600"/>
                      <a href="https://www.linkedin.com/in/adarsh-paritosh-59b396203/" className="lg:text-[1.8rem] text-[1rem] text-gray-600 hover:text-gray-900  transition duration-1000">Adarsh Paritosh</a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <IoLogoInstagram className="lg:text-[3rem] text-[1.8rem] text-gray-600"/>
                    <a href="https://instagram.com/adarshparitosh?igshid=ZDdkNTZiNTM=" className="lg:text-[1.8rem] text-[1rem] text-gray-600 hover:text-gray-900  transition duration-1000">  adarshparitosh</a>
                  </div>
              </div>
          </div>
          <div className="lg:w-[400px] mt-[7rem] flex  md:flex-col flex mx-auto">
            {/* <fieldset className="border border-solid rounded-3xl p-5 md:mx-[6rem] mt-[3rem]">
              <legend className="flex md:gap-4 gap-2 mx-auto items-center content-center place-content-center "><p className="text-[2rem] text-gray-500">Send message</p> </legend>
             
            
            </fieldset> */}

            <div className=" md:max-w[50%] ">
               <form className="flex flex-col gap-7">
                <input type="text" className="border-none outline-none bg-gray-100 shadow-xl shadow-[#a5a59d] w-full h-[40px] p-5 text-gray-700"

                  placeholder="Name"
                  onChange={changeHandler}
                  name="name"
                  value={formData.name}
                  />
                <input  type="email" className="border-none outline-none bg-gray-100 shadow-xl shadow-[#a5a59d]  w-full h-[40px] p-5 text-gray-700"
                 placeholder="email"
                 onChange={changeHandler}
                 name="email"
                 value={formData.email}
                  />
                <input type="phone" className="border-none outline-none bg-gray-100 shadow-xl shadow-[#a5a59d]  w-full h-[40px] p-5 text-gray-700" 
                placeholder="Phone No"
                onChange={changeHandler}
                name="mobile"
                value={formData.mobile}
                />
               
                <input type="text" className="border-none outline-none bg-gray-100 shadow-xl shadow-[#a5a59d]  w-full h-[40px] p-5 text-gray-700" 
                placeholder="Purpose"
                onChange={changeHandler}
                name="message"
                value={formData.message}
                />
                <textarea rows="4" className="outline-none  bg-gray-100 shadow-xl shadow-[#a5a59d] w-full p-5 text-gray-700 " placeholder="Message"/>
               <button onClick={send}  className="btnsend text-gray-900 font-semibold shadow-[#a5a59d]">Send</button>
               </form>
            </div>
          </div>
         
      </div>
     
    </div>
  )
}

export default Contact
