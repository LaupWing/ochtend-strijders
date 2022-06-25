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
         <div className='p-2'>
            <img 
               className='w-28'
               src="https://s3.amazonaws.com/prod.skimble/assets/2289478/image_iphone.jpg" 
               alt="bench presss" 
            />
         </div>
      </div>
   )
}

export default Excercise