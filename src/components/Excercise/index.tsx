import React from 'react'
import {IoMdMore} from 'react-icons/io'

const Excercise = () => {
   return (
      <div className='w-full flex flex-col rounded shadow bg-white overflow-hidden'>
         <h2 className='w-full bg-secundair text-white text-sm p-1.5 items-center flex'>
            <img 
               src="https://yt3.ggpht.com/ytc/AKedOLRHI8cBgk1EK6hVLBFi7TJUbFE4QRNbqqKJkpRc=s900-c-k-c0x00ffffff-no-rj" 
               className='w-12 h-12 rounded-full border-2 border-main'
               alt="" 
            />
            <div className='flex flex-col justify-between ml-2'>
               <p className=' font-bold uppercase'>Laup wing</p>
               <p>3 hours ago</p>
            </div>
            <IoMdMore className='ml-auto' size={30}/>
         </h2>
         <div className='p-2 flex items-start'>
            <img 
               className='w-24'
               src="https://s3.amazonaws.com/prod.skimble/assets/2289478/image_iphone.jpg" 
               alt="bench presss" 
            />
            <div className='ml-2 w-full text-sm'>
               <h2 className='font-bold uppercase text-dark'>
                  Bench press
               </h2>
               <ul className='flex flex-col my-1 space-y-0.5'>
                  <li className='flex items-center text-xs'>
                     <p>20kg x 2 <span className='text-main font-bold'>(120kg)</span></p>
                     <p className='border rounded mx-2 border-main border-opacity-50 flex-1'></p>
                     <p>7 reps</p>
                  </li>
                  <li className='flex items-center text-xs'>
                     <p>20kg x 2 <span className='text-main font-bold'>(120kg)</span></p>
                     <p className='border rounded mx-2 border-main border-opacity-50 flex-1'></p>
                     <p>7 reps</p>
                  </li>
                  <li className='flex items-center text-xs'>
                     <p>20kg x 2 <span className='text-main font-bold'>(120kg)</span></p>
                     <p className='border rounded mx-2 border-main border-opacity-50 flex-1'></p>
                     <p>7 reps</p>
                  </li>
                  <li className='flex items-center text-xs'>
                     <p>20kg x 2 <span className='text-main font-bold'>(120kg)</span></p>
                     <p className='border rounded mx-2 border-main border-opacity-50 flex-1'></p>
                     <p>7 reps</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Excercise