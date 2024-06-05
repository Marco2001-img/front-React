import React from 'react'

export default function Reciente() {
  return (
    <>
      <div className='flex'>
      <div className="w-1/3  p-4">
        <i className="bi bi-cart4 icon_t"></i>
        <h1 className='text-white text-2xl'>Entrega 24-28hrs</h1>
    </div>
    <div className="w-1/3  p-4">
        <i className="bi bi-credit-card icon_t"></i>
        <h1 className='text-white text-2xl mx-10'>Devolucion</h1>    
    </div>
    <div className="w-1/3  p-4">
        <i className="bi bi-currency-exchange icon_t"></i>
        <h1 className='text-white text-2xl mx-10'>Pago Seguro</h1> 
    </div>
    <div className="w-1/3  p-4">
        <i className="bi bi-phone-fill icon_t"></i>
        <h1 className='text-black text-2xl mx-14'>Contacto</h1> 
    </div>
      </div>

      <div className='bg-pink-200'>
      <h1 className='my-20 mx-10 text-9xl text-pink-600'>Novedades</h1>
      
      <p className='mx-16 text-pink-600 text-3xl'>Disfruta de nuestras novedades para esta temporada</p>
      
      <div className='flex justify-center shadow-lg'>
      <div className="w-1/3  p-4">
     
    </div>
   
   
      </div>
      <img src="https://i.ibb.co/NnhmbM6/img-4.png" width="900px" className="mx-auto"/>
      </div>
    </>
  )
}
