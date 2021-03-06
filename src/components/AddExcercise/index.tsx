import React, { FC } from 'react'
import { IoMdClose } from 'react-icons/io'
import Modal from 'react-modal'
import Counter from './Counter'

interface Props{
   setShowAdd: Function
}

const AddExcercise:FC<Props> = ({setShowAdd}) => {
   return (
      <Modal 
         isOpen={true}
         overlayClassName='bg-main inset-0 fixed bg-opacity-80'
         className={`m-2 mt-10 bg-white rounded shadow overflow-hidden`}
      >
         <header className='py-1.5 bg-secundair font-bold flex justify-between uppercase text-white px-2'>
            <h2>Add excercise</h2>
            <IoMdClose 
               size={25}
               onClick={()=>setShowAdd(false)}
            />
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
            <div className='flex justify-between'>
               <Counter label='kg'/>
               <Counter label='reps'/>
            </div>
         </main>
      </Modal>
   )
}

export default AddExcercise