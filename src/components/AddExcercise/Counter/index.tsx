import React, { FC, useState } from 'react'
import { HiOutlineMinus, HiPlus } from 'react-icons/hi'

interface Props {
   label: string
}

const Counter:FC<Props> = ({label}) => {
   const [value, setValue] = useState<number>(0)

   return (
      <div className='flex items-end space-x-2'>
         <div className='flex flex-col mt-auto border-2 border-highlight rounded'>
            <header className='font-bold bg-highlight text-white text-center text-xs uppercase'>
               <h2>{label}</h2>
            </header>
            <div className='flex p-1'>
               <button 
                  className='w-6 h-6 border-2 flex items-center justify-center text-denied border-denied rounded-full'
                  onClick={()=>setValue(value - 1)}
               >
                  <HiOutlineMinus/>
               </button>
               <input 
                  type="number" 
                  placeholder='1'
                  value={value}
                  onChange={e=>setValue(Number(e.target.value))}
                  className=' rounded-b w-14 text-center'
               />
               <button 
                  className='w-6 h-6 border-2 flex items-center justify-center text-accept border-accept rounded-full'
                  onClick={()=>setValue(value + 1)}
               >
                  <HiPlus/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Counter