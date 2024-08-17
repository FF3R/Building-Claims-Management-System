import React from 'react';

const Dueños = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="App.css" />
      <title>Dueño</title>
      <header className="bienvenida-header">
        <h1>¡Bienvenido Dueño!</h1>
      </header>
      <main>
        <section className="container">
          {/* Container 1 */}
          <article className="mod container-1">
            <h2>Reclamos Solucionados</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Ultimo Reclamo Hace:</li>
              <hr />
              <li>Solucionado X Reclamos</li>
              <hr />
            </ul>
            <a href="/dueno-reclamos-resueltos" id="visualizarButton">
              Visualizar
            </a>
          </article>
          {/* Container 2 */}
          <article className="mod container-2">
            <h2>Resolver Reclamos</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Tiempo De Respuesta X</li>
              <hr />
              <li>Conecta Con Los Inquilinos</li>
              <hr />
            </ul>
            <a href="dueno-resolver" id="generarButton">
              Resolver
            </a>
          </article>
          {/* Container 3 */}
          <article className="mod container-3 img-card" style={{ textAlign: 'center' }}>
            <h2>Inquilinos</h2>
            <div style={{ margin: '0 auto', width: 'fit-content' }}>
              <img src="/imagenes/edificio.png" className="w-32 h-32 object-cover" alt="" />
              </div>
            <ul>
              <hr />
              <li>Los Inquilinos Cuentan Contigo</li>
              <hr />
              <li>Asígnalos a sus Unidades</li>
              <hr />
            </ul>
            <a href="dueno-propiedades" id="visualizarButton">
              Asignar
            </a>
          </article>
        </section>
      </main>

    </>
  );
};

export default Dueños;