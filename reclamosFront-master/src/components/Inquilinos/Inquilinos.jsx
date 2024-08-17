import React from 'react';

const Inquilinos = () => {
  const confirmAndRedirect = () => {
    // Show a confirmation dialog
    const confirmResult = window.confirm('¿Estás seguro de que deseas abandonar la propiedad?');

    // If the user confirms, redirect to the home page
    if (confirmResult) {
      window.location.href = '/';
    }
  };

  return (
    <div>
      {/* Your component content here */}

      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Frontend Mentor - Pricing Component With Toggle"
      />
      <meta
        name="keywords"
        content="Pricing Component With Toggle, Frontend Mentor"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Inquilino</title>
      <header className="bienvenida-header">
        <h1>¡Bienvenido Inquilino!</h1>
      </header>
      <main>
        <section className="container">
          {/* Container 1 */}
          <article className="mod container-1">
            <h2>Reclamos Generados</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Último Reclamo Hace: X</li>
              <hr />
              <li>Reclamos Solucionados: X</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a href="/inquilino-ver-reclamos" id="visualizarButton">
              Visualizar
            </a>
          </article>
          {/* Container 2 */}
          <article className="mod container-2">
            <h2>Generar Reclamo</h2>
            <p>X</p>
            <ul>
              <hr />
              <li>Tiempo de Respuesta: X</li>
              <hr />
              <li>Conecta con el Dueño</li>
              <hr />
              {/* Agrega tus elementos de lista aquí */}
            </ul>
            <a href="/inquilino-generador-reclamos" id="generarButton">
              Generar
            </a>
          </article>
          {/* Container 3 */}
          <article className="mod container-3 img-card" style={{ textAlign: 'center' }}>
            <h2>Administrador Personal</h2>
            <div style={{ margin: '0 auto', width: 'fit-content' }}>
              <img src="/imagenes/gestion.png" className="w-32 h-32 object-cover" alt="" />
            </div>
            <ul>
              <hr />
              <li>Ayuda con el Orden</li>
              <hr />
              <li>Sea Parte del cambio</li>
              <hr />
            </ul>
            <a id="visualizarButton" onClick={confirmAndRedirect}>
              Abandonar Edificio
            </a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Inquilinos;
