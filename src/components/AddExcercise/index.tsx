import React from 'react'
import Modal from 'react-modal'
import Counter from './Counter'

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
            <Counter/>
         </main>
      </Modal>
   )
}

export default AddExcercise