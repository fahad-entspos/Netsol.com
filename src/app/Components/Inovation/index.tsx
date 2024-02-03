/* eslint-disable @next/next/no-img-element */
"use client";
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';

import React from 'react'
import Sidebar from '../Sidebar'

import Footer from "../Footer";

function Inovation() {


  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'easeInOut' } },
    hover: { scale: 1.03 },
  };



  return (
    <div className="flex   flex-col md:flex-row h-screen  transition duration-1000 ease-in-out ">

 <Sidebar />

<Fade bottom>

 <div className="md:flex-1 flex flex-col ml-[18px] md:ml-12 mt-36 md:mt-20 transition duration-1000 ease-in-out transform" >
 <div>
         <h1 className="text-[#3c3c3c]">
           You are now viewing <u className="text-[#1a75bb] ">Home</u>
           / <u className="text-[#1a75bb] ">Innovation</u>
         </h1>

         <div className="relative rounded-2xl transition-all duration-1000 mt-12">
           <img
             className="object-cover transition-all duration-1000 w-[90%] "
             src="innovation-left.svg"
             alt="Error"
           />

           <div className="absolute top-4 text-[#212121] transition-all duration-1000 ">
             <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-[43px] transition-all duration-1000 font-bold font-AkkuratLight">
             Inovation
             </h2>
           </div>
         </div>
         <p className="xl:w-[70%] md:w-[80%] text-[#4f4f4f]     sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
         NETSOL Technologies maintains its position as a leader in providing innovative solutions to the global asset finance and leasing industry. This section is a knowledge hub with a collection of material and relevant resources divided into the technologies that are currently being worked on by our R&D teams in the lab as well as the latest collection of articles and downloads.


         </p>
    

        
       </div>



                                {/* Cards */}



<div className="flex  gap-5 flex-wrap transition duration-1000 ease-in-out transform mt-16">

<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
      className="mt-6 flex flex-col gap-6 w-[98%] xl:w-96 border py-4 px-6 rounded-xl"
    >
      <motion.h1
        className="text-3xl text-[#212121] font-AkkuratLight font-semibold"
        variants={cardVariants}
      >
        In the Lab
      </motion.h1>
      <motion.p
        className="text-[#3c3c3c]"
        variants={cardVariants}
      >
        Discover the technologies our R&D teams are experimenting and constantly working on to ensure our clients have a future-proof business while always a step ahead of the market.
      </motion.p>
      <motion.div variants={cardVariants}>
        <motion.button
          className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          EXPLORE
        </motion.button>
      </motion.div>
    </motion.div>

    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
      className="mt-6 flex flex-col gap-6 w-[98%] xl:w-96 border py-4 px-6 rounded-xl"
    >
      <motion.h1
        className="text-3xl text-[#212121] font-AkkuratLight font-semibold"
        variants={cardVariants}
      >
        Articles
      </motion.h1>
      <motion.p
        className="text-[#3c3c3c]"
        variants={cardVariants}
      >
        Explore our articles section, and learn about the current global finance and leasing landscape through information, facts and figures regularly written by professionals from our global team.
      </motion.p>
      <motion.div variants={cardVariants}>
        <motion.button
          className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          EXPLORE
        </motion.button>
      </motion.div>
    </motion.div>

    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
      className="mt-6 flex flex-col gap-6 w-[98%] xl:w-96 border py-4 px-6 rounded-xl"
    >
      <motion.h1
        className="text-3xl text-[#212121] font-AkkuratLight font-semibold"
        variants={cardVariants}
      >
        Downloads
      </motion.h1>
      <motion.p
        className="text-[#3c3c3c]"
        variants={cardVariants}
      >
        View our collection of material and relevant resources pertaining to the global finance and leasing industry. Download infographics, profiles, videos, and whitepapers.
      </motion.p>
      <motion.div variants={cardVariants}>
        <motion.button
          className="bg-transparent transition duration-1000 ease-in-out transform border border-[#1c72b8] rounded-3xl text-[#1c72b8] px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          EXPLORE
        </motion.button>
      </motion.div>
    </motion.div>
    </div>




<Footer/>


   </div>

   </Fade>
</div>  )
}

export default Inovation