import type { NextPage } from 'next'
import {HiPlus} from 'react-icons/hi'
import Excercise from '../components/Excercise'
import Layout from '../components/Layout'

const Home: NextPage = () => {
   const placeholder = [1, 2, 3]

   return (
      <Layout>
         <header className='w-full h-14 bg-secundair'></header>
         <main className='my-2 space-y-4 p-2 overflow-y-auto pb-16'>
            {placeholder.map(a=>(
               <Excercise key={a}/>
            ))}
         </main>
         <button 
            className='font-bold text-2xl w-12 h-12 bg-accept rounded-full flex justify-center items-center text-white fixed bottom-5 right-5 shadow'
         >
            <HiPlus/>
         </button>
      </Layout>
   )
}

export default Home
