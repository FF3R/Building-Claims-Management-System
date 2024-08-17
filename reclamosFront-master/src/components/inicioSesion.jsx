import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InicioSesion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formState, setFormState] = useState({
    nombre_usuario: '',
    password: '',
  });

  const { nombre_usuario, password } = formState;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    if (nombre_usuario.trim() === '' || password.trim() === '' || password.length < 8) {
      return;
    }

    const payload = { nombre_usuario: nombre_usuario, contraseña: password };

    const settingsPOST = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    try {
      const responseLogin = await fetch('http://localhost:8080/auth/login', settingsPOST);

      if (!responseLogin.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const token = await responseLogin.text();
      console.log('Token:', token);

      if (token) {
        sessionStorage.setItem('jwt', token);

        const settingsGET = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add the JWT token to the header
          },
        };

        console.log(settingsGET);

        try {
          const responseSearch = await fetch(`http://localhost:8080/usuario/searchUsername/${nombre_usuario}`, settingsGET);

          if (!responseSearch.ok) {
            throw new Error('Error al obtener datos del usuario');
          }

          const userData = await responseSearch.json();
          console.log('Datos del usuario:', userData);

          if (userData && userData.tipo) {
            console.log('Tipo de usuario:', userData.tipo);
          }

          if (userData.tipo === 'DUEÑO') {
            navigate('/duenos', { state: location.state });
          } else if (userData.tipo === 'INQUILINO') {
            navigate('/inquilinos', { state: location.state });
          } else if (userData.tipo === 'ADMINISTRADOR') {
            navigate('/administrador', { state: location.state });
          }
        } catch (error) {
          console.error(`Error al obtener datos del usuario: ${error.message}`);
          setError('Error al obtener datos del usuario. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='w-5/12 max-lg:w-5/6 justify-center shadow-card rounded-3xl flex flex-col items-center'>
        <div className='font-bold text-2xl text-center p-8'>Iniciar sesión</div>
        <form className='flex flex-col max-md:w-9/12 w-4/5 items-center gap-2 mb-14' onSubmit={handleSubmit}>
          <input
            type='text'
            name='nombre_usuario'
            placeholder='Nombre de usuario'
            className='bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2'
            onChange={onInputChange}
          />
          {submitted && nombre_usuario.trim() === '' ? (
            <span className='w-full text-left text-red-500'>Ingrese su nombre de usuario</span>
          ) : (
            ''
          )}
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            className='bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2'
            onChange={onInputChange}
          />
          {submitted && (password.trim() === '' || password.length < 8) ? (
            <span className='w-full text-left text-red-500'>La contraseña debe tener mínimo 8 caracteres</span>
          ) : (
            ''
          )}
          <input
            type='submit'
            className='my-3 p-2 bg-coral text-white text-lg rounded-xl w-full font-bold'
            value={loading ? 'Cargando...' : 'Entrar'}
            disabled={loading}
          />
          <span className='font-bold text-lg text-blue-600'>¿Has olvidado tu contraseña?</span>
          {error && <span className='w-full text-center text-red-500'>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;