import React from 'react'

const Nabvar = () => {
  return (
    <>
      <nav class="bg-pink-300 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-white text-lg font-semibold ">
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-whatsapp mx-2"></i>
            <i className="bi bi-messenger mx-2"></i>
            </a>
           
            <ul class="flex space-x-4">
                <li><a href="/miTienda/inicio" class="text-white hover:text-gray-300">Inicio</a></li>
                <li><a href="/miTienda/novedades/reciente" class="text-white hover:text-gray-300">Novedades</a></li>
                <li><a href="/miTienda/novedades/quienSomos" class="text-white hover:text-gray-300">Quiénes Somos</a></li>
                <li><a href="/miTienda/novedades/soporte" class="text-white hover:text-gray-300">Soporte</a></li>
                <li> <input type="text" placeholder=' Buscar' className='rounded-lg mx-5'/></li>
                <li><a href="/miTienda/login" className='text-white bg-pink-600 p-3 hover:bg-pink-700 rounded-xl'>Login</a></li>
                <li><a href="/miTienda/Registar" className='text-white bg-pink-900 p-3 hover:bg-pink-100 rounded-xl'>Registrar</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Nabvar
