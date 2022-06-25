import React from 'react'
import Modal from 'react-modal'
import {HiOutlineMinus, HiPlus} from 'react-icons/hi'

const AddExcercise = () => {
   return (
      <Modal 
         isOpen={true}
         overlayClassName='bg-main inset-0 fixed bg-opacity-80'
         className={`m-2 mt-10 bg-white rounded shadow overflow-hidden`}
      >
         <header className='py-1.5 bg-secundair font-bold uppercase text-white px-2'>
            <h2>Add excercise</h2>
         </header>
         <main className='p-2 space-y-4 my-4'>
            <div className='w-full flex flex-col'>
               <p className='font-bold bg-highlight text-white text-center text-xs mr-auto px-4 rounded-t uppercase'>Oefeningen</p>
               <input 
                  type="text" 
                  className='w-full border-2 px-2 py-1 border-highlight rounded rounded-tl-none'
                  placeholder='Oefening'
               />
            </div>
            <div className='flex items-end space-x-2'>
               <div className='flex flex-col mt-auto border-2 border-highlight rounded'>
                  <p className='font-bold bg-highlight text-white text-center text-xs uppercase'>KG</p>
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
         </main>
      </Modal>
   )
}

export default AddExcercise