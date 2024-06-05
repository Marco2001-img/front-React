import React from 'react'
import Inicio from './Inicio'
import {Link} from 'react-router-dom'


export default function Registro() {
  return (
    <>
      <div class="flex h-full my-5">
        <div class="flex-1" >
           <h1 className='text-white uppercase text-5xl my-5 mx-2'>Suzumamu</h1>
           <p className='mx-2 my-4 text-white'>somos la mejor tienda de regalos en linea que puedes encontrar aqui,</p>
           <p className='mx-2 text-white'>encontraras gran variedad de productos para tus seres queridos.</p>
        </div>
       
        <div className="w-1/2 ">
           <img src="../img/img_6.png" className='img_6'/>
        </div>
    </div>

    <div class="flex h-full bg-pink-300 mx-10">
        <div class="my-2" >
        <i class="bi bi-bus-front-fill mx-2 icon"></i>
        </div>
       
        <div className="w-1/2 my-4">
        <p className='text-white'>Envios gratis a partir de compras mayores a $1500 envios a las 24-40hrs</p>
        </div>
    </div>
    <div>

    </div>
    <img src="https://i.ibb.co/NnhmbM6/img-4.png" width="900px" className="mx-auto"/>
    </>
  )
}
