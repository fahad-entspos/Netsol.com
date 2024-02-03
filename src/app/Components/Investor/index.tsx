/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from '../Sidebar'
import Footer from '../Footer';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';

function Investor() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };
  const [selectedButton, setSelectedButton] = useState("5Y");

  const handleButtonClick = (num:any) => {
    setSelectedButton(num === selectedButton ? null : num);
  };
  
  


  return (
    <div className="flex   flex-col md:flex-row h-screen relative transition duration-1000 ease-in-out ">

 <Sidebar />
 <div className="md:flex-1 flex flex-col ml-[18px] md:ml-12 mt-36 md:mt-20 transition duration-1000 ease-in-out ">

  {/* nav */}


 <div>
         <h1 className="text-[#3c3c3c] transition duration-1000 ease-in-out ">
           You are now viewing <u className="text-[#1a75bb] ">Investors</u>{" "}
           / <u className="text-[#1a75bb] "> Overview</u>{" "}
         </h1>
<Fade bottom>
         <div className="relative rounded-2xl transition-all duration-1000 mt-12">
           <img
             className="object-cover transition-all duration-1000 "
             src="vercel.svg"
             alt="Error"
           />

           <div className="absolute top-4 text-black transition-all duration-1000 ">
             <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-[63px] transition-all duration-1000 font-bold font-AkkuratLight">
             Investor Relations
             </h2>
           </div>
         </div>
         <p className="xl:w-[70%] md:w-[80%] sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-[#9a9b9b] text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
         This section includes the latest news, financial reports, companys performance, share value and other investor related information about NETSOL Technologies         </p>
         </Fade>
  
        
       </div>

{/* images */}
<Fade bottom>
       <div className="relative w-[98%] xl:w-[88%] transition-all duration-1000  mt-20">
       <img
  src="homeee (18).jpg"
  alt="Your Image"
  className="object-cover transition-all duration-1000 w-full h-[820px] md:h-[430px] lg:h-[460px] xl:h-[460px] rounded-lg shadow-lg"
  style={{ filter: 'brightness(20%)' }}
/>

  <div className="absolute top-0 left-0 p-4 text-white transition-all duration-1000 ">
    <h2 className="text-5xl  font-semibold font-serif mt-16 xl:mt-20 transition-all duration-1000 ">A brief overview of NETSOL</h2>
    <p className=" text-lg md:text-xl mt-10 transition-all duration-1000 ">NETSOL Technologies, Inc. (Nasdaq:NTWK) is a worldwide provider of IT and enterprise software solutions primarily serving the global leasing and financing industry. The Companys suite of applications are backed by 40 years of domain expertise and supported by a committed team of 1300+ professionals placed in eight strategically located support and delivery centers throughout the world.</p>
<u className='mt-6 transition-all duration-1000 '>View Fact Sheet</u>

  </div>

</div>
</Fade>

{/*4 card */}
   








<div className=" w-[98%] xl:w-[88%] flex justify-between  transition duration-1000 ease-in-out  mt-20">
  <h1 className='font-AkkuratLight font-semibold  text-2xl'>News</h1>
  <h1 className='font-AkkuratLight font-semibold  text-xl text-[#1a75bb]'>SHOW ALL</h1>
</div>

<div className="flex gap-[20px]  xl:gap-[36px] mt-4 flex-wrap transition duration-1000 ease-in-out transform">

<motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
      className="mt-6 flex flex-col justify-between w-[98%] h-72 xl:w-[270px] py-6 px-6 border rounded-xl"
    >
      <h1 className="text-lg text-black font-AkkuratLight font-semibold">
        NETSOL Technologies Sets Fiscal Second Quarter 2024 Conference Call for Tuesday, February 13 at 9:00 am ET
      </h1>

      <div>
        <p className="font-light text-[#4c4c4c]">31/01/2024</p>
        <div>
          <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>


    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
      className="mt-6 flex flex-col justify-between w-[98%] h-72 xl:w-[270px] py-6 px-6 border rounded-xl"
    >
      <h1 className="text-lg text-black font-AkkuratLight font-semibold">
        NETSOL Technologies appoints Jason Hurwitz as Sales Director of Europe
      </h1>

      <div>
        <p className="font-light text-[#4c4c4c]">16/01/2024</p>
        <div>
          <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
      className="mt-6 flex flex-col justify-between w-[98%] h-72 xl:w-[270px] py-6 px-6 border rounded-xl"
    >
      <h1 className="text-lg text-black font-AkkuratLight font-semibold">
      NETSOL Technologies appoints Jason Hurwitz as Sales Director of Europe      </h1>

      <div>
        <p className="font-light text-[#4c4c4c]">16/01/2024</p>
        <div>
          <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>


    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
      className="mt-6 flex flex-col justify-between w-[98%] h-72 xl:w-[270px] py-6 px-6 border rounded-xl"
    >
      <h1 className="text-lg text-black font-AkkuratLight font-semibold">
      Haydock Finance Subscribes to Additional Appex Now Products – Dock and Lane     </h1>

      <div>
        <p className="font-light text-[#4c4c4c]">3/01/2024</p>
        <div>
          <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>
</div>

{/* 2 card */}


<Fade bottom>
<div className='flex flex-wrap gap-8 mt-14'>


<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-auto md:h-[350px] xl:w-[580px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Company <br />
Information      </h1>

<div className='flex justify-between flex-wrap mb-10'>
<p className="font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider mt-5 mb-10">
    Address: <br />
    16000 Ventura Blvd <br />
    Suite 770 <br />
    Encino <br />
    CA 91436, US
</p>

<p className="font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider mt-5 mb-10">
Telephone:<br />
818-222-9195 <br />
   <br />
   Email:<br />
   info@netsoltech.com
</p>
</div>

<div>

</div>


   </div>




<div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col    w-[98%]      h-auto md:h-[350px] xl:w-[580px] px-4   py-2  border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-black font-AkkuratLight mt-5 font-semibold transition duration-1000 ease-in-out transform">
 Corporate <br />
Governance     </h1>



<div className='flex  justify-between  gap-20 md:gap-2 py-1 mt-4 scroll-smooth  overflow-x-scroll  md:overflow-x-hidden overflow-y-hidden  '>

  <div className='flex flex-col gap-2'>
    <div className='flex flex-col gap-1  md:gap-2'>
      <p className='flex items-center gap-1  md:gap-2 font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>
        Chair <span className='hidden md:block'>— </span> <img className='w-4 h-4' src="userFill.svg" alt="Error" />
      </p>
      <p className='flex items-center gap-2 font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>
        Member <span className='hidden md:block'>— </span>  <img className='w-4 h-4' src="userOutline.svg" alt="Error" />
      </p>
    </div>

    <div className='mt-1 md:mt-4 '>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Najeeb Ghauri</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Mark Caton</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Malea Farsai</h1>
      <h1 className='font-light transition-all duration-1000 mt-1 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Syed Kausar </h1>
      <h1 className='font-light transition-all duration-1000 mt-1 md:mt-3 text-[#4c4c4c] font-sans text-[10px]  md:text-sm'>Michael Francis</h1>
    </div>
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Audit <br />Committee</p>
    <img className='w-6 h-6 mt-12' src="userOutline.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userFill.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userOutline.svg" alt="Error" />
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Compensation <br />Committee</p>
    <img className='w-6 h-6 mt-12' src="userFill.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userOutline.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userOutline.svg" alt="Error" />
  </div>

  <div className='flex flex-col items-center text-center '>
    <p className='font-light transition-all duration-1000 text-[#4c4c4c] tracking-wider text-xs'>Governance and <span className='hidden md:block'>Nominating Committee</span></p>
    <img className='w-6 h-6 mt-12' src="userOutline.svg" alt="Error" />
    <img className='w-6 mt-6 h-6' src="userOutline.svg" alt="Error" />
    <img className='w-6 h-6 mt-4' src="userFill.svg" alt="Error" />
  </div>

</div>




  



<div>

</div>


   </div>
   </div>


{/*again 2 card */}
<div className='flex flex-wrap mt-14 gap-8'>


<div 

className="mt-6 flex flex-col    w-[95%]  h-auto md:h-[420px] xl:w-[580px]  rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-3xl text-[#212121] font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Share <br />
Performance  </h1>
<p className="font-light text-sm transition-all duration-1000 mt-2 text-[#4c4c4c] tracking-wider">
NETSOL is listed on the NASDAQ with the symbol NTWK
</p>

  <img src="pngwing.com.png" alt="" />

 
 <div className='flex justify-between mt-5'>
      {["1D", "5D", "1M", "6M", "1Y", "2Y", "5Y"].map((num) => (
        <button
          key={num}
          className={`p-2 m-1 rounded-lg  cursor-pointer ${
            num === selectedButton ? 'bg-[#1c76bc] text-white' : 'bg-white'
          }`}
          onClick={() => handleButtonClick(num)}
        >
          {num}
        </button>
      ))}
    </div>


   </div>


   <div 
 style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
className="mt-6 flex flex-col justify-between   w-[98%]  h-auto md:h-[420px] xl:w-[580px] py-10 px-10 border rounded-xl transition duration-1000 ease-in-out transform">



 <h1 className="text-4xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
 Stock Snapshot   </h1>

<div className='flex justify-between mt-3'>



<div className='flex flex-col gap-6'>


<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
CurrentPrice
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
$2.07  </h1>

</div>

<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
MKT Cap
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
23.54m </h1>

</div>
</div>

<div className='flex flex-col gap-6'>


<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
Net Change
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
0.01 (0.49%) </h1>

</div>

<div className='flex  flex-col justify-between flex-wrap '>
<p className="font-light text-base transition-all duration-1000 text-[#4c4c4c] tracking-wider">
Volume
</p>
<h1 className="text-2xl text-black font-AkkuratLight font-semibold transition duration-1000 ease-in-out transform">
2,127 </h1>

</div>
</div>



</div>


{/* paragraph */}

<p className="font-light text-base transition-all duration-1000 mt-8 text-[#4c4c4c] tracking-wider">
LAST UPDATED JANUARY 31, 2024 4:00 PM EST
</p>



<div>

<button className=" bg-transparent border  mt-8 border-[#1c72b8] rounded-3xl text-[#1c72b8]  px-4  py-2   hover:bg-[#1c72b8] hover:text-white transition duration-300 ease-in-out transform  text-sm font-semibold ">
        MORE STOCK DATA
       </button>

</div>

   </div>

   </div>

   </Fade>



{/* footer */}



<Footer/>
</div>
</div>
  )
}

export default Investor