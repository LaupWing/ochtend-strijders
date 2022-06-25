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
         <header className='py-1.5 bg-secundair font-bold text-sm uppercase text-white px-2'>
            <h2>Add excercise</h2>
         </header>
         <main className='p-2 space-y-4 my-4'>
            <input 
               type="text" 
               className='w-full border-2 px-2 py-1 border-secundair rounded'
               placeholder='Oefening'
            />
            <div className='flex items-end space-x-2'>
               <button className='w-6 h-6 border-2 flex items-center justify-center text-denied border-denied rounded-full'>
                  <HiOutlineMinus/>
               </button>
               <div className='flex flex-col mt-auto'>
                  <p className='font-bold bg-secundair rounded-t text-white text-center text-xs'>KG</p>
                  <input 
                     type="number" 
                     placeholder='1'
                     className='border-2 rounded-b w-14 text-center border-secundair'
                  />
               </div>
               <button className='w-6 h-6 border-2 flex items-center justify-center text-accept border-accept rounded-full'>
                  <HiPlus/>
               </button>
            </div>
         </main>
      </Modal>
   )
}

export default AddExcercise