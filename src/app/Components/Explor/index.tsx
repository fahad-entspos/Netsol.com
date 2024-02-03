"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

import React, { useState } from "react";
import { TfiMouse } from "react-icons/tfi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link';

function Explor() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showNotification, setShowNotification] = useState(false);

  const handleHideNotification = () => {
    setShowNotification(true);
  };
  
  return (

    <div className="flex   flex-col md:flex-row h-screen ">
        <div className='z-50'>
     

<button className={`${  "/investor" === pathname  ? ' hidden' : 'block' } absolute text-white top-12 right-[15%] lg:right-[4%] rounded   font-AkkuratLight  text-lg`}>
          <Menu as="div" className=" inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full items-center gap-2 justify-center rounded-md text-[#2C7CBD] text-[14px] ">
                English
                <IoIosArrowDown />
              </Menu.Button>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-3  origin-top-right divide-y text-[#2C7CBD]  bg-white  ring-1 ring-black/5 focus:outline-none">
                <div className=" border-[#3fa9ff]">
                  <h1 className="border  border-[#2C7CBD] py-[2px] px-6">
                    English
                  </h1>
                  <h1 className="border  border-[#2C7CBD] py-[2px] px-6">
                    中文
                  </h1>
                  <h1 className="border  border-[#2C7CBD] py-[2px] px-6">
                    Thai
                  </h1>
                  <h1 className="border  border-[#2C7CBD] py-[2px] px-6">
                    Bahasa
                  </h1>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </button>

        <div className=" text-white w-full lg:w-32 flex lg:flex-col ">
        <Link href={"/home"}>
          <img
            className="mt-1 lg:mt-1 lg:mr-4 left-4 fixed top-6 lg:top-[4%] lg:left-16 h-12 md:h-16 w-auto cursor-pointer"
            src="download (1).webp"
            alt="Scrolling Image"
          /></Link>

          <div>
            <button
              onClick={toggleSidebar}
              className="bg-transparent text-white px-4 mt-5 lg:mt-0 ml-1 text-xs lg:text-base py-2 rounded  pt-2 lg:mr-4 fixed top-0 right-5 lg:top-[44%] lg:left-11 w-[60px]"
            >
              {isSidebarOpen ? (
                <>
                  <span className=" text-white ml-2 text-lg  font-TisaOT ">
                    Close
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-14 h-14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className=" text-[#1a75bb]  pl-0  lg:pl-1 text-sm lg:text-base  font-TisaOT">
                    MENU
                  </span>
                  <HiOutlineBars3 className=" w-[38px]  lg:w-[52px]  h-[38px]  lg:h-[52px]    text-[#1a75bb] " />
                </>
              )}
            </button>

          
            <div className={`${
          "/investor" === pathname
            ? ' hidden'
            : 'block'
        } `}>
           
            </div>
            <div
              className={`fixed inset-0 bg-opacity-50 z-50 items-center ${
                isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              } transition-opacity duration-1000 ease-in-out`}
            >
              <div
                className={`absolute inset-y-0 left-0 w-full items-center bg-gradient-to-l to-[#0f101c] from-[#171a80] transform ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-1000 ease-in-out`}
              >
                  <img
    src="/vercel.svg"
    alt="Centered Image"
    className="fixed left-[23%] top-[18rem] "
  />
                <Link href={"/home"}>
                <img
                  className="   mt-1 md:mt-1 md:mr-4 left-6 fixed top-6  md:top-[5%]     md:left-16 h-16 w-auto"
                  src="download (2).webp"
                  alt="Error"
                />
</Link>
<Link href={"/contact-us"}>

                <button className=" bg-transparent border rounded-3xl text-white  px-3  py-2 hidden lg:block  fixed top-[6%] right-20   md:right-8  hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                  CONTACT US
                </button>
</Link>
                <button className=" bg-transparent border rounded-3xl text-white  px-3  py-2 hidden lg:block  fixed top-[6%] right-20   md:right-[163px]  hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                  CAREERS
                </button>

                <button
                  onClick={toggleSidebar}
                  className="bg-transparent  text-white px-4 py-2 rounded mt-1 md:mt-1 pt-2 md:mr-4 fixed top-0 right-5 md:top-[44%] md:left-11 w-[60px]"
                >
                  {isSidebarOpen ? (
                    <>
                      <span className=" text-white ml-2 text-lg font-EurostileExt">
                        Close
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-14 h-14 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span className=" text-white ml-1 text-base font-EurostileExt ">
                        Menu
                      </span>
                      <HiOutlineBars3 className="w-[52px] h-[52px] " />
                    </>
                  )}
                </button>

                <div
      className="flex items-center justify-start md:justify-center h-screen "
      
    //   style={{
    //     backgroundImage: 'url("/vercel.svg")',
    //     backgroundPosition: 'center center',
    //     backgroundSize: 'contain',
    //     backgroundRepeat: 'no-repeat',
    //     margin:"auto",
    //     alignItems:"center ",
    //   }}
    >
      <div
      
     
      
       className="flex mt-32 ml-[24px] md:ml-0  md:mt-8 flex-col md:flex-row flex-wrap justify-center gap-6 2xl:gap-14 ">
        <div className="group relative">
          <Link href="/home">
            <div
              className={`${
                "/home" === pathname ? 'text-[#3fa9ff]' : 'text-white'
              }`}
            >
              <h1 className="text-xs text-start font-thin transition">01</h1>
              <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform">
                Home
              </h1>
            </div>
          </Link>
        </div>


                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/about-us"}>
        <div className={`${
          "/about-us" === pathname
            ? 'text-[#3fa9ff]'
            : 'text-white'
        } group-hover:opacity-80 transition-opacity duration-300 ease-in-out`}>
          <h1 className="text-xs text-start font-thin transition">02</h1>
          <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
            About Us
          </h1>
        </div>
      </Link>

                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out    rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white hidden  md:block  font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          About NETSOL Technologies
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Board of Directors
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Management Team
                        </h2>
                        <h2 className="text-white hidden  md:block  font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Social Responsibilities
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/products"}>
                    <div className={`${
          "/products" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        03
                      </h1>
                      <h1 className=" font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Products
                      </h1>
                      </div>
                    </Link>

                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white  hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          NFS Ascent
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          NFS Digital
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          AWS
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Flex
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Hubex
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/investor"}>
                    <div className={`${
          "/investor" === pathname
            ? ' text-[#3fa9ff]' 
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        04
                      </h1>
                      <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Investors
                      </h1>
                      </div>
                    </Link>

                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Company Information
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          News
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Stock Data
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          SEC Filings
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/inovation"}>
                    <div className={`${
          "/inovation" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        05
                      </h1>
                      <h1 className=" font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Inovations
                      </h1></div>
                      </Link>
                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Articles
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Downloads
                        </h2>
                        <h2 className="text-white hidden  md:block font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          In the Labs
                        </h2>
                      </div>
                    </div>
                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/events"}>
                    <div className={`${
          "/events" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin transition">
                        06
                      </h1>
                      <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform">
                        Events
                      </h1>
                      </div>
                    </Link>
                    </div>
                  </div>
                </div>
                </div>
                <Link href={"/explor"}>

                <button className="bg-transparent border-2 hidden font-TisaOT md:block rounded-full text-white  h-[70px] w-[70px] mt-1 mx-auto fixed left-0 right-0 top-[85%] hover:bg-white hover:text-[#1c72b8] transition duration-500 ease-in-out transform text-xs   font-light">
                  SMART
                  <h1>NAV</h1>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>









        {/* EXPLORRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}





    <div className="md:flex-1 flex-col flex ">
    <div className="md:flex-1 flex-col flex   h-screen ml-[0px]  ">
<div className='flex mt-32 lg::mt-16 gap-8 ml-[24px]  '>



      <div className=' w-[98%] flex flex-col justify-between xl:w-[63%] h-[83vh] mb-4 '>
<div>
    <h2 className="text-3xl sm:text-3xl text-[#212121] md:text-5xl lg:text-5xl xl:text-6xl  transition-all duration-1000 font-bold font-AkkuratLight leading-relaxed">
  Welcome to the <span className='text-[#1c72b8]'> NETSOL</span> Tech <br />
  SmartNav Wizard.
</h2>
<p className='text-sm mt-5 sm:text-base text-[#212121] md:text-xl lg:text-2xl xl:text-2xl  transition-all duration-1000 font-bold font-serif leading-relaxed'>Lets quickly get to the information you require.</p>
</div>




<div className='flex flex-col gap-2'>
<div className=''>

<motion.button
  type="button"
  className="bg-[#1c72b8] min-h-8 border border-[#1c72b8] rounded-bl-full rounded-tr-full rounded-br-full px-5 py-3 text-white text-xs font-normal"
  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}   // Animation on hover
>
  What would you like to see?
</motion.button>


</div>


<Fade bottom>
{showNotification && (
  <motion.div 
    className="cookie-notification" 
    onClick={handleHideNotification}
    initial={{ opacity: 0, y: -20 }} // Initial animation state
    animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}   // Animation when shown
    exit={{ opacity: 0, y: -20, transition: { duration: 0.9 } }}    // Animation when hiding
  >
    <div className='flex justify-end'>
      <motion.button
        type="button"
        className="bg-[#e4e4e4] min-h-8 border rounded-bl-full rounded-tl-full rounded-br-full px-5 py-3 text-[#1c72b8] text-xs font-normal"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}   // Animation on hover
      >
        PRODUCTS
      </motion.button>
    </div>

    <div>
      <motion.button
        type="button"
        className="bg-[#1c72b8] min-h-8 border mt-1 text-start border-[#1c72b8] rounded-bl-full rounded-tr-full rounded-br-full px-5 py-3 text-white text-xs font-normal"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}   // Animation on hover
      >
        NFS Ascent and NFS Digital are a complete product suite for finance and leasing companies globally.
      </motion.button>
    </div>

    <div>
      <motion.button
        type="button"
        className="bg-[#1c72b8] min-h-8 mt-1 border text-start border-[#1c72b8] rounded-bl-full rounded-tr-full rounded-br-full px-5 py-3 text-white text-xs font-normal"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}   // Animation on hover
      >
        Product information has been grouped under asset type and business function. For ease of access,  you can <br /> also go to the products page if you like.
      </motion.button>
    </div>
  </motion.div>
)}
</Fade>







<div className='w-full h-[2px] flex flex-item gap-2 bg-slate-200 rounded-full'>              </div>


<div className='flex items-center justify-between flex-wrap'>
<Fade bottom>

{showNotification == true ? 
(<div className='flex flex-item gap-2 flex-wrap mt-3'>
<motion.button
  onClick={handleHideNotification}
  className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
>
  BUSSINESS FUNCTION
</motion.button>

<motion.button
  onClick={handleHideNotification}
  className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
>
  INDUSTRY
</motion.button>

<motion.button
  onClick={handleHideNotification}
  className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
>
  PRODUCTS OVERVIEW
</motion.button>
</div>):(
 <div className='flex flex-item gap-2 flex-wrap mt-3'>
 <Link href="/about-us">
   <motion.button
     whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
     className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
   >
     ABOUT NETSOL
   </motion.button>
 </Link>
 
 <motion.button
   onClick={handleHideNotification}
   whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
   className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
 >
   PRODUCTS
 </motion.button>

 <Link href="/inovation">
   <motion.button
     whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
     className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
   >
     INNOVATION
   </motion.button>
 </Link>

 <Link href="/investor">
   <motion.button
     whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
     className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
   >
     INVESTOR RELATION
   </motion.button>
 </Link>

 <Link href="/events">
   <motion.button
     whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
     className="bg-transparent min-h-8 border border-[#1c72b8] rounded-3xl px-3 py-2 hover:bg-[#eeeeee] text-[#1c72b8] text-xs font-semibold"
   >
     EVENTS
   </motion.button>
 </Link>
</div>
)}
</Fade>










<Fade bottom>

<div className='flex flex-item gap-2 mt-3'>
  <motion.button
    onClick={toggleSidebar}
    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
    type="button"
    className="bg-[#1c72b8] min-h-8 border border-[#1c72b8] rounded-3xl text-white px-3 py-2  text-xs font-thin"
  >
    MENU
  </motion.button>

  <Link href="contact-us">
    <motion.button
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}   // Animation on hover
      type="button"
      className="bg-[#1c72b8] min-h-8 border border-[#1c72b8] rounded-3xl text-white px-3 py-2  text-xs font-thin"
    >
      CONTACT US
    </motion.button>
  </Link>
</div>

</Fade>
</div>













</div>

      </div>



{/* Press Releases CARD */}

      <div className="flex xl:block hidden  transition duration-1000 ease-in-out transform">

<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className=" flex flex-col    w-[95%]   xl:w-[420px] py-4 px-4 border rounded-xl transition duration-1000 ease-in-out transform">

<div className='flex justify-between'>

<div>

 <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Press Releases        </h1>
 <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Released July 17, 2023        </h1>
</div>
<img className='w-12 ' src="Press-Releases.svg" alt="" />
</div>

 <p className="font-light transition-all duration-1000 text-sm mt-3  text-[#4c4c4c]">
 NETSOL Cloud Services Achieves AWS Lambda Service Delivery Designation        </p>
<div>

<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


<hr className='mt-4'/>
<div className='flex justify-between mt-2'>

<div>

<h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
From Twitter    </h1>
<h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
Latest tweet from @netsoltech       </h1>
</div>
<img className='w-12 ' src="twitter.svg" alt="" />
</div>

<p className="font-light transition-all duration-1000 text-sm mt-3  text-[#4c4c4c]">
NETSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights and networking with industry leaders. Lets explore new opportunities and stay ahead of the curve in the auto financing sector.      </p>
<div>

<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>
<hr className='mt-4'/>
<div className='flex justify-between mt-2'>

<div>

<h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
Events  </h1>
<h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
Where you can find us     </h1>
</div>
<img className='w-12 ' src="Events.svg" alt="" />
</div>

<p className="font-light transition-all duration-1000 text-sm mt-3  text-[#4c4c4c]">
Upcoming Event: 0 results</p>
<div>

<button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
        EXPLOR
       </button>
</div>


</div>




</div>

{/* From Twitter Events */}



</div>




      </div>




      </div>
  </div> 
  
  )
}

export default Explor