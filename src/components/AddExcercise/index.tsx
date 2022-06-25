import React from 'react'
import Modal from 'react-modal'

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
         <main className='p-2 space-y-2'>
            <input 
               type="text" 
               className='w-full border-2 px-2 border-secundair rounded'
               placeholder='Oefening'
            />
            <div className='flex'>
               <input 
                  type="number" 
                  placeholder='1'
                  className='border-2 rounded w-14 text-center border-secundair'
               />
            </div>
         </main>
      </Modal>
   )
}

export default AddExcercise