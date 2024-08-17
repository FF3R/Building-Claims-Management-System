import React from 'react';

const Administrador = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Administrador</title>
      <header header className="bienvenida-header">
        <h1>¡Bienvenido Administrador!</h1>
      </header>
      <main>
        <section className="container">
          {/* Container 1 */}
          <article className="god container-1">
            <h2>Usuarios</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Cantidad de Usuarios: x</li>
              <hr />
              <li>Administra los Usuarios</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a href="/administrador-usuarios" id="visualizarButton">
            Administrar
            </a>
          </article>
          {/* Container 2 */}
          <article className="god container-2">
            <h2>Reclamos</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Cantidad de Reclamos: X</li>
              <hr />
              <li>Administra los Reclamos</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a href="/administrador-reclamos" id="generarButton">
            Administrar
            </a>
          </article>
          <hr />
          {/* Container 3 */}
          <article className="god container-2">
            <h2>Unidades</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Cantidad de Unidades: X</li>
              <hr />
              <li>Administra los Unidades</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a href="/administrador-unidades" id="generarButton">
            Administrar
            </a>
          </article>
          {/* Container 4 */}
          <article className="god container-1">
            <h2>Edificios</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Cantidad de Edificios: X</li>
              <hr />
              <li>Administra los Edificios</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a  href="/administrador-edificios" id="visualizarButton">
              Administrar
            </a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Administrador;