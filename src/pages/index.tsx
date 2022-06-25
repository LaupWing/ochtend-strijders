import type { NextPage } from 'next'
import {HiPlus} from 'react-icons/hi'

const Home: NextPage = () => {
   return (
      <div className='w-screen h-screen bg-main'>
         <header className='w-full h-14 bg-secundair'></header>
         
         <button 
            className='font-bold text-2xl w-12 h-12 bg-accept rounded-full flex justify-center items-center text-white fixed bottom-5 right-5 shadow'
         >
            <HiPlus/>
         </button>
      </div>
   )
}

export default Home
