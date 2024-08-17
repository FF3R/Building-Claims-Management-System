let estrellaLlena = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#FFCB45" />
</svg>
let estrellaMitad = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="url(#paint0_linear_253_172)" style={{ mixBlendMode: 'multiply' }} />
    <defs>
        <linearGradient id="paint0_linear_253_172" x1="3.23083e-09" y1="14" x2="30" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCB45" />
            <stop offset="0.5" stopColor="#FFCB45" />
            <stop offset="0.5001" stopColor="#D2D0CA" />
        </linearGradient>
    </defs>
</svg>
let estrellaVacia = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#D3D0CA" />
</svg>




function formatearFecha(fechaString) {
    const opcionesDeFormato = { year: 'numeric', month: 'short', day: 'numeric' };
    const fecha = new Date(fechaString);
    const [dia, mes, año] = fecha.toLocaleDateString(undefined, opcionesDeFormato).split(' ');
    return `${dia} ${mes}. ${año}`;
}

function isEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)

}

export {formatearFecha, isEmail};