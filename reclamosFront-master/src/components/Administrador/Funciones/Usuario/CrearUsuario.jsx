import React, { useState } from 'react';
import { useLocation, useNavigate} from "react-router-dom";

const CrearUsuarios = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [nombre_usuario, setNombreUsuario] = useState('')
    const [direccion, setDireccion] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [tipo, setTipo] = useState('')
    const [telefono, setTelefono] = useState(0)
    const [submitted, setSubmitted] = useState(false); 

    const navigate = useNavigate();
    const location = useLocation();

    const handleSumbit = async (e) => {
        e.preventDefault();

        const body = {nombre_usuario, contraseña, nombre, apellido, telefono, tipo, direccion}

        setNombreUsuario('')
        setContraseña('')
        setNombre('')
        setApellido('')
        setTipo('')
        setTelefono(0)
        setDireccion('')

        const settings = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        await fetch('http://localhost:8080/usuario/register', settings)
        .then((response) => {
            if (!response.ok){
                alert("jiji", response.status)
                console.log(response);
            }
            else{
                console.log("SE ENVIO LA INFO")
            }
            return response.json()
        }).catch(err => console.error(`Error: ${err}`))
        
        navigate("/administrador-usuarios", { state: location.state });
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content="Generar Usuarios" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Generar Usuarios</title>
      <link rel="stylesheet" href="App.css" />
      <h1>Generar Usuarios</h1>
      <br />
      <header>
        <div className="header-container">
        <a href="/administrador">Ir al Dashboard</a>
        <a href="/mostrar-usuarios">Mostrar Usuarios</a>
        <a href="/modificar-usuarios">Modificar Usuarios</a>
        <a href="/eliminar-usuarios">Eliminar Usuarios</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <div className="flex justify-center">
            <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
              <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
                <form onSubmit={handleSumbit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2" />
                    <input type="text" placeholder="Apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2" />
                  </div>

                  {submitted && (!nombre || !apellido) && (
                    <div className="flex gap-2">
                      <span className="w-full text-left text-red-500">{!nombre ? "Ingrese su nombre" : ""}</span>
                      <span className="w-full text-left text-red-500">{!apellido ? "Ingrese su apellido" : ""}</span>
                    </div>
                  )}

                  {submitted && (!nombre || !apellido) ? (
                    <div className='flex gap-2'>
                      <span className='w-full text-left text-red-500'>{(!nombre ? "Ingrese su nombre" : "")}</span> 
                      <span className='w-full text-left text-red-500'>{(!apellido ? "Ingrese su apellido" : "")}</span>
                    </div>) : ""}

                  <input type="text" placeholder='Nombre de usuario' name='nombre_usuario' value={nombre_usuario} onChange={(e) => setNombreUsuario(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
                  {submitted && !nombre_usuario ? (
                  <span className='w-full text-left text-red-500'>Ingrese su nombre de usuario</span>
                    ) : ""}

                  <input type="password" placeholder='Contraseña' name='contraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
                  
                  <input type="text" placeholder='Direccion' name='direccion' value={direccion} onChange={(e) => setDireccion(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
                  {submitted && !direccion ? (
                  <span className='w-full text-left text-red-500'>Ingrese su direccion</span>
                    ) : ""}

                  <input type="text" placeholder='Numero de telefono' name='numero' value={telefono === 0 ? "" : telefono} onChange={(e) => setTelefono(e.target.value)} className='bg-slate-300 placeholder-slate-500 rounded h-12 pl-2' />
                  {submitted && !telefono || isNaN(telefono) ? (
                    <span className='w-full text-left text-red-500'>{(telefono ? "Ingrese su numero de telefono" : (isNaN(telefono) ? "Debe ingresar un numero" : ""))}</span>
                    ) : ""}

                  <div className='flex gap-2 items-center'>
                      <label className='text-lg font-semibold'>Tipo de usuario:</label>
                      <div className='flex gap-2'>
                          <input type='radio' id='inquilino' name='tipo' value='INQUILINO' onChange={(e) => setTipo(e.target.value)} className='mr-2' />
                          <label htmlFor='inquilino'>Inquilino</label>
                      </div>

                      <div className='flex gap-2'>
                          <input type='radio' id='dueño' name='tipo' value='DUEÑO' onChange={(e) => setTipo(e.target.value)} className='mr-2' />
                          <label htmlFor='dueño'>Dueño</label>
                      </div>

                      <div className='flex gap-2'>
                          <input type='radio' id='admin' name='tipo' value='ADMINISTRADOR' onChange={(e) => setTipo(e.target.value)} className='mr-2' />
                          <label htmlFor='admin'>Administrador</label>
                      </div>
                  </div>

                  {submitted && !contraseña ? (<span className='w-full text-left text-red-500'>Ingrese una contraseña</span>) : (contraseña.length < 8 ? ((<span className='w-full text-left text-red-500'>La contraseña debe tener minimo 8 caracteres</span>)) : "")}
                  <button type="submit" className='mt-5 p-2 bg-coral text-white text-lg rounded-xl w-full font-bold'>Empezar ahora</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CrearUsuarios;