import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"


export default function Home() {
 
  
  return <>
{/* <div>

<div className="flex   flex-col md:flex-row h-screen ">
      <Sidebar/>
      <div className="md:flex-1 flex flex-col  ml-[18px] md:ml-12 mt-36 md:mt-20">
        {/* NAVBAR */}
        <nav>
  
      <h1 className="text-[#3c3c3c]">
             You are now viewing <u className="text-[#1a75bb] ">Home</u>{" "}
             / <u className="text-[#1a75bb] ">Products</u>{" "}
           </h1>
        </nav>
  
  
        {/* FIRST CARD */}
  
        
        <div className=" w-[98%] lg:w-[88%] rounded-lg h-auto mt-20 transform bg-white p-8 my-custom-class" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 16px' 
      
      }}>
  <img className='w-44' src="NFS-Ascent.svg" alt="Error" />
  
  
  <div className='flex justify-center  gap-4 lg:justify-between flex-wrap items-center'>
  
  
  <div className='w-full  xl:w-[80%]'>
          
           <div className="relative transition-all duration-1000 mt-12">
             <img
               className="object-cover transition-all duration-1000 w-[90%] "
               src="ascentVector-left.svg"
               alt="Error"
             />
  
             <div className="absolute top-4 text-black transition-all duration-1000 ">
               <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl sm:mt-[1px]   md:mt-[10px]     lg:mt-[10px]   xl:mt-[14px] transition-all duration-1000 font-bold font-AkkuratLight">
               An Adaptive Platform for the Evolving Global Asset Finance and Leasing Industry
               </h2>
             </div>
           </div>
           <p className=" font-light transition-all duration-1000   mt-56 sm:mt-44  md:mt-52  lg:mt-44 xl:mt-48 text-[#4c4c4c] text-xl sm:text-lg md:text-xl xl:text-xl leading-relaxed whitespace-pre-line overflow-hidden">
           NFS Ascent® is built on cutting-edge, modern technology that enables auto, equipment and big ticket finance companies to run their retail and wholesale finance business with ease. With comprehensive domain coverage and powerful configuration engines, it is architected to empower finance and leasing companies with a platform that supports their growth in terms of business volume and transactions.
  
           </p>
      
  
          
         </div>
  
         <div className=' w-full xl:w-[10%] flex flex-col gap-6'>
         <div className='flex flex-col items-center justify-center  text-center font-light'>
    <img className='w-20 h-20' src="working1.svg" alt="" />
    <div className=""> {/* Add margin-top to create space between image and text */}
      <h1 className='font-light text-xs text-[#4c4c4c] '>
        AUTO <br />
        FINANCE
      </h1>
    </div>
  </div>
     <div className='flex flex-col items-center justify-center  text-center font-light'>
    <img className='w-20 h-20' src="working3.svg" alt="" />
    <div className=""> {/* Add margin-top to create space between image and text */}
    <h1 className='font-light text-xs text-[#4c4c4c] '>
    EQUIPMENT <br />
  FINANCE
      </h1>
    </div>
  </div>     <div className='flex flex-col items-center justify-center  text-center font-light'>
    <img className='w-20 h-20' src="working2.svg" alt="" />
    <div className=""> {/* Add margin-top to create space between image and text */}
    <h1 className='font-light text-xs text-[#4c4c4c] '>
    BIG TICKET <br />
  FINANCE
      </h1>
    </div>
  </div>     <div className='flex flex-col items-center justify-center  text-center font-light'>
    <img className='w-20 h-20' src="bank-blue-lines.svg" alt="" />
    <div className="mt-2"> {/* Add margin-top to create space between image and text */}
    <h1 className='font-light text-xs text-[#4c4c4c] '>
    BANKS
      </h1>
    </div>
  </div>
         </div>
  </div>
  
  
  <div className="flex gap-2  item-center mt-6 md:mt-12 transition-all duration-1000 ">
                <button className=" bg-transparent border w-36  border-[#1c72b8] rounded-3xl text-[#1c72b8]    py-3   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
              EXPLOR 
                </button>
                <button className=" bg-[#1c72b8] border w-44  border-[#1c72b8] rounded-3xl text-white    py-3    hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                REQUEST A DEMO
                </button>
              </div>
  </div>
  
  
  {/* SECOUND CARD */}
  <div className=" w-[98%] lg:w-[88%] rounded-lg h-auto mt-20 transform bg-white p-8 my-custom-class" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 16px' 
      
    }}>
  <img className='w-44' src="NFS-Ascent.svg" alt="Error" />
  
  
  
  
  <div className='w-full  xl:w-[80%]'>
        
         <div className="relative transition-all duration-1000 mt-12">
           <img
             className="object-cover transition-all duration-1000 w-[90%] "
             src="digitalVector-left.svg"
             alt="Error"
           />
  
           <div className="absolute top-4 text-black transition-all duration-1000 ">
             <h2 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl  mt-1 sm:mt-[1px]   md:mt-[10px]     lg:mt-[10px]   xl:mt-[14px] transition-all duration-1000 font-bold font-AkkuratLight">
             Curated Digital Touchpoints for Your Teams, Partners & Customers
  
             </h2>
           </div>
         </div>
         <p className=" font-light transition-all duration-1000   mt-44 sm:mt-24 md:mt-28  lg:mt-48 xl:mt-36 text-[#4c4c4c] text-xl sm:text-lg md:text-xl xl:text-xl leading-relaxed whitespace-pre-line overflow-hidden">
         NFS Digital is a combination of our core strengths, domain and technology. Our insight into the evolving landscape along with our valuable experience enables us to define sound digital transformation strategies and compliment them with smart digital solutions so our customers always remain competitive and relevant to the dynamic environment. Our digital transformation solutions are extremely robust and can be used with or without our core, next-gen solution (NFS Ascent®) to effectively augment and enhance your ecosystem.
  
  
         </p>
    
  
        
  
  </div>
  
  
  <div className="flex gap-2  item-center mt-6 md:mt-12 transition-all duration-1000 ">
              <button className=" bg-transparent border w-36  border-[#1c72b8] rounded-3xl text-[#1c72b8]    py-3   hover:bg-[#1c72b8] hover:text-white transition duration-1000 ease-in-out transform  text-sm font-semibold ">
            EXPLOR 
              </button>
              <button className=" bg-[#1c72b8] border w-44  border-[#1c72b8] rounded-3xl text-white    py-3    hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
              REQUEST A DEMO
              </button>
            </div>
  </div>
  
  
  
  {/* LAST 3 CARDS */}
  <div className="flex gap-[20px]  xl:gap-[50px] flex-wrap transition duration-1000 ease-in-out transform">
  
         <div 
          style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 8px' }}
       className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[360px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
   
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
       className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[360px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
   
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
       className="mt-6 flex flex-col justify-between   w-[98%]  h-64 xl:w-[360px] py-6 px-6 border rounded-xl transition duration-1000 ease-in-out transform">
   
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
  
  
           <Footer/>
           {/* </div> */}
    {/* </div> */}
           {/* </div> */} 

</>

}
