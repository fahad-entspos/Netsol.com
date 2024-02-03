"use client";
import { usePathname } from 'next/navigation';
import { IoReorderThreeOutline } from "react-icons/io5";

import React, { useState } from "react";
import { TfiMouse } from "react-icons/tfi";
import { HiOutlineBars3 } from "react-icons/hi2";
import styles from "@/app/Components/Sidebar/Sidebar.module.css"

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
function Sidebar() {
  const pathname = usePathname()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className='z-50'>
      {/* <div className={`${    "/investor  || contact-us" === pathname    ? ' hidden'  : 'block'  } `}>
      <button className=" absolute text-white top-12 right-[15%] md:right-[4%] rounded   font-AkkuratLight  text-lg ">
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
          </Menu> </button>  </div> */}

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
                  <span className=" text-[#1a75bb]  pl-1  lg:pl-1 text-xs lg:text-base  font-TisaOT">
                    MENU
                  </span>
                  <IoReorderThreeOutline className=" w-[38px]  lg:w-[52px]  h-[38px]  lg:h-[52px]    text-[#1a75bb] " />
                </>
              )}
            </button>

            <div className={`bg-transparent text-white px-4 py-2 rounded mt-1 pt-2 mr-4 fixed cursor-pointer lg:block hidden right-5 top-[85%] left-11 ${styles.marqueeContainer}`}>
  <span className={`text-[#1a75bb] ml-1 text-xs items-center font-TisaOT ${styles.marqueeText}`}>
    SCROLL
  </span>
  <TfiMouse className="w-[32px] h-[32px] items-center ml-2 text-[#1a75bb]" />
</div>

            <div className={`${
          "/investor" === pathname
            ? ' hidden'
            : 'block'
        } `}>
            <div className="bg-transparent text-white  fixed cursor-pointer  font-TisaOT lg:block hidden text-xs text-center  top-[88%] left-[92%]">
              <span className=" text-[#1a75bb]  font-TisaOT  ">
                REQUEST <br />A <br />
                MEMO
              </span>
            </div>
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
                      <IoReorderThreeOutline className="w-[52px] h-[52px] " />
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

                <button className="bg-transparent border-2 hidden md:block rounded-full font-TisaOT text-white  h-[70px] w-[70px] mt-1 mx-auto fixed left-0 right-0 top-[85%] hover:bg-white hover:text-[#1c72b8] transition duration-500 ease-in-out transform text-xs   font-light">
                  SMART
                  <h1>NAV</h1>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Sidebar;
