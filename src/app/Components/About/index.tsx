/* eslint-disable @next/next/no-img-element */
"use client";
import Fade from 'react-reveal/Fade';

import { Fragment } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Menu ,Transition } from '@headlessui/react'
import { Dialog } from "@headlessui/react";
import Sidebar from "../Sidebar";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from '../Footer';
function About() {


  let [popover, setpopover] = useState(false)
  let [popoverone, setpopoverone] = useState(false)
  let [popovertwo, setpopovertwo] = useState(false)
  let [activecardthree, setactivecardthree] = useState(false)

  
  function openpopover() {
    setpopover(true)
  }

  function clospopover() {
    setpopover(false)
  }

  function oneopenpopover() {
    setpopoverone(true)
  }

  function oneclospopover() {
    setpopoverone(false)
  }
  
  function twoopenpopover() {
    setpopovertwo(true)
  }

  function twoclospopover() {
    setpopovertwo(false)
  }
  


  const [activeTab, setActiveTab] = useState("tab1");
  const [activecard, setactivecard] = useState("card");

  const changeTab = (tab: any) => {
    setActiveTab(tab);
    console.log(tab);
  };


  const changecard = (tab: any) => {
    setactivecard(tab);
    console.log(tab);
  };


  const changecardtwo = (tab: any) => {
    setactivecardthree(tab);
    console.log(tab);
  };
  return (
    <>

      <div className="flex   flex-col md:flex-row h-screen overflow-x-hidden relative">
  
        <Sidebar />
        <div className="md:flex-1 flex-col  ml-[18px] md:ml-8 mt-36 md:mt-20 relative">
        

        {/* IMAGES AND BUTTONS */}
        <Fade bottom>
        <div>

            <h1 className="text-[#3c3c3c]">
              You are now viewing <u className="text-[#1a75bb] ">Home</u>{" "}
              / <u className="text-[#1a75bb] ">About Us</u>{" "}
            </h1>

            <div className="relative rounded-2xl transition-all duration-1000 mt-12">
              <img
                className="object-cover transition-all duration-1000 "
                src="vercel.svg"
                alt="Error"
              />

              <div className="absolute top-4 text-black transition-all duration-1000 ">
                <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-[73px] transition-all duration-1000 font-bold font-AkkuratLight">
                  About Us
                </h2>
              </div>
            </div>
            <p className="xl:w-[70%] md:w-[80%] sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-[#9a9b9b] text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
              Proudly serving the world’s top asset finance and leasing
              companies with smart software technology for over four decades
            </p>
            <div className="flex gap-2  item-center mt-6 md:mt-12 transition-all duration-1000 ">
              <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-4  py-3   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                DOWNLOAD PROFILE
              </button>
              <button className=" bg-[#1c72b8] border  border-[#1c72b8] rounded-3xl text-white  px-6  py-3   hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                GET IN TOUCH
              </button>
            </div>

            </div>
            </Fade>


{/* TABS BUTTONS */}
          
        
<div className=" w-[98%] lg:w-[80%] border rounded-lg overflow-hidden shadow-md  bg-gradient-to-t to-[#0f101c] from-[#171a80] py-8 mt-20">
<Fade left>

              <div className="flex flex-wrap items-center text-center">
                {activeTab === "tab1" && (
                  <>
                    <img
                      src="netsol.svg"
                      alt="Your Image"
                      className="w-[40%] h- object-cover lg:block hidden"
                    />

                    <div className="w-full lg:w-[40%] p-6 text-center text-white">
                      <p className="text-5xl md:text-5xl lg:text-6xl font-semibold font-AkkuratLight">
                        We are an{" "}
                        <span className="text-[#1c72b8]">Adaptive</span>{" "}
                        Enterprise
                      </p>
                      <p className="text-sm md:text-base lg:text-lg mt-4">
                        From when we started to where we are now, NETSOL has
                        been progressing as an enterprise that leads change..
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "tab2" && (
                  <>
                    <img
                      src="leadership.svg"
                      alt="Your Image"
                      className="w-[40%] h- object-cover lg:block hidden"
                    />

                    <div className="w-full lg:w-[40%] p-6 text-center text-white">
                      <p className="text-5xl md:text-5xl lg:text-6xl font-semibold font-AkkuratLight">
                        Leadership
                      </p>
                      <p className="text-sm md:text-base lg:text-lg mt-6">
                        Our leadership is focused on developing a culture of
                        innovation and empowerment to create an environment
                        where people are driven and focused on achieving
                        excellence.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "tab3" && (
                  <>
                    <img
                      src="software.svg"
                      alt="Your Image"
                      className="w-[40%] h- object-cover lg:block hidden"
                    />

                    <div className="w-full lg:w-[40%] p-6 text-center text-white">
                      <p className="text-5xl md:text-5xl lg:text-6xl font-semibold font-AkkuratLight">
                        Software
                      </p>
                      <p className="text-sm md:text-base lg:text-lg mt-6">
                        Our smart software solutions are built with smart work
                        engines that adapt to our clients business, optimizes
                        their value delivery and gives them the freedom to
                        evolve{" "}
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "tab4" && (
                  <>
                    <img
                      src="people.svg"
                      alt="Your Image"
                      className="w-[40%] h- object-cover lg:block hidden"
                    />

                    <div className="w-full lg:w-[40%] p-6 text-center text-white">
                      <p className="text-5xl md:text-5xl lg:text-6xl font-semibold font-AkkuratLight">
                        People
                      </p>
                      <p className="text-sm md:text-base lg:text-lg mt-6">
                        We have a young, diverse and experienced global
                        workforce who provide an influx of energy and fresh
                        thought to the enterprise.{" "}
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "tab5" && (
                  <>
                    <img
                      src="metho.svg"
                      alt="Your Image"
                      className="w-[40%] h- object-cover lg:block hidden"
                    />
                    <div className="w-full lg:w-[40%] p-6 text-center text-white">
                      <p className="text-5xl md:text-5xl lg:text-6xl font-semibold font-AkkuratLight">
                        Methodologies
                      </p>
                      <p className="text-sm md:text-base lg:text-lg mt-6">
                        We connect the dots to suggest what our customers
                        imperatives and alternatives might be to achieve the
                        best outcome.{" "}
                      </p>
                    </div>
                  </>
                  )}
              </div>
                  </Fade>
              <Fade bottom>

              <div className="flex items-center justify-center gap-3 lg:gap-6 py-2 bg-[#185291] w-[300px] lg:w-[400px] mx-auto rounded-full">
                <img
                  className={` w-10 lg:w-12 bg-${
                    activeTab === "tab1" ? "white" : "transparent"
                  } rounded-lg`}
                  src="netsol.svg"
                  alt="Error"
                  onClick={() => changeTab("tab1")}
                />
                <img
                  className={` w-10 lg:w-12 bg-${
                    activeTab === "tab2" ? "white" : "transparent"
                  } rounded-lg`}
                  src="leadership.svg"
                  alt="Error"
                  onClick={() => changeTab("tab2")}
                />
                <img
                  className={` w-10 lg:w-12 bg-${
                    activeTab === "tab3" ? "white" : "transparent"
                  } rounded-lg`}
                  src="software.svg"
                  alt="Error"
                  onClick={() => changeTab("tab3")}
                />
                <img
                  className={` w-10 lg:w-12 bg-${
                    activeTab === "tab4" ? "white" : "transparent"
                  } rounded-lg`}
                  src="people.svg"
                  alt="Error"
                  onClick={() => changeTab("tab4")}
                />
                <img
                  className={` w-10 lg:w-12 bg-${
                    activeTab === "tab5" ? "white" : "transparent"
                  } rounded-lg`}
                  src="metho.svg"
                  alt="Error"
                  onClick={() => changeTab("tab5")}
                />
              </div>
              </Fade>

            </div>


{/* Over Four Decades of Global Experience AND 3 BALLS*/}



<div className="flex flex-col gap-[11px] transition-all duration-1000 mt-20">

  {/* First component */}
  <div className="relative h-auto py-8 px-12 gap-8 w-[100vw] lg:h-[550px] border text-white shadow-md flex flex-wrap items-center justify-center bg-gradient-to-t to-[#0f101c] from-[#171a80] fixed top-0 right-8  lg:right-44">
    <div className="w-full text-center lg:text-start lg:w-[43%] text-white">
        <p className="text-4xl md:text-4xl lg:text-4xl font-semibold font-AkkuratLight">
            Over Four Decades of Global Experience
        </p>
        <p className="text-sm md:text-base lg:text-lg">
            With over forty years of experience in providing state-of-the-art solutions, cost-effective capabilities, and consulting services to the global finance and leasing industry, we cater to companies with ever-growing and diverse business requirements across the world.
        </p>
    </div>
    <Fade bottom>
    <div className="flex gap-3 flex-wrap justify-center">
        <div className="w-40 h-40 rounded-full border text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-eurostile">40+</h1>
            <h1 className="text-[#468dcd] text-lg font-light mt-1">Years in the Americas</h1>
        </div>
        <div className="w-40 h-40 rounded-full border text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-eurostile">25+</h1>
            <h1 className="text-[#468dcd] text-lg font-light mt-1">Years in Europe</h1>
        </div>
        <div className="w-40 h-40 rounded-full border text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-eurostile">20+</h1>
            <h1 className="text-[#468dcd] text-lg font-light mt-1">Years in Asia Pacific</h1>
        </div>
    </div></Fade>
</div>


  <h1 className=" font-AkkuratLight text-5xl mt-20 w-full lg:w-[79%] text-center font-semibold">Our Edge</h1>
{/*Our Edge CARDS 4 CARDS */}
  <div className=" mt-[30px] text-center ">
<div className="flex  flex-row flex-wrap  gap-8 mt-20 ">


<Fade left>
  <div className="w-[98%] md:w-[39%] rounded-md py-8 px-8 bg-white  ]  transition-all duration-1000" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 12px' }}>
    <h1 className="text-3xl font-semibold font-AkkuratLight">Proven Track Record</h1>
    <p className="mt-4 pb-8  font-light text-[#878787]">NETSOL Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.</p>
  </div>
  <div className="w-[98%] md:w-[39%] rounded-md py-8 px-8 bg-white   transition-all duration-1000" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 12px' }}>
    <h1 className="text-3xl font-semibold font-AkkuratLight">Domain Expertise</h1>
    <p className="mt-4   font-light text-[#878787]">With our rich history of innovation, NETSOL Technologies is a dynamic leader and has been able to accumulate a wealth of experience in the global asset finance and leasing industry. We have built a large knowledge base which is regularly refined and updated to ensure the most up-to-date best practices and business solutions for the benefit of our clients and partners.</p>
  </div>
  <div className="w-[98%] md:w-[39%] rounded-md py-8 px-8 bg-white   transition-all duration-1000" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 12px' }}>
    <h1 className="text-3xl font-semibold font-AkkuratLight">Ensured Service Levels</h1>
    <p className="mt-4   font-light text-[#878787]">With a presence in 8 strategically located cities across the globe, and a team of more than 1300 professionals, we ensure that our clients get dedicated attention from the best minds in the industry. We boast an impressive portfolio of several quality awards which further solidify our dominance and status as the finest global service providers.</p>
  </div>
  <div className="w-[98%] md:w-[39%] rounded-md py-8 px-8 bg-white   transition-all duration-1000" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 12px' }}>
    <h1 className="text-3xl font-semibold font-AkkuratLight">Pioneers in the Industry</h1>
    <p className="mt-4   font-light text-[#878787]">NETSOL Technologies maintains its position as a leader in providing innovative solutions to the global asset finance and leasing industry. We take pride in being the first organization in the industry to introduce digital transformation and launch a complete line of digital solutions. We introduced our digital suite to help companies tap into the advantages of digitization and mobility while taking control of the challenges inherent in this environment.</p>
  </div>
  </Fade>
  </div>
</div>  

</div>










{/* Board of Directors 5 CARDS */}
<Fade bottom>
<div className="relative   mt-20 fixed top-0 right-8  lg:right-40">
<div className="h-auto py-8 px-12 relative w-[100vw]   mt-20 fixed top-0      text-center text-white text-4xl  font-AkkuratLight    bg-gradient-to-t to-[#0f101c] from-[#0f101c]">
<h1 className=' pl-0 lg:pl-10'>Board of Directors
</h1>
</div>
          
          
          <div className=" h-auto py-12 px-12  w-[100vw]   shadow-md bg-gradient-to-t to-[#0f101c] from-[#171a80]">
<div className="flex flex-wrap items-center justify-center     gap-12 ">

<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px] p-8 h-[500px]">
    <img src="Najeeb.png" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Najeeb Ghauri</h2>
    <p className="text-[#333333] text-center">Founder, Chairman & <br /> Chief Executive Officer, <br /> NETSOL Technologies, Inc..</p>
    <div className="flex items-center space-x-4">
        <button onClick={openpopover} className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[70%]" />
    </div>
</div>

<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px] p-8 h-[500px]">
    <img src="kausar-kazmi.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Syed Kausar Kazmi</h2>
    <p className="text-[#333333] text-center">Independent Director, <br /> Chairman of Audit Committee </p>
    <div className="flex items-center space-x-4">
        <button
        onClick={oneopenpopover}
        className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[70%]"/>
    </div>
</div>
<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px] p-8 h-[500px]">
    <img src="Mark-Caton.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Mark Caton</h2>
    <p className="text-[#333333] text-center">Independent Director & <br /> Chair of Compensation Committee</p>
    <div className="flex items-center space-x-4">
        <button
          onClick={twoopenpopover}
        className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[70%]"/>
    </div>
</div>   

{activecard === "card1" && (
                  <>
                  
                 
                  <div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px] p-8 h-[500px]">
    <img src="user.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Michael Francis</h2>
    <p className="text-[#333333] text-center">Independent Director</p>
    <div className="flex items-center space-x-4">
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[70%]"/>
    </div>
</div>
</> )}


{activecard === "card1" && (
                  <>                 
                  <div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px] p-8 h-[500px]">
    <img src="malea.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Malea Farsai</h2>
    <p className="text-[#333333] text-center">Malea Farsai</p>
    <div className="flex items-center space-x-4">
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[70%]"/>
    </div>
</div>
</> )}





</div>





</div>

<section>

<Transition appear show={popover} as={Fragment}>
        <Dialog as="div" className="" onClose={clospopover}>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[90%] md:w-[70vw]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h1 onClick={clospopover} className='cursor-pointer text-end font-semibold'>X</h1>

                <div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center  ]">
    <img src="Najeeb.png" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Najeeb Ghauri</h2>
    <p className="text-[#333333] text-center">Founder, Chairman & <br /> Chief Executive Officer, <br /> NETSOL Technologies, Inc..</p>
   <p>
   Mr. Najeeb Ghauri is the founder, chairman of the board of directors and CEO of NETSOL Technologies, Inc. In the early years of the company, Mr. Ghauri was responsible for restructuring NETSOL business model into that of an IT company. Additionally, he was instrumental in the completion of the NETSOL Technologies, Inc. initial public offering in 1998, as well as listing the companys major Pakistan-based subsidiary, NETSOL Technologies Ltd., on the Karachi Stock Exchange in 2005. Prior to launching NETSOL in the U.S., Mr. Ghauri had over 15 years of combined marketing and management experience with Fortune 500 companies such as Unilever and Atlantic Richfield Corporation (ARCO). Mr. Ghauri is also active in various charitable and educational non-governmental organizations (NGOs) worldwide. He is a founding board member of the Pakistan Human Development Fund, which provides educational tools to children in underdeveloped areas of Pakistan.
   </p>
</div>
                  

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      <Transition appear show={popoverone} as={Fragment}>
        <Dialog as="div" className="" onClose={oneclospopover}>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[90%] md:w-[70vw]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h1 onClick={oneclospopover} className='cursor-pointer text-end font-semibold'>X</h1>

                <div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center  ]">
                <img src="kausar-kazmi.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Syed Kausar Kazmi</h2>
    <p className="text-[#333333] text-center">Independent Director, <br /> Chairman of Audit Committee </p>
   <p>
   SYED KAUSAR KAZMI has been an independent director of the Company since 2019. Mr. Kazmi brings over 40 years of expertise in the banking industry and is currently the Head of Commercial Banking and Business Development at Habib Bank Zurich PLC, located in London where he has served in this capacity since 2016. Prior to this position, Mr. Kazmi served as the Head of Business Development for UK and Europe at Habib Bank AG Zurich in London from 2012-2016, before which Mr. Kazmi was the CEO of the UK operations of Habib Bank AG Zurich from 2009-2012. In 2018, Mr. Kazmi was awarded by Power 100, Parliamentary Review in association with The British Publishing Company a Lifetime Achievement Award for his significant and lasting impact on the banking sector. In addition, Mr. Kazmi has been awarded by the Asian Media Group the GG2 Power List celebrating Britains 101 most influential Asians from 2016-2018. Mr. Kazmi received his BSc in Chemical Engineering with II Class Honors from Habib Institute of Technology in 1974. He sits on the board of many charitable organizations, with a focus on helping raise funds. Skills and Qualifications: Mr. Kazmi has strong financial services and management expertise. He directs the operations of a financial services business, expending its focus on business development.   </p>
</div>
                  

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={popovertwo} as={Fragment}>
        <Dialog as="div" className="" onClose={twoclospopover}>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[90%] md:w-[70vw]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h1 onClick={twoclospopover} className='cursor-pointer text-end font-semibold'>X</h1>

                <div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center  ]">
                <img src="Mark-Caton.jpg" alt="Profile Image" className="rounded-full h-40 w-40" />
    <h2 className="text-3xl font-AkkuratLight font-semibold">Mark Caton</h2>
    <p className="text-[#333333] text-center">Independent Director & <br /> Chair of Compensation Committee</p>
   <p>
   Mr. Caton currently is president of Centela Systems, Inc., a distributor of computer peripheral solutions in the multimedia and digital electronic market segment. Prior to joining Centela, Mr. Caton was president of NETSOL Technologies USA, where he was responsible for all U.S. sales. He also previously served as a senior account executive at ePlus, a leading integrator of technology solutions. Mr. Caton received a bachelors degree in psychology from the University of California, Los Angeles.  </p>
</div>
                  

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </section>



<div className="h-auto py-8 px-12 flex flex-wrap  relative w-[100vw]    fixed top-0  items-center justify-center bg-gradient-to-t to-[#171a80] from-[#171a80] text-4xl">
  <button
    onClick={() => changecard("card1")}
    className={`text-white border w-16 h-16 cursor-pointer rounded-full ${activecard === "card1" ? "hidden" : "block"} sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20`}
  >
    +
  </button>
</div>




</div>
</Fade>



<Fade bottom>

{/* Management Team CARDS */}
<h1 className=" font-AkkuratLight text-4xl font-semibold mt-20 w-full lg:w-[79%] text-center">Management Team</h1>

<div className='flex gap-11 flex-wrap mt-20'>

<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px]  h-[270px]">
    <h2 className="text-3xl font-AkkuratLight font-semibold">Najeeb Ghauri</h2>
    <p className="text-[#333333] font-sans font-light text-center">Founder, Chairman & <br /> Chief Executive Officer, <br /> NETSOL Technologies, Inc..</p>
    <div className="flex items-center space-x-4 mt-6">
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[60%]" />
    </div>
</div>
<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px]  h-[270px]">
    <h2 className="text-3xl font-AkkuratLight font-semibold">Naeem Ghauri</h2>
    <p className="text-[#333333] font-sans font-light text-center">Founder, President, <br />
Chief Executive Officer Innovation and <br /> OTOZ,
NETSOL Technologies, Inc.</p>
    <div className="flex items-center space-x-4 mt-6">
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[60%]" />
    </div>
</div>
<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px]  h-[270px]">
    <h2 className="text-3xl font-AkkuratLight font-semibold">Naeem Ghauri</h2>
    <p className="text-[#333333] font-sans font-light text-center">Founder, President, <br />
Chief Executive Officer Innovation and <br /> OTOZ,
NETSOL Technologies, Inc.</p>
    <div className="flex items-center space-x-4 mt-6">
        <button  className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[60%]" />
    </div>
</div>








  </div>

<div className=" flex flex-wrap items-center justify-center w-full lg:w-[79%]  mt-10 text-4xl">
  <button
    onClick={() => changecardtwo("card3")}
    className={`text-[#1c72b8] border-[#1c72b8]    border w-16 h-16 cursor-pointer rounded-full ${activecardthree === "card3" ? "hidden" : "block"} sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20`}
  >
    +
  </button>
</div> 

{/*  Advisory Board   */}
<h1 className=" font-AkkuratLight text-4xl font-semibold mt-20 w-full lg:w-[79%] text-center">Advisory Board</h1>


 <div className='flex gap-8'>

<div className="bg-white rounded-2xl flex flex-col gap-5 items-center justify-center border shadow-md w-[98%] md:w-[380px]  h-[270px]">
    <h2 className="text-3xl font-AkkuratLight font-semibold">Georg Bauer</h2>
    <p className="text-[#333333] font-sans font-light text-center">Chairman and
Co-founder of
Fair.com</p>
    <div className="flex items-center space-x-4 mt-6">
        <button onClick={openpopover} className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-5 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold">
            PROFILE
        </button>
        <FaLinkedinIn className="text-[#1c72b8] relative top-0 left-[60%]" />
    </div>
</div>

</div>

{/* Advisory Board Nasdaq Closing Bell Ceremony & IMAGES   */}

<div className='text-center'>


  <div className='text-center'>
  <h1 className='font-AkkuratLight text-4xl font-semibold mt-20 w-full lg:w-[79%] text-center'>Nasdaq Closing Bell Ceremony</h1>
<p className='  text-center w-full lg:w-[79%]  text-[#7c7d7d] mt-6 font-sans font-light  text-2xl'>NETSOL rings closing bell to commemorate its 20th listing anniversary at Nasdaq.</p>


<div className='flex flex-row gap-10 mt-10 flex-wrap'>

<img className='w-[98%]  md:w-[380px] rounded-md '      src="thumbnail_IMG_0015.jpg" alt="ERROR" />
<img className='w-[98%]  md:w-[380px] rounded-md '   src="thumbnail_IMG_0017.jpg" alt="ERROR" />
<img className='w-[98%]  md:w-[380px] rounded-md '      src="FB_IMG_1645432165056.jpg" alt="ERROR" />


  
    </div>


</div>


</div>


{/* Corporate Governance */}
<div className='text-center'>
  <h1 className='text-center text-4xl  w-full lg:w-[79%] font-AkkuratLight font-semibold'>Corporate Governance</h1>
<p className=' w-full lg:w-[79%] text-center  text-[#7c7d7d] mt-6 font-serif font-light text-2xl'>We take our corporate governance, ethics and policies seriously. For any issues or concerns regarding corporate governance, ethics, and policies, including employment policies regarding harassment or other similar issues, please call (888) 571-8220 or international callers may call (213) 205-1432 or email us</p>
<p className='w-full lg:w-[79%] text-center text-[#7c7d7d] mt-6 font-serif font-light text-2xl underline'>corporategovernance@netsoltech.com</p>


<div className='flex flex-row gap-9 mt-10 flex-wrap'>


  <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
       className="mt-6 flex flex-col gap-6  w-[98%] xl:w-96 border text-center h-72 justify-between py-6 px-6 rounded-xl transition duration-1000 ease-in-out transform">
   
        <h1 className="text-2xl text-[#212121] font-eurostile font-semibold transition duration-1000 ease-in-out transform">
        Amended and Restated-Code of Ethics
        </h1>
      
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               DOWNLOAD
              </button>
   </div>
    </div>
    <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
       className="mt-6 flex flex-col gap-6  w-[98%] xl:w-96 border text-center h-72 justify-between py-6 px-6 rounded-xl transition duration-1000 ease-in-out transform">
   
        <h1 className="text-2xl text-[#212121] font-eurostile font-semibold transition duration-1000 ease-in-out transform">
        Amended and Restated-Audit Committee Charter
        </h1>
      
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               DOWNLOAD
              </button>
   </div>
    </div>
    <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
       className="mt-6 flex flex-col gap-6  w-[98%] xl:w-96 border text-center h-72 justify-between py-6 px-6 rounded-xl transition duration-1000 ease-in-out transform">
   
        <h1 className="text-2xl text-[#212121] font-eurostile font-semibold transition duration-1000 ease-in-out transform">
        Amended and Restated Charter of the Nominating and Corporate Governance Committee of nominating committee charter
        </h1>
      
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               DOWNLOAD
              </button>
   </div>
    </div>


    <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
       className="mt-6 flex flex-col gap-6  w-[98%] xl:w-96 border text-center h-72 justify-between py-6 px-6 rounded-xl transition duration-1000 ease-in-out transform">
   
        <h1 className="text-2xl text-[#212121] font-eurostile font-semibold transition duration-1000 ease-in-out transform">
        Amended and Restated Charter of the Compensation Committee
        </h1>
      
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               DOWNLOAD
              </button>
   </div>
    </div>
    </div>


</div>





{/* IMAGES AND 3 CARDS  */}
<div className="relative  w-[98%] lg:w-[80%] transition-all duration-1000  mt-20">
  <img src="mohammad-rahmani-lPKIb8dJ8kw-unsplash.jpg" alt="Your Image" className=" object-cover transition-all duration-1000  w-full h-[1020px]  md:h-[860px] lg:h-[760px] xl:h-[660px] rounded-lg shadow-lg"/>

  <div className="absolute top-0 left-0 p-6 text-white transition-all duration-1000 ">
    <h2 className="text-5xl  font-semibold font-serif mt-32 xl:mt-36 transition-all duration-1000 ">We all want a better future. Together, we can make a difference.</h2>
    <p className=" text-lg md:text-xl mt-10 transition-all duration-1000 ">Our commitment towards innovation and providing greater services to our customers is second to none. This philosophy of excelling in everything we do has enabled us to not only fulfill our environmental sense of responsibility, but go further beyond. We acknowledge global climate change as a real problem, and as a borderless company, we pledge to do everything in our capacity to tackle the problem. To that end, we ensure that we eliminate wasteful practices and make all our processes as energy efficient as possible.</p>
<div className="flex gap-2  item-center mt-6 md:mt-8 transition-all duration-1000 ">
              <button className=" bg-transparent border  border-white rounded-3xl text-white mt-20  px-4  py-3   hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                DOWNLOAD PROFILE
              </button>
             
            </div>
  </div>

</div>












{/* CARDS */}
 
<div className="flex gap-[20px]  xl:gap-[60px] flex-wrap transition duration-1000 ease-in-out transform">

       <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
     className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[370px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
 
 <div className='flex justify-between'>

   <div>

        <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        Press Releases        </h1>
        <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        Released July 17, 2023        </h1>
   </div>
<img className='w-12 ' src="Press-Releases.svg" alt="" />
</div>

        <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
        NETSOL Cloud Services Achieves AWS Lambda Service Delivery Designation        </p>
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               EXPLOR
              </button>
   </div>
    </div>



    <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
     className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[370px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
 
 <div className='flex justify-between'>

   <div>

        <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        From Twitter        </h1>
        <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        Latest tweet from @netsoltech   </h1>
   </div>
<img className='w-12 ' src="twitter.svg" alt="" />
</div>

        <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
        NETSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights      </p>
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               EXPLOR
              </button>
   </div>
    </div>


    <div 
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
     className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[370px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
 
 <div className='flex justify-between'>

   <div>

        <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        Events        </h1>
        <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
        Where you can find us     </h1>
   </div>
<img className='w-12 ' src="Press-Releases.svg" alt="" />
</div>

        <p className="font-light transition-all duration-1000   text-[#4c4c4c]">
        Upcoming Event: 0 results      </p>
   <div>

   <button className=" bg-transparent border  border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-6  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
               EXPLOR
              </button>
   </div>
    </div>
    </div> 
    </Fade>

<Footer/>

        </div>

    
      </div>
    </>
  );
}

export default About;
