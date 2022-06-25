import React, { FC } from 'react'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'

interface Props {
   label: string
}

const Counter:FC<Props> = ({label}) => {
   return (
      <div className='flex items-end space-x-2'>
         <div className='flex flex-col mt-auto border-2 border-highlight rounded'>
            <p className='font-bold bg-highlight text-white text-center text-xs uppercase'>{label}</p>
            <div className='flex p-1'>
               <button className='w-6 h-6 border-2 flex items-center justify-center text-denied border-denied rounded-full'>
                  <HiOutlineMinus/>
               </button>
               <input 
                  type="number" 
                  placeholder='1'
                  className=' rounded-b w-14 text-center'
               />
               <button className='w-6 h-6 border-2 flex items-center justify-center text-accept border-accept rounded-full'>
                  <HiPlus/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Counter