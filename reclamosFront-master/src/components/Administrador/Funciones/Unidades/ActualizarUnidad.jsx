import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ActualizarUnidad = () => {
    const unidad = JSON.parse(sessionStorage.getItem("update"))
    const [duenos, setDuenos] = useState([]);
    const [dueno, setDueno] = useState(unidad ? unidad.idDueno : null);

    const [piso, setPiso] = useState(unidad ? unidad.piso : '');
    const [depto, setDepto] = useState(unidad ? unidad.departamento : '');
    const [estado, setEstado] = useState(unidad ? unidad.estado : '');

    const [edificios, setEdificios] = useState([])
    const [edificio, setEdificio] = useState(unidad ? unidad.idEdificio : null);

    const navigate = useNavigate();

    useEffect(() => {
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        fetch(`http://localhost:8080/api/duenos`, settings)
            .then((response) => {
                if (!response.ok) {
                    console.log('ALGO PASO MAL', response.status)
                }
                return response.json()
            }).then((data) => {
                setDuenos(data)
            }).catch((error) => {
                console.log("ERROR")
            })

        fetch(`http://localhost:8080/api/edificios`, settings)
            .then((response) => {
                if (!response.ok) {
                    console.log('ALGO PASO MAL', response.status)
                }
                return response.json()
            }).then((data) => {
                setEdificios(data)
            }).catch((error) => {
                console.log("ERROR")
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (piso === '' || depto === '' || estado === "null") {
            window.alert("Faltan parametros a ingresar")
            return null
        }

        const body = { idDueno: dueno, piso, departamento: depto, estado, idEdificio: edificio }

        setDueno(null);
        setPiso('');
        setDepto('');
        setEstado('');
        setEdificio(null);

        const settings = {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        await fetch(`http://localhost:8080/api/unidad/${unidad.idUnidad}`, settings)
            .then((response) => {
                if (!response.ok) {
                    console.log('ALGO PASO MAL', response.status)
                } else {
                    navigate("/unidad")
                }
                return response.json()
            }).catch((error) => {
                console.log("ERROR")
            })
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="description" content="Actualizar Unidad" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Actualizar Unidades</title>
            <link rel="stylesheet" href="App.css" />
            <h1>Actualizar Unidades</h1>
            <br />
            <header>
                <div className="header-container">
                <a href="/administrador">Ir al Dashboard</a>
                    <a href="/mostrar-unidades">Buscar Unidades</a>
                    <a href="/agregar-unidades">Generar Unidades</a>
                    <a href="/eliminar-unidades">Eliminar Unidades</a>
                </div>
            </header>
            <main>
                <section className="properties-container">
                    <div className="flex justify-center">
                        <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
                            <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                                    <select onChange={(e) => setDueno(e.target.value)} value={dueno} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2">
                                        <option value="null">Seleccione Dueño</option>
                                        {duenos.map(dueno => (
                                            <option key={dueno.idDueno} value={dueno.idDueno}>
                                                {dueno.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="text" placeholder="Ingresa el piso" value={piso} onChange={(e) => setPiso(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2" />
                                    <input type="text" placeholder="Ingresa el departamento" value={depto} onChange={(e) => setDepto(e.target.value)} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2" />
                                    <select onChange={(e) => setEstado(e.target.value)} value={estado} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2">
                                        <option value="null">Selccione estado</option>
                                        <option value="Alquilado">Alquilado/a</option>
                                        <option value="Habitado">Habitado/a</option>
                                    </select>
                                    <select onChange={(e) => setEdificio(e.target.value)} value={edificio} className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2">
                                        <option value="null">Seleccione edificio</option>
                                        {edificios.map(edi => (
                                            <option key={edi.idEdificio} value={edi.idEdificio}>
                                                {edi.direccion}
                                            </option>
                                        ))}
                                    </select>
                                    <a href="/administrador-reclamos" id="visualizarButton">Actualizar</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ActualizarUnidad;
