import React from 'react'
import Nabvar from '../Components/Nabvar'
import NavAb from './NavAb'

export default function Quien() {
  return (
    <>
      <div className='flex'>
      <div className="w-1/3  p-4">
        <i className="bi bi-credit-card icon_t"></i>
    
    </div>
    <div className="w-1/2  p-4">
    <div className='bg-pink-500 shadow-md rounded-md mt-5 px-10 py-10 w-full h-full  z-10'>
        <h1 className='text-white text-2xl my-2'>Unete a nuestro correo electronico</h1>
        <p className='text-white'>Suscribte a nuestro Newsletter recibiras un 10% de descuento en tu primera compra</p>
        <input type="text" className='w-full p-2 rounded-lg ' placeholder='Correo electronico' />
       
    </div>
    </div>
      </div>


        <div className='bg-pink-200'> 
      <div className='flex my-36'>
      <div className="w-1/3  p-4">
        <h1 className='text-pink-400 text-7xl'>¿Quienes somos?</h1>
    </div>
    <div className="w-1/2  p-4">
    <p className='text-pink-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eum quibusdam eveniet ratione excepturi harum aliquam, deleniti quam quos odio.</p>
    <p className='text-pink-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eum quibusdam eveniet ratione excepturi harum aliquam, deleniti quam quos odio.</p>

    </div>
      </div>

      <i className="bi bi-credit-card icon_t"></i>
      </div>

      <NavAb/>
    </>
  )
}
