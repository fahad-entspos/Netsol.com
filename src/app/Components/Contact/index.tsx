"use client"

import { motion } from 'framer-motion';
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import Fade from 'react-reveal/Fade';

function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 160 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };
  
  const infoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    companyName: '',
    country: '',
    phone: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    designation: '',
    companyName: '',
    country: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string ) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [field]: value }));
    setValidationErrors((prevErrors: any) => ({ ...prevErrors, [field]: '' }));
  };

  const handleNextClick = () => {
    const errors = {};

    // Perform validation logic here
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Example validation for email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.email = 'Invalid email address';
    }

    // Repeat validation for other fields...

    // Set validation errors
    setValidationErrors(errors);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // Proceed with the next steps or actions
      console.log('Validation successful!');

      // Add your logic for navigating to the next step or performing other actions
    } else {
      console.log('Validation failed. Please check the form.');
    }
  };



  return (
    <div className="flex   flex-col md:flex-row h-screen relative">

    <Sidebar />
    <div className="md:flex-1 flex flex-col ml-[18px] md:ml-12 mt-36 md:mt-20">
  {/* Navabr */}

  <Fade bottom>
   <div>
            <h1 className="text-[#3c3c3c]">
              You are now viewing <u className="text-[#1a75bb] ">Home</u>{" "}
              / <u className="text-[#1a75bb] ">Contact Us</u>{" "}
            </h1>
   
            <div className="relative rounded-2xl transition-all duration-1000 mt-12">
              <img
                className="object-cover transition-all w-[80%] duration-1000 "
                src="contactUs-left.svg"
                alt="Error"
              />
   
              <div className="absolute top-4 text-[#212121] transition-all duration-1000 ">
                <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-53px] transition-all duration-1000 font-bold font-AkkuratLight">
                Contact Us
                </h2>
              </div>
            </div>
            <p className="xl:w-[70%] md:w-[80%] font-TisaOT sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-[#5f5f5f] text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
            Please help us to respond better to your query by filling out the relevant form.         </p>
          
   
           
          </div>
          </Fade>
{/* input field */}

<div className='flex gap-8 '>



<div className=' w-[98%] mt-20 xl:w-[62%] border-[#2477ba]   border rounded-md py-5 px-8'>

<div className='flex flex-col w-full'>
      {/* NAME */}
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="name"
          placeholder="NAME"
          value={formData.name}
          onChange={(e: any) => handleChange(e, 'name')}
        />
        <label
          htmlFor="name"
          className={`pointer-events-none font-light text-sm absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          NAME
        </label>
        {validationErrors.name && (
          <span className="text-red-500">{validationErrors.name}</span>
        )}
      </div>

      {/* EMAIL */}
      <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="email"
          placeholder="EMAIL"
          value={formData.email}
          onChange={(e: any) => handleChange(e, 'email')}
        />
        <label
          htmlFor="email"
          className={`pointer-events-none text-sm font-light absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          EMAIL
        </label>
        {validationErrors.email && (
          <span className="text-red-500">{validationErrors.email}</span>
        )}
      </div>

      {/* DESIGNATION */}
      <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="designation"
          placeholder="DESIGNATION"
          value={formData.designation}
          onChange={(e: any) => handleChange(e, 'designation')}
        />
        <label
          htmlFor="designation"
          className={`pointer-events-none font-light text-sm absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          DESIGNATION
        </label>
        {validationErrors.designation && (
          <span className="text-red-500">{validationErrors.designation}</span>
        )}
      </div>

      {/* COMPANY NAME */}
      <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="companyName"
          placeholder="COMPANY NAME"
          value={formData.companyName}
          onChange={(e: any) => handleChange(e, 'companyName')}
        />
        <label
          htmlFor="companyName"
          className={`pointer-events-none font-light text-sm absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          COMPANY NAME
        </label>
        {validationErrors.companyName && (
          <span className="text-red-500">{validationErrors.companyName}</span>
        )}
      </div>

      {/* COUNTRY */}
      <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="country"
          placeholder="COUNTRY"
          value={formData.country}
          onChange={(e: any) => handleChange(e, 'country')}
        />
        <label
          htmlFor="country"
          className={`pointer-events-none font-light text-sm absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          COUNTRY
        </label>
        {validationErrors.country && (
          <span className="text-red-500">{validationErrors.country}</span>
        )}
      </div>

      {/* PHONE */}
      <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.62rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#4d90c7] dark:placeholder:text-[#4d90c7] dark:peer-focus:text-primary border-b border-[#2477ba] text-[#4d90c7] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id="phone"
          placeholder="PHONE"
          value={formData.phone}
          onChange={(e: any) => handleChange(e, 'phone')}
        />
        <label
          htmlFor="phone"
          className={`pointer-events-none font-light text-sm absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#4d90c7] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#4d90c7] dark:peer-focus:text-primary`}
        >
          PHONE
        </label>
        {validationErrors.phone && (
          <span className="text-red-500">{validationErrors.phone}</span>
        )}
      </div>

      {/* NEXT BUTTON */}
      <div className="flex justify-end mt-5">
        <button
          className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3 px-6 py-2 hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform text-sm font-semibold"
          onClick={handleNextClick}
        >
          NEXT
        </button>
      </div>
    </div>



<div className='flex gap-4'>
<div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#1c72b8] transition">01</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#1c72b8] transition duration-1000 ease-in-out transform"></h1>
  </div>
  <div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">02</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div><div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">03</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div><div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">04</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div><div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">05</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div><div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">06</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div><div style={{ width: '12%' }}>
    <h1 className="text-sm text-start font-normal text-[#e1e1e1] transition">07</h1>
    <h1 className="w-full h-[6px] rounded-3xl mt-1 bg-[#e1e1e1] transition duration-1000 ease-in-out transform"></h1>
  </div>
  </div>
</div>

{/* RIGHT ASIDE */}





<motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
      className=" flex flex-col w-[95%] xl:w-[420px] py-4 px-4 border rounded-xl mt-20 xl:block  hidden"
    >
      <div className='flex justify-between'>
        <div>
          <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold">
            Press Releases
          </h1>
          <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold">
            Released July 17, 2023
          </h1>
        </div>
        <img className='w-12' src="Press-Releases.svg" alt="" />
      </div>

      <p className="font-light text-sm mt-3 text-[#4c4c4c]">
        NETSOL Cloud Services Achieves AWS Lambda Service Delivery Designation
      </p>

      <div>
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3 px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
          EXPLORE
        </button>
      </div>

      <hr className='mt-4' />

      <div className='flex justify-between mt-2'>
        <div>
          <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold">
            From Twitter
          </h1>
          <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold">
            Latest tweet from @netsoltech
          </h1>
        </div>
        <img className='w-12' src="twitter.svg" alt="" />
      </div>

      <p className="font-light text-sm mt-3 text-[#4c4c4c]">
        NETSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights and networking with industry leaders. Let's explore new opportunities and stay ahead of the curve in the auto financing sector.
      </p>

      <div>
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3 px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
          EXPLORE
        </button>
      </div>

      <hr className='mt-4' />

      <div className='flex justify-between mt-2'>
        <div>
          <h1 className="text-xl text-[#1c72b8] font-AkkuratLight font-semibold">
            Events
          </h1>
          <h1 className="text-sm text-[#1c72b8] font-AkkuratLight font-semibold">
            Where you can find us
          </h1>
        </div>
        <img className='w-12' src="Events.svg" alt="" />
      </div>

      <p className="font-light text-sm mt-3 text-[#4c4c4c]">
        Upcoming Event: 0 results
      </p>

      <div>
        <button className="bg-transparent border border-[#1c72b8] rounded-3xl text-[#1c72b8] mt-3 px-6 py-2 hover:bg-[#1c72b8] hover:text-white text-sm font-semibold">
          EXPLORE
        </button>
      </div>
    </motion.div>

</div>



{/* Global */}
<div className='flex flex-wrap w-[70%] justify-between mt-20'>

<motion.div
  initial="initial"
  animate="animate"
  variants={infoVariants}
  className="flex flex-col gap-4 font-poppins text-[#88878D] border-[#88878D] transition duration-1000 py-6"
>
  <h1 className='text-2xl font-semibold text-black font-AkkuratLight'>Global Offices</h1>
  <u className='text-[#88878D] font-light'>Encino, US</u>
  <h1 className='text-[#88878D] font-light'>London, UK</h1>
  <h1 className='text-[#88878D] font-light'>Sydney, Australia</h1>
  <h1 className='text-[#88878D] font-light'>Beijing, China</h1>
  <h1 className='text-[#88878D] font-light'>Tianjin, China</h1>
  <h1 className='text-[#88878D] font-light'>Bangkok, Thailand</h1>
  <h1 className='text-[#88878D] font-light'>Jakarta, Indonesia</h1>
  <h1 className='text-[#88878D] font-light'>Lahore, Pakistan</h1>
</motion.div>

<motion.div
  initial="initial"
  animate="animate"
  variants={infoVariants}
  className="flex flex-col gap-4 font-poppins text-[#88878D] border-[#88878D] transition duration-1000 py-6"
>
  <h1 className='text-2xl font-semibold text-black font-AkkuratLight'>Contact Information</h1>
  <h1 className='text-[#88878D] font-light'>Corporate Headquarters</h1>
  <br />
  <h1 className='text-[#88878D] font-light'>Phone</h1>
  <h1 className='text-[#88878D] font-light'>+1 818 222 9195</h1>
  <br />
  <h1 className='text-[#88878D] font-light'>Email</h1>
  <h1 className='text-[#88878D] font-light'>info@netsoltech.com</h1>
</motion.div>

<motion.div
  initial="initial"
  animate="animate"
  variants={infoVariants}
  className="flex flex-col gap-4 font-poppins text-[#88878D] border-[#88878D] transition duration-1000 py-6"
>
  <h1 className='text-2xl font-semibold text-black font-AkkuratLight'>Address</h1>
  <h1 className='text-[#88878D] font-light'>16000 Ventura Blvd;</h1>
  <h1 className='text-[#88878D] font-light'>Suite 770</h1>
</motion.div>

</div>

      <Footer/>
      
      </div>




   </div>
  )
}

export default Contact