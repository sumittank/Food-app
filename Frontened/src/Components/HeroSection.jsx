import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import deliveryboy from '../assets/deliveryboy.jpeg'
import { IoStorefrontSharp } from "react-icons/io5";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { DiDotnet } from "react-icons/di";
import { PiWaveSineLight } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBuildingUser } from "react-icons/fa6";

function HeroSection() {

    const scrollByViewport = () => {
        window.scrollBy({
            top: window.innerHeight-50, // Scroll by one full viewport height
            behavior: 'smooth' // Smooth scrolling
        });
    };

    return (
        <div className='flex w-screen h-4/5 mb-20'>
            <div className=' w-3/5 h-full '>
                <div>
                    <p className='text-6xl mt-20 ml-48'>Now order your <span className='text-teal-500'>local</span></p>
                    <p className='text-6xl ml-48'><span className='text-teal-500'>food <span className='text-black'>&</span> snacks</span> from</p>
                    <p className='text-6xl ml-48'>every corner!!</p>
                    <p className='mt-5 ml-44'><span className='text-teal-500'>"</span>From your favorite corner bakery to the best street food, get it all delivered fast and fresh.</p>
                    <p className='ml-48'> Your local favorites are just a click away!<span className='text-teal-500'>"</span></p>
                </div>

                <div className='ml-48 mt-20 flex'>
                    <div className='text-4xl bg-teal-100 p-2 font-semibold text-black w-64 text-center rounded-3xl'>
                        <button onClick={scrollByViewport}>Order Now</button>

                    </div>
                    <div>
                        <button onClick={scrollByViewport}><FaCartPlus className='ml-6 mt-3 text-4xl' /></button>
                    </div>        

                </div>
                {/* <div className='ml-40 mt-16 text-3xl'>
                  <ul className='flex'>
                    <li className='mr-3'>
                    <IoStorefrontSharp />
                    </li>
                    <li className='flex'>
                        
                
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    </li>
                    <li className='text-7xl'>
                    <GiCommercialAirplane />
                    </li>
                    <li className='flex'>
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    <PiWaveSineLight />
                    </li>
                    <li>
                    <FaBuildingUser />
                    </li>
                  </ul>
                   </div> */}
                   <div className='flex'>
                   <input type='email' placeholder='Email : example@gmail.com' className='bg-teal-50 w-96 h-10 rounded-md decoration-none border-2 hover:border-teal-200 outLinkne-none text-center text-gray-700 ml-48 mt-14 text-lg' />
                   <div className='mt-14 ml-7 text-xl bg-teal-100 p-1 font-medium text-black rounded-2xl w-28 flex justify-center'>
                   <button className=''>Submit</button>
                   </div>
                   </div>
            </div>

            <div className='w-2/5 h-full'>
            <img src={deliveryboy} className='mt-32 ml-10  h-80 w-4/5' />
           
            </div>
            

        </div>
    )
}

export default HeroSection


// import React from 'react';
// import { FaCartPlus } from "react-icons/fa6";
// import deliveryboy from '../assets/deliveryboy.jpeg';
// import { IoStorefrontSharp } from "react-icons/io5";
// import { PiDotsThreeOutlineThin } from "react-icons/pi";
// import { DiDotnet } from "react-icons/di";
// import { PiWaveSineLight } from "react-icons/pi";
// import { GiCommercialAirplane } from "react-icons/gi";
// import { FaBuildingUser } from "react-icons/fa6";

// function HeroSection() {
//     const scrollByViewport = () => {
//         window.scrollBy({
//             top: window.innerHeight-50, // Scroll by one full viewport height
//             behavior: 'smooth' // Smooth scrolling
//         });
//     };

//     return (
//         <div className='flex w-screen h-4/5 mb-20'>
//             <div className='w-3/5 h-full'>
//                 <div>
//                     <p className='text-6xl mt-20 ml-48'>Now order your <span className='text-teal-500'>local</span></p>
//                     <p className='text-6xl ml-48'><span className='text-teal-500'>food <span className='text-black'>&</span> snacks</span> from</p>
//                     <p className='text-6xl ml-48'>every corner!!</p>
//                     <p className='mt-5 ml-44'><span className='text-teal-500'>"</span>From your favorite corner bakery to the best street food, get it all delivered fast and fresh.</p>
//                     <p className='ml-48'> Your local favorites are just a click away!<span className='text-teal-500'>"</span></p>
//                 </div>

//                 <div className='ml-48 mt-20 flex'>
//                     <div className='text-4xl bg-teal-100 p-2 font-semibold text-black w-64 text-center rounded-3xl'>
//                         <button onClick={scrollByViewport}>Order Now</button>
//                     </div>
//                     <div>
//                         <button onClick={scrollByViewport}><FaCartPlus className='ml-6 mt-3 text-4xl' /></button>
//                     </div>        
//                 </div>
//                 {/* <div className='ml-40 mt-16 text-3xl'>
//                     <ul className='flex'>
//                         <li className='mr-3'>
//                             <IoStorefrontSharp />
//                         </li>
//                         <li className='flex'>
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                         </li>
//                         <li className='text-7xl'>
//                             <GiCommercialAirplane />
//                         </li>
//                         <li className='flex'>
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                             <PiWaveSineLight />
//                         </li>
//                         <li>
//                             <FaBuildingUser />
//                         </li>
//                     </ul>
//                 </div> */}
//                 <div className='flex'>
//                     <input 
//                         type='email' 
//                         placeholder='Email : example@gmail.com' 
//                         className='bg-teal-50 w-96 h-10 rounded-md decoration-none border-2 hover:border-teal-200 outline-none text-center text-gray-700 ml-48 mt-14 text-lg' 
//                     />
//                     <div className='mt-14 ml-7 text-xl bg-teal-100 p-1 font-medium text-black rounded-2xl w-28 flex justify-center'>
//                         <button className=''>Submit</button>
//                     </div>
//                 </div>
//             </div>

//             <div className='w-2/5 h-full'>
//                 <img src={deliveryboy} alt='Delivery Boy' className='mt-32 ml-10 h-80 w-4/5' />
//             </div>
//         </div>
//     );
// }

// export default HeroSection;


