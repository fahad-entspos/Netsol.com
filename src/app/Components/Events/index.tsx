/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Footer';
import Fade from 'react-reveal/Fade';

function Events() {
  const [isHovered, setIsHovered] = useState(false);
  const [oneisHovered, setOneIsHovered] = useState(false);
  const [twoisHovered, settwoIsHovered] = useState(false);
  const [threeisHovered, setthreeIsHovered] = useState(false);
  const [fourisHovered, setfourIsHovered] = useState(false);
  const [fiveisHovered, setfiveIsHovered] = useState(false);
  const [sixisHovered, setsixIsHovered] = useState(false);
  return (
    <div className="flex   flex-col md:flex-row h-screen relative">

    <Sidebar />
      <Fade bottom>
    <div className="md:flex-1 flex flex-col ml-[18px] md:ml-12 mt-36 md:mt-20">
    <div>
            <h1 className="text-[#3c3c3c]">
              You are now viewing <span className="text-[#1a75bb] ">Home</span>{" "}
              / <span className="text-[#1a75bb] ">Events</span>{" "}
            </h1>

            <div className="relative rounded-2xl transition-all duration-1000 mt-12">
              <img
                className="object-cover transition-all duration-1000 "
                src="events-left.svg"
                alt="Error"
              />

              <div className="absolute top-4 text-black transition-all duration-1000 ">
                <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl sm:mt-[23px]   md:mt-[20px]     lg:mt-[39px]   xl:mt-[56px] transition-all duration-1000 font-bold font-AkkuratLight">
                Events
                </h2>
              </div>
            </div>
            <p className="xl:w-[70%] md:w-[80%] sm:w-[80%] xl:h-auto md:h-auto sm:h-auto h-[auto] font-light transition-all duration-1000 mt-6 md:mt-12 text-[#9a9b9b] text-xl sm:text-lg md:text-xl xl:text-2xl leading-relaxed whitespace-pre-line overflow-hidden">
            To maintain our dominance in the industry, every year we attend and sponsor international finance and leasing summits, conferences, conventions and events worldwide.
            </p>
          

           
          </div>

<div className='flex items-center flex-row gap-6 flex-wrap mt-14'>

{/* 1st section */}
<div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] transition duration-1000 ease-in-out md:w-[380px] bg-white rounded-lg h-[450px] mt-8 ${isHovered ? 'relative' : ''}`}
      >
        <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="Las Vegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
              AFSA Vehicle Finance Conference
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>Bellagio, Las Vegas, United States</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th January - 1st February 2024</h1>

          {isHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-10 left-36 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
              Las Vegas, United States
            </button>
          )}
        </div>
      </div>

      {/* 2nd section */}
      <div
        onMouseEnter={() => setOneIsHovered(true)} 
        onMouseLeave={() => setOneIsHovered(false)} 
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${oneisHovered ? 'relative' : ''}`}
      >
         <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="Las Vegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            NADA Show 2024
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>Las Vegas, United States</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>1st February - 4th February 2024</h1>

          {oneisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-10 left-36 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
              Las Vegas, United States
            </button>
          )}
        </div>
      </div>

      {/* 3rd section */}
      <div
        onMouseEnter={() => settwoIsHovered(true)}
        onMouseLeave={() => settwoIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${twoisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="London.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            AFPA Trust Christmas Drinks Networking & Charity E...
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>5th December 2023</h1>

          {twoisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
             London
            </button>
          )}
        </div>
      </div>


      {/* 4th section */}

      <div
        onMouseEnter={() => setthreeIsHovered(true)}
        onMouseLeave={() => setthreeIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] bg-white transition duration-1000 ease-in-out rounded-lg h-[450px] mt-8 ${threeisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="London.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Asset Finance 4.0 Leadership Roundtable Lunch - In...
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>30th November 2023</h1>

          {threeisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
             London
            </button>
          )}
        </div>
      </div>



    {/* 5th section */}

    <div
        onMouseEnter={() => setfiveIsHovered(true)}
        onMouseLeave={() => setfiveIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${fiveisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="London.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Asset Finance Conference Autumn 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {fiveisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
             London
            </button>
          )}
        </div>
      </div>


    {/* 6rd section */}

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>



      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

    <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

      <div
        onMouseEnter={() => setsixIsHovered(true)}
        onMouseLeave={() => setsixIsHovered(false)}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 4px',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className={`w-[98%] md:w-[380px] transition duration-1000 ease-in-out bg-white rounded-lg h-[450px] mt-8 ${sixisHovered ? 'relative' : ''}`}
      >
       <img
          className="object-cover w-full h-48 rounded-t-lg"
          src="lasvegas.jpg"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <a href="#" className="font-AkkuratLight mt-2 text-2xl font-semibold text-black duration-300 transform">
            Auto Finance Summit 2023
            </a>
          </div>

          <div className="mt-6"></div>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Location</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>London, UK</h1>
          <h1 className='text-[#1c72b8] mt-1 font-semibold text-lg'>Date</h1>
          <h1 className='text-[#3c3c3c] mt-1 font-light'>29th November 2023</h1>

          {sixisHovered && (
            <button className="absolute transition duration-1000 ease-in-out transform top-24 left-48 px-4 py-2 font-serif w-auto bg-[#555555] text-white rounded-md" style={{ transitionDelay: '2s' }}>
           Bellagio, Las Vegas
            </button>
          )}
        </div>
      </div>

   


      </div>



    
      <Footer/>
      </div>
  </Fade>
  </div> 
  
   )
}

export default Events