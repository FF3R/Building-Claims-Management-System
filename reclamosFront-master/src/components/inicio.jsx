import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inicio() {
  const goTo = useNavigate()

  const handleCategory = (categoria) => {
    goTo(`/clases/${categoria}`)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <br />
        <span className='font-bold text-3xl text-center mb-12 mt-10 text-coral'>Gestionamos tu edificio de forma eficiente</span>
        <div className='flex max-md:flex-col  align-middle gap-9 ml-auto mr-auto mb-10'>

        <div className='flex flex-col items-center w-64'> 
            <img src="/imagenes/edificio.png" className='w-32 h-32 object-cover' alt="" /> 
            <span className='font-bold m-2 text-xl'>Nosotros</span>
            <p className='flex text-center'>Somos el mayor portal de gestiones de reclamos de Argentina</p>
        </div>

          <div className='flex flex-col items-center  w-64'>
            <img src="/imagenes/gestion.png" className='w-32 h-32 object-cover' alt="" />
            <span className='font-bold m-2 text-xl'>Gestión</span>
            <p className='text-center'>Gestiona tu edificio o departamento desde tu casa</p>
          </div>
          <div className='flex flex-col items-center  w-60'>

            <img src="/imagenes/caba.png" className='h-32' alt="" />

            <span className='font-bold m-2 text-xl'>Locación</span>

            <p className='text-center'>Operamos unicamente en la Ciudad Autonoma de Buenos Aires</p>
          </div>
        </div>
      </div>
    </div >
  )
}
