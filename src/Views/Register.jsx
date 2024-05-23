import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Register() {
  return (
    <>

<div className=' mt-10 px-10 py-10 w-full h-full fondo '>
      <div className='bg-pink-500 shadow-md rounded-md mt-5 px-10 py-10 w-full h-full  z-10'>
      <h1 className='text-4xl text-white'>Registrate Ahora!!</h1>
        <form action="">
        <div className='my-4'>
            <label 
            htmlFor="usuario"
            className='text-white my-10'
            >
              Usuario: 
            </label>

            <input type="text"
            className='mt-2 w-full rounded-sm p-3 bg-gray-50 my-4'
            placeholder='Usuario'
            />
          </div>
          
          <div className='my-4'>
            <label 
            htmlFor="usuario"
            className='text-white my-10'
            >
              Correo Electronico: 
            </label>

            <input type="email"
            className='mt-2 w-full rounded-sm p-3 bg-gray-50 my-4'
            placeholder='Correo Electronico'
            />
          </div>

          <div className='my-4'>
            <label 
            htmlFor="usuario"
            className='text-white my-10'
            >
              Telefono: 
            </label>

            <input type="text"
            className='mt-2 w-full rounded-sm p-3 bg-gray-50 my-4'
            placeholder='Telefono'
            />
          </div>

          <div className='mb-4'>
            <label 
            htmlFor="usuario"
            className='text-white mb-4'
            >
              Contraseña: 
            </label>

            <input 
            type="password"
            className='mt-2 w-full rounded-sm p-3 bg-gray-50 my-4'
            placeholder='Contraseña'
            />
          </div>

          <div className='mb-4'>
            <label 
            htmlFor="usuario"
            className='text-white mb-4'
            >
             Repetir Contraseña: 
            </label>

            <input 
            type="password"
            className='mt-2 w-full rounded-sm p-3 bg-gray-50 my-4'
            placeholder='Repetir Contraseña'
            />
          </div>

          <input 
          type="submit"
          value="Registrate"
          className='bg-pink-800 hover:bg-pink-700 text-white w-full  mt-5 p-5 rounded-lg uppercase font-bold cursor-pointer'
          />
            <br />
        </form>
         
      </div>
      </div>
    
      
      <div>
        <Outlet/>
      </div>
    </>
  )
}
